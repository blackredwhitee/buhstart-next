"use client";
import { useState } from "react";

export default function ServiceFaq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div>
      {items.map((f, i) => (
        <div key={i} style={{ borderBottom: "1px solid #E8E8E8" }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{ width: "100%", background: "none", border: "none", padding: "18px 0", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, cursor: "pointer", fontFamily: "inherit", textAlign: "left" }}
          >
            <span style={{ fontSize: 16, fontWeight: 600, color: "#1A1A1A" }}>{f.q}</span>
            <span style={{ color: "#F07828", fontSize: 20, fontWeight: 600, flexShrink: 0 }}>{open === i ? "−" : "+"}</span>
          </button>
          {open === i && (
            <div style={{ paddingBottom: 18, fontSize: 14, lineHeight: 1.7, color: "#6B6B6B" }}>{f.a}</div>
          )}
        </div>
      ))}
    </div>
  );
}
