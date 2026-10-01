import { createFileRoute } from "@tanstack/react-router";
import { Clock3, MapPin, MessageCircle, Navigation, Phone, Utensils } from "lucide-react";
import heroImage from "@/assets/shpudey-miki-grill-hero.jpg";
import interiorImage from "@/assets/shpudey-miki-interior.jpg";

const phoneDisplay = "050-824-9977";
const phoneLink = "tel:0508249977";
const whatsappLink = "https://wa.me/972508249977?text=%D7%A9%D7%9C%D7%95%D7%9D%20%D7%A9%D7%99%D7%A4%D7%95%D7%93%D7%99%20%D7%9E%D7%99%D7%A7%D7%99%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%91%D7%A6%D7%A2%20%D7%94%D7%96%D7%9E%D7%A0%D7%94";
const mapsLink = "https://www.google.com/maps/search/?api=1&query=%D7%94%D7%A8%D7%A6%D7%9C%203-4%2C%20%D7%90%D7%95%D7%A8%20%D7%A2%D7%A7%D7%99%D7%91%D7%90";

const plateItems = [
  ["פרגית", "70", "2 שיפודי פרגית, 3 סלטים וממרחים ולחם לבחירה"],
  ["כבד עוף", "70", "2 שיפודי כבד עוף, 3 סלטים וממרחים ולחם לבחירה"],
  ["קבב", "70", "2 שיפודי קבב, 3 סלטים וממרחים ולחם לבחירה"],
  ["לבבות", "70", "2 שיפודי לבבות, 3 סלטים וממרחים ולחם לבחירה"],
  ["כנפיים", "55", "6 יחידות כנפיים, 3 סלטים וממרחים ולחם לבחירה"],
  ["קציצות", "70", "3 סלטים וממרחים ולחם לבחירה"],
  ["נקניקיות מרגז", "70", "3 סלטים וממרחים ולחם לבחירה"],
  ["אנטריקוט", "75", "3 סלטים וממרחים ולחם לבחירה"],
  ["מולרד", "75", "3 סלטים וממרחים ולחם לבחירה"],
] as const;

const sandwichItems = [
  ["פרגית", "60"], ["כבד עוף", "60"], ["קבב", "60"], ["לבבות", "60"],
  ["קציצות", "60"], ["נקניקיות מרגז", "60"], ["מולרד", "70"], ["נתח קצבים", "70"],
] as const;

const sides = [["פיתה", "2"], ["בגט", "3"]] as const;
const drinks = [
  ["פחית קוקה קולה", "10"], ["פחית קולה זירו", "10"], ["פחית פאנטה", "10"],
  ["ספרינג אפרסק", "10"], ["פריגת ענבים", "10"], ["פריגת תפוזים", "10"],
  ["פריגת אשכוליות", "10"], ["פריגת לימונענע", "10"], ["מים בטעם אפרסק", "10"],
  ["מים בטעם תפוח", "10"], ["קינלי סודה", "8"], ["מים מינרליים נביעות", "8"],
] as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "שיפודי מיקי | גריל ישראלי באור עקיבא" },
      { name: "description", content: "שיפודי מיקי באור עקיבא — שיפודים, בשרים על האש, פיתה ובגט. הזמנות בטלפון וב-WhatsApp." },
      { property: "og:title", content: "שיפודי מיקי | אור עקיבא" },
      { property: "og:description", content: "בשר על האש, שיפודים ופיתה טרייה בהרצל 3-4, אור עקיבא." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: RestaurantPage,
});

function MenuList({ items, detailed = false }: { items: ReadonlyArray<readonly string[]>; detailed?: boolean }) {
  return (
    <ul className="space-y-5">
      {items.map(([name, price, description]) => (
        <li key={name} className="border-b border-smoke/10 pb-4 last:border-0">
          <div className="flex items-baseline gap-2">
            <span className="shrink-0 font-semibold text-smoke">{name}</span>
            <span className="min-w-4 flex-1 translate-y-[-4px] border-b border-dotted border-ash/30" />
            <span className="shrink-0 font-bold tabular-nums text-smoke">{price} ₪</span>
          </div>
          {detailed && description ? <p className="mt-1.5 max-w-xl text-sm leading-6 text-ash">{description}</p> : null}
        </li>
      ))}
    </ul>
  );
}

function RestaurantPage() {
  return (
    <main dir="rtl" className="min-h-screen overflow-x-hidden bg-coal text-smoke">
      <section className="relative overflow-hidden bg-char">
        <div className="pointer-events-none absolute -left-36 -top-52 size-[38rem] rounded-full bg-ember/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-36 top-24 size-[32rem] rounded-full bg-herb/10 blur-3xl" />

        <header className="relative z-20 border-b border-smoke/10">
          <div className="mx-auto grid h-16 max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5 sm:flex sm:px-8">
            <a href="#top" className="flex min-w-0 items-center gap-2" aria-label="שיפודי מיקי - לראש העמוד">
              <span className="grid size-9 shrink-0 place-items-center rounded-md bg-ember text-xl font-black text-coal">מ</span>
              <span className="truncate text-lg font-bold">שיפודי מיקי</span>
            </a>
            <nav className="mr-auto hidden items-center gap-7 text-sm text-ash md:flex" aria-label="ניווט ראשי">
              <a href="#menu" className="transition-colors hover:text-smoke">תפריט</a>
              <a href="#visit" className="transition-colors hover:text-smoke">שעות וכתובת</a>
            </nav>
            <div className="flex shrink-0 items-center gap-2">
              <a href={phoneLink} className="hidden items-center gap-2 rounded-md px-3 py-2 text-sm text-smoke/80 transition-colors hover:text-smoke sm:inline-flex"><Phone className="size-4" /> חיוג</a>
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md bg-ember px-4 py-2 text-sm font-bold text-coal transition-colors hover:bg-ember/90"><MessageCircle className="size-4" /> הזמנה</a>
            </div>
          </div>
        </header>

        <div id="top" className="relative z-10 mx-auto max-w-6xl px-5 pb-16 pt-10 sm:px-8 sm:pb-24 sm:pt-14">
          <div className="grid items-center gap-10 md:grid-cols-12">
            <div className="animate-rise md:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-herb/30 bg-herb/10 px-3 py-1 text-xs font-medium text-herb"><Utensils className="size-3.5" /> גריל ישראלי · אור עקיבא</span>
              <h1 className="mt-5 max-w-[12ch] text-5xl font-black leading-[1.02] sm:text-6xl lg:text-8xl">שיפודי מיקי</h1>
              <p className="mt-5 max-w-[42ch] text-lg leading-8 text-ash sm:text-xl">שיפודים עסיסיים, בשר על האש ופיתה טרייה — חם מהגריל ובלי קיצורי דרך.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-ember px-6 py-3 font-bold text-coal transition-transform active:scale-[0.98]"><MessageCircle className="size-5" /> הזמנה דרך WhatsApp</a>
                <a href={phoneLink} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-smoke/25 px-5 py-3 font-semibold text-smoke transition-colors hover:border-smoke/50"><Phone className="size-5" /> {phoneDisplay}</a>
                <a href={mapsLink} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 py-3 font-semibold text-ash transition-colors hover:text-smoke"><Navigation className="size-5" /> ניווט אלינו</a>
              </div>
            </div>
            <div className="animate-rise md:col-span-5 [animation-delay:120ms]">
              <div className="relative mx-auto max-w-md">
                <div className="absolute -inset-3 -rotate-2 rounded-2xl border border-ember/25 bg-ember/15" />
                <img src={heroImage} alt="שיפודי פרגית וקבב על גריל גחלים" width={1024} height={1280} fetchPriority="high" className="relative aspect-[4/5] w-full rounded-2xl object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="scroll-mt-10">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="mb-10 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 border-b border-smoke/10 pb-5">
            <div className="min-w-0"><p className="text-sm font-semibold text-ember">מהגריל לצלחת</p><h2 className="mt-1 text-4xl font-black sm:text-5xl">התפריט</h2></div>
            <span className="shrink-0 text-xs text-ash">המחירים בש״ח</span>
          </div>
          <div className="grid gap-x-14 gap-y-14 lg:grid-cols-2">
            <div><h3 className="mb-6 text-xl font-bold text-ember">בצלחת</h3><MenuList items={plateItems} detailed /></div>
            <div className="space-y-14">
              <div><h3 className="mb-6 text-xl font-bold text-ember">בפיתה / בבגט</h3><MenuList items={sandwichItems} /></div>
              <div className="grid gap-10 sm:grid-cols-2">
                <div><h3 className="mb-6 text-xl font-bold text-herb">תוספות</h3><MenuList items={sides} /></div>
                <div><h3 className="mb-6 text-xl font-bold text-herb">שתייה קלה</h3><MenuList items={drinks} /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="visit" className="scroll-mt-10 border-t border-smoke/10 bg-char">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="grid items-center gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="text-sm font-semibold text-ember">בואו לבקר</p>
              <h2 className="mt-2 text-4xl font-black sm:text-5xl">שיפודי מיקי<br />אור עקיבא</h2>
              <div className="mt-8 space-y-5 text-ash">
                <p className="flex items-start gap-3"><MapPin className="mt-0.5 size-5 shrink-0 text-ember" /><span><strong className="block text-smoke">הרצל 3-4</strong>אור עקיבא</span></p>
                <p className="flex items-start gap-3"><Clock3 className="mt-0.5 size-5 shrink-0 text-ember" /><span><strong className="block text-smoke">ראשון–חמישי</strong>11:00–22:00<br /><span className="text-sm">שישי ושבת: סגור כרגע</span></span></p>
                <a href={phoneLink} className="flex items-center gap-3 text-smoke transition-colors hover:text-ember"><Phone className="size-5 text-ember" />{phoneDisplay}</a>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={mapsLink} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-ember px-6 py-3 font-bold text-coal"><Navigation className="size-5" /> פתחו ניווט</a>
                <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-smoke/20 px-6 py-3 font-semibold text-smoke"><MessageCircle className="size-5" /> WhatsApp</a>
              </div>
            </div>
            <div className="md:col-span-7">
              <img src={interiorImage} alt="מסעדת גריל ישראלית חמה עם גריל פתוח" width={1440} height={832} loading="lazy" className="aspect-video w-full rounded-2xl object-cover" />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-smoke/10 bg-coal">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-5 py-8 text-sm text-ash sm:flex-row sm:items-center sm:px-8">
          <div className="flex items-center gap-2"><span className="grid size-7 place-items-center rounded bg-ember font-black text-coal">מ</span><span className="font-bold text-smoke">שיפודי מיקי · אור עקיבא</span></div>
          <p>גריל ישראלי · הרצל 3-4 · {phoneDisplay}</p>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-smoke/10 bg-coal/95 p-3 backdrop-blur md:hidden">
        <div className="mx-auto grid max-w-md grid-cols-3 gap-2">
          <a href={phoneLink} className="flex min-h-12 flex-col items-center justify-center gap-1 rounded-md text-xs font-semibold text-smoke"><Phone className="size-5 text-ember" />חיוג</a>
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="flex min-h-12 flex-col items-center justify-center gap-1 rounded-md bg-ember text-xs font-bold text-coal"><MessageCircle className="size-5" />הזמנה</a>
          <a href={mapsLink} target="_blank" rel="noreferrer" className="flex min-h-12 flex-col items-center justify-center gap-1 rounded-md text-xs font-semibold text-smoke"><Navigation className="size-5 text-ember" />ניווט</a>
        </div>
      </div>
      <div className="h-20 bg-coal md:hidden" aria-hidden="true" />
    </main>
  );
}