import { useMemo, useRef, useState } from "react";
import { SITE, wa } from "../config";

/* ------------------------------------------------------------------ */
/*  Editable content: change these without touching the layout         */
/* ------------------------------------------------------------------ */

const SERVICES = [
  "Apartment",
  "Villa",
  "Deep clean",
  "Move-in / move-out",
  "Office",
];

const AREAS = [
  "Dubai Marina",
  "JLT",
  "Downtown",
  "Business Bay",
  "Palm Jumeirah",
  "JVC",
  "Dubai Hills",
  "Arabian Ranches",
  "Al Barsha",
  "Mirdif",
  "Other area",
];

const SIZES = ["Studio", "1 bed", "2 bed", "3 bed", "4+ bed / villa", "Office"];
const WHEN = ["Today", "Tomorrow", "This week", "Weekend", "Not sure yet"];

// Verify each line is true for your business before publishing.
const PROMISES = [
  { title: "Fixed quote first", text: "You know the price before we arrive." },
  { title: "Evenings and weekends", text: "Cleaning that fits Dubai working hours." },
  { title: "Arabic and English", text: "Speak to us in the language you prefer." },
];

// Gallery images. Desktop mosaic uses the first 4 (in this order:
// large arch, top-right, bottom-right, wide strip).
// Mobile carousel shows ALL of them, so you can append more here.
const GALLERY = [
  {
    src: "/images/slider/villa deep cleaning.jpeg",
    alt: "Professional villa deep cleaning in Dubai",
    label: "Villa deep clean",
  },
  {
    src: "/images/slider/commercial%20cleaning.jpeg",
    alt: "Commercial cleaning service in Dubai",
    label: "Commercial spaces",
  },
  {
    src: "/images/slider/regular%20office%20cleaning.jpeg",
    alt: "Regular office cleaning",
    label: "Regular office care",
  },
  {
    src: "/images/slider/office%20cleaning.jpeg",
    alt: "Office cleaning team at work",
    label: "Office teams",
  },
];

// Corner shapes for the mobile carousel cards (repeats if you add more images)
const MOBILE_SHAPES = [
  "rounded-t-[999px] rounded-b-[22px]",
  "rounded-tl-[22px] rounded-tr-[80px] rounded-b-[22px]",
  "rounded-tl-[80px] rounded-tr-[22px] rounded-b-[22px]",
  "rounded-[22px]",
];

/* ------------------------------------------------------------------ */

function WhatsAppIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.9L2 22l5.25-1.5A9.9 9.9 0 1 0 12.04 2Zm0 18.1c-1.5 0-2.9-.4-4.1-1.1l-.3-.2-3.1.9.9-3-.2-.3a8.1 8.1 0 1 1 6.8 3.7Zm4.5-6.1c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.56.12-.16.25-.64.8-.78.97-.14.16-.29.19-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.7-.14-.25-.02-.38.1-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.4-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.55c.12.16 1.73 2.64 4.2 3.7.59.26 1.05.41 1.4.52.59.19 1.13.16 1.55.1.47-.07 1.46-.6 1.66-1.17.2-.58.2-1.07.14-1.17-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  );
}

function Caption({ children, className = "" }) {
  return (
    <span
      className={`absolute left-3 rounded-full bg-[#0F1A17]/55 px-3 py-1 text-xs font-medium text-[#EDF0EA] backdrop-blur-sm ${className}`}
    >
      {children}
    </span>
  );
}

function Field({ label, value, onChange, options, id, className = "" }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-xs font-medium text-[#0F1A17]/60">
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none rounded-xl border border-[#0F1A17]/15 bg-white py-3 pl-4 pr-10 text-sm font-medium text-[#0F1A17] transition-colors hover:border-[#5E7254] focus-visible:border-[#5E7254] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5E7254]"
        >
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <svg
          viewBox="0 0 24 24"
          className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0F1A17]/50"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
    </div>
  );
}

/* Mobile + tablet: swipeable gallery, shown first on small screens */
function MobileGallery({ items }) {
  const scroller = useRef(null);
  const [active, setActive] = useState(0);

  const onScroll = () => {
    const el = scroller.current;
    const card = el && el.firstElementChild;
    if (!card) return;
    const step = card.offsetWidth + 12;
    const i = Math.round(el.scrollLeft / step);
    setActive(Math.min(items.length - 1, Math.max(0, i)));
  };

  const goTo = (i) => {
    const card = scroller.current && scroller.current.children[i];
    if (card) card.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  };

  return (
    <div className="lg:hidden">
      <div
        ref={scroller}
        onScroll={onScroll}
        className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-label="Photos of our cleaning work"
      >
        {items.map((img, i) => (
          <figure
            key={img.src}
            className={`${i === 0 ? "jc-arch" : ""} relative aspect-[4/5] w-[80%] shrink-0 snap-start overflow-hidden bg-[#1B2A25] sm:w-[46%] ${
              MOBILE_SHAPES[i % MOBILE_SHAPES.length]
            }`}
          >
            <img
              src={img.src}
              alt={img.alt}
              width="800"
              height="1000"
              loading={i === 0 ? "eager" : "lazy"}
              fetchPriority={i === 0 ? "high" : undefined}
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F1A17]/60 via-transparent to-transparent" />
            <Caption className="bottom-3">{img.label}</Caption>
          </figure>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-1.5" role="group" aria-label="Choose photo">
        {items.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Show photo ${i + 1}: ${img.label}`}
            aria-current={i === active}
            className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A45C] ${
              i === active ? "w-8 bg-[#C9A45C]" : "w-1.5 bg-[#EDF0EA]/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* Desktop: editorial mosaic. Arch + two stacked tiles + wide strip */
function DesktopGallery({ items }) {
  const [a, b, c, d] = items;
  return (
    <div className="hidden h-full min-h-[680px] grid-cols-6 grid-rows-8 gap-3 lg:grid">
      <figure className="jc-arch relative col-[1/5] row-[1/7] overflow-hidden rounded-t-[999px] rounded-b-[22px] bg-[#1B2A25]">
        <img
          src={a.src}
          alt={a.alt}
          width="900"
          height="1200"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1A17]/60 via-transparent to-transparent" />
        <Caption className="bottom-4 left-1/2 -translate-x-1/2">{a.label}</Caption>
      </figure>

      <figure className="relative col-[5/7] row-[1/4] overflow-hidden rounded-tl-[22px] rounded-tr-[80px] rounded-b-[22px] bg-[#1B2A25]">
        <img
          src={b.src}
          alt={b.alt}
          width="500"
          height="600"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1A17]/55 via-transparent to-transparent" />
        <Caption className="bottom-3">{b.label}</Caption>
      </figure>

      <figure className="relative col-[5/7] row-[4/7] overflow-hidden rounded-[22px] bg-[#1B2A25]">
        <img
          src={c.src}
          alt={c.alt}
          width="500"
          height="600"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1A17]/55 via-transparent to-transparent" />
        <Caption className="bottom-3">{c.label}</Caption>
      </figure>

      <figure className="relative col-[1/7] row-[7/9] overflow-hidden rounded-[22px] bg-[#1B2A25]">
        <img
          src={d.src}
          alt={d.alt}
          width="1000"
          height="300"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1A17]/80 via-[#0F1A17]/30 to-transparent" />
        <Caption className="bottom-3">{d.label}</Caption>
        <a
          href={wa("Hi Just Clean, I have a question.")}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center gap-3 rounded-2xl bg-[#EDF0EA] py-2.5 pl-2.5 pr-5 text-[#0F1A17] shadow-xl transition-transform hover:-translate-y-[55%] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A45C]"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white">
            <WhatsAppIcon />
          </span>
          <span className="text-left">
            <span className="block text-sm font-semibold leading-tight">Questions first?</span>
            <span className="block text-xs text-[#0F1A17]/60">Chat with our team</span>
          </span>
        </a>
      </figure>
    </div>
  );
}

export default function HeroSection() {
  const [service, setService] = useState(SERVICES[0]);
  const [area, setArea] = useState(AREAS[0]);
  const [size, setSize] = useState(SIZES[1]);
  const [when, setWhen] = useState(WHEN[1]);

  // Pre-filled WhatsApp message built from the visitor's choices.
  // Make sure wa() accepts an optional text argument.
  const href = useMemo(() => {
    const msg = [
      "Hi Just Clean, I'd like a quote.",
      `Service: ${service}`,
      `Area: ${area}`,
      `Size: ${size}`,
      `When: ${when}`,
    ].join("\n");
    return wa(msg);
  }, [service, area, size, when]);

  return (
    <section className="relative overflow-hidden bg-[#0F1A17] text-[#EDF0EA]">
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          @keyframes jc-rise { from { opacity: 0; transform: translateY(0.5em); } to { opacity: 1; transform: none; } }
          @keyframes jc-arch { from { clip-path: inset(100% 0 0 0); } to { clip-path: inset(0 0 0 0); } }
          .jc-rise { animation: jc-rise .9s cubic-bezier(.2,.7,.2,1) both; }
          .jc-rise-2 { animation-delay: .12s; }
          .jc-arch { animation: jc-arch 1.3s cubic-bezier(.65,0,.2,1) both; }
        }
      `}</style>

      {/* Quiet architectural arch outlines, a nod to Gulf doorways */}
      <svg
        className="pointer-events-none absolute -right-40 top-10 hidden h-[900px] w-[640px] text-[#8FA383]/10 lg:block"
        viewBox="0 0 400 600"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        aria-hidden="true"
      >
        <path d="M20 600V200a180 180 0 0 1 360 0v400" />
        <path d="M70 600V210a130 130 0 0 1 260 0v390" />
      </svg>

      <div className="container-x relative z-10 pt-24 md:pt-32">
        {/* Top bar */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#C9A45C]" />
            <span className="font-display text-lg tracking-tight">Just Clean Dubai</span>
          </div>

          <a
            href={`tel:${SITE.phone}`}
            aria-label="Call us"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#EDF0EA]/20 px-3 py-2 text-sm font-medium transition-colors hover:border-[#C9A45C] hover:text-[#C9A45C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A45C] sm:px-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.19 18a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.09 3.18 2 2 0 0 1 4.08 1h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.06 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.58 2.8.7a2 2 0 0 1 1.76 2.03z" />
            </svg>
            <span className="hidden sm:inline">{SITE.phoneLabel}</span>
          </a>
        </div>

        <div className="mt-8 grid gap-10 md:mt-10 lg:mt-16 lg:grid-cols-12 lg:gap-10">
          {/* ---------------- GALLERY: first on mobile, right on desktop ---------------- */}
          <div className="order-first lg:order-none lg:col-span-5">
            <MobileGallery items={GALLERY} />
            <DesktopGallery items={GALLERY} />
          </div>

          {/* ---------------- Promise + quote builder ---------------- */}
          <div className="lg:col-span-7 lg:row-start-1">
            <h1 className="font-display text-[clamp(2.3rem,6.4vw,5.6rem)] font-medium leading-[0.98] tracking-[-0.035em]">
              <span className="jc-rise block">Come home to a</span>
              <span className="jc-rise jc-rise-2 block text-[#C9D6BF]">
                spotless Dubai.
              </span>
            </h1>

            <p className="mt-5 max-w-[34rem] text-base leading-7 text-[#EDF0EA]/70 md:text-lg md:leading-8">
              Apartments, villas and offices across Dubai, cleaned by trained,
              uniformed teams who bring their own equipment and materials.
            </p>

            {/* Quote builder */}
            <div className="mt-8 rounded-[22px] bg-[#EDF0EA] p-4 text-[#0F1A17] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] sm:p-5 md:mt-9 md:rounded-[28px] md:p-7">
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="font-display text-lg sm:text-xl md:text-2xl">Get your quote on WhatsApp</h2>
                <span className="hidden text-xs text-[#0F1A17]/55 sm:block">
                  Takes about 30 seconds
                </span>
              </div>

              <fieldset className="mt-5">
                <legend className="mb-2 text-xs font-medium text-[#0F1A17]/60">
                  What needs cleaning?
                </legend>
                <div className="flex flex-wrap gap-2">
                  {SERVICES.map((s) => {
                    const isActive = s === service;
                    return (
                      <label key={s} className="cursor-pointer">
                        <input
                          type="radio"
                          name="service"
                          value={s}
                          checked={isActive}
                          onChange={() => setService(s)}
                          className="peer sr-only"
                        />
                        <span
                          className={`block rounded-full border px-3.5 py-2 text-[13px] font-medium transition-colors sm:px-4 sm:text-sm peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[#5E7254] ${
                            isActive
                              ? "border-[#0F1A17] bg-[#0F1A17] text-[#EDF0EA]"
                              : "border-[#0F1A17]/15 bg-white hover:border-[#5E7254]"
                          }`}
                        >
                          {s}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>

              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
                <Field
                  id="jc-area"
                  label="Where in Dubai?"
                  value={area}
                  onChange={setArea}
                  options={AREAS}
                  className="col-span-2 sm:col-span-1"
                />
                <Field id="jc-size" label="Property size" value={size} onChange={setSize} options={SIZES} />
                <Field id="jc-when" label="When?" value={when} onChange={setWhen} options={WHEN} />
              </div>

              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-5 flex w-full items-center justify-between gap-3 rounded-full bg-[#0F1A17] py-1.5 pl-5 pr-1.5 text-sm font-semibold text-[#EDF0EA] transition-colors hover:bg-[#2F4A38] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F1A17] sm:mt-6 sm:gap-4 sm:py-2 sm:pl-6 sm:pr-2"
              >
                <span className="min-w-0 truncate">
                  <span className="sm:hidden">Send on WhatsApp</span>
                  <span className="hidden sm:inline">
                    Send request: {service}, {area}
                  </span>
                </span>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white transition-transform duration-300 group-hover:scale-105">
                  <WhatsAppIcon />
                </span>
              </a>
            </div>

            {/* Promises */}
            <ul className="mt-8 grid gap-5 sm:grid-cols-3">
              {PROMISES.map((p) => (
                <li key={p.title} className="border-l-2 border-[#C9A45C]/60 pl-4">
                  <p className="text-sm font-semibold">{p.title}</p>
                  <p className="mt-1 text-sm leading-6 text-[#EDF0EA]/60">{p.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ---------------- Areas strip: tapping one pre-fills the form ---------------- */}
      <div className="container-x relative z-10 mt-14 pb-10 md:mt-24 md:pb-12">
        <div className="border-t border-[#EDF0EA]/15 pt-6">
          <p className="mb-3 text-sm text-[#EDF0EA]/55">We clean across Dubai. Tap your area to start.</p>
          <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-2 sm:flex-wrap sm:overflow-visible sm:pb-0">
            {AREAS.filter((a) => a !== "Other area").map((a) => {
              const isActive = a === area;
              return (
                <button
                  key={a}
                  type="button"
                  onClick={() => setArea(a)}
                  aria-pressed={isActive}
                  className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-1.5 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A45C] ${
                    isActive
                      ? "border-[#C9A45C] bg-[#C9A45C] font-semibold text-[#0F1A17]"
                      : "border-[#EDF0EA]/20 text-[#EDF0EA]/80 hover:border-[#C9A45C] hover:text-[#C9A45C]"
                  }`}
                >
                  {a}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}