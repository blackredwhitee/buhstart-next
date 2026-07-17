"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Сколько стоит бухгалтерское сопровождение?",
    a: "Стоимость зависит от формы бизнеса (ИП или ООО), системы налогообложения, количества операций и сотрудников. Базовый тариф для ИП на УСН начинается от 5 000 ₽/мес. Точную стоимость для вашего бизнеса рассчитайте в нашем калькуляторе.",
  },
  {
    q: "Можно ли передать бухгалтерию на аутсорс, если у меня уже есть штатный бухгалтер?",
    a: "Да, мы умеем работать в паре. Можем взять на себя часть функций — например, только налоговую отчётность или зарплатный учёт — или выступить как контролирующий аудитор.",
  },
  {
    q: "Как быстро вы отвечаете на вопросы?",
    a: "В рабочее время — в течение 2 часов. За вами закреплён персональный бухгалтер, который знает ваш бизнес и отвечает напрямую, без колл-центра.",
  },
  {
    q: "Что входит в стоимость и что оплачивается отдельно?",
    a: "В абонент включены: ведение учёта, подготовка и сдача отчётности, консультации по текущим вопросам. Отдельно тарифицируются: восстановление запущенного учёта, регистрация ИП/ООО, ответы на требования налоговой по периодам до начала нашего сотрудничества.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px" }}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 16, marginBottom: 40 }}>
        <h2 style={{ margin: 0, fontSize: 36, fontWeight: 800, letterSpacing: "-0.02em" }}>Частые вопросы о стоимости</h2>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {faqs.map((f, i) => (
          <div key={i} style={{ borderTop: i === 0 ? "1px solid #E8E8E8" : undefined, borderBottom: "1px solid #E8E8E8" }}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              style={{
                width: "100%", textAlign: "left", background: "none", border: "none", cursor: "pointer",
                padding: "22px 0", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24,
              }}
            >
              <span style={{ fontSize: 17, fontWeight: 600, lineHeight: 1.4, color: "#1A1A1A" }}>{f.q}</span>
              <span style={{
                flexShrink: 0, width: 28, height: 28, borderRadius: "50%",
                background: open === i ? "#F07828" : "#F5F5F5",
                color: open === i ? "#fff" : "#6B6B6B",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 18, fontWeight: 300, transition: "all 200ms",
                transform: open === i ? "rotate(45deg)" : "none",
              }}>+</span>
            </button>
            {open === i && (
              <div style={{ paddingBottom: 22, fontSize: 15, lineHeight: 1.7, color: "#6B6B6B", maxWidth: 720 }}>
                {f.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
