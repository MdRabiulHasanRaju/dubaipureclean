import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from './Reveal';
import { SITE, wa, getJSON, img } from '../config';

export const Head = ({ eyebrow, title, text, light }) => (
  <Reveal className="mx-auto mb-14 max-w-2xl text-center">
    <p className="eyebrow">{eyebrow}</p>
    <h2 className={`mt-3 text-4xl md:text-5xl ${light ? 'text-white' : ''}`}>{title}</h2>
    {text && <p className={`mt-4 text-lg ${light ? 'text-white/65' : 'text-ink/65'}`}>{text}</p>}
  </Reveal>
);

export function PageHero({ title, text, crumbs }) {
  return (
    <section className="bg-ink-900 pb-16 pt-36 text-white">
      <div className="container-x">
        <nav aria-label="Breadcrumb"><ol className="flex flex-wrap gap-2 text-sm text-white/55">
          {crumbs.map(([l, p], i) => (
            <li key={l} className="flex gap-2">{i > 0 && <span>/</span>}{p ? <Link to={p} className="hover:text-white">{l}</Link> : <span className="text-gold-400">{l}</span>}</li>
          ))}
        </ol></nav>
        <h1 className="mt-5 max-w-3xl text-4xl md:text-6xl">{title}</h1>
        {text && <p className="mt-4 max-w-2xl text-lg text-white/65">{text}</p>}
      </div>
    </section>
  );
}

export function Services() {
  const [list, setList] = useState(null);
  useEffect(() => {
    const c = new AbortController();
    getJSON('/service/servicesForHomePage/1', c.signal).then(setList).catch(() => setList([]));
    return () => c.abort();
  }, []);
  return (
    <section id="services" className="section">
      <div className="container-x">
        <Head eyebrow="Our services" title="Cleaning, done properly" text="From villas to offices, every job follows a detailed checklist and a final quality inspection." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {(list ?? Array.from({ length: 6 })).map((s, i) => s ? (
            <Reveal key={s.id} delay={(i % 3) * 80}>
              <Link to={`/service-details/${s.link}`} className="group block h-full overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-ink/5 transition duration-500 hover:-translate-y-1.5 hover:shadow-2xl">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={img(s.featured_image)} alt={s.title} width="640" height="480" loading="lazy" decoding="async" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl">{s.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-ink/65">{s.sub_title}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold-600">View details <span className="transition group-hover:translate-x-1">→</span></span>
                </div>
              </Link>
            </Reveal>
          ) : <div key={i} className="aspect-[4/5] animate-pulse rounded-3xl bg-ink/5" />)}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  const steps = [['Message us', 'Tell us your property type and size on WhatsApp.'], ['Get a quote', 'Clear pricing, no hidden fees, confirmed before we start.'], ['We clean', 'A trained team arrives on time with all equipment and eco-friendly products.'], ['Quality check', 'We inspect every room with you and fix anything you flag.']];
  return (
    <section className="section bg-ink-900 text-white">
      <div className="container-x">
        <Head light eyebrow="How it works" title="Four simple steps" />
        <ol className="grid gap-6 md:grid-cols-4">
          {steps.map(([t, d], i) => (
            <Reveal as="li" key={t} delay={i * 100} className="rounded-3xl border border-white/10 bg-white/[.04] p-7">
              <span className="font-display text-5xl text-gold-500">0{i + 1}</span>
              <h3 className="mt-6 text-xl">{t}</h3><p className="mt-2 text-sm text-white/60">{d}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function WhyUs() {
  const f = [['Eco-friendly products', 'Non-toxic, biodegradable formulas that are safe for children and pets.'], ['Trained professionals', 'Experienced teams with continuous training in modern cleaning methods.'], ['Transparent pricing', 'Fair quotes upfront. No surprises when the job is done.'], ['Flexible scheduling', 'Seven days a week, with same-day options where available.'], ['Satisfaction promise', "Not happy with something? Tell us and we'll make it right."], ['Fully equipped', 'We bring professional machines and supplies, so you do not need to.']];
  return (
    <section className="section">
      <div className="container-x">
        <Head eyebrow="Why Just Clean Dubai" title="The standard your space deserves" />
        <div className="grid gap-px overflow-hidden rounded-3xl bg-ink/10 ring-1 ring-ink/10 sm:grid-cols-2 lg:grid-cols-3">
          {f.map(([t, d], i) => (
            <Reveal key={t} delay={(i % 3) * 80} className="bg-white p-8">
              <span className="text-sm font-semibold text-gold-600">0{i + 1}</span>
              <h3 className="mt-3 text-xl">{t}</h3><p className="mt-2 text-ink/65">{d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const reviews = [
  ['Sarah J.', 'Homeowner', 'Their attention to detail is incredible, and I love that they use eco-friendly products. My house has never looked better.'],
  ['Michael C.', 'Business owner', "We've used Just Clean Dubai for our office for over two years. Reliable, professional and always on time."],
  ['David R.', 'Property manager', 'They handle move-in and move-out cleaning for all my properties. Thorough, punctual, and it makes my job easier.'],
];
export function Testimonials() {
  return (
    <section className="section bg-white">
      <div className="container-x">
        <Head eyebrow="Testimonials" title="Trusted across Dubai" />
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map(([n, r, t], i) => (
            <Reveal as="figure" key={n} delay={i * 100} className="rounded-3xl bg-cream p-8">
              <div aria-label="5 out of 5 stars" className="text-gold-500">★★★★★</div>
              <blockquote className="mt-4 leading-relaxed text-ink/80">“{t}”</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-ink font-semibold text-gold-400">{n[0]}</span>
                <span><b className="block text-sm">{n}</b><span className="text-xs text-ink/55">{r}</span></span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export const homeFaqs = [
  ['How do I book a cleaning service?', 'Message us on WhatsApp or call us. Share your property type and size, and we will confirm a quote and a time slot.'],
  ['Do you offer same-day cleaning in Dubai?', 'Yes, same-day slots are available depending on our schedule. Contact us early in the day for the best chance.'],
  ['Are your cleaning products safe for kids and pets?', 'We use eco-friendly, non-toxic products designed to be safe for families and pets.'],
  ['Do I need to provide cleaning equipment?', 'No. Our teams bring professional equipment and supplies for every job.'],
];
export function Faq({ items }) {
  return (
    <div className="divide-y divide-ink/10 rounded-3xl bg-white ring-1 ring-ink/5">
      {items.map(([q, a], i) => (
        <details key={q} open={i === 0} className="group px-6 py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">{q}<span className="text-xl text-gold-600 transition group-open:rotate-45">+</span></summary>
          <p className="mt-3 leading-relaxed text-ink/70">{a}</p>
        </details>
      ))}
    </div>
  );
}

export function CtaBand() {
  return (
    <section className="container-x pb-20 md:pb-28">
      <Reveal className="relative overflow-hidden rounded-[2rem] bg-ink p-10 text-center text-white md:p-16">
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold-500/20 blur-3xl" />
        <h2 className="relative text-3xl md:text-5xl">Ready for a spotless space?</h2>
        <p className="relative mx-auto mt-4 max-w-xl text-white/65">Get a free, no-obligation quote in minutes.</p>
        <div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={wa()} className="btn-gold">Book on WhatsApp</a>
          <a href={`tel:${SITE.phone}`} className="btn-ghost">Call {SITE.phoneLabel}</a>
        </div>
      </Reveal>
    </section>
  );
}
