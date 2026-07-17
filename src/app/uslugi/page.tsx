import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";

const services = [
  { glyph: "₽", name: "Бухгалтерские услуги", desc: "Полное ведение учёта и отчётности: АУСН, УСН, ОСНО, зарплата и кадры.", slug: "bukhgalterskie-uslugi" },
  { glyph: "С", name: "Бухгалтерская страховка", desc: "Проверка отчётности, ответы налоговой и стратегические сессии.", slug: "strahovka" },
  { glyph: "А", name: "Аудит — чек-ап бизнеса", desc: "Проверка отчётности и процессов: риски, ошибки, точки оптимизации.", slug: "audit" },
  { glyph: "У", name: "Управленческий учёт", desc: "Себестоимость, P&L, ДДС — понимание, куда уходят деньги.", slug: "upravlencheskii-uchet" },
  { glyph: "М", name: "Бухгалтерия для маркетплейсов", desc: "Учёт и налоги для селлеров с учётом специфики площадок.", slug: "marketplace" },
];

export default function UslugiPage() {
  return (
    <>
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 24px 48px" }}>
        <div style={{ fontSize: 13, color: "#6B6B6B", marginBottom: 16 }}>
          <Link href="/" style={{ color: "#6B6B6B" }}>Главная</Link> / Услуги
        </div>
        <h1 style={{ margin: "0 0 14px", fontSize: 44, fontWeight: 800, letterSpacing: "-0.02em" }}>Бухгалтерские услуги</h1>
        <p style={{ margin: 0, fontSize: 17, color: "#6B6B6B", maxWidth: 560, lineHeight: 1.6 }}>Полный цикл бухгалтерского сопровождения — от регистрации до отчётности.</p>
      </section>
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px 72px" }}>
        <div className="m-1col t-2col" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
          {services.map(s => <ServiceCard key={s.slug} {...s} />)}
        </div>
      </section>
      <section style={{ background: "#3D3D3D" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "64px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32, flexWrap: "wrap" }}>
          <div style={{ color: "#fff" }}>
            <h2 style={{ margin: "0 0 10px", fontSize: 32, fontWeight: 800 }}>Не знаете, что подходит?</h2>
            <p style={{ margin: 0, fontSize: 16, color: "rgba(255,255,255,0.7)" }}>Ответьте на 9 вопросов — подберём оптимальный пакет.</p>
          </div>
          <div style={{ display: "flex", gap: 14 }}>
            <Link href="/calculator" className="btn-primary" style={{ height: 52, padding: "0 26px", fontSize: 16 }}>Пройти калькулятор</Link>
            <a href="tel:+74957788168" style={{ textDecoration: "none", border: "1.5px solid rgba(255,255,255,0.5)", color: "#fff", fontWeight: 600, fontSize: 16, height: 52, padding: "0 26px", borderRadius: 6, display: "inline-flex", alignItems: "center" }}>Позвонить</a>
          </div>
        </div>
      </section>
    </>
  );
}
