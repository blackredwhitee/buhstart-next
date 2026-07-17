"use client";
import Link from "next/link";

export default function ServiceCard({ glyph, name, desc, slug }: { glyph: string; name: string; desc: string; slug: string | null }) {
  return (
    <Link href={slug ? `/uslugi/${slug}` : "/uslugi"}
      style={{ textDecoration: "none", color: "#1A1A1A", background: "#fff", border: "1px solid #E8E8E8", borderRadius: 10, padding: "26px 24px", display: "block", transition: "all 150ms ease", borderBottom: "3px solid #E8E8E8" }}
      onMouseEnter={e => { const el = e.currentTarget; el.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)"; el.style.transform = "translateY(-2px)"; el.style.borderBottomColor = "#F07828"; }}
      onMouseLeave={e => { const el = e.currentTarget; el.style.boxShadow = "none"; el.style.transform = "none"; el.style.borderBottomColor = "#E8E8E8"; }}>
      <div style={{ width: 40, height: 40, borderRadius: 8, background: "#FEF0E6", color: "#F07828", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 19, fontWeight: 800, marginBottom: 16 }}>{glyph}</div>
      <div style={{ fontSize: 19, fontWeight: 600, marginBottom: 8 }}>{name}</div>
      <div style={{ fontSize: 13, lineHeight: 1.6, color: "#6B6B6B", marginBottom: 12 }}>{desc}</div>
      <div style={{ fontSize: 13, fontWeight: 600, color: "#F07828" }}>Подробнее →</div>
    </Link>
  );
}
