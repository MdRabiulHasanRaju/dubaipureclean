import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Seo from '../components/Seo';
import { Testimonials, CtaBand } from '../components/Sections';
import { SITE, wa, getJSON, img } from '../config';
import GoogleReviewsSection from "../components/GoogleReviewsSection";

export default function ServiceDetails() {
  const { link } = useParams();
  const [s, setS] = useState(null);
  const [rel, setRel] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [state, setState] = useState('loading');

  useEffect(() => {
    const c = new AbortController();
    setState('loading'); setS(null);
    getJSON(`/service/getsingleservice/${link}`, c.signal).then(async (data) => {
      const x = data?.[0];
      if (!x) return setState('missing');
      setS(x); setState('ok');
      const [r, q] = await Promise.all([
        getJSON(`/service/servicesByCategory/${x.category_id}`, c.signal).catch(() => []),
        getJSON(`/service/getServiceFaqs/${x.id}`, c.signal).catch(() => []),
      ]);
      setRel(r); setFaqs(q);
    }).catch((e) => { if (e.name !== 'AbortError') setState('missing'); });
    return () => c.abort();
  }, [link]);

  if (state === 'loading') return <div className="min-h-screen pt-32"><div className="container-x animate-pulse space-y-4"><div className="h-72 rounded-3xl bg-ink/5" /><div className="h-6 w-2/3 rounded bg-ink/5" /></div></div>;
  if (state === 'missing') return (
    <main className="container-x grid min-h-[70vh] place-content-center pt-32 text-center">
      <Seo title="Service not found" description="This service page does not exist." noindex />
      <h1 className="text-4xl">Service not found</h1><Link to="/" className="btn-dark mx-auto mt-6">Back to home</Link>
    </main>
  );

  const path = `/service-details/${link}`;
  const desc = s.meta_description || s.sub_title || s.title;
  const pic = img(s.banner_image);
  const schema = [
    { '@context': 'https://schema.org', '@type': 'Service', name: s.title, description: desc, image: pic, url: SITE.url + path, areaServed: { '@type': 'City', name: 'Dubai' }, provider: { '@type': 'LocalBusiness', name: SITE.name, url: SITE.url, telephone: SITE.phone } },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [['Home', '/'], [s.category_name, null], [s.title, path]].map(([n, p], i) => ({ '@type': 'ListItem', position: i + 1, name: n, ...(p && { item: SITE.url + p }) })) },
    ...(faqs.length ? [{ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) }] : []),
  ];

  return (
    <main>
      <Seo path={path} title={s.meta_title || s.title} description={desc} image={pic} schema={schema} />
      <section className="relative isolate overflow-hidden bg-ink-900 pb-16 pt-36 text-white">
        <img src={pic} alt={s.title} fetchpriority="high" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink-100 via-ink-900/30 to-ink-900/30" />
        <div className="container-x">
          <nav aria-label="Breadcrumb" className="text-sm text-white/60"><Link to="/" className="hover:text-white">Home</Link> / <span>{s.category_name}</span></nav>
          <h1 className="mt-5 max-w-3xl text-4xl md:text-6xl font-bold">{s.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/75">{s.sub_title}</p>
          <a href={wa(`Hi! I'd like to book: ${s.title}`)} className="btn-gold mt-8 font-bold">Book this service</a>
        </div>
      </section>

      <section className="section !pb-12 !pt-8">
        <div className="container-x grid gap-10 lg:grid-cols-3">
          <div className="space-y-10 lg:col-span-2">
            <article className="prose prose-md  max-w-none rounded-3xl bg-white p-8 shadow-sm ring-1 ring-ink/5 prose-headings:font-display prose-a:text-gold-600 prose-img:rounded-2xl md:p-12" dangerouslySetInnerHTML={{ __html: s.description }} />
            {faqs.length > 0 && (
              <div>
                <h2 className="mb-5 text-3xl">Frequently asked questions</h2>
                <div className="divide-y divide-ink/10 rounded-3xl bg-white ring-1 ring-ink/5">
                  {faqs.map((f, i) => (
                    <details key={f.id} open={i === 0} className="group px-6 py-5">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">{f.question}<span className="text-xl text-gold-600 transition group-open:rotate-45">+</span></summary>
                      <p className="mt-3 leading-relaxed text-ink/70">{f.answer}</p>
                    </details>
                  ))}
                </div>
              </div>
            )}
          </div>
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-3xl bg-ink p-7 text-white">
              <h2 className="text-2xl">Need it done fast?</h2>
              <p className="mt-2 text-sm text-white/65">Same-day slots may be available.</p>
              <a href={wa(`Hi! I'd like a quote for: ${s.title}`)} className="btn-gold mt-5 w-full">Get a free quote</a>
              <a href={`tel:${SITE.phone}`} className="btn-ghost mt-3 w-full">{SITE.phoneLabel}</a>
            </div>
            {rel.length > 1 && (
              <nav aria-label="Related services" className="rounded-3xl bg-white p-7 ring-1 ring-ink/5">
                <h2 className="mb-3 text-xl">More in {s.category_name}</h2>
                <ul className="divide-y divide-ink/5 text-sm">
                  {rel.map((r) => <li key={r.id}><Link to={`/service-details/${r.link}`} aria-current={r.id === s.id ? 'page' : undefined} className={`block py-3 transition hover:text-gold-600 ${r.id === s.id ? 'font-semibold text-gold-600' : ''}`}>{r.title}</Link></li>)}
                </ul>
              </nav>
            )}
          </aside>
        </div>
      </section>
      {/* <Testimonials /> */}
      <GoogleReviewsSection />
      <CtaBand />
    </main>
  );
}
