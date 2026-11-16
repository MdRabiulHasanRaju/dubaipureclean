// Runs before `vite build`: builds public/sitemap.xml from the live API (falls back to static pages).
import { writeFileSync } from 'node:fs';
const SITE = 'https://justcleandubai.com';
const API = process.env.VITE_API_URL || 'https://server.justcleandubai.com';
let paths = ['/', '/about', '/contact'];
try {
  const r = await fetch(`${API}/service/getAllService/`, { signal: AbortSignal.timeout(8000) });
  paths = paths.concat((await r.json()).map((x) => `/service-details/${x.link}`));
} catch { console.warn('sitemap: API unreachable, static pages only'); }
const d = new Date().toISOString().slice(0, 10);
writeFileSync('public/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.map((p) => `<url><loc>${SITE}${p}</loc><lastmod>${d}</lastmod></url>`).join('\n')}\n</urlset>\n`);
console.log(`sitemap: ${paths.length} urls`);
