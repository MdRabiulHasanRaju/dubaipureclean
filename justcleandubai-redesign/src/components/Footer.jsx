import { Link } from 'react-router-dom';
import { SITE, wa } from '../config';

const services = [
  ['Villa Deep Cleaning', 'villa-deep-cleaning'],
  ['Residential Deep Cleaning', 'Residential-Deep-Cleaning-Services-in-Dubai'],
  ['Window Cleaning', 'window-cleaning-in-dubai'],
  ['AC Cleaning', 'ac-cleaning-services-in-dubai'],
];

export default function Footer() {
  const h = 'mb-5 text-xs font-semibold uppercase tracking-[.2em] text-gold-400';
  const l = 'text-white/70 transition hover:text-white';
  return (
    <footer className="bg-ink-900 text-white">
      <div className="container-x grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <img src="/images/logo.png" alt={`${SITE.name} logo`} width="128" height="48" loading="lazy" className="h-10 w-auto brightness-0 invert" />
          <p className="mt-5 max-w-sm leading-relaxed text-white/60">Premium, eco-friendly cleaning for Dubai's homes, villas and offices, delivered by trained professionals.</p>
          <a href={wa()} className="btn-gold mt-6">Get a free quote</a>
        </div>
        <nav aria-label="Company" className="md:col-span-2">
          <h3 className={h}>Company</h3>
          <ul className="space-y-3 text-sm"><li><Link className={l} to="/">Home</Link></li><li><Link className={l} to="/about">About</Link></li><li><Link className={l} to="/contact">Contact</Link></li></ul>
        </nav>
        <nav aria-label="Services" className="md:col-span-2">
          <h3 className={h}>Services</h3>
          <ul className="space-y-3 text-sm">{services.map(([t, s]) => <li key={s}><Link className={l} to={`/service-details/${s}`}>{t}</Link></li>)}</ul>
        </nav>
        <address className="not-italic md:col-span-3">
          <h3 className={h}>Visit &amp; call</h3>
          <ul className="space-y-3 text-sm text-white/70">
            <li>{SITE.address}</li>
            <li><a className={l} href={`tel:${SITE.phone}`}>{SITE.phoneLabel}</a></li>
            <li><a className={l} href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
          </ul>
        </address>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/40">
        © {new Date().getFullYear()} {SITE.name}. All rights reserved. · <a className="hover:text-white" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mdrabiulhasanraju">Developed by Md Rabiul Hasan</a>
      </div>
    </footer>
  );
}
