from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np
import pandas as pd
import re
from openai import OpenAI

app = Flask(__name__)
CORS(app)

model = joblib.load("models/burnout_model.pkl")

client = OpenAI(
    base_url="http://127.0.0.1:1234/v1",
    api_key="lm-studio"
)

MODEL_NAME = "google/gemma-3-4b"

def predict_burnout(
    hours_worked,
    meetings_per_day,
    stress_score,
    sleep_hours,
    productivity_drop,
    overtime_hours,
    workload_level,
    job_satisfaction
):
    features = np.array([[
        hours_worked,
        meetings_per_day,
        stress_score,
        sleep_hours,
        productivity_drop,
        overtime_hours,
        workload_level,
        job_satisfaction
    ]])

    prediction = model.predict(features)[0]
    probability = model.predict_proba(features)[0][1] * 100

    if probability < 35:
        risk_level = "Low"
    elif probability < 70:
        risk_level = "Medium"
    else:
        risk_level = "High"

    return prediction, round(probability, 2), risk_level

def detect_language(text: str) -> str:
    arabic_chars = re.findall(r'[\u0600-\u06FF]', text)
    english_chars = re.findall(r'[A-Za-z]', text)
    if len(arabic_chars) > len(english_chars):
        return "ar"
    return "en"

def is_reply_mostly_english(text: str) -> bool:
    arabic_chars = re.findall(r'[\u0600-\u06FF]', text)
    english_chars = re.findall(r'[A-Za-z]', text)
    return len(english_chars) > len(arabic_chars)

def build_system_prompt(language: str, risk_level: str | None = None) -> str:
    if language == "ar":
        return f"""
أنت مدرب ذكي مختص بالتوازن الوظيفي والاحتراق الوظيفي.

قواعد مهمة جدًا:
- أجب بالعربية فقط.
- لا تستخدم الإنجليزية إلا إذا طلب المستخدم ذلك صراحة.
- لا تترجم سؤال المستخدم إلى الإنجليزية.
- قدم إجابات واضحة، عملية، وداعمة.
- استخدم العربية الفصحى السهلة.
- إذا كان السؤال عن الاحتراق الوظيفي، أعطِ خطوات عملية يمكن تنفيذها.
- إذا كان مستوى الخطورة مرتفعًا، شدد على أهمية التدخل المبكر.

مستوى الخطورة الحالي: {risk_level}
"""
    return f"""
You are an AI workplace wellness coach.
Help employees avoid burnout and manage stress.
Give practical, short, supportive advice.

Important rules:
- Reply in English only.
- Do not switch to Arabic unless the user explicitly asks.
- Do not translate the user's question.
- Be clear, practical, and supportive.

Current burnout risk level: {risk_level}
"""

def burnout_chat(question, risk_level=None):
    language = detect_language(question)
    system_prompt = build_system_prompt(language, risk_level)

    try:
        response = client.chat.completions.create(
            model=MODEL_NAME,
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": question}
            ],
            temperature=0.7
        )

        reply = response.choices[0].message.content

        if language == "ar" and is_reply_mostly_english(reply):
            retry_response = client.chat.completions.create(
                model=MODEL_NAME,
                messages=[
                    {
                        "role": "system",
                        "content": f"""
أجب بالعربية فقط.
لا تترجم السؤال.
لا تستخدم الإنجليزية.
أعطِ إجابة مباشرة وعملية.
مستوى الخطورة الحالي: {risk_level}
"""
                    },
                    {"role": "user", "content": question}
                ],
                temperature=0.4
            )
            reply = retry_response.choices[0].message.content

        return reply

    except Exception as e:
        if language == "ar":
            return f"حدث خطأ أثناء الاتصال بالمدرب الذكي: {e}"
        return f"Error connecting to AI coach: {e}"

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json
    prediction, probability, risk_level = predict_burnout(
        data["hours_worked"],
        data["meetings_per_day"],
        data["stress_score"],
        data["sleep_hours"],
        data["productivity_drop"],
        data["overtime_hours"],
        data["workload_level"],
        data["job_satisfaction"]
    )

    return jsonify({
        "prediction": int(prediction),
        "probability": probability,
        "risk_level": risk_level
    })

@app.route("/chat", methods=["POST"])
def chat():
    data = request.json
    question = data.get("question", "")
    risk_level = data.get("risk_level", "Unknown")
    reply = burnout_chat(question, risk_level)
    return jsonify({"reply": reply})

if __name__ == "__main__":
    app.run(debug=True, port=5000)
    