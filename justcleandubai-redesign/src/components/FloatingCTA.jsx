import { SITE, wa } from '../config';

export default function FloatingCTA() {
  const base = 'grid h-14 w-14 place-items-center rounded-full text-white shadow-2xl transition hover:scale-110';
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a href={`tel:${SITE.phone}`} aria-label="Call us" className={`${base} bg-ink`}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V21a1 1 0 0 1-1 1C10.1 22 2 13.9 2 3a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.58a1 1 0 0 1-.25 1z" /></svg>
      </a>
      <a href={wa()} aria-label="Chat on WhatsApp" className={`${base} bg-[#25D366]`}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15s-.77.97-.94 1.16c-.17.2-.35.22-.64.07a8.1 8.1 0 0 1-2.39-1.48 9 9 0 0 1-1.65-2.06c-.17-.3-.02-.46.13-.6l.45-.52c.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.08-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.05 21.8a9.9 9.9 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 1 1 8.37 4.63zM12.05 0A11.8 11.8 0 0 0 .16 11.9c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.9 11.9 0 0 0 5.69 1.45c6.55 0 11.9-5.34 11.9-11.9A11.8 11.8 0 0 0 20.9 3.1 11.8 11.8 0 0 0 12.05 0z" /></svg>
      </a>
    </div>
  );
}
