import { createFileRoute } from "@tanstack/react-router";
import { Clock3, MapPin, MessageCircle, Navigation, Phone, Utensils } from "lucide-react";
import heroImage from "@/assets/shpudey-miki-grill-hero.jpg";

const phoneDisplay = "050-824-9977";
const phoneLink = "tel:0508249977";
const whatsappLink = "https://wa.me/972508249977?text=%D7%A9%D7%9C%D7%95%D7%9D%20%D7%A9%D7%99%D7%A4%D7%95%D7%93%D7%99%20%D7%9E%D7%99%D7%A7%D7%99%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%91%D7%A6%D7%A2%20%D7%94%D7%96%D7%9E%D7%A0%D7%94";
const mapsLink = "https://www.google.com/maps/search/?api=1&query=%D7%94%D7%A9%D7%A7%D7%9E%D7%99%D7%9D%208%2C%20%D7%90%D7%95%D7%A8%20%D7%A2%D7%A7%D7%99%D7%91%D7%90";

const starters = [
  ["סיגר בשר", "30"],
  ["פיסטריות", "30"],
  ["חציל בטחינה", "10"],
  ["חומוס", "10"],
  ["צ'יפס", "10"],
] as const;

const plates40 = [
  "קציצות (3 יח')",
  "פרגית",
  "לבבות",
  "מרגז חריף",
  "קבב כבש",
  "כבד עוף",
  "חזה עוף",
  "טחול",
] as const;

const plates45 = ["מולארד", "נתח קצבים", "שיפוד אנטריקוט"] as const;

const specialPlates = [
  ["כנפיים", "50"],
  ["שיפוד אשכים", "50"],
  ["שיפוד שקדים", "60"],
  ["שיפוד כבד אווז", "60"],
  ["סטייק אנטריקוט", "100"],
  ["צלעות כבש (3 יח')", "150"],
  ["פילה בקר", "120"],
] as const;

const softDrinks = [
  "קוקה קולה",
  "קוקה קולה זירו",
  "ענבים",
  "פאנטה",
  "ספרייט",
  "ספרייט זירו",
  "תפוזים",
  "תות בננה",
  "לימונענע",
  "נסטי",
  "תפוחים",
] as const;

const beers = [
  ["הייניקן", "15"],
  ["קורונה", "15"],
  ["ויינשטפן", "20"],
] as const;

const shots = [
  ["שוט ערק", "25"],
  ["שוט אסאיי", "25"],
  ["שוט בלאק", "25"],
] as const;

const alcohol = [
  ["כוס ג'ין אדום", "40"],
  ["בקבוק ג'ין אדום", "160"],
  ["כוס ערק", "45"],
  ["כוס אסאיי", "45"],
  ["כוס בלאק", "45"],
] as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "שיפודי מיקי | גריל ישראלי באור עקיבא" },
      { name: "description", content: "שיפודי מיקי באור עקיבא — שיפודים, בשרים על האש ומנות פתיחה. הזמנות בטלפון וב-WhatsApp." },
      { property: "og:title", content: "שיפודי מיקי | אור עקיבא" },
      { property: "og:description", content: "בשר על האש ושיפודים בהשקמים 8, אור עקיבא." },
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

function NameList({ names }: { names: ReadonlyArray<string> }) {
  return (
    <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5 sm:grid-cols-3">
      {names.map((name) => (
        <li key={name} className="text-sm font-medium text-smoke/90">{name}</li>
      ))}
    </ul>
  );
}

function RestaurantPage() {
  return (
    <main dir="rtl" className="min-h-screen overflow-x-hidden bg-coal text-smoke">
      <section className="relative overflow-hidden bg-char">

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
              <p className="mt-5 max-w-[42ch] text-lg leading-8 text-ash sm:text-xl">שיפודים עסיסיים, בשר על האש ומנות פתיחה — חם מהגריל ובלי קיצורי דרך.</p>
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
            <div className="space-y-14">
              <div>
                <h3 className="mb-6 text-xl font-bold text-ember">מנות פתיחה</h3>
                <MenuList items={starters} />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-ember">שיפוד בצלחת · מנה 40 ₪</h3>
                <p className="mb-6 text-sm text-ash">למחירי 3 שיפודים ומעלה מוגש סלט הבית לפי סועד</p>
                <NameList names={plates40} />
              </div>
              <div>
                <h3 className="mb-6 text-xl font-bold text-ember">שיפוד בצלחת · מנה 45 ₪</h3>
                <NameList names={plates45} />
              </div>
              <div>
                <h3 className="mb-6 text-xl font-bold text-ember">שיפוד בצלחת · מנות מיוחדות</h3>
                <MenuList items={specialPlates} />
              </div>
              <div className="rounded-2xl border border-ember/25 bg-ember/10 p-6">
                <div className="flex items-baseline gap-2">
                  <h3 className="shrink-0 text-xl font-bold text-ember">משפחתי</h3>
                  <span className="min-w-4 flex-1 translate-y-[-4px] border-b border-dotted border-ash/30" />
                  <span className="shrink-0 text-xl font-bold tabular-nums text-smoke">100 ₪</span>
                </div>
                <p className="mt-2 text-sm leading-6 text-ash">3 שיפודים, מוגש לצד: סלט הבית, צ'יפס ולחם</p>
              </div>
            </div>

            <div className="space-y-14">
              <div>
                <h3 className="mb-2 text-xl font-bold text-herb">שתייה קלה</h3>
                <p className="mb-6 text-sm text-ash">פחית 10 ₪ · זכוכית 12 ₪</p>
                <NameList names={softDrinks} />
              </div>
              <div>
                <h3 className="mb-6 text-xl font-bold text-herb">בירה</h3>
                <MenuList items={beers} />
              </div>
              <div>
                <h3 className="mb-6 text-xl font-bold text-herb">בקטנה</h3>
                <MenuList items={shots} />
              </div>
              <div>
                <h3 className="mb-6 text-xl font-bold text-herb">אלכוהול</h3>
                <MenuList items={alcohol} />
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
                <p className="flex items-start gap-3"><MapPin className="mt-0.5 size-5 shrink-0 text-ember" /><span><strong className="block text-smoke">השקמים 8</strong>אור עקיבא</span></p>
                <p className="flex items-start gap-3"><Clock3 className="mt-0.5 size-5 shrink-0 text-ember" /><span><strong className="block text-smoke">ראשון–חמישי</strong><span dir="ltr" className="inline-block">11:00–23:00</span><br /><span className="text-sm">שישי ושבת: סגור כרגע</span></span></p>
                <a href={phoneLink} className="flex items-center gap-3 text-smoke transition-colors hover:text-ember"><Phone className="size-5 text-ember" />{phoneDisplay}</a>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={mapsLink} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-ember px-6 py-3 font-bold text-coal"><Navigation className="size-5" /> פתחו ניווט</a>
                <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-smoke/20 px-6 py-3 font-semibold text-smoke"><MessageCircle className="size-5" /> WhatsApp</a>
              </div>
            </div>
            <div className="md:col-span-7">
              <div className="grid min-h-80 content-between rounded-2xl border border-smoke/10 bg-coal p-7 sm:min-h-96 sm:p-10">
                <div className="flex items-center justify-between gap-4 text-sm text-ash">
                  <span>השקמים 8, אור עקיבא</span>
                  <MapPin className="size-5 shrink-0 text-ember" />
                </div>
                <p className="max-w-[11ch] text-5xl font-black leading-tight text-smoke sm:text-7xl">מחכים לכם ליד הגריל</p>
                <div className="flex items-center gap-3 text-sm text-ash"><span className="size-2 rounded-full bg-herb" /> ראשון–חמישי · <span dir="ltr" className="inline-block">11:00–23:00</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-smoke/10 bg-coal">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-5 py-8 text-sm text-ash sm:flex-row sm:items-center sm:px-8">
          <div className="flex items-center gap-2"><span className="grid size-7 place-items-center rounded bg-ember font-black text-coal">מ</span><span className="font-bold text-smoke">שיפודי מיקי · אור עקיבא</span></div>
          <p>גריל ישראלי · השקמים 8 · {phoneDisplay}</p>
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
