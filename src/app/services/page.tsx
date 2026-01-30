import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | White Rose Hospitality',
  description: 'Explore our five service lines: Events, Explore, Perfect Pour Trailers, Luxury Travel Trailers, and Autonomous Retail.',
};

const services = [
  {
    title: 'Events',
    description: 'Full-service event hospitality including mobile bar service, catering coordination, and event planning for festivals, weddings, corporate events, and private parties across Central Pennsylvania.',
    image: '/images/perfect-pour-trailers.jpg',
    href: '/services/events',
  },
  {
    title: 'Explore',
    description: 'Curated local tourism experiences showcasing the best of Central PA — from historic Gettysburg battlefields to the vibrant streets of Lancaster, the capital city of Harrisburg, and the scenic Susquehanna River trails.',
    image: '/images/white-rose-hospitality-gettysburg.jpg',
    href: '/services/explore',
  },
  {
    title: 'Perfect Pour Trailers',
    description: 'Custom-built mobile bar trailers designed for breweries and beverage suppliers. Featuring multiple beer taps, sleek black exterior, spacious countertops, and integrated cooling — perfect for on-the-go sales at festivals and events.',
    image: '/images/perfect-pour-trailers.jpg',
    href: '/services/perfect-pour-trailers',
  },
  {
    title: 'Luxury Travel Trailers',
    description: 'High-quality tiny houses and cabins mounted on trailers. Whether for short-term vacation rentals or long-term residences, our luxury travel trailers combine mobility with premium craftsmanship.',
    image: '/images/luxury-travel-trailers.png',
    href: '/services/luxury-travel-trailers',
  },
  {
    title: 'Autonomous Retail',
    description: 'AI and computer vision powered micromarts delivering the next generation of self-service shopping. With 99.96% transaction accuracy and 1M+ monthly transactions, our autonomous stores serve apartments, offices, hospitals, and transportation hubs.',
    image: '/images/autonomous-retail-open-store.jpg',
    href: '/services/autonomous-retail',
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-rose-900 via-rose-800 to-rose-900 py-24">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Our Services</h1>
          <p className="text-xl text-rose-100">
            Five innovative service lines designed to elevate hospitality experiences.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center`}
              >
                <div className="lg:w-1/2">
                  <div className="relative h-80 rounded-2xl overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <h2 className="text-3xl font-serif font-bold mb-4">{service.title}</h2>
                  <p className="text-gray-600 text-lg mb-6">{service.description}</p>
                  <Link
                    href={service.href}
                    className="inline-block bg-rose-800 text-white px-6 py-3 rounded-full hover:bg-rose-900 transition-colors font-medium"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
