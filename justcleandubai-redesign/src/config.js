export const SITE = {
  name: 'Just Clean Dubai',
  url: 'https://justcleandubai.com',
  phone: '+971557940881',
  phoneLabel: '+971 55 794 0881',
  email: 'info@justcleandubai.com',
  address: 'Al Quoz Industrial Area 3, Dubai, UAE',
  hours: ['Mon – Fri: 8:00 AM – 6:00 PM', 'Sat – Sun: 9:00 AM – 5:00 PM'],
};
export const API = import.meta.env.VITE_API_URL || 'https://server.justcleandubai.com';
export const wa = (t = 'Hi! I would like to book a cleaning service.') =>
  `https://wa.me/+${SITE.phone.slice(1)}?text=${encodeURIComponent(t)}`;
export const getJSON = (p, signal) =>
  fetch(API + p, { signal }).then((r) => { if (!r.ok) throw new Error(r.status); return r.json(); });
export const img = (f) => `${API}/uploads/services/${f}`;
