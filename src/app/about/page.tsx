import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | White Rose Hospitality',
  description: 'Based in York, PA — White Rose Hospitality delivers innovative hospitality solutions across Central Pennsylvania.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-rose-900 via-rose-800 to-rose-900 py-24">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">About Us</h1>
          <p className="text-xl text-rose-100">
            Innovative hospitality, rooted in Central Pennsylvania
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
            <div className="lg:w-1/3">
              <Image
                src="/images/new-logo-vertical.png"
                alt="White Rose Hospitality"
                width={300}
                height={300}
                className="mx-auto"
              />
            </div>
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-serif font-bold mb-6">Who We Are</h2>
              <p className="text-lg text-gray-600 mb-4">
                White Rose Hospitality is based in York, Pennsylvania — the White Rose City — serving Central Pennsylvania and beyond with innovative hospitality solutions that span from traditional event services to cutting-edge autonomous retail technology.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                We operate five distinct service lines, each designed to meet different hospitality needs: Events, Explore, Perfect Pour Trailers, Luxury Travel Trailers, and Autonomous Retail. This diversity allows us to serve a wide range of clients — from breweries looking for mobile bar solutions to property owners seeking autonomous retail installations.
              </p>
              <p className="text-lg text-gray-600">
                What ties it all together is our commitment to quality, innovation, and exceptional service. Every product we build and every experience we create reflects our belief that hospitality should be both impressive and accessible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Lines Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">What We Do</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Events', desc: 'Full-service event hospitality with mobile bar service, catering coordination, and event planning.', href: '/services/events' },
              { title: 'Explore', desc: 'Curated local tourism experiences across Central PA — Gettysburg, Lancaster, Harrisburg, and more.', href: '/services/explore' },
              { title: 'Perfect Pour Trailers', desc: 'Custom-built mobile bar trailers for breweries and beverage suppliers.', href: '/services/perfect-pour-trailers' },
              { title: 'Luxury Travel Trailers', desc: 'High-quality tiny houses on trailers for vacation rentals or full-time living.', href: '/services/luxury-travel-trailers' },
              { title: 'Autonomous Retail', desc: 'AI-powered micromarts with 99.96% transaction accuracy for properties and retailers.', href: '/services/autonomous-retail' },
            ].map((s) => (
              <Link key={s.title} href={s.href} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
                <h3 className="text-xl font-semibold mb-3 text-rose-800 group-hover:text-rose-900">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">Our Home</h2>
          <p className="text-lg text-gray-600 mb-4">
            York, Pennsylvania — known as the White Rose City — is our home base. From here, we serve the entire Central Pennsylvania region including York County, Lancaster County, Dauphin County, Adams County, and beyond.
          </p>
          <p className="text-lg text-gray-600">
            Our location at the crossroads of Central PA gives us easy access to major markets while keeping us rooted in the community we love.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-rose-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">Let&apos;s Work Together</h2>
          <p className="text-xl mb-8 text-rose-100">
            Ready to explore what White Rose Hospitality can do for you?
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-rose-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
