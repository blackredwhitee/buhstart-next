import Link from "next/link";
import Image from "next/image";
import ConsultForm from "@/components/ConsultForm";
import ServiceCard from "@/components/ServiceCard";

const services = [
  { glyph: "₽", name: "Бухгалтерские услуги", desc: "Полное ведение учёта и отчётности: АУСН, УСН, ОСНО, зарплата и кадры.", slug: "bukhgalterskie-uslugi" },
  { glyph: "С", name: "Бухгалтерская страховка", desc: "Проверка отчётности, ответы налоговой и стратегические сессии.", slug: "strahovka" },
  { glyph: "А", name: "Аудит — чек-ап бизнеса", desc: "Проверка отчётности и процессов: риски, ошибки, точки оптимизации.", slug: "audit" },
  { glyph: "У", name: "Управленческий учёт", desc: "Себестоимость, P&L, ДДС — понимание, куда уходят деньги.", slug: "upravlencheskii-uchet" },
  { glyph: "М", name: "Бухгалтерия для маркетплейсов", desc: "Учёт и налоги для селлеров с учётом специфики площадок.", slug: "marketplace" },
  { glyph: "→", name: "Все услуги", desc: "Посмотрите полный список услуг и тарифов.", slug: null },
];

const advantages = [
  { title: "Персональный бухгалтер", desc: "Не колл-центр и не чат-бот — один специалист, который знает ваш бизнес." },
  { title: "Гарантия возврата переплат", desc: "Найдём и вернём переплаченные налоги — это прописано в договоре." },
  { title: "Ответ в течение 2 часов", desc: "В рабочее время ваш вопрос не останется без ответа дольше двух часов." },
  { title: "Страхование ответственности", desc: "Профессиональная ответственность застрахована — ваши риски покрыты." },
];

const team = [
  { name: "Самылова Ирина", role: "Главный бухгалтер, аудитор", exp: "в компании более 20 лет", photo: "/team/bx_1740173516479.jpg" },
  { name: "Тимофеева Юлия", role: "Главный бухгалтер, аудитор, консультант", exp: "в компании 3 года", photo: "/team/MVV00348.jpg" },
  { name: "Анастасия Зайцева", role: "Специалист по управленческому учёту", exp: "работает более 3 лет", photo: "/team/meOsa7UsjTojpg.png" },
  { name: "Инна Пысларь", role: "Старший бухгалтер", exp: "", photo: "/team/MVV00359.jpg" },
];

const reviews = [
  { initial: "А", name: "Александр Третьяков", org: "ООО «ПФ АКТ»", text: "Я спокойно занимаюсь бизнесом, а вы взяли на себя всю бумажную работу. Никакой головной боли." },
  { initial: "Н", name: "Комиссаров Николай", org: "ООО «АТ-СИСТЕМА»", text: "Меня всё устраивает в сотрудничестве с Галиной Викторовной. Планирую запускать новые проекты и продолжу работу с профессионалом." },
  { initial: "Т", name: "Тимофей Семин", org: "ОАО «Агат-аквариус»", text: "Спасибо вашей компании, я даже не знал, что бухгалтерия может быть такой — ориентированной на бизнес." },
  { initial: "Н", name: "Наталья Новикова", org: "", text: "Сотрудничаем с Галиной с 2022 года, помогла уже с решением нескольких сложных задач, провели аудит, дали рекомендации. Рекомендую." },
];

const articles = [
  { href: "https://buhstart.ru/tpost/cnye6z2of1-kak-nalogovaya-vidit-vash-biznes", photo: null, bg: "#1A1A1A", glyph: "ФНС", tag: "Налоговая", title: "Как налоговая видит ваш бизнес" },
  { href: "https://buhstart.ru/tpost/918933y7o1-chto-delat-esli-prishlo-pismo-iz-fns", photo: "/articles/pismo-fns.png", bg: "#F07828", glyph: "✉", tag: "Налоговая", title: "Что делать, если пришло письмо из ФНС" },
  { href: "https://buhstart.ru/tpost/10sx017v61-kuda-utekayut-dengi-v-biznese", photo: "/articles/dengi.jpg", bg: "#6B6B6B", glyph: "₽", tag: "Финансы", title: "Куда утекают деньги в бизнесе" },
];

const card = { background: "#fff", border: "1px solid #E8E8E8", borderRadius: 10, transition: "all 150ms ease" } as React.CSSProperties;

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="m-hero" style={{ maxWidth: 1100, margin: "0 auto", padding: "72px 24px 64px", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 48, alignItems: "center" }}>
        <div>
          <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#F07828", marginBottom: 16 }}>
            Бухгалтерское сопровождение в Москве
          </div>
          <h1 style={{ margin: "0 0 20px", fontSize: 52, lineHeight: 1.12, fontWeight: 800, letterSpacing: "-0.02em" }}>
            Ваш бизнес — наша зона ответственности
          </h1>
          <p style={{ margin: "0 0 32px", fontSize: 18, lineHeight: 1.6, color: "#6B6B6B", maxWidth: 480 }}>
            Профессиональная бухгалтерия для ИП и ООО. Работаем удалённо по всей России. Отвечаем в течение 2 часов.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link href="/calculator" className="btn-primary" style={{ height: 52, padding: "0 26px", fontSize: 16 }}>Рассчитать стоимость</Link>
            <Link href="#zapis" className="btn-secondary" style={{ height: 52, padding: "0 26px", fontSize: 16, borderColor: "#3D3D3D", color: "#3D3D3D" }}>Записаться на консультацию</Link>
          </div>
          <div style={{ display: "flex", gap: 32, marginTop: 44, flexWrap: "wrap" }}>
            {[["20+ лет", "на рынке"], ["350+", "клиентов"], ["2 часа", "время ответа"], ["0 ₽", "штрафов по нашей вине"]].map(([val, label]) => (
              <div key={label}>
                <div style={{ fontSize: 26, fontWeight: 800, color: "#F07828" }}>{val}</div>
                <div style={{ fontSize: 13, color: "#6B6B6B" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="m-heroimg" style={{ height: 460, background: "#FEF0E6", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontSize: 13, color: "#B84F1A" }}>Фото команды</span>
        </div>
      </section>

      {/* Trust bar */}
      <section style={{ background: "#F5F5F5", borderTop: "1px solid #E8E8E8", borderBottom: "1px solid #E8E8E8" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "22px 24px", display: "flex", justifyContent: "space-between", gap: 24, flexWrap: "wrap", fontSize: 14, color: "#3D3D3D", fontWeight: 500 }}>
          {["Работаем с 2003 года", "1С:Партнёр", "Страхование профответственности", "УСН · ОСНО · АУСН · Патент", "НДС и ВЭД"].map(t => <span key={t}>{t}</span>)}
        </div>
      </section>

      {/* Services */}
      <section id="uslugi" style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px" }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 16, marginBottom: 36 }}>
          <h2 style={{ margin: 0, fontSize: 36, fontWeight: 800, letterSpacing: "-0.02em" }}>Что мы делаем</h2>
          <Link href="/uslugi" style={{ fontWeight: 600, fontSize: 15, color: "#F07828" }}>Все услуги →</Link>
        </div>
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
          <div className="m-1col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px 48px" }}>
            {advantages.map(a => (
              <div key={a.title} style={{ display: "flex", gap: 16 }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#F07828", marginTop: 8, flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: 19, fontWeight: 600, marginBottom: 6 }}>{a.title}</div>
                  <div style={{ fontSize: 14, lineHeight: 1.6, color: "rgba(255,255,255,0.65)" }}>{a.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator CTA */}
      <section id="calculator" style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px", textAlign: "center" }}>
        <h2 style={{ margin: "0 0 12px", fontSize: 36, fontWeight: 800, letterSpacing: "-0.02em" }}>Подберём услуги под вашу ситуацию</h2>
        <p style={{ margin: "0 auto 36px", fontSize: 17, color: "#6B6B6B", maxWidth: 560, lineHeight: 1.6 }}>9 вопросов — и вы узнаете, какое обслуживание подходит именно вашему бизнесу</p>
        <div style={{ display: "flex", justifyContent: "center", gap: 40, marginBottom: 36, flexWrap: "wrap" }}>
          {[["1", "Ответьте на вопросы"], ["2", "Получите рекомендации"], ["3", "Обсудите с бухгалтером"]].map(([n, t]) => (
            <div key={n} style={{ maxWidth: 180 }}>
              <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#F07828", color: "#fff", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px" }}>{n}</div>
              <div style={{ fontSize: 14, color: "#3D3D3D", fontWeight: 500 }}>{t}</div>
            </div>
          ))}
        </div>
        <Link href="/calculator" className="btn-primary" style={{ height: 52, padding: "0 30px", fontSize: 16 }}>Начать расчёт</Link>
      </section>

      {/* Team */}
      <section id="team" style={{ background: "#F5F5F5", borderTop: "1px solid #E8E8E8", borderBottom: "1px solid #E8E8E8" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px" }}>
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
        </div>
      </section>

      {/* Reviews */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px" }}>
        <h2 style={{ margin: "0 0 36px", fontSize: 36, fontWeight: 800, letterSpacing: "-0.02em" }}>Что говорят клиенты</h2>
        <div style={{ height: 600, overflow: "hidden", borderRadius: 12, border: "1px solid #E8E8E8" }}>
          <iframe src="https://yandex.ru/maps-reviews-widget/162739002915?comments" style={{ width: "100%", height: "100%", border: "none" }} title="Отзывы на Яндекс Картах" />
        </div>
      </section>

      {/* Articles */}
      <section style={{ background: "#F5F5F5", borderTop: "1px solid #E8E8E8" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px" }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 16, marginBottom: 36 }}>
            <h2 style={{ margin: 0, fontSize: 36, fontWeight: 800, letterSpacing: "-0.02em" }}>Полезные материалы</h2>
            <Link href="/blog" style={{ fontWeight: 600, fontSize: 15, color: "#F07828" }}>Все статьи →</Link>
          </div>
          <div className="m-1col t-2col" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
            {articles.map(a => (
              <a key={a.title} href={a.href} target="_blank" rel="noopener noreferrer"
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
                  <div style={{ fontSize: 12, color: "#F07828", fontWeight: 600 }}>Читать на buhstart.ru →</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation form */}
      <section id="zapis" style={{ background: "#3D3D3D" }}>
        <div className="m-1col" style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
          <div style={{ color: "#fff" }}>
            <h2 style={{ margin: "0 0 14px", fontSize: 36, fontWeight: 800, letterSpacing: "-0.02em" }}>Запишитесь на бесплатную консультацию</h2>
            <p style={{ margin: "0 0 24px", fontSize: 16, lineHeight: 1.65, color: "rgba(255,255,255,0.7)" }}>Разберём вашу ситуацию и предложим оптимальное решение. Без обязательств.</p>
            <div style={{ fontSize: 14, color: "rgba(255,255,255,0.7)" }}>
              Или напишите руководителю лично:{" "}
              <a href="https://t.me/Galina_Gor" style={{ color: "#FF9A50", fontWeight: 600 }}>Telegram</a> ·{" "}
              <a href="https://wa.me/79169179274" style={{ color: "#FF9A50", fontWeight: 600 }}>WhatsApp</a> ·{" "}
              <a href="tel:+74957788168" style={{ color: "#FF9A50", fontWeight: 600 }}>+7 (495) 778-81-68</a>
            </div>
          </div>
          <ConsultForm />
        </div>
      </section>
    </>
  );
}
