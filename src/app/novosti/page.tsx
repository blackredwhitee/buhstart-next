import Link from "next/link";

const news = [
  { date: "2024-12-15", title: "Изменения в налоговом законодательстве с 2025 года: что нужно знать бизнесу", tag: "Законодательство" },
  { date: "2024-11-28", title: "ФНС вводит новые требования к электронному документообороту", tag: "ФНС" },
  { date: "2024-11-10", title: "Повышение МРОТ с 1 января 2025 года: последствия для работодателей", tag: "Зарплата" },
  { date: "2024-10-22", title: "Новые формы отчётности для ИП на УСН в 2025 году", tag: "Отчётность" },
  { date: "2024-10-05", title: "Маркетплейсы обязали передавать данные о продавцах в налоговую", tag: "Маркетплейсы" },
  { date: "2024-09-18", title: "Введён новый порядок расчёта страховых взносов для МСП", tag: "Взносы" },
];

export default function NovostiPage() {
  return (
    <>
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "56px 24px 32px" }}>
        <h1 style={{ margin: "0 0 12px" }}>Новости</h1>
        <p style={{ color: "#6B6B6B", fontSize: 16, margin: 0 }}>Актуальные изменения в законодательстве и бухгалтерии</p>
      </section>
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px 80px", display: "flex", flexDirection: "column", gap: 20 }}>
        {news.map((n, i) => (
          <article key={i} style={{ border: "1px solid #E8E8E8", borderRadius: 10, padding: "24px 28px", background: "#fff" }}>
            <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 10 }}>
              <span style={{ fontSize: 12, fontWeight: 600, padding: "4px 10px", background: "#FEF0E6", color: "#F07828", borderRadius: 20 }}>{n.tag}</span>
              <span style={{ fontSize: 13, color: "#9E9A94" }}>{new Date(n.date).toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" })}</span>
            </div>
            <h2 style={{ fontSize: 18, fontWeight: 700, margin: 0, lineHeight: 1.4 }}>{n.title}</h2>
          </article>
        ))}
      </section>
    </>
  );
}
