import Link from "next/link";
import ConsultForm from "@/components/ConsultForm";

const services: Record<string, { name: string; tagline: string; desc: string; items: string[] }> = {
  "bukhgalterskie-uslugi": {
    name: "Бухгалтерское обслуживание",
    tagline: "Полный учёт — от первичных документов до сдачи отчётности",
    desc: "Берём на себя весь бухгалтерский учёт: обрабатываем документы, ведём книги доходов и расходов, формируем и сдаём отчётность в ФНС, ПФР и ФСС. Работаем с ИП и ООО на УСН, ОСНО и патенте.",
    items: ["Обработка первичных документов", "Учёт доходов и расходов", "Ведение книги покупок и продаж", "Расчёт налогов", "Сдача отчётности в ФНС, ПФР, ФСС", "Сверка с налоговыми органами"],
  },
  "strahovka": {
    name: "Страхование и защита бизнеса",
    tagline: "Защитите активы и снизьте риски",
    desc: "Помогаем выбрать оптимальное страховое покрытие для бизнеса и сотрудников. Анализируем риски, подбираем продукты и сопровождаем процесс оформления.",
    items: ["Страхование имущества", "ДМС для сотрудников", "Страхование ответственности", "Анализ рисков бизнеса"],
  },
  "audit": {
    name: "Аудит",
    tagline: "Независимая проверка достоверности учёта",
    desc: "Проводим инициативный и обязательный аудит. Выявляем ошибки в учёте, оцениваем риски и даём рекомендации по исправлению до налоговой проверки.",
    items: ["Обязательный аудит", "Инициативный аудит", "Аудит по специальному заданию", "Налоговый аудит", "Проверка кадровых документов"],
  },
  "upravlencheskii-uchet": {
    name: "Управленческий учёт",
    tagline: "Финансовая картина бизнеса в реальном времени",
    desc: "Настраиваем управленческий учёт: отчёт о прибылях и убытках, движение денежных средств, баланс. Вы видите реальное состояние бизнеса, а не данные из налоговой.",
    items: ["P&L (отчёт о прибылях)", "Cash Flow (движение денег)", "Управленческий баланс", "Анализ рентабельности", "Бюджетирование", "Дашборд для руководителя"],
  },
  "marketplace": {
    name: "Маркетплейсы",
    tagline: "Учёт продаж на Wildberries, Ozon, Яндекс.Маркет",
    desc: "Специализируемся на учёте продавцов маркетплейсов. Разбираемся в особенностях отчётов WB и Ozon, правильно отражаем возвраты, комиссии и логистику.",
    items: ["Учёт продаж и возвратов", "Отражение комиссий и расходов", "Сверка с отчётами площадок", "Расчёт НДС для ОСНО", "Декларация на УСН", "Анализ прибыльности по товарам"],
  },
};

export function generateStaticParams() {
  return Object.keys(services).map(slug => ({ slug }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const svc = services[slug];

  if (!svc) {
    return (
      <section style={{ maxWidth: 760, margin: "0 auto", padding: "80px 24px", textAlign: "center" }}>
        <h1>Услуга не найдена</h1>
        <Link href="/uslugi" style={{ color: "#F07828", fontWeight: 600 }}>← Все услуги</Link>
      </section>
    );
  }

  return (
    <>
      <section style={{ background: "#F5F5F5", padding: "56px 24px 48px" }}>
        <div className="container">
          <div style={{ fontSize: 13, color: "#6B6B6B", marginBottom: 16 }}>
            <Link href="/uslugi" style={{ color: "#F07828" }}>Услуги</Link> / {svc.name}
          </div>
          <h1 style={{ marginBottom: 16 }}>{svc.name}</h1>
          <p style={{ fontSize: 18, color: "#3D3D3D", maxWidth: 620 }}>{svc.tagline}</p>
        </div>
      </section>

      <section style={{ padding: "56px 24px" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
          <div>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "#3D3D3D", marginBottom: 32 }}>{svc.desc}</p>
            <h2 style={{ fontSize: 22, marginBottom: 20 }}>Что входит:</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {svc.items.map(item => (
                <div key={item} style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <span style={{ width: 22, height: 22, background: "#2D7A4F", borderRadius: "50%", color: "#fff", fontSize: 12, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>✓</span>
                  <span style={{ fontSize: 15 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: "#F5F5F5", borderRadius: 12, padding: 32 }}>
            <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Получить расчёт стоимости</h3>
            <p style={{ fontSize: 14, color: "#6B6B6B", marginBottom: 20 }}>Оставьте заявку — бухгалтер перезвонит и подберёт тариф</p>
            <ConsultForm />
          </div>
        </div>
      </section>
    </>
  );
}
