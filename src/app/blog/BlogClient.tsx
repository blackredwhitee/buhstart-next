"use client";
import { useState } from "react";
import Link from "next/link";

const POSTS = [
  { tag: "Налоговая", title: "Как налоговая видит ваш бизнес", href: "https://buhstart.ru/tpost/cnye6z2of1-kak-nalogovaya-vidit-vash-biznes" },
  { tag: "Налоговая", title: "Что делать, если пришло письмо из ФНС", href: "https://buhstart.ru/tpost/918933y7o1-chto-delat-esli-prishlo-pismo-iz-fns" },
  { tag: "Налоги", title: "Главные ошибки предпринимателей в налогах", href: "https://buhstart.ru/tpost/gg5k5cyxs1-glavnie-oshibki-predprinimatelei-v-nalog" },
  { tag: "Финансы", title: "Зачем предпринимателю понимать свои цифры", href: "https://buhstart.ru/tpost/s58foxd571-zachem-predprinimatelyu-ponimat-svoi-tsi" },
  { tag: "Бизнес", title: "Почему предприниматели откладывают бухгалтерию", href: "https://buhstart.ru/tpost/v1l6jtxy71-pochemu-predprinimateli-otkladivayut-buh" },
  { tag: "Финансы", title: "Куда утекают деньги в бизнесе", href: "https://buhstart.ru/tpost/10sx017v61-kuda-utekayut-dengi-v-biznese" },
  { tag: "Налоговая", title: "Почему предприниматели боятся налоговой", href: "https://buhstart.ru/tpost/d3f7f7re01-pochemu-predprinimateli-boyatsya-nalogov" },
  { tag: "Бизнес", title: "Почему предприниматели устают не от бизнеса", href: "https://buhstart.ru/tpost/pcbt3evp01-pochemu-predprinimateli-ustayut-ne-ot-bi" },
  { tag: "ИП и ООО", title: "Как делят ООО, если один партнёр уходит", href: "https://buhstart.ru/tpost/abkl2u8bn1-kak-delyat-ooo-esli-odin-partnyor-uhodit" },
  { tag: "Финансы", title: "Почему богатый бизнес может быть убыточным", href: "https://buhstart.ru/tpost/nx0520x5c1-pochemu-bogatii-biznes-mozhet-bit-ubitoc" },
  { tag: "Налоги", title: "Почему низкий налог — не всегда выгодно", href: "https://buhstart.ru/tpost/gl75m4h951-pochemu-nizkii-nalog-ne-vsegda-vigodno" },
  { tag: "Налоги", title: "Почему систему налогообложения важно выбирать правильно", href: "https://buhstart.ru/tpost/3t5j2glf01-pochemu-sistemu-nalogooblozheniya-vazhno" },
  { tag: "ИП и ООО", title: "ООО или ИП", href: "https://buhstart.ru/tpost/m9a39ch961-ooo-ili-ip" },
  { tag: "Налоги", title: "Каждый платит налоги", href: "https://buhstart.ru/tpost/fmr3sxkvt1-kazhdii-platit-nalogi" },
  { tag: "ИП и ООО", title: "ООО: когда бизнес уже посерьёзнее", href: "https://buhstart.ru/tpost/v8apys99t1-ooo-kogda-biznes-uzhe-posereznee" },
  { tag: "Бизнес", title: "К чему по анализу движется малый бизнес", href: "https://buhstart.ru/tpost/pfsocxuzz1-k-chemu-po-analizu-dvizhetsya-malii-bizn" },
  { tag: "Налоги", title: "Как выбрать систему налогообложения и не переплачивать", href: "https://buhstart.ru/tpost/zh75d76pb1-kak-vibrat-sistemu-nalogooblozheniya-i-n" },
  { tag: "Бизнес", title: "Сотрудник уволился и унёс базу клиентов", href: "https://buhstart.ru/tpost/a7ih45m8d1-sotrudnik-uvolilsya-i-unyos-bazu-kliento" },
  { tag: "Налоги", title: "Вернуть 13% за курсы", href: "https://buhstart.ru/tpost/dgjjc2cdj1-vernut-13-za-kursi" },
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
            <a key={p.href} href={p.href} target="_blank" rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "#1A1A1A", background: "#fff", border: "1px solid #E8E8E8", borderRadius: 10, padding: 22, display: "flex", flexDirection: "column", gap: 12, borderBottom: "3px solid #E8E8E8", transition: "all 150ms ease" }}
              onMouseEnter={e => { const el = e.currentTarget; el.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)"; el.style.transform = "translateY(-2px)"; el.style.borderBottomColor = "#F07828"; }}
              onMouseLeave={e => { const el = e.currentTarget; el.style.boxShadow = "none"; el.style.transform = "none"; el.style.borderBottomColor = "#E8E8E8"; }}>
              <span style={{ alignSelf: "flex-start", background: "#FEF0E6", color: "#B84F1A", fontSize: 11, fontWeight: 600, padding: "3px 8px", borderRadius: 4 }}>{p.tag}</span>
              <div style={{ fontSize: 17, fontWeight: 600, lineHeight: 1.45, flex: 1 }}>{p.title}</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#F07828" }}>Читать на buhstart.ru →</div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
