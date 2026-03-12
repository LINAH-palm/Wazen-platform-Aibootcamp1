const state = {
  logged_in: false,
  role: null,
  user_name: "",
  company_name: "WAZEN Company",
  page: "login",
  risk_level: "Unknown",
  probability: "Not predicted yet",
  coach_reply: "",
  survey_history: [],
  lang: "Arabic",
  uploadedData: null
};

const TEXT = {
  Arabic: {
    logout_btn: "تسجيل الخروج",
    page_labels: {
      login: "تسجيل الدخول",
      welcome: "الصفحة الرئيسية",
      prediction: "التنبؤ بالاحتراق الوظيفي",
      survey: "استبيان الموظف",
      dashboard: "لوحة الموارد البشرية",
      executive: "اللوحة التنفيذية",
      weekly_report: "التقرير الأسبوعي",
      coach: "المدرب الذكي"
    },
    welcome_title: "وازن | WAZEN",
    welcome_subtitle: "منصة ذكية لتعزيز التوازن الوظيفي والتنبؤ بالاحتراق الوظيفي",
    welcome_desc: "يساعد وازن الأفراد والشركات على قياس مؤشرات الاحتراق الوظيفي، وفهم مستوى التوازن في بيئة العمل، واتخاذ قرارات أفضل لتحسين رفاه الموظفين والإنتاجية وتقليل التسرب الوظيفي.",
    features_title: "ماذا يقدم وازن؟",
    f1_title: "الكشف المبكر عن الاحتراق الوظيفي",
    f1_text: "توقع احتمالية الاحتراق الوظيفي قبل تفاقم الحالة.",
    f2_title: "لوحة قيادة للموارد البشرية",
    f2_text: "رؤية تنفيذية للمخاطر والمؤشرات العامة والتوصيات.",
    f3_title: "مدرب ذكي وإجراءات عملية",
    f3_text: "إرشادات للموظف وتوصيات للتدخل المبكر.",
    login_page_title: "تسجيل الدخول إلى WAZEN",
    login_desc: "اختر دورك لتجربة المنصة كموارد بشرية أو مدير أو موظف.",
    role_label: "اختر الدور",
    name_label: "الاسم",
    company_label: "اسم الشركة",
    login_btn: "دخول",
    login_success: "تم تسجيل الدخول بنجاح",
    role_hr: "HR / Admin",
    role_manager: "Manager",
    role_employee: "Employee",
    start_btn: "ابدأ التنبؤ",
    dash_btn: "لوحة الموارد البشرية",
    survey_btn: "ابدأ الاستبيان",
    prediction_page_title: "التنبؤ بالاحتراق الوظيفي",
    coach_page_title: "المدرب الذكي",
    dashboard_page_title: "لوحة تحليلات الموارد البشرية",
    executive_page_title: "اللوحة التنفيذية للشركة",
    survey_page_title: "استبيان الموظف الأسبوعي",
    weekly_report_page_title: "التقرير الأسبوعي للاحتراق الوظيفي",
    hours_label: "ساعات العمل يوميًا",
    meetings_label: "عدد الاجتماعات يوميًا",
    stress_label: "مستوى التوتر",
    sleep_label: "عدد ساعات النوم",
    productivity_label: "انخفاض الإنتاجية",
    overtime_label: "ساعات العمل الإضافي",
    workload_label: "مستوى ضغط العمل",
    satisfaction_label: "الرضا الوظيفي",
    predict_btn_text: "توقع خطر الاحتراق الوظيفي",
    result_title: "نتيجة التنبؤ",
    explanation_title: "تفسير الذكاء الاصطناعي",
    risk_text: "مستوى الخطورة",
    gauge_title: "نسبة خطر الاحتراق الوظيفي",
    factors_text: "العوامل الرئيسية للاحتراق:",
    no_factors_text: "لم يتم اكتشاف عوامل كبيرة من البيانات الحالية.",
    reason_hours: "ساعات عمل مرتفعة",
    reason_meetings: "عدد اجتماعات كبير",
    reason_stress: "مستوى توتر مرتفع",
    reason_sleep: "ساعات نوم منخفضة",
    reason_productivity: "انخفاض ملحوظ في الإنتاجية",
    reason_overtime: "عمل إضافي مرتفع",
    reason_workload: "ضغط عمل مرتفع",
    reason_satisfaction: "رضا وظيفي منخفض",
    coach_help_text: "اسأل المدرب الذكي عن التوتر أو النوم أو ضغط العمل أو الوقاية من الاحتراق.",
    question_label: "اكتب سؤالك",
    send_btn_text: "إرسال",
    loading_text: "جاري كتابة الرد...",
    coach_answer_title: "رد المدرب الذكي",
    coach_placeholder: "اكتب سؤالك هنا...",
    dashboard_desc: "هذه اللوحة تساعد فرق الموارد البشرية على متابعة مؤشرات الاحتراق الوظيفي لدى الموظفين.",
    executive_desc: "واجهة مخصصة للإدارة العليا لعرض مستوى الخطر العام والحالات الحرجة والإجراء المقترح لهذا الأسبوع.",
    survey_desc: "استبيان سريع ودوري للموظف لقياس التوازن والضغط ومؤشرات الإرهاق بشكل مستمر.",
    weekly_report_desc: "ملخص أسبوعي مخصص للموارد البشرية والمديرين لعرض مستوى الخطر العام، الفرق الأعلى خطورة، وأكثر الأسباب شيوعًا، والإجراءات المقترحة.",
    metric_burnout: "معدل الاحتراق",
    metric_stress: "متوسط التوتر",
    metric_sleep: "متوسط النوم",
    metric_hours: "متوسط ساعات العمل",
    executive_metric_critical: "حالات حرجة",
    executive_metric_high: "حالات عالية الخطورة",
    executive_metric_attention: "تحتاج تدخلًا",
    executive_metric_safe: "حالات منخفضة",
    chart1_title: "توزيع الاحتراق الوظيفي",
    chart1_plot_title: "الموظفون مع / بدون احتراق وظيفي",
    chart2_title: "التوتر مقابل النوم",
    chart2_plot_title: "العلاقة بين ساعات النوم ومستوى التوتر",
    chart3_title: "ضغط العمل مقابل العمل الإضافي",
    chart3_plot_title: "العلاقة بين ضغط العمل والعمل الإضافي",
    chart4_title: "متوسط مؤشرات الرفاه",
    chart4_plot_title: "متوسط مؤشرات الموظفين",
    high_risk_title: "عرض سريع للموظفين عاليي الخطورة",
    burnout_employees_title: "الموظفون المتوقع لديهم احتراق وظيفي",
    upload_title: "إضافة ملف بيانات",
    upload_help: "يمكنك رفع ملف CSV لعرض بيانات الموظفين على اللوحة.",
    uploaded_success: "تم تحميل الملف بنجاح",
    missing_columns_text: "الملف ناقص الأعمدة المطلوبة التالية:",
    employee_col_label: "الموظف",
    probability_col_label: "نسبة الخطر",
    risk_col_label: "مستوى الخطورة",
    no_burnout_cases_text: "لا توجد حالات احتراق وظيفي متوقعة حاليًا.",
    unsupported_file_text: "نوع الملف غير مدعوم. ارفعي CSV فقط.",
    not_found_data: "يرجى رفع ملف CSV أولاً",
    logo_not_found: "ملف الشعار غير موجود",
    executive_top_reason_title: "أكثر سبب متكرر هذا الأسبوع",
    executive_action_title: "الإجراء الموصى به",
    executive_alerts_title: "الحالات التي تحتاج اهتمامًا فوريًا",
    executive_trend_title: "توزيع الحالات حسب مستوى الخطورة",
    no_alerts_text: "لا توجد حالات حرجة حالياً.",
    survey_submit_btn: "إرسال الاستبيان",
    survey_result_title: "نتيجة الاستبيان",
    survey_saved: "تم حفظ نتيجة الاستبيان في الجلسة الحالية",
    survey_history_title: "سجل الاستبيانات داخل الجلسة",
    survey_empty_history: "لا يوجد سجل استبيانات بعد.",
    recommendation_title: "التوصية الشخصية",
    alert_banner_text: c => `⚠️ يوجد ${c} موظفين يحتاجون اهتمامًا فوريًا`,
    risk_map_title: "خريطة مخاطر الاحتراق حسب الفرق",
    risk_map_desc: "توزيع متوسط خطر الاحتراق الوظيفي عبر فرق الشركة.",
    heatmap_title: "خريطة حرارة مؤشرات الفرق",
    heatmap_desc: "مقارنة الفرق حسب التوتر والنوم والضغط والعمل الإضافي.",
    action_plan_title: "خطة الإجراء الذكية للمدير",
    action_plan_desc: "اقتراحات تنفيذية مبنية على بيانات الفريق الأعلى خطورة.",
    team_col_label: "الفريق",
    avg_risk_label: "متوسط الخطر",
    avg_stress_label: "متوسط التوتر",
    avg_sleep_label: "متوسط النوم",
    avg_workload_label: "متوسط ضغط العمل",
    avg_overtime_label: "متوسط العمل الإضافي",
    weekly_report_company_score: "مؤشر رفاه الشركة",
    weekly_report_top_team: "أعلى فريق خطورة",
    weekly_report_top_factor: "أكثر سبب شائع",
    weekly_report_recommendation: "التوصية هذا الأسبوع",
    weekly_report_cases: "عدد الحالات الحرجة",
    weekly_report_download_note: "يمكن استخدام هذا التقرير في العرض الإداري الأسبوعي.",
    metric_names: ["ساعات العمل","الاجتماعات اليومية","مستوى التوتر","ساعات النوم","انخفاض الإنتاجية","العمل الإضافي","ضغط العمل","الرضا الوظيفي"],
    burnout_map: {0:"بدون احتراق",1:"احتراق وظيفي"}
  },
  English: {
    logout_btn: "Logout",
    page_labels: {
      login: "Login",
      welcome: "Welcome page",
      prediction: "Prediction",
      survey: "Employee Survey",
      dashboard: "HR Dashboard",
      executive: "Executive View",
      weekly_report: "Weekly Burnout Report",
      coach: "AI Coach"
    },
    welcome_title: "WAZEN | وازن",
    welcome_subtitle: "AI workforce wellbeing platform",
    welcome_desc: "WAZEN helps individuals and companies understand burnout risk, detect early warning signs, and improve employee wellbeing and retention using AI-powered insights and intervention support.",
    features_title: "What WAZEN offers",
    f1_title: "Early Burnout Detection",
    f1_text: "Predict burnout risk before performance and retention are affected.",
    f2_title: "HR & Executive Analytics",
    f2_text: "Monitor workforce wellbeing through actionable dashboards.",
    f3_title: "AI Coach & Action Layer",
    f3_text: "Support employees and guide managers with practical next steps.",
    login_page_title: "Login to WAZEN",
    login_desc: "Choose a role to experience the platform as HR, manager, or employee.",
    role_label: "Choose role",
    name_label: "Name",
    company_label: "Company name",
    login_btn: "Login",
    login_success: "Logged in successfully",
    role_hr: "HR / Admin",
    role_manager: "Manager",
    role_employee: "Employee",
    start_btn: "Start Prediction",
    dash_btn: "HR Dashboard",
    survey_btn: "Start Survey",
    prediction_page_title: "Burnout Prediction",
    coach_page_title: "AI Burnout Coach",
    dashboard_page_title: "HR Burnout Analytics Dashboard",
    executive_page_title: "Executive Company Dashboard",
    survey_page_title: "Weekly Employee Check-in",
    weekly_report_page_title: "Weekly Burnout Report",
    hours_label: "Hours worked per day",
    meetings_label: "Meetings per day",
    stress_label: "Stress level",
    sleep_label: "Sleep hours",
    productivity_label: "Productivity drop",
    overtime_label: "Overtime hours",
    workload_label: "Workload level",
    satisfaction_label: "Job satisfaction",
    predict_btn_text: "Predict Burnout Risk",
    result_title: "Prediction Result",
    explanation_title: "AI Explanation",
    risk_text: "Risk Level",
    gauge_title: "Burnout Risk %",
    factors_text: "Main burnout factors:",
    no_factors_text: "No major burnout factors detected from the current input.",
    reason_hours: "high working hours",
    reason_meetings: "too many meetings",
    reason_stress: "high stress level",
    reason_sleep: "low sleep hours",
    reason_productivity: "noticeable productivity drop",
    reason_overtime: "excessive overtime",
    reason_workload: "heavy workload",
    reason_satisfaction: "low job satisfaction",
    coach_help_text: "Ask the AI coach about stress, sleep, workload, or burnout prevention.",
    question_label: "Ask your question",
    send_btn_text: "Send",
    loading_text: "Generating response...",
    coach_answer_title: "AI Coach Response",
    coach_placeholder: "Write your question here...",
    dashboard_desc: "This dashboard helps HR teams monitor burnout trends across employees.",
    executive_desc: "Executive view for leadership to monitor critical cases, overall workforce risk, and this week's recommended action.",
    survey_desc: "A lightweight recurring employee check-in to measure stress, balance, and early burnout indicators.",
    weekly_report_desc: "A weekly summary for HR and managers showing overall risk, top-risk teams, major drivers, and suggested actions.",
    metric_burnout: "Burnout Rate",
    metric_stress: "Avg Stress",
    metric_sleep: "Avg Sleep",
    metric_hours: "Avg Work Hours",
    executive_metric_critical: "Critical Cases",
    executive_metric_high: "High Risk Cases",
    executive_metric_attention: "Need Attention",
    executive_metric_safe: "Low Risk Cases",
    chart1_title: "Burnout Distribution",
    chart1_plot_title: "Employees with / without burnout",
    chart2_title: "Stress vs Sleep",
    chart2_plot_title: "Relationship between Sleep Hours and Stress Score",
    chart3_title: "Workload vs Overtime",
    chart3_plot_title: "Relationship between Workload and Overtime",
    chart4_title: "Average Wellbeing Indicators",
    chart4_plot_title: "Average Employee Indicators",
    high_risk_title: "High-Risk Employees Snapshot",
    burnout_employees_title: "Employees Predicted With Burnout",
    upload_title: "Upload Data File",
    upload_help: "Upload a CSV file to display employee data on the dashboard.",
    uploaded_success: "File uploaded successfully",
    missing_columns_text: "The file is missing these required columns:",
    employee_col_label: "Employee",
    probability_col_label: "Risk Probability",
    risk_col_label: "Risk Level",
    no_burnout_cases_text: "No burnout cases detected.",
    unsupported_file_text: "Unsupported file type. Please upload CSV only.",
    not_found_data: "Please upload a CSV file first.",
    logo_not_found: "Logo not found",
    executive_top_reason_title: "Most Common Risk Driver This Week",
    executive_action_title: "Recommended Action",
    executive_alerts_title: "Cases Needing Immediate Attention",
    executive_trend_title: "Risk Distribution",
    no_alerts_text: "No critical cases at the moment.",
    survey_submit_btn: "Submit Survey",
    survey_result_title: "Survey Result",
    survey_saved: "Survey result saved in this session",
    survey_history_title: "Survey History In Current Session",
    survey_empty_history: "No survey history yet.",
    recommendation_title: "Personal Recommendation",
    alert_banner_text: c => `⚠️ ${c} employees need immediate attention`,
    risk_map_title: "Burnout Risk Map by Team",
    risk_map_desc: "Distribution of average burnout risk across company teams.",
    heatmap_title: "Team Indicators Heatmap",
    heatmap_desc: "Compare teams by stress, sleep, workload, and overtime.",
    action_plan_title: "Manager AI Action Plan",
    action_plan_desc: "Executive recommendations based on the highest-risk team.",
    team_col_label: "Team",
    avg_risk_label: "Avg Risk",
    avg_stress_label: "Avg Stress",
    avg_sleep_label: "Avg Sleep",
    avg_workload_label: "Avg Workload",
    avg_overtime_label: "Avg Overtime",
    weekly_report_company_score: "Company Wellbeing Index",
    weekly_report_top_team: "Top Risk Team",
    weekly_report_top_factor: "Top Burnout Driver",
    weekly_report_recommendation: "Recommendation This Week",
    weekly_report_cases: "Critical Cases",
    weekly_report_download_note: "This report can be used in weekly management reviews.",
    metric_names: ["Hours Worked","Meetings Per Day","Stress Score","Sleep Hours","Productivity Drop","Overtime Hours","Workload Level","Job Satisfaction"],
    burnout_map: {0:"No Burnout",1:"Burnout"}
  }
};

function t() {
  return TEXT[state.lang];
}

const ROLE_PAGE_ACCESS = () => {
  const tx = t();
  return {
    [tx.role_hr]: ["welcome", "dashboard", "executive", "weekly_report", "coach", "prediction", "survey"],
    [tx.role_manager]: ["welcome", "executive", "weekly_report", "coach", "prediction", "survey"],
    [tx.role_employee]: ["welcome", "prediction", "survey", "coach"]
  };
};

const REQUIRED_COLUMNS = [
  "hours_worked",
  "meetings_per_day",
  "stress_score",
  "sleep_hours",
  "productivity_drop",
  "overtime_hours",
  "workload_level",
  "job_satisfaction"
];

async function loadDefaultData() {
  return [];
}

function parseCSV(text) {
  const lines = text.trim().split(/\r?\n/);
  if (lines.length < 2) return [];

  const headers = lines[0].split(",").map(h => h.trim());

  return lines.slice(1).map(line => {
    const values = line.split(",");
    const row = {};
    headers.forEach((h, i) => {
      const raw = (values[i] ?? "").trim();
      const n = Number(raw);
      row[h] = raw !== "" && !Number.isNaN(n) ? n : raw;
    });
    return row;
  });
}

function findEmployeeColumn(rows) {
  if (!rows.length) return null;
  const names = ["employee_name", "name", "employee", "Employee Name", "Employee", "Name"];
  return names.find(col => col in rows[0]) || null;
}

async function predictBurnout(data) {
  const res = await fetch("http://127.0.0.1:5000/predict", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  if (!res.ok) throw new Error("Prediction request failed");
  return res.json();
}

function normalizeRiskLabel(value) {
  const s = String(value).trim().toLowerCase();
  if (["high", "مرتفع", "عالي", "high risk"].includes(s)) return "High";
  if (["medium", "متوسط", "medium risk"].includes(s)) return "Medium";
  return "Low";
}

function getReasonList(v) {
  const tx = t();
  const reasons = [];
  if (v.hours_worked >= 10) reasons.push(tx.reason_hours);
  if (v.meetings_per_day >= 5) reasons.push(tx.reason_meetings);
  if (v.stress_score >= 7) reasons.push(tx.reason_stress);
  if (v.sleep_hours <= 5) reasons.push(tx.reason_sleep);
  if (v.productivity_drop >= 6) reasons.push(tx.reason_productivity);
  if (v.overtime_hours >= 3) reasons.push(tx.reason_overtime);
  if (v.workload_level >= 7) reasons.push(tx.reason_workload);
  if (v.job_satisfaction <= 4) reasons.push(tx.reason_satisfaction);
  return reasons;
}

async function addBurnoutPredictions(rows) {
  const out = [];
  for (const row of rows) {
    const payload = {};
    REQUIRED_COLUMNS.forEach(k => payload[k] = Number(row[k]));
    const pred = await predictBurnout(payload);
    out.push({
      ...row,
      burnout: pred.prediction,
      burnout_probability: pred.probability,
      risk_level: pred.risk_level
    });
  }
  return out;
}

async function enrichDfWithAlerts(rows) {
  let temp = [...rows];
  if (!temp.length) return temp;

  if (!("burnout" in temp[0]) || !("burnout_probability" in temp[0]) || !("risk_level" in temp[0])) {
    temp = await addBurnoutPredictions(temp);
  }

  return temp.map(row => {
    const normalized = row.risk_level
      ? normalizeRiskLabel(row.risk_level)
      : (row.burnout_probability >= 66 ? "High" : row.burnout_probability >= 33 ? "Medium" : "Low");

    const reasons = getReasonList(row);
    const needs_attention =
      normalized === "High" ||
      Number(row.stress_score) >= 8 ||
      Number(row.sleep_hours) <= 4 ||
      Number(row.overtime_hours) >= 4;

    return {
      ...row,
      normalized_risk: normalized,
      main_reasons: reasons.length ? reasons.join(", ") : "None",
      needs_attention
    };
  });
}

function ensureTeamColumn(rows) {
  const cols = ["team", "Team", "department", "Department", "dept", "Dept"];
  return rows.map((row, idx) => {
    const found = cols.find(c => c in row);
    const demoTeams = ["Technology", "HR", "Operations", "Finance", "Marketing", "Sales", "Customer Success"];
    return {
      ...row,
      team_name: found ? String(row[found]) : demoTeams[idx % demoTeams.length]
    };
  });
}

function buildTeamSummary(rows) {
  const tx = t();
  const withTeam = ensureTeamColumn(rows);
  const groups = {};

  withTeam.forEach(r => {
    const key = r.team_name;
    if (!groups[key]) groups[key] = [];
    groups[key].push(r);
  });

  return Object.entries(groups).map(([team, items]) => ({
    [tx.team_col_label]: team,
    [tx.avg_risk_label]: avg(items.map(i => Number(i.burnout_probability))),
    [tx.avg_stress_label]: avg(items.map(i => Number(i.stress_score))),
    [tx.avg_sleep_label]: avg(items.map(i => Number(i.sleep_hours))),
    [tx.avg_workload_label]: avg(items.map(i => Number(i.workload_level))),
    [tx.avg_overtime_label]: avg(items.map(i => Number(i.overtime_hours)))
  }));
}

function avg(arr) {
  if (!arr.length) return 0;
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

function getTopReason(rows) {
  const all = [];
  rows.forEach(r => {
    if (r.main_reasons && r.main_reasons !== "None") {
      r.main_reasons.split(",").map(x => x.trim()).forEach(x => all.push(x));
    }
  });

  if (!all.length) return t().no_factors_text;

  const count = {};
  all.forEach(x => count[x] = (count[x] || 0) + 1);
  return Object.entries(count).sort((a, b) => b[1] - a[1])[0][0];
}

function getWeeklyAction(rows) {
  const avgStress = avg(rows.map(r => Number(r.stress_score)));
  const avgSleep = avg(rows.map(r => Number(r.sleep_hours)));
  const avgMeetings = avg(rows.map(r => Number(r.meetings_per_day)));
  const avgOvertime = avg(rows.map(r => Number(r.overtime_hours)));

  if (avgStress >= 7 && avgSleep <= 5) {
    return state.lang === "Arabic"
      ? "تقليل ضغط العمل وتفعيل متابعة فورية مع الفرق عالية الخطورة."
      : "Reduce workload pressure and start immediate follow-up for high-risk teams.";
  }
  if (avgMeetings >= 5) {
    return state.lang === "Arabic"
      ? "مراجعة كثافة الاجتماعات وتقليل الاجتماعات غير الضرورية هذا الأسبوع."
      : "Review meeting overload and reduce non-essential meetings this week.";
  }
  if (avgOvertime >= 3) {
    return state.lang === "Arabic"
      ? "إعادة توزيع المهام وتقليل العمل الإضافي للموظفين الأكثر تعرضاً للخطر."
      : "Redistribute tasks and reduce overtime for the most exposed employees.";
  }
  return state.lang === "Arabic"
    ? "الحفاظ على المتابعة الأسبوعية وتوسيع الاستبيان الدوري لمراقبة التغيرات مبكرًا."
    : "Maintain weekly monitoring and expand recurring check-ins to detect change earlier.";
}

function getPersonalRecommendation(probability, reasons) {
  if (probability >= 66) {
    return state.lang === "Arabic"
      ? "نوصي بالتدخل السريع: تخفيف عبء العمل، تقليل الاجتماعات، ومراجعة جدول النوم خلال هذا الأسبوع."
      : "Immediate action recommended: reduce workload, limit meetings, and improve sleep routine this week.";
  }
  if (probability >= 33) {
    return state.lang === "Arabic"
      ? "يوصى بإعادة تنظيم اليوم، تقليل مصادر الضغط، ومتابعة الحالة خلال الأيام القادمة."
      : "Reorganize the day, reduce pressure sources, and monitor your condition over the next few days.";
  }
  if (reasons.length) {
    return state.lang === "Arabic"
      ? "الوضع مطمئن نسبيًا، لكن يفضل الحفاظ على التوازن والالتزام بروتين صحي ثابت."
      : "Overall status is manageable, but keep a healthy routine and maintain balance.";
  }
  return state.lang === "Arabic"
    ? "المؤشرات الحالية جيدة، استمر على نفس النمط مع متابعة دورية بسيطة."
    : "Current indicators look good. Keep the same pattern with light regular check-ins.";
}

function getAllowedPages() {
  if (!state.logged_in || !state.role) return ["login"];
  return ROLE_PAGE_ACCESS()[state.role] || ["welcome"];
}

function getRoleBadgeText() {
  if (!state.logged_in) return "";
  return `${state.user_name} | ${state.role}`;
}

function loginUser(name, role, company_name) {
  state.logged_in = true;
  state.user_name = name;
  state.role = role;
  state.company_name = company_name;
  state.page = "welcome";
  renderApp();
}

function logoutUser() {
  state.logged_in = false;
  state.user_name = "";
  state.role = null;
  state.page = "login";
  renderApp();
}

function setPage(page) {
  state.page = page;
  renderApp();
}

function renderSidebar() {
  const tx = t();
  document.getElementById("langSelect").value = state.lang;

  const companyBadge = document.getElementById("companyBadge");
  const roleBadge = document.getElementById("roleBadge");
  const sidebarNav = document.getElementById("sidebarNav");
  const logoutBtn = document.getElementById("logoutBtn");

  if (state.logged_in) {
    companyBadge.classList.remove("hidden");
    roleBadge.classList.remove("hidden");
    sidebarNav.classList.remove("hidden");
    logoutBtn.classList.remove("hidden");

    companyBadge.textContent = state.company_name;
    roleBadge.textContent = getRoleBadgeText();
    logoutBtn.textContent = tx.logout_btn;
    logoutBtn.onclick = logoutUser;

    const allowed = getAllowedPages();
    sidebarNav.innerHTML = allowed.map(key => `
      <button class="nav-btn ${state.page === key ? "active" : ""}" data-page="${key}">
        ${tx.page_labels[key]}
      </button>
    `).join("");

    sidebarNav.querySelectorAll(".nav-btn").forEach(btn => {
      btn.onclick = () => setPage(btn.dataset.page);
    });
  } else {
    companyBadge.classList.add("hidden");
    roleBadge.classList.add("hidden");
    sidebarNav.classList.add("hidden");
    logoutBtn.classList.add("hidden");
    sidebarNav.innerHTML = "";
  }
}

function showMessage(type, text) {
  return `<div class="${type}-box">${text}</div>`;
}

function renderLogin() {
  const tx = t();
  return `
    <div class="grid-2">
      <div>
        <div class="hero-box">
          <div class="hero-title">${tx.welcome_title}</div>
          <div class="hero-subtitle">${tx.welcome_subtitle}</div>
          <div class="hero-desc">${tx.welcome_desc}</div>
        </div>

        <div class="grid-3">
          <div class="feature-card">
            <div class="feature-title">${tx.f1_title}</div>
            <div class="feature-text">${tx.f1_text}</div>
          </div>
          <div class="feature-card">
            <div class="feature-title">${tx.f2_title}</div>
            <div class="feature-text">${tx.f2_text}</div>
          </div>
          <div class="feature-card">
            <div class="feature-title">${tx.f3_title}</div>
            <div class="feature-text">${tx.f3_text}</div>
          </div>
        </div>
      </div>

      <div class="login-right-top">
        <img src="assets/logo.png" alt="logo" onerror="this.style.display='none'">
        <div class="login-top-box">
          <div class="login-top-title">${tx.login_page_title}</div>
          <div class="login-top-desc">${tx.login_desc}</div>
        </div>

        <div class="login-form-shell">
          <label>${tx.name_label}</label>
          <input id="loginName" value="${state.lang === "English" ? "Linah" : "لينة"}">

          <label>${tx.company_label}</label>
          <input id="loginCompany" value="WAZEN Company">

          <label>${tx.role_label}</label>
          <select id="loginRole">
            <option>${tx.role_hr}</option>
            <option>${tx.role_manager}</option>
            <option>${tx.role_employee}</option>
          </select>

          <button class="primary-btn" id="loginSubmit">${tx.login_btn}</button>
        </div>
      </div>
    </div>
  `;
}

function renderWelcome() {
  const tx = t();
  return `
    <div class="welcome-layout">

      <div class="welcome-left">
        <div class="hero-box">
          <div class="hero-title">${tx.welcome_title}</div>
          <div class="hero-subtitle">${tx.welcome_subtitle}</div>
          <div class="hero-desc">${tx.welcome_desc}</div>
        </div>

        <div class="welcome-actions-centered">
          <div class="button-row welcome-actions-row">
            <button class="primary-btn" id="goPrediction">${tx.start_btn}</button>
            ${getAllowedPages().includes("dashboard") ? `<button class="primary-btn" id="goDashboard">${tx.dash_btn}</button>` : ""}
            <button class="primary-btn" id="goSurvey">${tx.survey_btn}</button>
          </div>
        </div>
      </div>

      <div class="welcome-right">
        <img src="assets/logo.png" alt="logo" class="welcome-side-logo" onerror="this.style.display='none'">
        <div class="executive-card">
          <div class="card-title">${state.company_name}</div>
          <div class="card-text">${getRoleBadgeText()}</div>
          <div class="small-note">
            ${state.lang === "Arabic"
              ? "منصة SaaS للوقاية من الاحتراق الوظيفي للشركات."
              : "A SaaS platform for burnout prevention in companies."}
          </div>
        </div>
      </div>
    </div>

    <div class="section-title">${tx.features_title}</div>
    <div class="grid-3">
      <div class="feature-card">
        <div class="feature-title">${tx.f1_title}</div>
        <div class="feature-text">${tx.f1_text}</div>
      </div>
      <div class="feature-card">
        <div class="feature-title">${tx.f2_title}</div>
        <div class="feature-text">${tx.f2_text}</div>
      </div>
      <div class="feature-card">
        <div class="feature-title">${tx.f3_title}</div>
        <div class="feature-text">${tx.f3_text}</div>
      </div>
    </div>
  `;
}

function renderPrediction() {
  const tx = t();
  return `
    <div class="page-title">${tx.prediction_page_title}</div>
    <div class="grid-2">
      <div>
        <label>${tx.hours_label}</label><input type="number" id="p_hours" min="4" max="16" value="8">
        <label>${tx.meetings_label}</label><input type="number" id="p_meetings" min="0" max="10" value="2">
        <label>${tx.stress_label}</label><input type="number" id="p_stress" min="1" max="10" value="5">
        <label>${tx.sleep_label}</label><input type="number" id="p_sleep" min="3" max="10" value="7">
      </div>
      <div>
        <label>${tx.productivity_label}</label><input type="number" id="p_productivity" min="0" max="10" value="2">
        <label>${tx.overtime_label}</label><input type="number" id="p_overtime" min="0" max="8" value="1">
        <label>${tx.workload_label}</label><input type="number" id="p_workload" min="1" max="10" value="5">
        <label>${tx.satisfaction_label}</label><input type="number" id="p_satisfaction" min="1" max="10" value="7">
      </div>
    </div>
    <button class="primary-btn" id="predictBtn">${tx.predict_btn_text}</button>
    <div id="predictionResult" class="result-box"></div>
  `;
}

function renderSurvey() {
  const tx = t();
  return `
    <div class="page-title">${tx.survey_page_title}</div>
    <div class="page-desc">${tx.survey_desc}</div>
    <div class="grid-2">
      <div>
        <label>${tx.hours_label}</label><input type="number" id="s_hours" min="4" max="16" value="8">
        <label>${tx.meetings_label}</label><input type="number" id="s_meetings" min="0" max="10" value="2">
        <label>${tx.stress_label}</label><input type="number" id="s_stress" min="1" max="10" value="5">
        <label>${tx.sleep_label}</label><input type="number" id="s_sleep" min="3" max="10" value="7">
      </div>
      <div>
        <label>${tx.productivity_label}</label><input type="number" id="s_productivity" min="0" max="10" value="2">
        <label>${tx.overtime_label}</label><input type="number" id="s_overtime" min="0" max="8" value="1">
        <label>${tx.workload_label}</label><input type="number" id="s_workload" min="1" max="10" value="5">
        <label>${tx.satisfaction_label}</label><input type="number" id="s_satisfaction" min="1" max="10" value="7">
      </div>
    </div>
    <button class="primary-btn" id="surveyBtn">${tx.survey_submit_btn}</button>
    <div id="surveyResult"></div>
    <div class="section-title">${tx.survey_history_title}</div>
    <div id="surveyHistory"></div>
  `;
}

function renderCoach() {
  const tx = t();
  return `
    <div class="page-title">${tx.coach_page_title}</div>
    <div class="page-desc">${tx.coach_help_text}</div>
    <div class="grid-2" style="grid-template-columns:6fr 1fr">
      <div>
        <label>${tx.question_label}</label>
        <input id="coachQuestion" placeholder="${tx.coach_placeholder}">
      </div>
      <div style="display:flex;align-items:flex-end">
        <button class="primary-btn" id="coachSend">${tx.send_btn_text}</button>
      </div>
    </div>
    <div id="coachResponse"></div>
  `;
}

function renderUploadSection() {
  const tx = t();
  return `
    <div class="section-title">${tx.upload_title}</div>
    <label>${tx.upload_help}</label>
    <input type="file" id="csvUpload" accept=".csv" />
    <div id="uploadMessage"></div>
  `;
}

function metricCard(label, value) {
  return `<div class="metric-card"><div class="metric-label">${label}</div><div class="metric-value">${value}</div></div>`;
}

function renderDashboardBase() {
  const tx = t();
  return `
    <div class="page-title">${tx.dashboard_page_title}</div>
    <div id="topAlertArea"></div>
    <div class="page-desc">${tx.dashboard_desc}</div>
    ${renderUploadSection()}
    <div id="dashboardContent"></div>
  `;
}

function renderExecutiveBase() {
  const tx = t();
  return `
    <div class="page-title">${tx.executive_page_title}</div>
    <div id="topAlertArea"></div>
    <div class="page-desc">${tx.executive_desc}</div>
    <div id="executiveContent"></div>
  `;
}

function renderWeeklyReportBase() {
  const tx = t();
  return `
    <div class="page-title">${tx.weekly_report_page_title}</div>
    <div id="topAlertArea"></div>
    <div class="page-desc">${tx.weekly_report_desc}</div>
    <div id="weeklyContent"></div>
  `;
}

function renderTable(rows) {
  if (!rows || !rows.length) return "";
  const cols = Object.keys(rows[0]);
  return `
    <div class="table-wrap">
      <table>
        <thead><tr>${cols.map(c => `<th>${c}</th>`).join("")}</tr></thead>
        <tbody>
          ${rows.map(r => `<tr>${cols.map(c => `<td>${r[c]}</td>`).join("")}</tr>`).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function buildPayload(prefix) {
  return {
    hours_worked: Number(document.getElementById(`${prefix}_hours`).value),
    meetings_per_day: Number(document.getElementById(`${prefix}_meetings`).value),
    stress_score: Number(document.getElementById(`${prefix}_stress`).value),
    sleep_hours: Number(document.getElementById(`${prefix}_sleep`).value),
    productivity_drop: Number(document.getElementById(`${prefix}_productivity`).value),
    overtime_hours: Number(document.getElementById(`${prefix}_overtime`).value),
    workload_level: Number(document.getElementById(`${prefix}_workload`).value),
    job_satisfaction: Number(document.getElementById(`${prefix}_satisfaction`).value)
  };
}

function showGauge(divId, value, title) {
  Plotly.newPlot(divId, [{
    type: "indicator",
    mode: "gauge+number",
    value: value,
    title: { text: title },
    gauge: { axis: { range: [0, 100] } }
  }], {
    paper_bgcolor: "#0A0F1E",
    font: { color: "white" }
  }, { displayModeBar: false, responsive: true });
}

async function handlePrediction(prefix, resultId, saveSurvey = false) {
  const tx = t();
  const payload = buildPayload(prefix);
  const result = await predictBurnout(payload);

  state.risk_level = result.risk_level;
  state.probability = result.probability;

  const reasons = getReasonList(payload);
  const recommendation = getPersonalRecommendation(result.probability, reasons);

  let html = `
    <div class="section-title">${saveSurvey ? tx.survey_result_title : tx.result_title}</div>
    <div class="chart-box"><div id="${resultId}_gauge" style="height:320px;"></div></div>
    ${showMessage("success", `${tx.risk_text}: ${result.risk_level}`)}
    <div class="section-title">${tx.explanation_title}</div>
  `;

  if (reasons.length) {
    html += showMessage("warning", `${tx.factors_text}<br>${reasons.map(r => `- ${r}`).join("<br>")}`);
  } else {
    html += showMessage("info", tx.no_factors_text);
  }

  html += `<div class="section-title">${tx.recommendation_title}</div>${showMessage("info", recommendation)}`;

  if (saveSurvey) {
    state.survey_history.push({
      name: state.user_name,
      probability: result.probability,
      risk_level: result.risk_level,
      hours_worked: payload.hours_worked,
      stress_score: payload.stress_score,
      sleep_hours: payload.sleep_hours,
      workload_level: payload.workload_level
    });
    html += showMessage("success", tx.survey_saved);
  }

  document.getElementById(resultId).innerHTML = html;
  showGauge(`${resultId}_gauge`, result.probability, tx.gauge_title);

  if (saveSurvey) {
    const historyWrap = document.getElementById("surveyHistory");
    if (state.survey_history.length) {
      historyWrap.innerHTML = renderTable(state.survey_history);
    } else {
      historyWrap.innerHTML = showMessage("info", tx.survey_empty_history);
    }
  }
}

async function callCoach(question) {
  const res = await fetch("http://127.0.0.1:5000/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question, risk_level: state.risk_level })
  });
  if (!res.ok) throw new Error("Chat request failed");
  return res.json();
}

function showTopAlertBanner(rows) {
  const tx = t();
  const topArea = document.getElementById("topAlertArea");
  if (!topArea) return;

  const count = rows.filter(r => r.normalized_risk === "High").length;
  if (count <= 0) {
    topArea.innerHTML = "";
    return;
  }

  topArea.innerHTML = `
    <div class="top-alert-banner">
      <div class="top-alert-text">${tx.alert_banner_text(count)}</div>
    </div>
  `;
}

async function getWorkingData() {
  if (state.uploadedData && state.uploadedData.length) return state.uploadedData;
  return [];
}

function highRiskSnapshot(rows) {
  return rows.filter(r => r.needs_attention === true);
}

function getCompanyWellbeingIndex(rows) {
  const avgStress = avg(rows.map(r => Number(r.stress_score)));
  const avgSleep = avg(rows.map(r => Number(r.sleep_hours)));
  const avgWorkload = avg(rows.map(r => Number(r.workload_level)));
  const avgOvertime = avg(rows.map(r => Number(r.overtime_hours)));
  const avgSatisfaction = avg(rows.map(r => Number(r.job_satisfaction)));

  const score = (
    (10 - avgStress) * 20 +
    avgSleep * 8 +
    (10 - avgWorkload) * 10 +
    (8 - avgOvertime) * 8 +
    avgSatisfaction * 10
  ) / 5;

  return Math.max(0, Math.min(100, Number(score.toFixed(1))));
}

function getTopRiskTeam(teamSummary) {
  return [...teamSummary].sort((a, b) => b[t().avg_risk_label] - a[t().avg_risk_label])[0];
}

function getManagerAiPlan(topTeamRow) {
  const tx = t();
  const teamName = topTeamRow[tx.team_col_label];
  const avgRisk = topTeamRow[tx.avg_risk_label];
  const avgStress = topTeamRow[tx.avg_stress_label];
  const avgSleep = topTeamRow[tx.avg_sleep_label];
  const avgWorkload = topTeamRow[tx.avg_workload_label];
  const avgOvertime = topTeamRow[tx.avg_overtime_label];
  const actions = [];

  if (avgStress >= 7) {
    actions.push(state.lang === "Arabic" ? "تقليل الاجتماعات ومراجعة مصادر الضغط داخل الفريق." : "Reduce meetings and review main pressure sources in the team.");
  }
  if (avgSleep <= 5.5) {
    actions.push(state.lang === "Arabic" ? "تفعيل تدخل سريع لتحسين التوازن بين العمل والراحة." : "Start a quick intervention to improve work-rest balance.");
  }
  if (avgWorkload >= 7) {
    actions.push(state.lang === "Arabic" ? "إعادة توزيع المهام على أعضاء الفريق بشكل أكثر توازنًا." : "Redistribute tasks more evenly across team members.");
  }
  if (avgOvertime >= 3) {
    actions.push(state.lang === "Arabic" ? "تقليل العمل الإضافي خلال هذا الأسبوع ومراجعة أولويات التسليم." : "Reduce overtime this week and reassess delivery priorities.");
  }
  if (!actions.length) {
    actions.push(state.lang === "Arabic" ? "المؤشرات مستقرة نسبيًا، استمر في المتابعة الأسبوعية للفريق." : "Indicators are relatively stable; continue weekly monitoring for this team.");
  }

  const title = state.lang === "Arabic"
    ? `الفريق الأعلى خطورة حاليًا هو: ${teamName} بمتوسط خطر ${avgRisk.toFixed(1)}%.`
    : `The highest-risk team right now is ${teamName} with an average risk of ${avgRisk.toFixed(1)}%.`;

  return { title, actions };
}

function bindCommonEvents() {
  document.getElementById("langSelect").onchange = (e) => {
    state.lang = e.target.value;
    if (state.logged_in) {
      const allowed = getAllowedPages();
      if (!allowed.includes(state.page)) state.page = allowed[0];
    }
    renderApp();
  };
}

async function renderDashboard() {
  const tx = t();
  const rowsRaw = await getWorkingData();
  const root = document.getElementById("dashboardContent");

  if (!rowsRaw.length) {
    root.innerHTML = showMessage(
      "info",
      state.lang === "Arabic"
        ? "يرجى رفع ملف CSV أولاً لعرض تحليلات الموارد البشرية."
        : "Please upload a CSV file first to display HR analytics."
    );
    return;
  }

  const missing = REQUIRED_COLUMNS.filter(c => !(c in rowsRaw[0]));
  if (missing.length) {
    root.innerHTML = showMessage("error", `${tx.missing_columns_text} ${missing.join(", ")}`);
    return;
  }

  const rows = await enrichDfWithAlerts(rowsRaw);
  showTopAlertBanner(rows);

  const avgStress = avg(rows.map(r => Number(r.stress_score)));
  const avgSleep = avg(rows.map(r => Number(r.sleep_hours)));
  const avgHours = avg(rows.map(r => Number(r.hours_worked)));
  const burnoutRate = avg(rows.map(r => Number(r.burnout))) * 100;

  root.innerHTML = `
    <div class="grid-4">
      ${metricCard(tx.metric_burnout, `${burnoutRate.toFixed(1)}%`)}
      ${metricCard(tx.metric_stress, `${avgStress.toFixed(1)}/10`)}
      ${metricCard(tx.metric_sleep, `${avgSleep.toFixed(1)} hrs`)}
      ${metricCard(tx.metric_hours, `${avgHours.toFixed(1)} hrs`)}
    </div>

    <div class="section-title">${tx.chart1_title}</div>
    <div class="chart-box"><div id="chart1"></div></div>

    <div class="section-title">${tx.chart2_title}</div>
    <div class="chart-box"><div id="chart2"></div></div>

    <div class="section-title">${tx.chart3_title}</div>
    <div class="chart-box"><div id="chart3"></div></div>

    <div class="section-title">${tx.chart4_title}</div>
    <div class="chart-box"><div id="chart4"></div></div>

    <div class="section-title">${tx.risk_map_title}</div>
    <div class="page-desc">${tx.risk_map_desc}</div>
    <div class="chart-box"><div id="riskMap"></div></div>

    <div class="section-title">${tx.heatmap_title}</div>
    <div class="page-desc">${tx.heatmap_desc}</div>
    <div class="chart-box"><div id="heatmap"></div></div>

    <div class="section-title">${tx.burnout_employees_title}</div>
    <div id="burnoutTable"></div>

    <div class="section-title">${tx.high_risk_title}</div>
    <div id="highRiskTable"></div>
  `;

  const counts = [0, 1].map(v => ({
    label: tx.burnout_map[v],
    count: rows.filter(r => Number(r.burnout) === v).length
  }));

  Plotly.newPlot("chart1", [{
    type: "bar",
    x: counts.map(x => x.label),
    y: counts.map(x => x.count),
    text: counts.map(x => x.count),
    textposition: "auto"
  }], {
    title: tx.chart1_plot_title,
    paper_bgcolor: "#0A0F1E",
    plot_bgcolor: "#0A0F1E",
    font: { color: "white" }
  }, { displayModeBar: false, responsive: true });

  Plotly.newPlot("chart2", [{
    type: "scatter",
    mode: "markers",
    x: rows.map(r => Number(r.sleep_hours)),
    y: rows.map(r => Number(r.stress_score)),
    text: rows.map(r => `${r.normalized_risk}`),
    marker: { size: rows.map(r => Math.max(8, Number(r.hours_worked) * 2)) }
  }], {
    title: tx.chart2_plot_title,
    paper_bgcolor: "#0A0F1E",
    plot_bgcolor: "#0A0F1E",
    font: { color: "white" }
  }, { displayModeBar: false, responsive: true });

  Plotly.newPlot("chart3", [{
    type: "scatter",
    mode: "markers",
    x: rows.map(r => Number(r.workload_level)),
    y: rows.map(r => Number(r.overtime_hours)),
    text: rows.map(r => `${r.normalized_risk}`),
    marker: { size: rows.map(r => Math.max(8, Number(r.stress_score) * 2)) }
  }], {
    title: tx.chart3_plot_title,
    paper_bgcolor: "#0A0F1E",
    plot_bgcolor: "#0A0F1E",
    font: { color: "white" }
  }, { displayModeBar: false, responsive: true });

  const summary = [
    avg(rows.map(r => Number(r.hours_worked))),
    avg(rows.map(r => Number(r.meetings_per_day))),
    avg(rows.map(r => Number(r.stress_score))),
    avg(rows.map(r => Number(r.sleep_hours))),
    avg(rows.map(r => Number(r.productivity_drop))),
    avg(rows.map(r => Number(r.overtime_hours))),
    avg(rows.map(r => Number(r.workload_level))),
    avg(rows.map(r => Number(r.job_satisfaction)))
  ];

  Plotly.newPlot("chart4", [{
    type: "bar",
    x: tx.metric_names,
    y: summary
  }], {
    title: tx.chart4_plot_title,
    paper_bgcolor: "#0A0F1E",
    plot_bgcolor: "#0A0F1E",
    font: { color: "white" }
  }, { displayModeBar: false, responsive: true });

  const teamSummary = buildTeamSummary(rows);
  const sortedTeam = [...teamSummary].sort((a, b) => b[tx.avg_risk_label] - a[tx.avg_risk_label]);

  Plotly.newPlot("riskMap", [{
    type: "bar",
    x: sortedTeam.map(r => r[tx.team_col_label]),
    y: sortedTeam.map(r => r[tx.avg_risk_label]),
    text: sortedTeam.map(r => r[tx.avg_risk_label].toFixed(1)),
    textposition: "outside"
  }], {
    title: tx.risk_map_title,
    paper_bgcolor: "#0A0F1E",
    plot_bgcolor: "#0A0F1E",
    font: { color: "white" }
  }, { displayModeBar: false, responsive: true });

  Plotly.newPlot("heatmap", [{
    type: "heatmap",
    x: [tx.avg_stress_label, tx.avg_sleep_label, tx.avg_workload_label, tx.avg_overtime_label],
    y: sortedTeam.map(r => r[tx.team_col_label]),
    z: sortedTeam.map(r => [
      r[tx.avg_stress_label],
      r[tx.avg_sleep_label],
      r[tx.avg_workload_label],
      r[tx.avg_overtime_label]
    ])
  }], {
    title: tx.heatmap_title,
    paper_bgcolor: "#0A0F1E",
    plot_bgcolor: "#0A0F1E",
    font: { color: "white" }
  }, { displayModeBar: false, responsive: true });

  const employeeCol = findEmployeeColumn(rows);
  const burnoutRows = rows.filter(r => Number(r.burnout) === 1).map(r => {
    const obj = {};
    obj[tx.employee_col_label] = employeeCol ? r[employeeCol] : `${state.lang === "Arabic" ? "الموظف" : "Employee"} ${rows.indexOf(r)}`;
    obj[tx.probability_col_label] = r.burnout_probability;
    obj[tx.risk_col_label] = r.risk_level;
    obj.stress_score = r.stress_score;
    obj.sleep_hours = r.sleep_hours;
    obj.overtime_hours = r.overtime_hours;
    obj.workload_level = r.workload_level;
    obj.job_satisfaction = r.job_satisfaction;
    obj.main_reasons = r.main_reasons;
    return obj;
  });

  document.getElementById("burnoutTable").innerHTML = burnoutRows.length
    ? renderTable(burnoutRows)
    : showMessage("info", tx.no_burnout_cases_text);

  const highRisk = highRiskSnapshot(rows);
  document.getElementById("highRiskTable").innerHTML = highRisk.length
    ? renderTable(highRisk)
    : showMessage("info", tx.no_alerts_text);
}

async function renderExecutive() {
  const tx = t();
  const rowsRaw = await getWorkingData();
  const root = document.getElementById("executiveContent");

  if (!rowsRaw.length) {
    root.innerHTML = showMessage(
      "info",
      state.lang === "Arabic"
        ? "يرجى رفع ملف CSV أولاً لعرض اللوحة التنفيذية."
        : "Please upload a CSV file first to display the executive dashboard."
    );
    return;
  }

  const missing = REQUIRED_COLUMNS.filter(c => !(c in rowsRaw[0]));
  if (missing.length) {
    root.innerHTML = showMessage("error", `${tx.missing_columns_text} ${missing.join(", ")}`);
    return;
  }

  const rows = await enrichDfWithAlerts(rowsRaw);
  showTopAlertBanner(rows);

  const critical = rows.filter(r => r.normalized_risk === "High" || Number(r.stress_score) >= 8 || Number(r.sleep_hours) <= 4);
  const attention = rows.filter(r => r.needs_attention === true);
  const high = rows.filter(r => r.normalized_risk === "High");
  const low = rows.filter(r => r.normalized_risk === "Low");

  const topReason = getTopReason(rows);
  const weeklyAction = getWeeklyAction(rows);
  const teamSummary = buildTeamSummary(rows);
  const topTeam = getTopRiskTeam(teamSummary);
  const plan = getManagerAiPlan(topTeam);

  root.innerHTML = `
    <div class="grid-4">
      ${metricCard(tx.executive_metric_critical, critical.length)}
      ${metricCard(tx.executive_metric_high, high.length)}
      ${metricCard(tx.executive_metric_attention, attention.length)}
      ${metricCard(tx.executive_metric_safe, low.length)}
    </div>

    <div class="grid-3" style="margin-top:20px">
      <div class="executive-card">
        <div class="card-title">${tx.executive_top_reason_title}</div>
        <div class="card-text">${topReason}</div>
      </div>
      <div class="executive-card">
        <div class="card-title">${tx.executive_action_title}</div>
        <div class="card-text">${weeklyAction}</div>
      </div>
      <div class="executive-card">
        <div class="card-title">${tx.action_plan_title}</div>
        <div class="card-text">${plan.title}</div>
        <div class="card-text" style="margin-top:10px">${tx.action_plan_desc}</div>
        <ul class="executive-list">${plan.actions.map(a => `<li>${a}</li>`).join("")}</ul>
      </div>
    </div>

    <div class="section-title">${tx.executive_trend_title}</div>
    <div class="chart-box"><div id="executivePie"></div></div>

    <div class="section-title">${tx.risk_map_title}</div>
    <div id="executiveTeamTable"></div>

    <div class="section-title">${tx.executive_alerts_title}</div>
    <div id="executiveAlerts"></div>
  `;

  const riskCounts = ["High", "Medium", "Low"].map(k => ({
    name: k,
    value: rows.filter(r => r.normalized_risk === k).length
  }));

  Plotly.newPlot("executivePie", [{
    type: "pie",
    labels: riskCounts.map(x => x.name),
    values: riskCounts.map(x => x.value)
  }], {
    title: tx.executive_trend_title,
    paper_bgcolor: "#0A0F1E",
    font: { color: "white" }
  }, { displayModeBar: false, responsive: true });

  document.getElementById("executiveTeamTable").innerHTML = renderTable(teamSummary);

  if (!critical.length) {
    document.getElementById("executiveAlerts").innerHTML = showMessage("info", tx.no_alerts_text);
  } else {
    const employeeCol = findEmployeeColumn(rows);
    const preview = critical.slice(0, 5).map(r => {
      return {
        [tx.employee_col_label]: employeeCol ? r[employeeCol] : `${state.lang === "Arabic" ? "الموظف" : "Employee"} ${rows.indexOf(r)}`,
        [tx.probability_col_label]: r.burnout_probability,
        [tx.risk_col_label]: r.risk_level,
        stress_score: r.stress_score,
        sleep_hours: r.sleep_hours,
        overtime_hours: r.overtime_hours,
        main_reasons: r.main_reasons
      };
    });
    document.getElementById("executiveAlerts").innerHTML = renderTable(preview);
  }
}

async function renderWeekly() {
  const tx = t();
  const rowsRaw = await getWorkingData();
  const root = document.getElementById("weeklyContent");

  if (!rowsRaw.length) {
    root.innerHTML = showMessage(
      "info",
      state.lang === "Arabic"
        ? "يرجى رفع ملف CSV أولاً لعرض التقرير الأسبوعي."
        : "Please upload a CSV file first to display the weekly report."
    );
    return;
  }

  const missing = REQUIRED_COLUMNS.filter(c => !(c in rowsRaw[0]));
  if (missing.length) {
    root.innerHTML = showMessage("error", `${tx.missing_columns_text} ${missing.join(", ")}`);
    return;
  }

  const rows = await enrichDfWithAlerts(rowsRaw);
  showTopAlertBanner(rows);

  const teamSummary = buildTeamSummary(rows);
  const companyIndex = getCompanyWellbeingIndex(rows);
  const topReason = getTopReason(rows);
  const weeklyAction = getWeeklyAction(rows);
  const topTeam = getTopRiskTeam(teamSummary);
  const criticalCases = rows.filter(r => r.needs_attention === true).length;

  root.innerHTML = `
    <div class="grid-4">
      ${metricCard(tx.weekly_report_company_score, `${companyIndex}/100`)}
      ${metricCard(tx.weekly_report_cases, criticalCases)}
      ${metricCard(tx.weekly_report_top_team, `${topTeam[tx.team_col_label]} (${topTeam[tx.avg_risk_label].toFixed(1)}%)`)}
      ${metricCard(tx.metric_burnout, `${(avg(rows.map(r => Number(r.burnout))) * 100).toFixed(1)}%`)}
    </div>

    <div class="grid-3" style="margin-top:20px">
      <div class="executive-card">
        <div class="card-title">${tx.weekly_report_top_factor}</div>
        <div class="card-text">${topReason}</div>
      </div>
      <div class="executive-card">
        <div class="card-title">${tx.weekly_report_recommendation}</div>
        <div class="card-text">${weeklyAction}</div>
      </div>
      <div class="executive-card">
        <div class="card-title">${tx.weekly_report_top_team}</div>
        <div class="card-text">${topTeam[tx.team_col_label]} - ${topTeam[tx.avg_risk_label].toFixed(1)}%</div>
      </div>
    </div>

    <div class="section-title">${tx.risk_map_title}</div>
    <div class="chart-box"><div id="weeklyRiskMap"></div></div>

    <div class="section-title">${tx.heatmap_title}</div>
    <div class="chart-box"><div id="weeklyHeatmap"></div></div>

    ${showMessage("info", tx.weekly_report_download_note)}
  `;

  const sorted = [...teamSummary].sort((a, b) => b[tx.avg_risk_label] - a[tx.avg_risk_label]);

  Plotly.newPlot("weeklyRiskMap", [{
    type: "bar",
    x: sorted.map(r => r[tx.team_col_label]),
    y: sorted.map(r => r[tx.avg_risk_label]),
    text: sorted.map(r => r[tx.avg_risk_label].toFixed(1)),
    textposition: "outside"
  }], {
    title: tx.risk_map_title,
    paper_bgcolor: "#0A0F1E",
    plot_bgcolor: "#0A0F1E",
    font: { color: "white" }
  }, { displayModeBar: false, responsive: true });

  Plotly.newPlot("weeklyHeatmap", [{
    type: "heatmap",
    x: [tx.avg_stress_label, tx.avg_sleep_label, tx.avg_workload_label, tx.avg_overtime_label],
    y: sorted.map(r => r[tx.team_col_label]),
    z: sorted.map(r => [
      r[tx.avg_stress_label],
      r[tx.avg_sleep_label],
      r[tx.avg_workload_label],
      r[tx.avg_overtime_label]
    ])
  }], {
    title: tx.heatmap_title,
    paper_bgcolor: "#0A0F1E",
    plot_bgcolor: "#0A0F1E",
    font: { color: "white" }
  }, { displayModeBar: false, responsive: true });
}

function bindUpload() {
  const input = document.getElementById("csvUpload");
  const msg = document.getElementById("uploadMessage");
  if (!input) return;

  input.onchange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.name.toLowerCase().endsWith(".csv")) {
      msg.innerHTML = showMessage("error", t().unsupported_file_text);
      return;
    }

    const text = await file.text();
    state.uploadedData = parseCSV(text);
    msg.innerHTML = showMessage("success", t().uploaded_success);

    if (state.page === "dashboard") renderDashboard();
    if (state.page === "executive") renderExecutive();
    if (state.page === "weekly_report") renderWeekly();
  };
}

async function renderPage() {
  const root = document.getElementById("pageRoot");

  switch (state.page) {
    case "login":
      root.innerHTML = renderLogin();
      document.getElementById("loginSubmit").onclick = () => {
        const name = document.getElementById("loginName").value.trim() || (state.lang === "English" ? "Linah" : "لينة");
        const company = document.getElementById("loginCompany").value.trim() || "WAZEN Company";
        const role = document.getElementById("loginRole").value;
        loginUser(name, role, company);
      };
      break;

    case "welcome":
      root.innerHTML = renderWelcome();
      document.getElementById("goPrediction").onclick = () => setPage("prediction");
      const goDash = document.getElementById("goDashboard");
      if (goDash) goDash.onclick = () => setPage("dashboard");
      document.getElementById("goSurvey").onclick = () => setPage("survey");
      break;

    case "prediction":
      root.innerHTML = renderPrediction();
      document.getElementById("predictBtn").onclick = async () => {
        try {
          await handlePrediction("p", "predictionResult", false);
        } catch (e) {
          document.getElementById("predictionResult").innerHTML = showMessage("error", e.message);
        }
      };
      break;

    case "survey":
      root.innerHTML = renderSurvey();
      document.getElementById("surveyBtn").onclick = async () => {
        try {
          await handlePrediction("s", "surveyResult", true);
        } catch (e) {
          document.getElementById("surveyResult").innerHTML = showMessage("error", e.message);
        }
      };
      document.getElementById("surveyHistory").innerHTML = state.survey_history.length
        ? renderTable(state.survey_history)
        : showMessage("info", t().survey_empty_history);
      break;

    case "coach":
      root.innerHTML = renderCoach();
      document.getElementById("coachSend").onclick = async () => {
        const q = document.getElementById("coachQuestion").value.trim();
        if (!q) {
          document.getElementById("coachResponse").innerHTML = "";
          return;
        }

        document.getElementById("coachResponse").innerHTML = showMessage("info", t().loading_text);

        try {
          const res = await callCoach(q);
          state.coach_reply = res.reply;
          document.getElementById("coachResponse").innerHTML = `
            <div class="coach-response-box">
              <div class="card-title">${t().coach_answer_title}</div>
              <div class="card-text">${String(res.reply).replace(/\n/g, "<br>")}</div>
            </div>
          `;
        } catch (e) {
          document.getElementById("coachResponse").innerHTML = showMessage("error", e.message);
        }
      };
      break;

    case "dashboard":
      root.innerHTML = renderDashboardBase();
      bindUpload();
      await renderDashboard();
      break;

    case "executive":
      root.innerHTML = renderExecutiveBase();
      await renderExecutive();
      break;

    case "weekly_report":
      root.innerHTML = renderWeeklyReportBase();
      await renderWeekly();
      break;
  }
}

async function renderApp() {
  const allowed = getAllowedPages();
  if (!allowed.includes(state.page)) state.page = allowed[0];
  renderSidebar();
  bindCommonEvents();
  await renderPage();
}

window.addEventListener("DOMContentLoaded", async () => {
  await renderApp();
}); // احذف من ذا الملف الي تحتاجونها المنصه عشان تشتغل من دون الملف الافتراضي // وترجع تكتبها كامله وايضا ابيها ما تقرا ملف csv ولا تحلل ولا تشغل اي شي الا اذا رفعت انا لها ملف بصيغه csv من خلال الموقع نفسه  وتحطلي رساله في المكان الفاضي تقول رجاء ارفع ملف csv اولاً واول ما ارفع الملف يبدا يحلل ويرسم الداش بورد عليه // اكتب الملف كامل بعد التعديل.