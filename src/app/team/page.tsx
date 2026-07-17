import Link from "next/link";
import Image from "next/image";

const team = [
  { name: "Самылова Ирина", role: "Главный бухгалтер, аудитор", exp: "В компании более 20 лет", photo: "/team/bx_1740173516479.jpg" },
  { name: "Тимофеева Юлия", role: "Главный бухгалтер, аудитор, консультант", exp: "В компании 3 года", photo: "/team/MVV00348.jpg" },
  { name: "Анастасия Зайцева", role: "Специалист по управленческому учёту", exp: "Работает более 3 лет", photo: "/team/meOsa7UsjTojpg.png" },
  { name: "Диана Гаджигасова", role: "Бухгалтер по первичной документации", exp: "", photo: "/team/MVV00379.jpg" },
  { name: "Анна Сухоплечева", role: "Бухгалтер по первичной документации", exp: "", photo: "/team/MVV00334.jpg" },
  { name: "Инна Пысларь", role: "Старший бухгалтер", exp: "", photo: "/team/MVV00359.jpg" },
  { name: "Елена Велейшикова", role: "Старший бухгалтер, специалист по управленческому учёту", exp: "В компании более 1 года", photo: "/team/MVV00415.jpg" },
];

export default function TeamPage() {
  return (
    <>
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 24px 48px" }}>
        <div style={{ fontSize: 13, color: "#6B6B6B", marginBottom: 16 }}><Link href="/" style={{ color: "#6B6B6B" }}>Главная</Link> / Команда</div>
        <h1 style={{ margin: "0 0 14px", fontSize: 44, fontWeight: 800, letterSpacing: "-0.02em" }}>Наша команда</h1>
        <p style={{ margin: 0, fontSize: 17, color: "#6B6B6B", maxWidth: 560, lineHeight: 1.6 }}>
          С вами работают конкретные люди. Компанией руководит Горелкина Галина Викторовна —{" "}
          <a href="https://t.me/Galina_Gor" style={{ color: "#F07828", fontWeight: 600 }}>написать ей лично</a>.
        </p>
      </section>
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px 72px" }}>
        <div className="m-1col t-2col" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
          {team.map(m => (
            <div key={m.name} style={{ background: "#fff", border: "1px solid #E8E8E8", borderRadius: 10, overflow: "hidden" }}>
              <div style={{ height: 280, position: "relative", overflow: "hidden" }}>
                <Image src={m.photo} alt={m.name} fill style={{ objectFit: "cover", objectPosition: "top" }} />
              </div>
              <div style={{ padding: "20px 22px" }}>
                <div style={{ fontSize: 18, fontWeight: 600 }}>{m.name}</div>
                <div style={{ fontSize: 13, color: "#6B6B6B", marginTop: 4 }}>{m.role}</div>
                {m.exp && <div style={{ fontSize: 13, color: "#F07828", fontWeight: 600, marginTop: 8 }}>{m.exp}</div>}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section style={{ background: "#3D3D3D" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "64px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32, flexWrap: "wrap" }}>
          <div style={{ color: "#fff" }}>
            <h2 style={{ margin: "0 0 10px", fontSize: 32, fontWeight: 800 }}>Пообщайтесь с нашим специалистом</h2>
            <p style={{ margin: 0, fontSize: 16, color: "rgba(255,255,255,0.7)" }}>Зададите вопросы напрямую — до подписания договора.</p>
          </div>
          <div style={{ display: "flex", gap: 14 }}>
            <Link href="/contacts" className="btn-primary" style={{ height: 52, padding: "0 26px", fontSize: 16 }}>Записаться на консультацию</Link>
            <a href="https://wa.me/79169179274" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", border: "1.5px solid rgba(255,255,255,0.5)", color: "#fff", fontWeight: 600, fontSize: 16, height: 52, padding: "0 26px", borderRadius: 6, display: "inline-flex", alignItems: "center" }}>WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}
