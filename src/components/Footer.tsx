"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const cols = [
  {
    title: "Услуги",
    links: [
      { label: "Бухгалтерские услуги", href: "/uslugi/bukhgalterskie-uslugi" },
      { label: "Бухгалтерская страховка", href: "/uslugi/strahovka" },
      { label: "Аудит — чек-ап бизнеса", href: "/uslugi/audit" },
      { label: "Управленческий учёт", href: "/uslugi/upravlencheskii-uchet" },
      { label: "Бухгалтерия для маркетплейсов", href: "/uslugi/marketplace" },
      { label: "Калькулятор", href: "/calculator" },
    ],
  },
  {
    title: "Компания",
    links: [
      { label: "Команда", href: "/team" },
      { label: "Контакты", href: "/contacts" },
      { label: "Статьи", href: "/blog" },
      { label: "Новости", href: "/novosti" },
    ],
  },
  {
    title: "Контакты",
    links: [],
    contacts: true,
  },
];

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    mq.addEventListener("change", e => setIsMobile(e.matches));
  }, []);

  return (
    <footer style={{ background: "#3D3D3D", color: "rgba(255,255,255,0.8)", paddingTop: 56 }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "280px 1fr 1fr 1fr", gap: 40, paddingBottom: 48 }}>
          <div>
            <Image src="/logo.png" alt="Доверительная Бухгалтерия" height={48} width={160} style={{ height: 48, width: "auto", filter: "brightness(0) invert(1)", marginBottom: 16 }} />
            <p style={{ fontSize: 14, lineHeight: 1.6, marginBottom: 20 }}>
              Бухгалтерское сопровождение для ИП и ООО. Работаем удалённо по всей России с 2003 года.
            </p>
            <div style={{ display: "flex", gap: 8 }}>
              <a href="https://t.me/Galina_Gor" target="_blank" rel="noopener noreferrer"
                style={{ padding: "8px 14px", background: "rgba(255,255,255,0.1)", borderRadius: 6, fontSize: 13, fontWeight: 600, color: "#fff" }}>
                TG
              </a>
              <a href="https://wa.me/79169179274" target="_blank" rel="noopener noreferrer"
                style={{ padding: "8px 14px", background: "rgba(255,255,255,0.1)", borderRadius: 6, fontSize: 13, fontWeight: 600, color: "#fff" }}>
                WA
              </a>
            </div>
          </div>

          {cols.map(col => (
            <div key={col.title}>
              <button onClick={() => isMobile && setOpenSection(openSection === col.title ? null : col.title)}
                style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", background: "none", border: "none", cursor: isMobile ? "pointer" : "default",
                  fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(255,255,255,0.5)", marginBottom: 16, padding: 0 }}>
                {col.title}
                {isMobile && <span>{openSection === col.title ? "−" : "+"}</span>}
              </button>
              {(!isMobile || openSection === col.title) && (
                col.contacts ? (
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <a href="tel:+74957788168" style={{ fontSize: 18, fontWeight: 700, color: "#fff" }}>+7 (495) 778-81-68</a>
                    <a href="mailto:info@buhstart.ru" style={{ color: "rgba(255,255,255,0.7)" }}>info@buhstart.ru</a>
                    <p style={{ fontSize: 13 }}>Москва, Краснопрудная 12/1, стр. 1</p>
                    <p style={{ fontSize: 13 }}>Пн–Пт 9:00–19:00</p>
                  </div>
                ) : (
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {col.links.map(l => (
                      <Link key={l.href} href={l.href} style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", transition: "color 120ms" }}
                        onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                        onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}>
                        {l.label}
                      </Link>
                    ))}
                  </div>
                )
              )}
            </div>
          ))}
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", padding: "20px 0", display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "space-between", alignItems: "center", fontSize: 12, color: "rgba(255,255,255,0.4)" }}>
          <span>© 2026 ООО «Профит-консалт» — Доверительная Бухгалтерия</span>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Link href="/privacy" style={{ color: "inherit" }}>Политика конфиденциальности</Link>
            <Link href="/soglasie" style={{ color: "inherit" }}>Согласие на обработку ПДн</Link>
            <span>ИНН 7709792856 · ОГРН 1087746623095</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
