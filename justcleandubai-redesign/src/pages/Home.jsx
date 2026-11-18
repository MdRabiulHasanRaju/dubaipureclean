import Seo from '../components/Seo';
import HeroSection from "../components/HeroSection";
import GoogleReviewsSection from "../components/GoogleReviewsSection";
import { Services, Process, WhyUs, Testimonials, Faq, CtaBand, Head, homeFaqs } from '../components/Sections';
import { SITE, wa } from '../config';

const schema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: homeFaqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) };
const stats = [['300+', 'Happy customers'], ['5+', 'Years experience'], ['7 days', 'Weekly availability']];

export default function Home() {
  return (
    <main>
      <Seo path="/" title="Premium Deep Cleaning Services in Dubai" description="Villa, apartment, office, window and AC cleaning across Dubai. Eco-friendly products, trained teams and same-day slots. Get a free quote on WhatsApp." schema={schema} />



      {/* <section className="relative overflow-hidden bg-ink-900 pb-20 pt-32 text-white md:pb-28 md:pt-40">
        <div className="pointer-events-none absolute -left-40 top-0 h-[28rem] w-[28rem] rounded-full bg-gold-500/15 blur-3xl" />
        <div className="container-x relative grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow !text-gold-400">Dubai's premium cleaning company</p>
            <h1 className="mt-5 text-3xl leading-[1.05] md:text-7xl">Premium deep cleaning, <em className="text-gold-400">beautifully</em> done.</h1>
            <p className="mt-6 max-w-xl text-lg text-white/70">Eco-friendly villa, apartment and office cleaning by trained professionals. Book in minutes, relax in a spotless space.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={wa()} className="btn-gold">Book on WhatsApp</a>
              <a href="#services" className="btn-ghost">Explore services</a>
            </div>
            <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8">
              {stats.map(([n, l]) => <div key={l}><dt className="font-display text-3xl text-gold-400">{n}</dt><dd className="mt-1 text-xs text-white/55">{l}</dd></div>)}
            </dl>
          </div>
          <div className="relative lg:col-span-5">
            <img src="/images/slider/commercial%20cleaning.jpeg" alt="Professional commercial cleaning team in Dubai" width="640" height="760" fetchpriority="high" decoding="async" className="aspect-[4/5] w-full rounded-t-[10rem] rounded-b-3xl object-cover shadow-2xl ring-1 ring-white/10" />
            <div className="absolute -bottom-5 -left-4 rounded-2xl bg-white p-4 text-ink shadow-2xl md:-left-8">
              <p className="text-xs text-ink/55">Need it today?</p>
              <a href={`tel:${SITE.phone}`} className="font-semibold">{SITE.phoneLabel}</a>
            </div>
          </div>
        </div>
      </section> */}

      <HeroSection />
      <Services />
      <Process />
      <WhyUs />
      {/* <Testimonials /> */}
      <GoogleReviewsSection />
      <section className="section">
        <div className="container-x max-w-3xl">
          <Head eyebrow="FAQ" title="Questions, answered" />
          <Faq items={homeFaqs} />
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
