import { useState } from "react";
import Seo from "../components/Seo";
import GoogleReviewsSection from "../components/GoogleReviewsSection";
import { SITE, wa } from "../config";

/* ------------------------------------------------------------------ */
/*  Editable content                                                   */
/* ------------------------------------------------------------------ */

const SERVICES = [
  "Villa Cleaning",
  "Deep Cleaning",
  "Move In/Out Cleaning",
  "Window Cleaning",
  "AC Cleaning",
  "Office Cleaning",
  "Other",
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
  "Al Quoz",
  "Other area",
];

const WHEN = ["Today", "Tomorrow", "This week", "Weekend", "Not sure yet"];

const MAP_QUERY = "Al+Quoz+Industrial+Area+3+Dubai";

/* ------------------------------------------------------------------ */

const inputClass =
  "mt-2 w-full rounded-xl border border-[#0F1A17]/15 bg-white px-4 py-3.5 text-base text-[#0F1A17] outline-none transition-colors placeholder:text-[#0F1A17]/35 hover:border-[#5E7254] focus:border-[#5E7254] focus:ring-2 focus:ring-[#5E7254]/25";

function WhatsAppIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.9L2 22l5.25-1.5A9.9 9.9 0 1 0 12.04 2Zm0 18.1c-1.5 0-2.9-.4-4.1-1.1l-.3-.2-3.1.9.9-3-.2-.3a8.1 8.1 0 1 1 6.8 3.7Zm4.5-6.1c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.56.12-.16.25-.64.8-.78.97-.14.16-.29.19-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.7-.14-.25-.02-.38.1-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.4-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.55c.12.16 1.73 2.64 4.2 3.7.59.26 1.05.41 1.4.52.59.19 1.13.16 1.55.1.47-.07 1.46-.6 1.66-1.17.2-.58.2-1.07.14-1.17-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  );
}

function Icon({ children }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[18px] w-[18px]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function DetailRow({ icon, label, children }) {
  return (
    <div className="flex gap-4">
      <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EDF0EA]/10 text-[#C9A45C]">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-sm text-[#EDF0EA]/55">{label}</p>
        <div className="mt-0.5 break-words text-[15px] leading-6 text-[#EDF0EA]">{children}</div>
      </div>
    </div>
  );
}

export default function Contact() {
  const [d, setD] = useState({
    name: "",
    phone: "",
    service: "",
    area: "",
    when: "",
    message: "",
  });
  const [openedHref, setOpenedHref] = useState("");

  const set = (e) => setD({ ...d, [e.target.name]: e.target.value });

  const buildMessage = () =>
    [
      `Hi! I'm ${d.name}.`,
      d.service && `Service: ${d.service}`,
      d.area && `Area: ${d.area}`,
      d.when && `When: ${d.when}`,
      `Phone: ${d.phone}`,
      d.message && `\n${d.message}`,
    ]
      .filter(Boolean)
      .join("\n");

  const submit = (e) => {
    e.preventDefault();
    const href = wa(buildMessage());
    window.open(href, "_blank", "noopener");
    // Fallback link in case the browser blocked the new tab
    setOpenedHref(href);
  };

  return (
    <main className="overflow-x-clip">
      <Seo
        path="/contact"
        title="Contact & Free Quote"
        description="Get a free cleaning quote in Dubai. Message Just Clean Dubai on WhatsApp, call +971 55 794 0881 or visit us in Al Quoz."
      />

      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          @keyframes ct-rise { from { opacity: 0; transform: translateY(0.5em); } to { opacity: 1; transform: none; } }
          .ct-rise { animation: ct-rise .9s cubic-bezier(.2,.7,.2,1) both; }
          .ct-rise-2 { animation-delay: .12s; }
        }
      `}</style>

      {/* ================= HERO ================= */}
      <section className="relative overflow-x-clip bg-[#0F1A17] text-[#EDF0EA]">
        <svg
          className="pointer-events-none absolute -right-32 top-0 hidden h-[640px] w-[480px] text-[#8FA383]/10 lg:block"
          viewBox="0 0 400 600"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          aria-hidden="true"
        >
          <path d="M20 600V200a180 180 0 0 1 360 0v400" />
          <path d="M70 600V210a130 130 0 0 1 260 0v390" />
        </svg>

        <div className="container-x relative z-10 pb-14 pt-28 md:pb-20 md:pt-36">
          <nav aria-label="Breadcrumb" className="text-sm text-[#EDF0EA]/55">
            <ol className="flex items-center gap-2">
              <li>
                <a
                  href="/"
                  className="transition-colors hover:text-[#C9A45C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A45C]"
                >
                  Home
                </a>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-[#EDF0EA]">
                Contact
              </li>
            </ol>
          </nav>

          <h1 className="mt-8 font-display text-[clamp(2.4rem,7vw,5.8rem)] font-medium leading-[0.98] tracking-[-0.035em]">
            <span className="ct-rise block">Let&rsquo;s get your space</span>
            <span className="ct-rise ct-rise-2 block text-[#C9D6BF]">sparkling.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-[#EDF0EA]/70 md:text-lg md:leading-8">
            Send your details and we&rsquo;ll continue the conversation on WhatsApp.
          </p>
        </div>
      </section>

      {/* ================= FORM + DETAILS ================= */}
      <section className="relative bg-[#EDF0EA] py-12 text-[#0F1A17] md:py-24">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
            {/* ---------- Form ---------- */}
            <form
              onSubmit={submit}
              className="min-w-0 rounded-[22px] bg-white p-5 shadow-[0_30px_80px_-40px_rgba(15,26,23,0.5)] sm:p-8 md:rounded-[28px] md:p-10 lg:col-span-7"
            >
              <h2 className="font-display text-2xl tracking-tight sm:text-3xl">Tell us what you need</h2>
              <p className="mt-2 text-sm leading-6 text-[#0F1A17]/60">
                Takes about a minute. Your message opens in WhatsApp, ready to send.
              </p>

              <fieldset className="mt-7">
                <legend className="text-sm font-medium">What needs cleaning?</legend>
                <div className="mt-3 flex flex-wrap gap-2">
                  {SERVICES.map((s) => {
                    const active = d.service === s;
                    return (
                      <label key={s} className="cursor-pointer">
                        <input
                          type="radio"
                          name="service"
                          value={s}
                          checked={active}
                          onChange={set}
                          className="peer sr-only"
                        />
                        <span
                          className={`block rounded-full border px-3.5 py-2 text-[13px] font-medium transition-colors sm:px-4 sm:text-sm peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[#5E7254] ${
                            active
                              ? "border-[#0F1A17] bg-[#0F1A17] text-[#EDF0EA]"
                              : "border-[#0F1A17]/15 bg-[#EDF0EA]/50 hover:border-[#5E7254]"
                          }`}
                        >
                          {s}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>

              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="ct-name" className="text-sm font-medium">
                    Full name
                  </label>
                  <input
                    id="ct-name"
                    className={inputClass}
                    name="name"
                    required
                    autoComplete="name"
                    value={d.name}
                    onChange={set}
                  />
                </div>
                <div>
                  <label htmlFor="ct-phone" className="text-sm font-medium">
                    Phone
                  </label>
                  <input
                    id="ct-phone"
                    className={inputClass}
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    inputMode="tel"
                    value={d.phone}
                    onChange={set}
                    placeholder="+971 5X XXX XXXX"
                  />
                </div>
                <div>
                  <label htmlFor="ct-area" className="text-sm font-medium">
                    Area in Dubai
                  </label>
                  <select id="ct-area" className={inputClass} name="area" value={d.area} onChange={set}>
                    <option value="">Select your area</option>
                    {AREAS.map((a) => (
                      <option key={a} value={a}>
                        {a}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="ct-when" className="text-sm font-medium">
                    When do you need us?
                  </label>
                  <select id="ct-when" className={inputClass} name="when" value={d.when} onChange={set}>
                    <option value="">Select a time</option>
                    {WHEN.map((w) => (
                      <option key={w} value={w}>
                        {w}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="ct-message" className="text-sm font-medium">
                  Property details
                </label>
                <textarea
                  id="ct-message"
                  className={inputClass}
                  name="message"
                  rows="4"
                  value={d.message}
                  onChange={set}
                  placeholder="Property type, size, preferred date…"
                />
              </div>

              <button
                type="submit"
                className="group mt-6 flex w-full items-center justify-between gap-3 rounded-full bg-[#0F1A17] py-1.5 pl-6 pr-1.5 text-sm font-semibold text-[#EDF0EA] transition-colors hover:bg-[#2F4A38] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F1A17] sm:py-2"
              >
                Continue on WhatsApp
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white transition-transform duration-300 group-hover:scale-105">
                  <WhatsAppIcon />
                </span>
              </button>

              {openedHref && (
                <p className="mt-4 text-sm leading-6 text-[#0F1A17]/65" role="status">
                  WhatsApp should have opened in a new tab. If it didn&rsquo;t,{" "}
                  <a
                    href={openedHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#2F4A38] underline underline-offset-4"
                  >
                    tap here to open it
                  </a>
                  .
                </p>
              )}
            </form>

            {/* ---------- Details + map ---------- */}
            <div className="min-w-0 space-y-6 lg:col-span-5 lg:self-start">
              <address className="space-y-6 rounded-[22px] bg-[#0F1A17] p-5 not-italic text-[#EDF0EA] sm:p-8 md:rounded-[28px]">
                <h2 className="font-display text-2xl tracking-tight sm:text-3xl">Prefer to talk?</h2>

                <a
                  href={wa("Hi Just Clean, I'd like a quote.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-3 rounded-full bg-[#EDF0EA] py-1.5 pl-5 pr-1.5 text-sm font-semibold text-[#0F1A17] transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A45C]"
                >
                  Message us on WhatsApp
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white transition-transform duration-300 group-hover:scale-105">
                    <WhatsAppIcon />
                  </span>
                </a>

                <div className="space-y-5 border-t border-[#EDF0EA]/15 pt-6">
                  <DetailRow
                    label="Phone"
                    icon={
                      <Icon>
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.19 18a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.09 3.18 2 2 0 0 1 4.08 1h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.06 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.58 2.8.7a2 2 0 0 1 1.76 2.03z" />
                      </Icon>
                    }
                  >
                    <a
                      href={`tel:${SITE.phone}`}
                      className="transition-colors hover:text-[#C9A45C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A45C]"
                    >
                      {SITE.phoneLabel}
                    </a>
                  </DetailRow>

                  <DetailRow
                    label="Email"
                    icon={
                      <Icon>
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <path d="m3 7 9 6 9-6" />
                      </Icon>
                    }
                  >
                    <a
                      href={`mailto:${SITE.email}`}
                      className="transition-colors hover:text-[#C9A45C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A45C]"
                    >
                      {SITE.email}
                    </a>
                  </DetailRow>

                  <DetailRow
                    label="Address"
                    icon={
                      <Icon>
                        <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" />
                        <circle cx="12" cy="9.5" r="2.5" />
                      </Icon>
                    }
                  >
                    {SITE.address}
                  </DetailRow>

                  <DetailRow
                    label="Opening hours"
                    icon={
                      <Icon>
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 7v5l3 2" />
                      </Icon>
                    }
                  >
                    <ul className="space-y-0.5">
                      {(Array.isArray(SITE.hours) ? SITE.hours : [SITE.hours]).map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  </DetailRow>
                </div>
              </address>

              <div className="overflow-hidden rounded-[22px] bg-white md:rounded-[28px]">
                <iframe
                  title="Just Clean Dubai location map"
                  loading="lazy"
                  className="block h-64 w-full border-0 sm:h-72"
                  src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
                />
                <div className="flex items-center justify-between gap-3 px-5 py-4">
                  <p className="min-w-0 truncate text-sm text-[#0F1A17]/65">Al Quoz, Dubai</p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-sm font-semibold text-[#2F4A38] underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5E7254]"
                  >
                    Get directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= REVIEWS ================= */}
      <GoogleReviewsSection />
    </main>
  );
}