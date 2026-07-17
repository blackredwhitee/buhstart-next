import Link from "next/link";
import ConsultForm from "@/components/ConsultForm";

const services = [
  { title: "Бухгалтерские услуги", desc: "Полное ведение учёта для ИП и ООО на любом режиме налогообложения", slug: "bukhgalterskie-uslugi" },
  { title: "Бухгалтерская страховка", desc: "Исправим ошибки и возьмём ответственность за период до начала работы с нами", slug: "strahovka" },
  { title: "Аудит — чек-ап бизнеса", desc: "Проверим налоговую нагрузку, найдём риски и точки оптимизации", slug: "audit" },
  { title: "Управленческий учёт", desc: "Понятные отчёты о прибыли, деньгах и бизнесе для принятия решений", slug: "upravlencheskii-uchet" },
  { title: "Бухгалтерия для маркетплейсов", desc: "Учёт для продавцов Wildberries, Ozon, Яндекс Маркет", slug: "marketplace" },
];

const advantages = [
  { title: "С 2003 года", desc: "Более 20 лет на рынке бухгалтерских услуг" },
  { title: "Удалённо", desc: "Работаем по всей России без привязки к офису" },
  { title: "Ответственность", desc: "Страхуем свою работу и возмещаем штрафы" },
  { title: "Специализация", desc: "Только бухгалтерия — не распыляемся на другое" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "#fff", padding: "80px 0 64px" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
          <div>
            <span style={{ display: "inline-block", fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "#B84F1A", background: "#FEF0E6", padding: "4px 10px", borderRadius: 4, marginBottom: 20 }}>
              Удалённая бухгалтерия
            </span>
            <h1 style={{ marginBottom: 24 }}>
              Бухгалтерия для бизнеса — без стресса и ошибок
            </h1>
            <p style={{ fontSize: 18, color: "#6B6B6B", lineHeight: 1.6, marginBottom: 36 }}>
              Берём на себя всю бухгалтерию ИП и ООО. Работаем удалённо по всей России с 2003 года.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/calculator" className="btn-primary">Подобрать тариф</Link>
              <Link href="/uslugi" className="btn-secondary">Наши услуги</Link>
            </div>
          </div>
          <div style={{ background: "#FEF0E6", borderRadius: 16, height: 380, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: 13, color: "#B84F1A" }}>Фото офиса / команды</span>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section style={{ background: "#F5F5F5", padding: "24px 0" }}>
        <div className="container" style={{ display: "flex", gap: 40, flexWrap: "wrap", justifyContent: "center" }}>
          {["20+ лет на рынке", "500+ клиентов", "Работаем удалённо по РФ", "Страхуем свою работу"].map(t => (
            <span key={t} style={{ fontSize: 14, fontWeight: 600, color: "#3D3D3D" }}>✓ {t}</span>
          ))}
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: "72px 0" }}>
        <div className="container">
          <h2 style={{ marginBottom: 40 }}>Наши услуги</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {services.map(s => (
              <Link key={s.slug} href={`/uslugi/${s.slug}`} className="card"
                style={{ display: "block", padding: 24, border: "1px solid #E8E8E8", borderRadius: 10, borderBottom: "3px solid #F07828" }}>
                <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: "#6B6B6B", lineHeight: 1.6 }}>{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section style={{ background: "#F5F5F5", padding: "72px 0" }}>
        <div className="container">
          <h2 style={{ marginBottom: 40 }}>Почему выбирают нас</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
            {advantages.map(a => (
              <div key={a.title} style={{ background: "#fff", borderRadius: 10, padding: 24 }}>
                <div style={{ fontSize: 28, fontWeight: 800, color: "#F07828", marginBottom: 8 }}>{a.title}</div>
                <p style={{ fontSize: 14, color: "#6B6B6B" }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Calculator */}
      <section style={{ background: "#3D3D3D", padding: "72px 0", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ color: "#fff", marginBottom: 16 }}>Узнайте стоимость за 2 минуты</h2>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 18, marginBottom: 36 }}>
            Ответьте на 9 вопросов — подберём тариф и покажем что входит
          </p>
          <Link href="/calculator" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", height: 52, padding: "0 32px", background: "#F07828", color: "#fff", borderRadius: 6, fontWeight: 700, fontSize: 16 }}>
            Пройти калькулятор
          </Link>
        </div>
      </section>

      {/* Consultation form */}
      <section style={{ padding: "72px 0" }}>
        <div className="container" style={{ maxWidth: 560 }}>
          <h2 style={{ marginBottom: 8 }}>Записаться на консультацию</h2>
          <p style={{ color: "#6B6B6B", marginBottom: 32 }}>Бесплатно, без обязательств. Ответим на вопросы и предложим подходящий вариант.</p>
          <ConsultForm />
        </div>
      </section>
    </>
  );
}

