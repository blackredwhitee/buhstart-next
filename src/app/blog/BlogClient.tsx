"use client";
import { useState } from "react";
import Link from "next/link";

const POSTS = [
  { tag: "Налоговая", title: "Как налоговая видит ваш бизнес", href: "/blog/kak-nalogovaya-vidit-vash-biznes" },
  { tag: "Налоговая", title: "Что делать, если пришло письмо из ФНС", href: "/blog/chto-delat-esli-prishlo-pismo-iz-fns" },
  { tag: "Налоги", title: "Главные ошибки предпринимателей в налогах", href: "/blog/glavnye-oshibki-predprinimatelei-v-nalogakh" },
  { tag: "Финансы", title: "Зачем предпринимателю понимать свои цифры", href: "/blog/zachem-predprinimatelyu-ponimat-svoi-tsifry" },
  { tag: "Бизнес", title: "Почему предприниматели откладывают бухгалтерию", href: "/blog/pochemu-predprinimateli-otkladyvayut-bukhgalteriyu" },
  { tag: "Финансы", title: "Куда утекают деньги в бизнесе", href: "/blog/kuda-utekayut-dengi-v-biznese" },
  { tag: "Налоговая", title: "Почему предприниматели боятся налоговой", href: "/blog/pochemu-predprinimateli-boyatsya-nalogovoy" },
  { tag: "Бизнес", title: "Почему предприниматели устают не от бизнеса", href: "/blog/pochemu-predprinimateli-ustayut-ne-ot-biznesa" },
  { tag: "ИП и ООО", title: "Как делят ООО, если один партнёр уходит", href: "/blog/kak-delyat-ooo-esli-odin-partner-ukhodit" },
  { tag: "Финансы", title: "Почему богатый бизнес может быть убыточным", href: "/blog/pochemu-bogatyy-biznes-mozhet-byt-ubytochnym" },
  { tag: "Налоги", title: "Почему низкий налог — не всегда выгодно", href: "/blog/pochemu-nizkiy-nalog-ne-vsegda-vygodno" },
  { tag: "Налоги", title: "Почему систему налогообложения важно пересматривать", href: "/blog/pochemu-sistemu-nalogooblozheniya-vazhno-peresmatrivat" },
  { tag: "ИП и ООО", title: "ООО или ИП", href: "/blog/ooo-ili-ip" },
  { tag: "Налоги", title: "Каждый платит налоги", href: "/blog/kazhdyy-platit-nalogi" },
  { tag: "ИП и ООО", title: "ООО: когда бизнес уже посерьёзнее", href: "/blog/ooo-kogda-biznes-uzhe-posereznee" },
  { tag: "Бизнес", title: "К чему движется малый бизнес в 2026", href: "/blog/k-chemu-dvizhetsia-malyy-biznes-2026" },
  { tag: "ИП и ООО", title: "Организационно-правовые формы бизнеса", href: "/blog/organizatsionno-pravovye-formy-biznesa" },
  { tag: "Налоги", title: "Как выбрать систему налогообложения и не переплачивать", href: "/blog/kak-vybrat-sistemu-nalogooblozheniya" },
  { tag: "Бизнес", title: "Сотрудник уволился и унёс базу клиентов", href: "/blog/sotrudnik-uvolilas-i-unos-bazu-klientov" },
  { tag: "Бизнес", title: "Проверка контрагента: все делают вид, что проверяют", href: "/blog/proverka-kontragenta" },
  { tag: "ИП и ООО", title: "Закрыть ИП и открыть заново, чтобы сэкономить", href: "/blog/zakryt-ip-i-otkryt-zanovo" },
  { tag: "Налоги", title: "Вернуть 13% за курсы", href: "/blog/vernut-13-za-kursy" },
];

const TAGS = ["Все", "Налоги", "Налоговая", "Финансы", "Бизнес", "ИП и ООО"];

export default function BlogClient() {
  const [tag, setTag] = useState("Все");
  const posts = POSTS.filter(p => tag === "Все" || p.tag === tag);

  return (
    <>
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 24px 32px" }}>
        <div style={{ fontSize: 13, color: "#6B6B6B", marginBottom: 16 }}>
          <Link href="/" style={{ color: "#6B6B6B" }}>Главная</Link> / Статьи
        </div>
        <h1 style={{ margin: "0 0 24px", fontSize: 44, fontWeight: 800, letterSpacing: "-0.02em" }}>Статьи</h1>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {TAGS.map(t => (
            <button key={t} onClick={() => setTag(t)}
              style={{ height: 36, padding: "0 16px", borderRadius: 18, border: `1.5px solid ${tag === t ? "#F07828" : "#E8E8E8"}`, background: tag === t ? "#F07828" : "#fff", color: tag === t ? "#fff" : "#3D3D3D", fontSize: 13, fontWeight: 600, fontFamily: "inherit", cursor: "pointer" }}>
              {t}
            </button>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "16px 24px 80px" }}>
        <div className="m-1col t-2col" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
          {posts.map(p => (
            <Link key={p.href} href={p.href}
              style={{ textDecoration: "none", color: "#1A1A1A", background: "#fff", border: "1px solid #E8E8E8", borderRadius: 10, padding: 22, display: "flex", flexDirection: "column", gap: 12, borderBottom: "3px solid #E8E8E8", transition: "all 150ms ease" }}
              onMouseEnter={e => { const el = e.currentTarget; el.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)"; el.style.transform = "translateY(-2px)"; el.style.borderBottomColor = "#F07828"; }}
              onMouseLeave={e => { const el = e.currentTarget; el.style.boxShadow = "none"; el.style.transform = "none"; el.style.borderBottomColor = "#E8E8E8"; }}>
              <span style={{ alignSelf: "flex-start", background: "#FEF0E6", color: "#B84F1A", fontSize: 11, fontWeight: 600, padding: "3px 8px", borderRadius: 4 }}>{p.tag}</span>
              <div style={{ fontSize: 17, fontWeight: 600, lineHeight: 1.45, flex: 1 }}>{p.title}</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#F07828" }}>Читать →</div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
