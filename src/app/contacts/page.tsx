import Link from "next/link";
import ConsultForm from "@/components/ConsultForm";

export default function ContactsPage() {
  return (
    <>
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 24px 64px" }}>
        <div style={{ fontSize: 13, color: "#6B6B6B", marginBottom: 16 }}><Link href="/" style={{ color: "#6B6B6B" }}>Главная</Link> / Контакты</div>
        <h1 style={{ margin: "0 0 40px", fontSize: 44, fontWeight: 800, letterSpacing: "-0.02em" }}>Контакты</h1>
        <div className="m-1col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#6B6B6B", marginBottom: 10 }}>Офис</div>
            <div style={{ fontSize: 26, fontWeight: 700, lineHeight: 1.3, marginBottom: 28 }}>Москва, Краснопрудная 12/1, стр. 1</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 18, marginBottom: 28 }}>
              <div>
                <div style={{ fontSize: 12, color: "#6B6B6B", marginBottom: 4 }}>Телефон</div>
                <a href="tel:+74957788168" style={{ fontSize: 20, fontWeight: 700, color: "#1A1A1A", textDecoration: "none", display: "block" }}>+7 (495) 778-81-68</a>
                <a href="tel:+79255070979" style={{ fontSize: 15, color: "#3D3D3D", textDecoration: "none" }}>+7 (925) 507-09-79</a>
              </div>
              <div>
                <div style={{ fontSize: 12, color: "#6B6B6B", marginBottom: 4 }}>Email</div>
                <a href="mailto:info@buhstart.ru" style={{ fontSize: 16, fontWeight: 600, color: "#1A1A1A", textDecoration: "none" }}>info@buhstart.ru</a>
              </div>
              <div>
                <div style={{ fontSize: 12, color: "#6B6B6B", marginBottom: 4 }}>Часы работы</div>
                <div style={{ fontSize: 16, fontWeight: 600 }}>Пн–Пт 9:00–19:00</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <a href="https://t.me/Galina_Gor" target="_blank" rel="noopener noreferrer" style={{ height: 44, padding: "0 18px", border: "1.5px solid #E8E8E8", borderRadius: 6, display: "inline-flex", alignItems: "center", textDecoration: "none", color: "#3D3D3D", fontSize: 14, fontWeight: 600 }}>Telegram</a>
              <a href="https://wa.me/79169179274" target="_blank" rel="noopener noreferrer" style={{ height: 44, padding: "0 18px", border: "1.5px solid #E8E8E8", borderRadius: 6, display: "inline-flex", alignItems: "center", textDecoration: "none", color: "#3D3D3D", fontSize: 14, fontWeight: 600 }}>WhatsApp</a>
            </div>
          </div>
          <div style={{ height: 400, borderRadius: 12, overflow: "hidden", border: "1px solid #E8E8E8" }}>
            <iframe src="https://yandex.ru/map-widget/v1/org/doveritelnaya_bukhgalteriya/162739002915/?ll=37.661375%2C55.776507&z=16" width="100%" height="400" style={{ border: 0, display: "block" }} title="Карта офиса" />
          </div>
        </div>
      </section>
      <section style={{ background: "#F5F5F5", borderTop: "1px solid #E8E8E8" }}>
        <div style={{ maxWidth: 640, margin: "0 auto", padding: "72px 24px", textAlign: "center" }}>
          <h2 style={{ margin: "0 0 10px", fontSize: 32, fontWeight: 800 }}>Записаться на консультацию</h2>
          <p style={{ margin: "0 0 28px", fontSize: 15, color: "#6B6B6B" }}>Разберём вашу ситуацию и предложим оптимальное решение.</p>
          <ConsultForm />
        </div>
      </section>
    </>
  );
}
