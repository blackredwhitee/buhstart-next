"use client";

export default function ConsultForm() {
  return (
    <form style={{ display: "flex", flexDirection: "column", gap: 16 }} onSubmit={e => e.preventDefault()}>
      <input type="text" placeholder="Ваше имя" required
        style={{ height: 48, padding: "0 16px", border: "1px solid #E8E8E8", borderRadius: 6, fontSize: 15, fontFamily: "inherit" }} />
      <input type="tel" placeholder="+7 (___) ___-__-__" required
        style={{ height: 48, padding: "0 16px", border: "1px solid #E8E8E8", borderRadius: 6, fontSize: 15, fontFamily: "inherit" }} />
      <textarea placeholder="Вопрос или удобное время" rows={3}
        style={{ padding: "12px 16px", border: "1px solid #E8E8E8", borderRadius: 6, fontSize: 15, fontFamily: "inherit", resize: "vertical" }} />
      <button type="submit" className="btn-primary" style={{ alignSelf: "flex-start", padding: "0 32px", height: 52 }}>
        Отправить заявку
      </button>
    </form>
  );
}
