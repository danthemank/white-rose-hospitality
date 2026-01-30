import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Luxury Travel Trailers | White Rose Hospitality',
  description: 'High-quality tiny houses and cabins on trailers. Your gateway to freedom and comfort — for vacation rentals or long-term living.',
};

const reasons = [
  { title: 'Mobility & Flexibility', description: 'Take your home wherever life leads. Our trailers are built for the road and designed for living.' },
  { title: 'High-Quality Craftsmanship', description: 'Premium materials, expert construction, and attention to every detail — built to last.' },
  { title: 'Full Customization', description: 'From floor plans to finishes, every trailer is tailored to your vision and lifestyle.' },
  { title: 'Sustainable Living', description: 'Smaller footprint, lower energy costs, and eco-friendly materials — luxury that respects the planet.' },
];

const useCases = [
  {
    title: 'Vacation Rentals & Short-Term Stays',
    description: 'Place your luxury travel trailer at a campground, lakefront property, or rural retreat and offer guests a unique short-term rental experience. Perfect for Airbnb, glamping, or hospitality businesses.',
    icon: '🏕️',
  },
  {
    title: 'Long-Term Residences',
    description: 'Our tiny houses on trailers are designed for full-time living — with all the comforts of home in a compact, mobile form. Ideal for those seeking a simpler, more flexible lifestyle.',
    icon: '🏠',
  },
];

export default function LuxuryTravelTrailersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src="/images/luxury-travel-trailers.png"
          alt="Luxury Travel Trailers"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Luxury Travel Trailers</h1>
          <p className="text-xl text-gray-200">
            Your Gateway to Freedom and Comfort
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold mb-6">Tiny Houses. Big Living.</h2>
          <p className="text-lg text-gray-600 mb-6">
            White Rose Hospitality offers high-quality tiny houses and cabins mounted on trailers — combining the freedom of mobility with the comfort of a beautifully crafted home. Whether you&apos;re looking for a unique vacation rental property or a permanent residence that goes wherever you do, our luxury travel trailers deliver.
          </p>
          <p className="text-lg text-gray-600">
            Every unit is built with premium materials and expert craftsmanship. From the layout to the finishes, each trailer is fully customizable to match your style and needs.
          </p>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">Why Choose Our Trailers</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {reasons.map((r) => (
              <div key={r.title} className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-rose-800">{r.title}</h3>
                <p className="text-gray-600">{r.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">How You Can Use Them</h2>
          <div className="space-y-8">
            {useCases.map((uc) => (
              <div key={uc.title} className="flex gap-6 items-start">
                <span className="text-4xl">{uc.icon}</span>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{uc.title}</h3>
                  <p className="text-gray-600 text-lg">{uc.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-rose-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">Start Your Journey</h2>
          <p className="text-xl mb-8 text-rose-100">
            Get in touch to explore models, customization options, and pricing for your luxury travel trailer.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-rose-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
