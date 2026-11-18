import Seo from "../components/Seo";
import GoogleReviewsSection from "../components/GoogleReviewsSection";
import { SITE, wa } from "../config";

/* ------------------------------------------------------------------ */
/*  Editable content                                                   */
/* ------------------------------------------------------------------ */

// Keep these in sync with your Google profile and the reviews section.
const GOOGLE = { rating: "4.9", count: 78 };

const TRUST = [
  { value: "5+ years", label: "Looking after homes and workplaces across Dubai" },
  { value: `${GOOGLE.rating} on Google`, label: `From ${GOOGLE.count} client reviews` },
  { value: "Trained teams", label: "Eco-friendly products, modern techniques" },
  { value: "Same-day slots", label: "Book directly on WhatsApp" },
];

const STANDARDS = [
  {
    title: "Trained teams",
    text: "Our people are trained to clean properly, not just quickly, so the result holds up on a close look.",
  },
  {
    title: "Eco-friendly products",
    text: "We choose eco-friendly products so your space feels fresh and healthy without harsh residue.",
  },
  {
    title: "Modern techniques",
    text: "The right method and equipment for each surface, from villa floors to office glass.",
  },
  {
    title: "Consistent results",
    text: "A clean space is the foundation of a productive, happy life. We aim for the same standard every time you book.",
  },
];

const SPACES = [
  {
    title: "Villas and homes",
    text: "Deep cleans, move-in and move-out, and regular care for apartments and villas.",
    image: "/images/slider/villa deep cleaning.jpeg",
    alt: "Villa deep cleaning in Dubai",
    service: "Villa",
    shape: "rounded-tl-[80px] rounded-tr-[24px] rounded-b-[24px]",
  },
  {
    title: "Offices",
    text: "Regular cleaning that keeps your team's workspace calm and professional.",
    image: "/images/slider/office%20cleaning.jpeg",
    alt: "Office cleaning team in Dubai",
    service: "Office",
    shape: "rounded-[24px]",
  },
  {
    title: "Commercial spaces",
    text: "Larger sites cleaned to a consistent standard, on a schedule that suits you.",
    image: "/images/slider/commercial%20cleaning.jpeg",
    alt: "Commercial cleaning in Dubai",
    service: "Commercial space",
    shape: "rounded-tl-[24px] rounded-tr-[80px] rounded-b-[24px]",
  },
];

/* ------------------------------------------------------------------ */

function WhatsAppIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.9L2 22l5.25-1.5A9.9 9.9 0 1 0 12.04 2Zm0 18.1c-1.5 0-2.9-.4-4.1-1.1l-.3-.2-3.1.9.9-3-.2-.3a8.1 8.1 0 1 1 6.8 3.7Zm4.5-6.1c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.56.12-.16.25-.64.8-.78.97-.14.16-.29.19-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.7-.14-.25-.02-.38.1-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.4-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.55c.12.16 1.73 2.64 4.2 3.7.59.26 1.05.41 1.4.52.59.19 1.13.16 1.55.1.47-.07 1.46-.6 1.66-1.17.2-.58.2-1.07.14-1.17-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
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
  );
}

export default function About() {
  return (
    <main className="overflow-x-clip">
      <Seo
        path="/about"
        title="About Us"
        description="Meet Just Clean Dubai: a trusted Dubai cleaning company with 5+ years of experience, trained teams and eco-friendly products."
      />

      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          @keyframes ab-rise { from { opacity: 0; transform: translateY(0.5em); } to { opacity: 1; transform: none; } }
          .ab-rise { animation: ab-rise .9s cubic-bezier(.2,.7,.2,1) both; }
          .ab-rise-2 { animation-delay: .12s; }
        }
      `}</style>

      {/* ================= HERO ================= */}
      <section className="relative overflow-x-clip bg-[#0F1A17] text-[#EDF0EA]">
        <svg
          className="pointer-events-none absolute -right-32 top-0 hidden h-[760px] w-[560px] text-[#8FA383]/10 lg:block"
          viewBox="0 0 400 600"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          aria-hidden="true"
        >
          <path d="M20 600V200a180 180 0 0 1 360 0v400" />
          <path d="M70 600V210a130 130 0 0 1 260 0v390" />
        </svg>

        <div className="container-x relative z-10 pb-10 pt-28 md:pb-0 md:pt-36">
          <nav aria-label="Breadcrumb" className="text-sm text-[#EDF0EA]/55">
            <ol className="flex items-center gap-2">
              <li>
                <a href="/" className="transition-colors hover:text-[#C9A45C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A45C]">
                  Home
                </a>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-[#EDF0EA]">About</li>
            </ol>
          </nav>

          <div className="mt-8 grid grid-cols-1 items-end gap-8 lg:grid-cols-12 lg:gap-10">
            <h1 className="min-w-0 font-display text-[clamp(2.6rem,7.4vw,6.4rem)] font-medium leading-[0.98] tracking-[-0.035em] lg:col-span-8">
              <span className="ab-rise block">Cleaner spaces.</span>
              <span className="ab-rise ab-rise-2 block text-[#C9D6BF]">Calmer lives.</span>
            </h1>

            <div className="min-w-0 lg:col-span-4 lg:pb-3">
              <p className="text-base leading-7 text-[#EDF0EA]/70 md:text-lg md:leading-8">
                Just Clean Dubai turns homes, villas and offices into healthy, beautiful spaces.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={wa("Hi Just Clean, I'd like a quote.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#EDF0EA] py-1.5 pl-5 pr-1.5 text-sm font-semibold text-[#0F1A17] transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A45C]"
                >
                  Get a quote
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white transition-transform duration-300 group-hover:scale-105">
                    <WhatsAppIcon />
                  </span>
                </a>
                <a
                  href={`tel:${SITE.phone}`}
                  className="inline-flex items-center gap-2 rounded-full border border-[#EDF0EA]/20 px-4 py-3 text-sm font-medium transition-colors hover:border-[#C9A45C] hover:text-[#C9A45C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A45C]"
                >
                  <PhoneIcon />
                  {SITE.phoneLabel}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Wide banner */}
        <div className="container-x relative z-10 mt-10 md:mt-14">
          <div className="relative aspect-[4/3] overflow-hidden rounded-t-[28px] bg-[#1B2A25] sm:aspect-[16/9] md:rounded-t-[40px] lg:aspect-[21/9]">
            <img
              src="/images/slider/villa deep cleaning.jpeg"
              alt="Just Clean Dubai team at work"
              width="1600"
              height="700"
              fetchPriority="high"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F1A17]/50 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* ================= TRUST BAR ================= */}
      <section className="relative bg-[#EDF0EA] text-[#0F1A17]">
        <div className="container-x">
          <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-b-[24px] bg-[#0F1A17]/10 sm:grid-cols-2 lg:grid-cols-4 md:rounded-b-[32px]">
            {TRUST.map((t) => (
              <li key={t.value} className="min-w-0 bg-white px-5 py-5 sm:px-6 sm:py-6">
                <p className="font-display text-xl tracking-tight sm:text-2xl">{t.value}</p>
                <p className="mt-1 text-sm leading-6 text-[#0F1A17]/60">{t.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ================= STORY ================= */}
      <section className="bg-[#EDF0EA] py-16 text-[#0F1A17] md:py-28">
        <div className="container-x grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="min-w-0 lg:col-span-5">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-t-[999px] rounded-b-[24px] bg-[#1B2A25] lg:mx-0 lg:max-w-none">
              <img
                src="/images/slider/regular%20office%20cleaning.jpeg"
                alt="Our cleaning team at work"
                width="800"
                height="1000"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="min-w-0 lg:col-span-7">
            <h2 className="font-display text-[clamp(1.9rem,4.4vw,3.6rem)] font-medium leading-[1.04] tracking-[-0.03em]">
              More than a cleaning service, a partner for healthy spaces.
            </h2>
            <div className="mt-6 max-w-[38rem] space-y-5 text-base leading-8 text-[#0F1A17]/70 md:mt-8 md:text-lg">
              <p>
                With over 5 years in the cleaning industry, Just Clean Dubai has been looking after homes and
                workplaces across the city.
              </p>
              <p>
                Our trained team uses eco-friendly products and modern techniques to deliver consistent results,
                because a clean space is the foundation of a productive, happy life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STANDARDS ================= */}
      <section className="bg-[#0F1A17] py-16 text-[#EDF0EA] md:py-28">
        <div className="container-x grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="min-w-0 lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <h2 className="font-display text-[clamp(1.9rem,4.4vw,3.6rem)] font-medium leading-[1.04] tracking-[-0.03em]">
                Four things we never compromise on.
              </h2>
              <p className="mt-5 max-w-md text-base leading-7 text-[#EDF0EA]/65 md:text-lg">
                Whatever the size of the space, these are the standards behind every booking.
              </p>
            </div>
          </div>

          <ul className="min-w-0 divide-y divide-[#EDF0EA]/15 border-y border-[#EDF0EA]/15 lg:col-span-7">
            {STANDARDS.map((s) => (
              <li key={s.title} className="flex gap-4 py-6 sm:gap-6 sm:py-8">
                <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#C9A45C]" aria-hidden="true" />
                <div className="min-w-0">
                  <h3 className="font-display text-xl tracking-tight sm:text-2xl md:text-3xl">{s.title}</h3>
                  <p className="mt-2 max-w-xl text-[15px] leading-7 text-[#EDF0EA]/65 md:text-base md:leading-8">
                    {s.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ================= SPACES ================= */}
      <section className="bg-[#EDF0EA] py-16 text-[#0F1A17] md:py-28">
        <div className="container-x">
          <div className="max-w-2xl">
            <h2 className="font-display text-[clamp(1.9rem,4.4vw,3.6rem)] font-medium leading-[1.04] tracking-[-0.03em]">
              Spaces we look after across Dubai.
            </h2>
            <p className="mt-4 text-base leading-7 text-[#0F1A17]/65 md:text-lg">
              Tell us what needs cleaning and we will reply on WhatsApp with a quote.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 md:mt-14 md:grid-cols-3 md:gap-5">
            {SPACES.map((s) => (
              <article
                key={s.title}
                className={`relative min-w-0 overflow-hidden bg-[#1B2A25] ${s.shape}`}
              >
                <div className="relative aspect-[4/5] sm:aspect-[16/10] md:aspect-[3/4]">
                  <img
                    src={s.image}
                    alt={s.alt}
                    width="800"
                    height="1000"
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1A17]/90 via-[#0F1A17]/30 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-5 text-[#EDF0EA] sm:p-6">
                    <h3 className="font-display text-2xl tracking-tight">{s.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#EDF0EA]/75">{s.text}</p>
                    <a
                      href={wa(`Hi Just Clean, I'd like a quote for ${s.service.toLowerCase()} cleaning.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#EDF0EA] py-2 pl-4 pr-2 text-sm font-semibold text-[#0F1A17] transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A45C]"
                    >
                      Ask about {s.service.toLowerCase()}
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#25D366] text-white">
                        <WhatsAppIcon className="h-4 w-4" />
                      </span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= REVIEWS ================= */}
      <GoogleReviewsSection />

      {/* ================= CTA ================= */}
      <section className="relative overflow-x-clip bg-[#0F1A17] py-16 text-[#EDF0EA] md:py-28">
        <svg
          className="pointer-events-none absolute -right-24 bottom-0 hidden h-[520px] w-[380px] text-[#8FA383]/10 md:block"
          viewBox="0 0 400 600"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          aria-hidden="true"
        >
          <path d="M20 600V200a180 180 0 0 1 360 0v400" />
          <path d="M70 600V210a130 130 0 0 1 260 0v390" />
        </svg>

        <div className="container-x relative z-10">
          <div className="max-w-3xl">
            <h2 className="font-display text-[clamp(2.2rem,5.6vw,4.8rem)] font-medium leading-[1] tracking-[-0.035em]">
              Ready for a cleaner, calmer space?
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#EDF0EA]/70 md:text-lg">
              Message us your area and property size. We reply on WhatsApp with a clear quote.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={wa("Hi Just Clean, I'd like a quote.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-between gap-4 rounded-full bg-[#EDF0EA] py-1.5 pl-6 pr-1.5 text-sm font-semibold text-[#0F1A17] transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A45C] sm:justify-start"
              >
                Get a quote on WhatsApp
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white transition-transform duration-300 group-hover:scale-105">
                  <WhatsAppIcon />
                </span>
              </a>
              <a
                href={`tel:${SITE.phone}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#EDF0EA]/20 px-6 py-3.5 text-sm font-medium transition-colors hover:border-[#C9A45C] hover:text-[#C9A45C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A45C]"
              >
                <PhoneIcon />
                Call {SITE.phoneLabel}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}