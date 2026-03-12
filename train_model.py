import pandas as pd
import joblib
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier

df = pd.read_csv("data/burnout_data.csv")

# نحذف الأعمدة غير المطلوبة للتدريب
drop_cols = ["employee_name", "burnout_probability", "risk_level"]
existing_drop_cols = [col for col in drop_cols if col in df.columns]
df = df.drop(columns=existing_drop_cols)

X = df.drop("burnout", axis=1)
y = df["burnout"]

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

model = RandomForestClassifier(
    n_estimators=200,
    random_state=42
)

model.fit(X_train, y_train)

joblib.dump(model, "models/burnout_model.pkl")

print("Model trained and saved")
