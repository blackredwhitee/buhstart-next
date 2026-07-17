"use client";
import { useState } from "react";
import Link from "next/link";

const STEPS = [
  { key: "entity", q: "Какая у вас форма собственности?", opts: ["ИП", "ООО"] },
  { key: "zero", q: "Нужна ли только нулевая отчётность?", opts: ["Да, деятельности нет", "Нет, бизнес работает"] },
  { key: "tax", q: "Какая система налогообложения?", opts: ["УСН 6%", "УСН 15%", "ОСНО", "АУСН", "Патент", "Ещё не выбрал(а)"] },
  { key: "niche", q: "Чем занимается бизнес?", opts: ["Услуги", "Розничная торговля", "Оптовая торговля", "Маркетплейсы", "Производство", "Строительство", "Общепит", "Другое"] },
  { key: "ops", q: "Сколько операций в месяц?", opts: ["До 30", "30–100", "100–300", "Больше 300"] },
  { key: "staff", q: "Сколько сотрудников?", opts: ["Нет", "1–5", "6–15", "16 и больше"] },
  { key: "hr", q: "Нужен ли кадровый учёт?", opts: ["Да", "Нет", "Не знаю"] },
  { key: "mgmt", q: "Нужен ли управленческий учёт?", opts: ["Да", "Нет", "Не знаю"] },
  { key: "ved", q: "Есть ли внешнеэкономическая деятельность?", opts: ["Да", "Нет"] },
];

function buildRecs(a: Record<string, string>) {
  const recs: string[] = [];
  if (a.zero === "Да, деятельности нет") {
    recs.push("Нулевая отчётность (" + (a.entity || "ИП") + ")");
    recs.push("Налоговое консультирование");
    return recs;
  }
  recs.push("Бухгалтерское обслуживание" + (a.tax && a.tax !== "Ещё не выбрал(а)" ? " (" + a.tax + ")" : ""));
  if (a.tax === "Ещё не выбрал(а)") recs.push("Налоговое консультирование — подбор системы");
  if (a.staff && a.staff !== "Нет" || a.hr === "Да") recs.push("Кадровый учёт");
  if (a.mgmt === "Да") recs.push("Управленческий учёт");
  if (a.ved === "Да") recs.push("ВЭД / Валютные расчёты");
  if (a.entity === "ООО") recs.push("Обслуживание ООО");
  return recs;
}

export default function CalculatorClient() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [leadName, setLeadName] = useState("");
  const [leadPhone, setLeadPhone] = useState("");
  const [leadSent, setLeadSent] = useState(false);

  const N = STEPS.length;
  const done = step >= N;
  const cur = done ? null : STEPS[step];
  const pct = Math.round((step / N) * 100);

  const pick = (val: string) => {
    setAnswers(prev => ({ ...prev, [STEPS[step].key]: val }));
    setStep(s => s + 1);
  };

  return (
    <>
      <section style={{ maxWidth: 760, margin: "0 auto", padding: "56px 24px 24px", textAlign: "center" }}>
        <h1 style={{ margin: "0 0 12px", fontSize: 38, fontWeight: 800, letterSpacing: "-0.02em" }}>Узнайте, какие услуги вам нужны</h1>
        <p style={{ margin: 0, fontSize: 16, color: "#6B6B6B", lineHeight: 1.6 }}>9 вопросов — и мы подберём оптимальный пакет под вашу ситуацию</p>
      </section>

      <section style={{ maxWidth: 760, margin: "0 auto", padding: "32px 24px 80px" }}>
        {!done ? (
          <>
            <div style={{ marginBottom: 24 }}>
              <div style={{ height: 6, background: "#F5F5F5", borderRadius: 3, overflow: "hidden" }}>
                <div style={{ height: "100%", background: "#F07828", borderRadius: 3, width: `${pct}%`, transition: "width 250ms ease" }} />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "#6B6B6B", paddingTop: 8 }}>
                <span>Шаг {step + 1} из {N}</span><span>{pct}%</span>
              </div>
            </div>
            <h2 style={{ margin: "0 0 28px", fontSize: 26, fontWeight: 700 }}>{cur!.q}</h2>
            <div className="m-1col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              {cur!.opts.map(o => (
                <button key={o} onClick={() => pick(o)}
                  style={{ minHeight: 52, padding: "16px 20px", border: `1.5px solid ${answers[cur!.key] === o ? "#F07828" : "#E8E8E8"}`, background: answers[cur!.key] === o ? "#FEF0E6" : "#fff", borderRadius: 10, fontSize: 16, fontWeight: 600, fontFamily: "inherit", cursor: "pointer", textAlign: "left", color: "#1A1A1A" }}>
                  {o}
                </button>
              ))}
            </div>
            {step > 0 && (
              <button onClick={() => setStep(s => s - 1)}
                style={{ marginTop: 28, background: "none", border: "none", color: "#6B6B6B", fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "inherit", padding: "8px 0" }}>
                ← Назад
              </button>
            )}
          </>
        ) : (
          <div style={{ background: "#F5F5F5", border: "1px solid #E8E8E8", borderRadius: 12, padding: 36 }}>
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#F07828", marginBottom: 12 }}>Результат подбора</div>
            <h2 style={{ margin: "0 0 22px", fontSize: 28, fontWeight: 800 }}>Для вашей ситуации подойдут:</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 14 }}>
              {buildRecs(answers).map(r => (
                <div key={r} style={{ display: "flex", gap: 12, alignItems: "center", background: "#fff", border: "1px solid #E8E8E8", borderRadius: 8, padding: "16px 18px" }}>
                  <span style={{ color: "#2D7A4F", fontWeight: 800 }}>✓</span>
                  <span style={{ fontSize: 16, fontWeight: 600 }}>{r}</span>
                </div>
              ))}
            </div>
            <p style={{ margin: "0 0 28px", fontSize: 13, color: "#6B6B6B" }}>Точный расчёт стоимости — на консультации с бухгалтером.</p>
            {leadSent ? (
              <div style={{ background: "#fff", borderRadius: 10, padding: 32, textAlign: "center", border: "1px solid #E8E8E8" }}>
                <div style={{ width: 52, height: 52, borderRadius: "50%", background: "#2D7A4F", color: "#fff", fontSize: 24, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px" }}>✓</div>
                <div style={{ fontSize: 17, fontWeight: 700 }}>Спасибо! Бухгалтер свяжется с вами с точным расчётом.</div>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <input placeholder="Имя" value={leadName} onChange={e => setLeadName(e.target.value)}
                  style={{ height: 48, border: "1px solid #D6D2CB", borderRadius: 6, padding: "0 14px", fontSize: 15, fontFamily: "inherit" }} />
                <input placeholder="Телефон" value={leadPhone} onChange={e => setLeadPhone(e.target.value)}
                  style={{ height: 48, border: "1px solid #D6D2CB", borderRadius: 6, padding: "0 14px", fontSize: 15, fontFamily: "inherit" }} />
                <button onClick={() => { if (leadPhone.trim()) setLeadSent(true); }}
                  style={{ height: 52, background: "#F07828", color: "#fff", border: "none", borderRadius: 6, fontSize: 16, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>
                  Получить точный расчёт
                </button>
                <div style={{ fontSize: 11, color: "#9E9A94", textAlign: "center" }}>
                  Нажимая кнопку, вы соглашаетесь на <Link href="/soglasie" style={{ color: "#9E9A94" }}>обработку персональных данных</Link>
                </div>
              </div>
            )}
            <button onClick={() => { setStep(0); setAnswers({}); setLeadSent(false); }}
              style={{ marginTop: 20, background: "none", border: "none", color: "#6B6B6B", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>
              Пройти заново
            </button>
          </div>
        )}
      </section>
    </>
  );
}
