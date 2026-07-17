"use client";

const inputStyle = { height: 48, padding: "0 16px", border: "1px solid #D6D2CB", borderRadius: 6, fontSize: 15, fontFamily: "inherit", width: "100%", boxSizing: "border-box" } as React.CSSProperties;

export default function ConsultForm({ showDatetime }: { showDatetime?: boolean }) {
  return (
    <form style={{ display: "flex", flexDirection: "column", gap: 14 }} onSubmit={e => e.preventDefault()}>
      <input type="text" placeholder="Имя" required style={inputStyle} />
      <input type="tel" placeholder="Телефон" required style={inputStyle} />
      {showDatetime && (
        <input type="datetime-local" style={{ ...inputStyle, color: "#6B6B6B" }} />
      )}
      <textarea placeholder="Вопрос (необязательно)" rows={3}
        style={{ padding: "12px 16px", border: "1px solid #D6D2CB", borderRadius: 6, fontSize: 15, fontFamily: "inherit", resize: "vertical", width: "100%", boxSizing: "border-box" }} />
      <button type="submit" className="btn-primary" style={{ height: 52, fontSize: 16 }}>
        Записаться
      </button>
      <div style={{ fontSize: 11, color: "#9E9A94", textAlign: "center" }}>
        Нажимая кнопку, вы соглашаетесь на <a href="/soglasie" style={{ color: "#9E9A94" }}>обработку персональных данных</a>
      </div>
    </form>
  );
}
