import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SITE, wa, getJSON } from '../config';

const lk = 'text-sm font-medium text-ink/75 transition hover:text-ink';
const Chevron = () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m6 9 6 6 6-6" /></svg>;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [cats, setCats] = useState([]);
  const [srv, setSrv] = useState([]);
  const [sc, setSc] = useState(false);

  useEffect(() => {
    const f = () => setSc(window.scrollY > 10);
    f(); window.addEventListener('scroll', f, { passive: true });
    return () => window.removeEventListener('scroll', f);
  }, []);
  useEffect(() => {
    const c = new AbortController();
    Promise.all([getJSON('/service/getServiceCategory', c.signal), getJSON('/service/getAllService/', c.signal)])
      .then(([a, b]) => { setCats(a); setSrv(b); }).catch(() => {});
    return () => c.abort();
  }, []);
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; }, [open]);

  const by = (id) => srv.filter((s) => s.category_id === id);
  const close = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/5 bg-white/85 backdrop-blur-xl">
      <div className={`container-x flex items-center justify-between transition-all duration-300 ${sc ? 'h-16' : 'h-20'}`}>
        <Link to="/" aria-label={`${SITE.name} home`} onClick={close}>
          <img src="/images/logo.png" alt={`${SITE.name} logo`} width="128" height="48" className="h-10 w-auto" />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          <NavLink to="/" end className={lk}>Home</NavLink>
          {cats.map((c) => (
            <div key={c.id} className="group relative">
              <button className={`${lk} flex items-center gap-1 py-6`} aria-haspopup="true">{c.name}<Chevron /></button>
              <div className="invisible absolute left-1/2 top-full w-[30rem] -translate-x-1/2 translate-y-2 rounded-2xl border border-ink/5 bg-white p-4 opacity-0 shadow-2xl transition group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="grid max-h-[65vh] grid-cols-2 gap-1 overflow-auto">
                  {by(c.id).map((s) => (
                    <Link key={s.id} to={`/service-details/${s.link}`} className="rounded-lg px-3 py-2 text-sm hover:bg-cream">{s.title}</Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <NavLink to="/about" className={lk}>About</NavLink>
          <NavLink to="/contact" className={lk}>Contact</NavLink>
        </nav>

        <div className="flex items-center gap-3">
          {/* <a href={`tel:${SITE.phone}`} className="hidden text-sm font-semibold xl:block">{SITE.phoneLabel}</a> */}
          <a href={wa()} className="btn-gold hidden sm:inline-flex">Book on WhatsApp</a>
          <button aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)} className="rounded-lg p-2 lg:hidden">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="h-[calc(100vh-4rem)] overflow-auto bg-white px-5 pb-28 pt-4 lg:hidden">
          <nav aria-label="Mobile" className="divide-y divide-ink/5 text-lg font-medium">
            <Link to="/" onClick={close} className="block py-4">Home</Link>
            {cats.map((c) => (
              <details key={c.id} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between">{c.name}<Chevron /></summary>
                <div className="mt-3 grid gap-1 text-base font-normal text-ink/75">
                  {by(c.id).map((s) => <Link key={s.id} to={`/service-details/${s.link}`} onClick={close} className="rounded-lg px-3 py-2 hover:bg-cream">{s.title}</Link>)}
                </div>
              </details>
            ))}
            <Link to="/about" onClick={close} className="block py-4">About</Link>
            <Link to="/contact" onClick={close} className="block py-4">Contact</Link>
          </nav>
          <a href={wa()} className="btn-gold mt-6 w-full">Book on WhatsApp</a>
        </div>
      )}
    </header>
  );
}
