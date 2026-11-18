import { useMemo, useState } from "react";
import { wa } from "../config";

/* ------------------------------------------------------------------ */
/*  REPLACE THE CONTENT BELOW WITH YOUR REAL GOOGLE DATA               */
/* ------------------------------------------------------------------ */

// While true, a notice shows above the section and each sample card is tagged.
// Keep false for live data.
const SAMPLE_MODE = false;

const PLACE_ID = "ChIJeUrzn_pPLIcR2E2VllLpeyc";
const ALL_REVIEWS_URL = `https://www.google.com/maps/place/?q=place_id:${PLACE_ID}`;
const WRITE_REVIEW_URL = `https://search.google.com/local/writereview?placeid=${PLACE_ID}`;

// Numbers exactly as shown on your Google profile
const SUMMARY = {
  rating: 4.9,
  count: 78,
  // Percentage of reviews per star level
  distribution: [
    { stars: 5, pct: 94 },
    { stars: 4, pct: 4 },
    { stars: 3, pct: 1 },
    { stars: 2, pct: 1 },
    { stars: 1, pct: 0 },
  ],
};

// Copy real reviews from Google. Keep them word for word.
// `service` drives the filter chips. `area` is optional: only add it if you
// know the reviewer's real neighbourhood, otherwise delete the line.
const REVIEWS = [
  {
    name: "Svetlana Karner",
    when: "2 weeks ago",
    stars: 5,
    service: "Villa",
    area: "Arabian Ranches",
    text: `Excellent service from start to finish! I’m extremely happy with the deep cleaning and couldn’t be more satisfied with the results.`,
  },
  {
    name: "Wallaby 18",
    when: "1 month ago",
    stars: 5,
    service: "Apartment",
    area: "Dubai Marina",
    text: "Kausar and his Team arrived on time ! They were super professional and efficient. I got all my Carpets, sofas, Mattresses and our Massive balcony along with outdoor furniture cleaned. The whole of it is super clean and fresh! I am very pleased with their services and will use them again. The booking and price value is very good too.",
  },
  {
    name: "Maricel Orpilla",
    when: "1 month ago",
    stars: 5,
    service: "Office",
    area: "Business Bay",
    text: "Superb service from Kawser and Rayhan. We had to hire another cleaner for our new office because we were not satisfied with the previous one, but Kawser and Rayhan have been very good and professional in cleaning the walls, ceiling, and floor.",
  },
  {
    name: "Danah Takiyyuddin",
    when: "2 months ago",
    stars: 5,
    service: "Deep clean",
    area: "JVC",
    text: "The team spent 7 hours deep cleaning my new apartment and they did such an amazing job! No corner or crevice was missed and the apartment was spotless when they were done. Thanks so much team, highly recommend them",
  },
  {
    name: "Amor Alonso",
    when: "3 months ago",
    stars: 5,
    service: "Apartment",
    area: "Downtown",
    text: "Amazing service. They reply super fast, send you videos before and after, and the quality of the work is really good. Very professional ( Sorif  team) and easy to deal with. Recommended 100% 👌",
  },
  {
    name: "gretel albrecht",
    when: "3 months ago",
    stars: 5,
    service: "Villa",
    area: "Dubai Hills",
    text: "Kawsar team was amazing and did the best job to leave our villa super clean and ready to move in. The team was super polite and concerned about the children’s safety while they were working. They worked very hard and finished in a very good time. Thanks a lot!",
  },
];

const INITIAL_VISIBLE = 4;
const AVATAR_COLORS = ["#5E7254", "#C9A45C", "#2F4A38", "#8FA383"];

/* ------------------------------------------------------------------ */

function GoogleG({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  );
}

function Stars({ value, className = "h-4 w-4" }) {
  return (
    <span className="inline-flex gap-0.5" role="img" aria-label={`${value} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <svg
          key={n}
          viewBox="0 0 24 24"
          className={`${className} ${n <= Math.round(value) ? "text-[#F5B400]" : "text-[#0F1A17]/15"}`}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </span>
  );
}

function ReviewCard({ review, index, featured }) {
  const color = AVATAR_COLORS[index % AVATAR_COLORS.length];
  const initial = review.name.trim().charAt(0).toUpperCase();

  return (
    <article
      className={`mb-3 break-inside-avoid rounded-[20px] p-4 sm:mb-4 sm:rounded-[22px] sm:p-6 ${
        featured ? "bg-[#0F1A17] text-[#EDF0EA]" : "bg-white text-[#0F1A17]"
      }`}
    >
      <header className="flex items-center gap-3">
        <span
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white"
          style={{ backgroundColor: color }}
          aria-hidden="true"
        >
          {initial}
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold">{review.name}</p>
          <p className={`text-xs ${featured ? "text-[#EDF0EA]/55" : "text-[#0F1A17]/50"}`}>{review.when}</p>
        </div>
        <GoogleG className="h-5 w-5 shrink-0" />
      </header>

      <div className="mt-4">
        <Stars value={review.stars} />
      </div>

      <p
        className={`mt-3 ${
          featured ? "break-words font-display text-lg leading-snug sm:text-2xl" : "break-words text-[15px] leading-7 text-[#0F1A17]/80"
        }`}
      >
        {review.text}
      </p>

      <footer className="mt-4 flex flex-wrap items-center gap-2 sm:mt-5">
        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            featured ? "bg-[#EDF0EA]/10 text-[#EDF0EA]" : "bg-[#EDF0EA] text-[#2F4A38]"
          }`}
        >
          {review.service}
        </span>
        {review.area && (
          <span className={`text-xs ${featured ? "text-[#EDF0EA]/60" : "text-[#0F1A17]/55"}`}>{review.area}</span>
        )}
        {SAMPLE_MODE && review.sample && (
          <span className="ml-auto rounded-full border border-dashed border-[#C9A45C] px-2.5 py-0.5 text-[11px] font-medium text-[#C9A45C]">
            Sample
          </span>
        )}
      </footer>
    </article>
  );
}

export default function GoogleReviewsSection() {
  const [filter, setFilter] = useState("All");
  const [expanded, setExpanded] = useState(false);

  const services = useMemo(() => {
    const counts = {};
    REVIEWS.forEach((r) => {
      counts[r.service] = (counts[r.service] || 0) + 1;
    });
    return [["All", REVIEWS.length], ...Object.entries(counts)];
  }, []);

  const filtered = useMemo(
    () => (filter === "All" ? REVIEWS : REVIEWS.filter((r) => r.service === filter)),
    [filter]
  );
  const shown = expanded ? filtered : filtered.slice(0, INITIAL_VISIBLE);
  const hiddenCount = filtered.length - shown.length;

  return (
    <section id="reviews" className="relative overflow-x-clip bg-[#EDF0EA] text-[#0F1A17]">
      {SAMPLE_MODE && (
        <div className="bg-[#C9A45C] px-4 py-2 text-center text-xs font-medium text-[#0F1A17]">
          Sample content. Replace the reviews, rating and Place ID at the top of GoogleReviewsSection.jsx, then set SAMPLE_MODE to false.
        </div>
      )}

      <div className="container-x py-12 md:py-24">
        <div className="text-center">
          <h2 className="font-display text-[clamp(2rem,4.6vw,3.75rem)] font-medium leading-[1.02] tracking-[-0.03em]">
            Trusted by homes and offices across Dubai.
          </h2>
          <p className="mt-4 text-base leading-7 text-[#0F1A17]/65 md:text-lg">
            Real Google reviews from villa, apartment and office clients. Filter by the kind of place you want cleaned.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:mt-14 md:gap-8 lg:grid-cols-12 lg:gap-10">
          {/* ---------------- Rating summary ---------------- */}
          <aside className="min-w-0 lg:col-span-4">
            <div className="rounded-[22px] bg-white p-5 sm:p-7 md:rounded-[28px] lg:sticky lg:top-24">
              <div className="flex items-center gap-2.5">
                <GoogleG className="h-6 w-6" />
                <span className="text-sm font-semibold">Google reviews</span>
              </div>

              <div className="mt-4 flex flex-wrap items-end gap-x-4 gap-y-2 sm:mt-5">
                <span className="font-display text-6xl font-medium leading-none tracking-tight sm:text-7xl">
                  {SUMMARY.rating.toFixed(1)}
                </span>
                <div className="pb-1.5">
                  <Stars value={SUMMARY.rating} className="h-[18px] w-[18px] sm:h-5 sm:w-5" />
                  <p className="mt-1.5 text-sm text-[#0F1A17]/60">{SUMMARY.count} reviews</p>
                </div>
              </div>

              <ul className="mt-5 space-y-1.5 sm:mt-6 sm:space-y-2" aria-label="Rating breakdown">
                {SUMMARY.distribution.map((d) => (
                  <li key={d.stars} className="flex items-center gap-3 text-xs text-[#0F1A17]/60">
                    <span className="w-8 shrink-0 tabular-nums">{d.stars} star</span>
                    <span className="h-2 flex-1 overflow-hidden rounded-full bg-[#0F1A17]/10">
                      <span
                        className="block h-full rounded-full bg-[#F5B400]"
                        style={{ width: `${d.pct}%` }}
                      />
                    </span>
                    <span className="w-9 shrink-0 text-right tabular-nums">{d.pct}%</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-7 sm:grid-cols-1">
                <a
                  href={ALL_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#0F1A17] px-4 py-3 text-sm font-semibold text-[#EDF0EA] transition-colors hover:bg-[#2F4A38] sm:px-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F1A17]"
                >
                  <span className="sm:hidden">All reviews</span>
                  <span className="hidden sm:inline">Read all reviews on Google</span>
                </a>
                <a
                  href={WRITE_REVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-[#0F1A17]/20 px-4 py-3 text-sm font-semibold transition-colors hover:border-[#5E7254] hover:text-[#2F4A38] sm:px-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5E7254]"
                >
                  Write a review
                </a>
              </div>
            </div>
          </aside>

          {/* ---------------- Reviews ---------------- */}
          <div className="min-w-0 lg:col-span-8">
            <div
              className="flex gap-2 overflow-x-auto pb-3 [-ms-overflow-style:none] [scrollbar-width:none] sm:flex-wrap sm:overflow-visible sm:pb-0 [&::-webkit-scrollbar]:hidden"
              role="group"
              aria-label="Filter reviews by service"
            >
              {services.map(([name, count]) => {
                const active = name === filter;
                return (
                  <button
                    key={name}
                    type="button"
                    aria-pressed={active}
                    onClick={() => {
                      setFilter(name);
                      setExpanded(false);
                    }}
                    className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-2.5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5E7254] ${
                      active
                        ? "border-[#0F1A17] bg-[#0F1A17] text-[#EDF0EA]"
                        : "border-[#0F1A17]/15 bg-white hover:border-[#5E7254]"
                    }`}
                  >
                    {name}
                    <span className={`ml-1.5 text-xs ${active ? "text-[#EDF0EA]/60" : "text-[#0F1A17]/45"}`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-4 columns-1 gap-4 sm:mt-5 md:columns-2">
              {shown.map((r, i) => (
                <ReviewCard key={`${r.name}-${r.when}`} review={r} index={i} featured={i === 0} />
              ))}
            </div>

            {hiddenCount > 0 && (
              <div className="mt-2 flex justify-center">
                <button
                  type="button"
                  aria-expanded={expanded}
                  onClick={() => setExpanded(true)}
                  className="w-full rounded-full border border-[#0F1A17]/20 bg-white px-6 py-3 text-sm font-semibold transition-colors hover:border-[#5E7254] sm:w-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5E7254]"
                >
                  Show {hiddenCount} more {hiddenCount === 1 ? "review" : "reviews"}
                </button>
              </div>
            )}

            {/* Closing prompt */}
            <div className="mt-8 flex flex-col items-stretch justify-between gap-4 rounded-[22px] bg-[#2F4A38] p-5 text-[#EDF0EA] sm:mt-10 sm:flex-row sm:items-center sm:p-6 md:p-7">
              <div>
                <p className="font-display text-xl md:text-2xl">Want a spotless result too?</p>
                <p className="mt-1 text-sm text-[#EDF0EA]/70">Tell us your area and property size. We reply on WhatsApp with a quote.</p>
              </div>
              <a
                href={wa("Hi Just Clean, I'd like a quote.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#EDF0EA] px-6 py-3.5 text-sm font-semibold text-[#0F1A17] transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A45C]"
              >
                Get a quote on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}