import Link from 'next/link';
import Image from 'next/image';

const services = [
  {
    title: 'Events',
    description: 'Full-service event hospitality — from intimate gatherings to large-scale festivals.',
    image: '/images/perfect-pour-trailers.jpg',
    href: '/services/events',
  },
  {
    title: 'Explore',
    description: 'Curated local experiences across Central Pennsylvania\'s most iconic destinations.',
    image: '/images/white-rose-hospitality-gettysburg.jpg',
    href: '/services/explore',
  },
  {
    title: 'Perfect Pour Trailers',
    description: 'Custom-built mobile bar trailers for breweries, festivals, and events.',
    image: '/images/perfect-pour-trailers.jpg',
    href: '/services/perfect-pour-trailers',
  },
  {
    title: 'Luxury Travel Trailers',
    description: 'High-quality tiny houses on trailers — your gateway to freedom and comfort.',
    image: '/images/luxury-travel-trailers.png',
    href: '/services/luxury-travel-trailers',
  },
  {
    title: 'Autonomous Retail',
    description: 'AI-powered micromarts — the next generation of self-service shopping.',
    image: '/images/autonomous-retail-open-store.jpg',
    href: '/services/autonomous-retail',
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-gradient-to-br from-rose-900 via-rose-800 to-rose-900">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <Image
            src="/images/new-logo-vertical.png"
            alt="White Rose Hospitality"
            width={180}
            height={180}
            className="mx-auto mb-8 brightness-0 invert"
            priority
          />
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            White Rose Hospitality
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Innovative hospitality solutions for Central Pennsylvania and beyond
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-white text-rose-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Our Services
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-rose-900 transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Our Service Lines
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From mobile bars to autonomous retail, we deliver innovative hospitality experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group rounded-2xl overflow-hidden bg-gray-50 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-rose-800 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                  <span className="inline-block mt-4 text-rose-800 font-medium group-hover:translate-x-2 transition-transform">
                    Learn More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-rose-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-rose-100">
            Whether you need a mobile bar for your next event, a luxury travel trailer, or an autonomous retail solution — we&apos;re here to help.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-rose-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  );
}
