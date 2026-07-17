import Link from "next/link";
import Image from "next/image";
import ConsultForm from "@/components/ConsultForm";
import ServiceCard from "@/components/ServiceCard";
import FaqSection from "@/components/FaqSection";

const services = [
  { glyph: "₽", name: "Бухгалтерские услуги", desc: "Полное ведение учёта и отчётности: АУСН, УСН, ОСНО, зарплата и кадры.", slug: "bukhgalterskie-uslugi" },
  { glyph: "С", name: "Бухгалтерская страховка", desc: "Проверка отчётности, ответы налоговой и стратегические сессии.", slug: "strahovka" },
  { glyph: "А", name: "Аудит — чек-ап бизнеса", desc: "Проверка отчётности и процессов: риски, ошибки, точки оптимизации.", slug: "audit" },
  { glyph: "У", name: "Управленческий учёт", desc: "Себестоимость, P&L, ДДС — понимание, куда уходят деньги.", slug: "upravlencheskii-uchet" },
  { glyph: "М", name: "Бухгалтерия для маркетплейсов", desc: "Учёт и налоги для селлеров с учётом специфики площадок.", slug: "marketplace" },
  { glyph: "→", name: "Все услуги", desc: "Посмотрите полный список услуг и тарифов.", slug: null },
];

const advantages = [
  { num: "01", title: "Персональный бухгалтер", desc: "Не колл-центр и не чат-бот — один специалист, который знает ваш бизнес." },
  { num: "02", title: "Гарантия возврата переплат", desc: "Найдём и вернём переплаченные налоги — это прописано в договоре." },
  { num: "03", title: "Ответ в течение 2 часов", desc: "В рабочее время ваш вопрос не останется без ответа дольше двух часов." },
  { num: "04", title: "Страхование ответственности", desc: "Профессиональная ответственность застрахована — ваши риски покрыты." },
];

const team = [
  { name: "Самылова Ирина", role: "Главный бухгалтер, аудитор", exp: "в компании более 20 лет", photo: "/team/bx_1740173516479.jpg" },
  { name: "Тимофеева Юлия", role: "Главный бухгалтер, аудитор, консультант", exp: "в компании 3 года", photo: "/team/MVV00348.jpg" },
  { name: "Анастасия Зайцева", role: "Специалист по управленческому учёту", exp: "работает более 3 лет", photo: "/team/meOsa7UsjTojpg.png" },
  { name: "Инна Пысларь", role: "Старший бухгалтер", exp: "", photo: "/team/MVV00359.jpg" },
];

const articles = [
  { href: "/blog/kak-nalogovaya-vidit-vash-biznes", photo: null, bg: "#1A1A1A", glyph: "ФНС", tag: "Налоговая", title: "Как налоговая видит ваш бизнес" },
  { href: "/blog/chto-delat-esli-prishlo-pismo-iz-fns", photo: "/articles/pismo-fns.png", bg: "#F07828", glyph: "✉", tag: "Налоговая", title: "Что делать, если пришло письмо из ФНС" },
  { href: "/blog/kuda-utekayut-dengi-v-biznese", photo: "/articles/dengi.jpg", bg: "#6B6B6B", glyph: "₽", tag: "Финансы", title: "Куда утекают деньги в бизнесе" },
];

const card = { background: "#fff", border: "1px solid #E8E8E8", borderRadius: 10, transition: "all 150ms ease" } as React.CSSProperties;

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "72px 24px 64px" }}>
        <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#F07828", marginBottom: 20 }}>
          Комплексное бухгалтерское обслуживание · Москва
        </div>
        <h1 style={{ margin: "0 0 24px", fontSize: "clamp(44px,6vw,72px)", lineHeight: 1.05, fontWeight: 900, letterSpacing: "-0.03em", maxWidth: 780 }}>
          Ваш бизнес —{" "}
          <span style={{ boxShadow: "inset 0 -0.28em 0 #FEC89E" }}>наша зона</span>{" "}
          ответственности
        </h1>
        <p style={{ margin: "0 0 36px", fontSize: 18, lineHeight: 1.65, color: "#6B6B6B", maxWidth: 540 }}>
          Настроим и укомплектуем вашу бухгалтерию профессиональными специалистами. Работаем с ИП и ООО удалённо по всей России.
        </p>
        <div style={{ display: "flex", gap: 20, flexWrap: "wrap", alignItems: "center" }}>
          <Link href="/calculator" className="btn-primary" style={{ height: 52, padding: "0 28px", fontSize: 16 }}>
            Рассчитать стоимость
          </Link>
          <Link href="#zapis" style={{ fontSize: 15, fontWeight: 600, color: "#1A1A1A", textDecoration: "underline", textUnderlineOffset: 4 }}>
            Записаться на консультацию →
          </Link>
        </div>

        {/* Stats grid */}
        <div className="m-stats" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 0, marginTop: 56, border: "1px solid #E8E8E8", borderRadius: 12, overflow: "hidden" }}>
          {[
            ["20+ лет", "на рынке"],
            ["350+", "клиентов"],
            ["2 часа", "время ответа"],
            ["0 ₽", "штрафов по нашей вине"],
          ].map(([val, label], i) => (
            <div key={label} style={{ padding: "24px 28px", borderLeft: i > 0 ? "1px solid #E8E8E8" : undefined }}>
              <div style={{ fontSize: 32, fontWeight: 900, letterSpacing: "-0.02em", color: "#F07828" }}>{val}</div>
              <div style={{ fontSize: 13, color: "#6B6B6B", marginTop: 4 }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust bar */}
      <section style={{ background: "#F5F5F5", borderTop: "1px solid #E8E8E8", borderBottom: "1px solid #E8E8E8" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "22px 24px", display: "flex", justifyContent: "space-between", gap: 24, flexWrap: "wrap", fontSize: 14, color: "#3D3D3D", fontWeight: 500 }}>
          {["1С:Партнёр", "Страхование профответственности", "УСН · ОСНО · АУСН · Патент", "НДС и ВЭД"].map(t => <span key={t}>{t}</span>)}
        </div>
      </section>

      {/* Services */}
      <section id="uslugi" style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px" }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 16, marginBottom: 12 }}>
          <h2 style={{ margin: 0, fontSize: 36, fontWeight: 800, letterSpacing: "-0.02em" }}>Что мы делаем</h2>
          <Link href="/uslugi" style={{ fontWeight: 600, fontSize: 15, color: "#F07828" }}>Все услуги →</Link>
        </div>
        <p style={{ margin: "0 0 36px", fontSize: 16, color: "#6B6B6B", maxWidth: 560 }}>Мы работаем более 20 лет и знаем, что нужно бизнесу на каждом этапе.</p>
        <div className="m-1col t-2col" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
          {services.map(s => (
            <ServiceCard key={s.name} {...s} />
          ))}
        </div>
      </section>

      {/* Advantages */}
      <section style={{ background: "#3D3D3D", color: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "72px 24px" }}>
          <h2 style={{ margin: "0 0 40px", fontSize: 36, fontWeight: 800, letterSpacing: "-0.02em" }}>Чем мы отличаемся</h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {advantages.map((a, i) => (
              <div key={a.num} className="m-adv-row" style={{
                display: "grid", gridTemplateColumns: "80px 1fr 1fr", gap: "0 40px",
                padding: "28px 0", borderTop: "1px solid rgba(255,255,255,0.12)",
                borderBottom: i === advantages.length - 1 ? "1px solid rgba(255,255,255,0.12)" : undefined,
                alignItems: "center",
              }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.35)", letterSpacing: "0.05em" }}>{a.num}</div>
                <div style={{ fontSize: 19, fontWeight: 600 }}>{a.title}</div>
                <div style={{ fontSize: 14, lineHeight: 1.65, color: "rgba(255,255,255,0.6)" }}>{a.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galina quote */}
      <section style={{ background: "#F07828", color: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "72px 24px", display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 64, alignItems: "center" }} className="m-galina">
          <div style={{ position: "relative", height: 340, borderRadius: 12, overflow: "hidden", background: "rgba(255,255,255,0.15)" }}>
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 8 }}>
              <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(255,255,255,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, fontWeight: 700 }}>Г</div>
              <div style={{ fontSize: 14, fontWeight: 600, opacity: 0.8 }}>Горелкина Галина Викторовна</div>
              <div style={{ fontSize: 12, opacity: 0.6 }}>Руководитель компании</div>
            </div>
          </div>
          <div>
            <div style={{ fontSize: 60, lineHeight: 0.8, fontWeight: 900, opacity: 0.3, marginBottom: 8 }}>{"“"}</div>
            <p style={{ margin: "0 0 28px", fontSize: 22, lineHeight: 1.5, fontWeight: 500 }}>
              Я основала компанию, потому что видела, как предприниматели теряют деньги из-за ошибок в учёте и незнания налоговых возможностей. Наша задача — чтобы бухгалтерия работала на ваш бизнес, а не против него.
            </p>
            <a href="https://t.me/Galina_Gor" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "12px 22px", background: "rgba(255,255,255,0.2)", borderRadius: 8, color: "#fff", fontWeight: 600, fontSize: 15, textDecoration: "none" }}>
              <span style={{ fontSize: 18 }}>✈</span>
              Написать мне лично в Telegram
            </a>
          </div>
        </div>
      </section>

      {/* Calculator CTA */}
      <section id="calculator" style={{ background: "#F5F5F5", borderBottom: "1px solid #E8E8E8" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="m-calc-grid">
          <div>
            <h2 style={{ margin: "0 0 12px", fontSize: 36, fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.15 }}>Подберём услуги под вашу ситуацию</h2>
            <p style={{ margin: "0 0 36px", fontSize: 16, color: "#6B6B6B", lineHeight: 1.65 }}>9 вопросов — и вы узнаете, какое обслуживание подходит именно вашему бизнесу</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 36 }}>
              {[
                ["1", "Ответьте на вопросы", "Расскажите о форме бизнеса, налогах и штате"],
                ["2", "Получите рекомендации", "Система подберёт подходящие услуги"],
                ["3", "Обсудите с бухгалтером", "Свяжитесь с нами для уточнения деталей"],
              ].map(([n, t, d]) => (
                <div key={n} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#F07828", color: "#fff", fontWeight: 700, fontSize: 15, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{n}</div>
                  <div>
                    <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 3 }}>{t}</div>
                    <div style={{ fontSize: 13, color: "#6B6B6B" }}>{d}</div>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/calculator" className="btn-primary" style={{ height: 52, padding: "0 30px", fontSize: 16 }}>Начать расчёт</Link>
          </div>
          {/* Animated quiz preview */}
          <div style={{ background: "#fff", border: "1px solid #E8E8E8", borderRadius: 16, padding: 32, overflow: "hidden" }} className="m-hide-mobile">
            <style>{`
              @keyframes qzBarGrow { from { width: 0; } to { width: 55%; } }
              @keyframes qzSelPulse { 0%,100% { background: #FEF0E6; border-color: #F07828; } 50% { background: #FFE0C8; } }
              .qz-bar-track { height: 6px; background: #F0EDE9; border-radius: 3px; margin-bottom: 24px; }
              .qz-bar-fill { height: 6px; background: #F07828; border-radius: 3px; animation: qzBarGrow 1.2s cubic-bezier(.4,0,.2,1) 0.3s both; }
              .qz-label { font-size: 11px; font-weight: 600; color: #9E9A94; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 12px; }
              .qz-q { font-size: 17px; font-weight: 700; color: #1A1A1A; margin-bottom: 20px; line-height: 1.4; }
              .qz-opt { padding: 12px 16px; border-radius: 8px; border: 1.5px solid #E8E8E8; font-size: 14px; font-weight: 500; margin-bottom: 8px; }
              .qz-opt.sel { border-color: #F07828; background: #FEF0E6; color: #B84F1A; font-weight: 600; animation: qzSelPulse 2s ease-in-out 0.8s infinite; }
            `}</style>
            <div className="qz-bar-track"><div className="qz-bar-fill" /></div>
            <div className="qz-label">Шаг 2 из 9 · Система налогообложения</div>
            <div className="qz-q">Какую систему налогообложения вы применяете?</div>
            {["УСН (доходы 6%)", "УСН (доходы минус расходы)", "ОСНО", "Патент / АУСН"].map((o, i) => (
              <div key={o} className={`qz-opt${i === 0 ? " sel" : ""}`}>{o}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px" }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 16, marginBottom: 36 }}>
          <h2 style={{ margin: 0, fontSize: 36, fontWeight: 800, letterSpacing: "-0.02em" }}>Ваши бухгалтеры</h2>
          <Link href="/team" style={{ fontWeight: 600, fontSize: 15, color: "#F07828" }}>Вся команда →</Link>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, alignItems: "start" }}>
          <div style={{ position: "relative", height: 380, borderRadius: 12, overflow: "hidden" }}>
            <Image src="/team/team-group.jpg" alt="Команда Доверительной Бухгалтерии" fill style={{ objectFit: "cover", objectPosition: "center" }} />
          </div>
          <div className="m-1col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {team.map(m => (
              <div key={m.name} style={{ ...card, overflow: "hidden" }}>
                <div style={{ height: 160, position: "relative" }}>
                  <Image src={m.photo} alt={m.name} fill style={{ objectFit: "cover", objectPosition: "top" }} />
                </div>
                <div style={{ padding: "14px 16px" }}>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>{m.name}</div>
                  <div style={{ fontSize: 12, color: "#6B6B6B", margin: "3px 0 6px" }}>{m.role}</div>
                  {m.exp && <div style={{ fontSize: 11, color: "#F07828", fontWeight: 600 }}>{m.exp}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section style={{ background: "#F5F5F5", borderTop: "1px solid #E8E8E8", borderBottom: "1px solid #E8E8E8" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px" }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 16, marginBottom: 36 }}>
            <h2 style={{ margin: 0, fontSize: 36, fontWeight: 800, letterSpacing: "-0.02em" }}>Что говорят клиенты</h2>
            <a href="https://yandex.ru/maps/org/doveritelnaya_bukhgalteriya/162739002915/reviews/" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 600, fontSize: 15, color: "#F07828" }}>Все отзывы →</a>
          </div>
          <div className="m-1col t-2col" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {[
              { name: "Роман Б.", date: "15 мая 2025", text: "Обращался в «Доверительную бухгалтерию» за разовой консультацией по налогам в сфере коммерческой недвижимости — нужно было подготовить ответ в ФНС на претензию. Галина и Юлия детально разобрали ситуацию, подсветили риски и помогли сформулировать грамотный и аргументированный ответ." },
              { name: "Максим Отт", date: "6 февраля 2025", text: "Вчера провели консультацию с Галиной, которая длилась около двух часов. Она подробно ответила на все наши вопросы, касающиеся налогового, бухгалтерского и управленческого учёта. Галина проявила высокий профессионализм и глубокие знания в своей области." },
              { name: "Ирина Б.", date: "15 мая 2025", text: "Спасибо Галине и команде за профессионализм и поддержку. Обратилась за консультацией для подготовки ответа в ФНС. После изучения ситуации и документов оперативно получила ответ и общее понимание как мне следует поступить. Рекомендую!" },
              { name: "Скульптор Коваль", date: "22 июля 2025", text: "Огромное спасибо! Я думала никогда не разберусь в своей ситуации. К трём бухгалтерам обратилась — голова уже закипала. Здесь девочки за десять минут поняли где произошёл сбой и всё объяснили. Профессионалы!" },
              { name: "Владислав П.", date: "9 февраля 2025", text: "Потрясающая компания, грамотные специалисты, провели полный аудит, подсветили все слабые стороны, помогли выстроить всю работу. Однозначно рекомендую!" },
              { name: "Кирилл", date: "2 апреля 2025", text: "Спасибо Галине, как всегда всё чётко и по существу. Получил больше, чем планировал. Будем долго и плотно сотрудничать." },
            ].map(r => (
              <div key={r.name + r.date} style={{ ...card, padding: "22px 22px 20px", display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#3D3D3D", color: "#fff", fontWeight: 700, fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{r.name[0]}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700 }}>{r.name}</div>
                    <div style={{ fontSize: 12, color: "#9E9A94" }}>{r.date}</div>
                  </div>
                  <div style={{ marginLeft: "auto", fontSize: 11, color: "#F07828", fontWeight: 600, background: "#FEF0E6", padding: "3px 8px", borderRadius: 4 }}>Яндекс</div>
                </div>
                <div style={{ color: "#F5A623", fontSize: 15, letterSpacing: 1 }}>★★★★★</div>
                <p style={{ margin: 0, fontSize: 14, lineHeight: 1.65, color: "#3D3D3D" }}>{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px" }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 16, marginBottom: 36 }}>
            <h2 style={{ margin: 0, fontSize: 36, fontWeight: 800, letterSpacing: "-0.02em" }}>Полезные материалы</h2>
            <Link href="/blog" style={{ fontWeight: 600, fontSize: 15, color: "#F07828" }}>Все статьи →</Link>
          </div>
          <div className="m-1col t-2col" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
            {articles.map(a => (
              <Link key={a.title} href={a.href}
                style={{ ...card, textDecoration: "none", color: "#1A1A1A", display: "block" }}>
                <div style={{ height: 160, background: a.bg, position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {a.photo
                    ? <Image src={a.photo} alt={a.title} fill style={{ objectFit: "cover" }} />
                    : <span style={{ color: "#fff", fontSize: 34, fontWeight: 800 }}>{a.glyph}</span>
                  }
                </div>
                <div style={{ padding: "18px 20px" }}>
                  <span style={{ display: "inline-block", background: "#FEF0E6", color: "#B84F1A", fontSize: 11, fontWeight: 600, padding: "3px 8px", borderRadius: 4, marginBottom: 10 }}>{a.tag}</span>
                  <div style={{ fontSize: 16, fontWeight: 600, lineHeight: 1.4, marginBottom: 8 }}>{a.title}</div>
                  <div style={{ fontSize: 12, color: "#F07828", fontWeight: 600 }}>Читать →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "#F5F5F5", borderTop: "1px solid #E8E8E8" }}>
        <FaqSection />
      </section>

      {/* Consultation form */}
      <section id="zapis" style={{ background: "#FEF0E6", borderTop: "1px solid #F5C9A0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px" }}>
          <div className="m-1col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#F07828", marginBottom: 16 }}>Бесплатная консультация</div>
              <h2 style={{ margin: "0 0 20px", fontSize: 38, fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.15 }}>Разберём вашу ситуацию и предложим решение</h2>
              <p style={{ margin: "0 0 32px", fontSize: 16, lineHeight: 1.7, color: "#3D3D3D" }}>Первая консультация бесплатная. Обсудим ваш бизнес, ответим на вопросы и скажем, чем можем помочь.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <a href="https://t.me/Galina_Gor" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 15, fontWeight: 600, color: "#1A1A1A" }}>
                  <span style={{ width: 40, height: 40, background: "#fff", borderRadius: 10, border: "1px solid #E8E8E8", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>✈</span>
                  Написать в Telegram
                </a>
                <a href="https://wa.me/79169179274" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 15, fontWeight: 600, color: "#1A1A1A" }}>
                  <span style={{ width: 40, height: 40, background: "#fff", borderRadius: 10, border: "1px solid #E8E8E8", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>💬</span>
                  Написать в WhatsApp
                </a>
                <a href="tel:+74957788168" style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 15, fontWeight: 600, color: "#1A1A1A" }}>
                  <span style={{ width: 40, height: 40, background: "#fff", borderRadius: 10, border: "1px solid #E8E8E8", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>📞</span>
                  +7 (495) 778-81-68
                </a>
              </div>
            </div>
            <div style={{ background: "#fff", borderRadius: 16, padding: "36px 36px", boxShadow: "0 4px 32px rgba(240,120,40,0.08)", border: "1px solid #F5C9A0" }}>
              <div style={{ fontSize: 20, fontWeight: 700, marginBottom: 6 }}>Оставьте заявку</div>
              <div style={{ fontSize: 14, color: "#6B6B6B", marginBottom: 24 }}>Перезвоним в течение рабочего дня</div>
              <ConsultForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
