import { useState } from 'react';
import Seo from '../components/Seo';
import { PageHero } from '../components/Sections';
import { SITE, wa } from '../config';

const opts = ['Villa Cleaning', 'Deep Cleaning', 'Move In/Out Cleaning', 'Window Cleaning', 'AC Cleaning', 'Office Cleaning', 'Other'];
const f = 'mt-2 w-full rounded-xl border border-ink/15 bg-white px-4 py-3.5 outline-none transition focus:border-gold-500 focus:ring-2 focus:ring-gold-500/30';

export default function Contact() {
  const [d, setD] = useState({ name: '', phone: '', service: '', message: '' });
  const set = (e) => setD({ ...d, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    const t = `Hi! I'm ${d.name}.${d.service ? `\nService: ${d.service}` : ''}\nPhone: ${d.phone}\n${d.message}`;
    window.open(wa(t), '_blank', 'noopener');
  };
  return (
    <main>
      <Seo path="/contact" title="Contact & Free Quote" description="Get a free cleaning quote in Dubai. Message Just Clean Dubai on WhatsApp, call +971 55 794 0881 or visit us in Al Quoz." />
      <PageHero title="Let's get your space sparkling" text="Send your details and we'll continue the conversation on WhatsApp." crumbs={[['Home', '/'], ['Contact']]} />
      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-5">
          <form onSubmit={submit} className="space-y-5 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-ink/5 lg:col-span-3">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-medium">Full name *<input className={f} name="name" required autoComplete="name" value={d.name} onChange={set} /></label>
              <label className="text-sm font-medium">Phone *<input className={f} name="phone" type="tel" required autoComplete="tel" value={d.phone} onChange={set} placeholder="+971 5X XXX XXXX" /></label>
            </div>
            <label className="block text-sm font-medium">Service
              <select className={f} name="service" value={d.service} onChange={set}><option value="">Select a service</option>{opts.map((o) => <option key={o}>{o}</option>)}</select>
            </label>
            <label className="block text-sm font-medium">Message *<textarea className={f} name="message" rows="5" required value={d.message} onChange={set} placeholder="Property type, size, preferred date…" /></label>
            <button className="btn-gold w-full">Continue on WhatsApp</button>
          </form>
          <div className="space-y-6 lg:col-span-2">
            <address className="space-y-5 rounded-3xl bg-ink p-8 not-italic text-white">
              {[['Address', SITE.address], ['Phone', <a key="p" href={`tel:${SITE.phone}`}>{SITE.phoneLabel}</a>], ['Email', <a key="e" href={`mailto:${SITE.email}`}>{SITE.email}</a>], ['Hours', SITE.hours.join(' · ')]].map(([k, v]) => (
                <div key={k}><p className="eyebrow !text-gold-400">{k}</p><p className="mt-1 text-white/85">{v}</p></div>
              ))}
            </address>
            <iframe title="Just Clean Dubai location map" loading="lazy" className="h-64 w-full rounded-3xl border-0" src="https://www.google.com/maps?q=Al+Quoz+Industrial+Area+3+Dubai&output=embed" />
          </div>
        </div>
      </section>
    </main>
  );
}
