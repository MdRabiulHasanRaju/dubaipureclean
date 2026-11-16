import Seo from '../components/Seo';
import { PageHero, WhyUs, Testimonials, CtaBand } from '../components/Sections';

export default function About() {
  return (
    <main>
      <Seo path="/about" title="About Us" description="Meet Just Clean Dubai: a trusted Dubai cleaning company with 5+ years of experience, trained teams and eco-friendly products." />
      <PageHero title="Cleaner spaces. Calmer lives." text="Just Clean Dubai turns homes, villas and offices into healthy, beautiful spaces." crumbs={[['Home', '/'], ['About']]} />
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <h2 className="text-4xl md:text-5xl">More than a cleaning service, a partner for healthy spaces.</h2>
          <div className="space-y-5 text-lg leading-relaxed text-ink/70">
            <p>With over 5 years in the cleaning industry, Just Clean Dubai has been looking after homes and workplaces across the city.</p>
            <p>Our trained team uses eco-friendly products and modern techniques to deliver consistent results, because a clean space is the foundation of a productive, happy life.</p>
          </div>
        </div>
      </section>
      <WhyUs />
      <Testimonials />
      <CtaBand />
    </main>
  );
}
