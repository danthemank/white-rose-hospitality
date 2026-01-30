import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Perfect Pour Trailers | White Rose Hospitality',
  description: 'Custom-built mobile bar trailers for breweries and beverage suppliers. Multiple beer taps, sleek design, and on-the-go sales.',
};

const features = [
  { title: 'Robust Frame & Chassis', description: 'Built on a heavy-duty trailer frame designed for road travel and frequent use.' },
  { title: 'Sleek Black Exterior', description: 'Professional, eye-catching design that draws crowds and elevates your brand.' },
  { title: 'Open-Side Bar Design', description: 'Wide serving window with spacious countertop for efficient service at high-volume events.' },
  { title: 'Multiple Beer Taps', description: 'Serve multiple varieties on draft with professional-grade tap systems.' },
  { title: 'Integrated Shelving', description: 'Built-in storage for glassware, supplies, and merchandise display.' },
  { title: 'Cooler Compartments', description: 'Integrated refrigeration keeps your product at the perfect temperature.' },
];

const benefits = [
  { title: 'On-the-Go Sales', description: 'Take your product directly to festivals, fairs, sporting events, and community gatherings.' },
  { title: 'Customizable Branding', description: 'Wrap the exterior with your brewery or brand identity for maximum visibility.' },
  { title: 'Quick Setup', description: 'Arrive, park, open the side, and you\'re ready to serve. Minimal setup time means more selling time.' },
  { title: 'Self-Contained Unit', description: 'Everything you need in one trailer — taps, coolers, counters, and storage.' },
];

export default function PerfectPourTrailersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src="/images/perfect-pour-trailers.jpg"
          alt="Perfect Pour Trailers"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Perfect Pour Trailers</h1>
          <p className="text-xl text-gray-200">
            Innovative Mobile Bar Trailers for Breweries &amp; Beverage Suppliers
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold mb-6">Take Your Taps on the Road</h2>
          <p className="text-lg text-gray-600 mb-6">
            Perfect Pour Trailers are custom-built mobile bar trailers designed specifically for breweries and beverage suppliers who want to bring their product directly to customers. Whether you&apos;re pouring at a craft beer festival, a local farmers market, or a private event, our trailers provide a professional, fully equipped bar experience anywhere you go.
          </p>
          <p className="text-lg text-gray-600">
            Each trailer is built to order with your specific needs in mind — from the number of taps to custom branding on the exterior. The result is a mobile sales unit that&apos;s as impressive as it is functional.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-rose-800">{f.title}</h3>
                <p className="text-gray-600">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">Benefits</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((b) => (
              <div key={b.title} className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-rose-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{b.title}</h3>
                  <p className="text-gray-600">{b.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-rose-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">Design Your Perfect Pour Trailer</h2>
          <p className="text-xl mb-8 text-rose-100">
            Contact us to discuss your custom mobile bar trailer — built to your specifications and ready for the road.
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
