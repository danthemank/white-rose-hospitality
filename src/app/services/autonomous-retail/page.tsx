import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Autonomous Retail | White Rose Hospitality',
  description: 'AI and computer vision powered micromarts — 99.96% transaction accuracy, self-service shopping for apartments, offices, hospitals, and more.',
};

const stats = [
  { value: '99.96%', label: 'Transaction Accuracy' },
  { value: '99.98%', label: 'Product Recognition' },
  { value: '1M+', label: 'Monthly Transactions' },
];

const forPropertyOwners = [
  { title: 'Medical Centers', description: 'Provide 24/7 convenience for staff, patients, and visitors without the overhead of a staffed store.' },
  { title: 'Apartment Complexes', description: 'Add a premium amenity that residents love — a fully stocked micrommart in their building.' },
  { title: 'Transportation Hubs', description: 'Airports, bus stations, and train depots — high-traffic locations where speed and convenience matter most.' },
];

const forRetailers = [
  { title: 'Retail Chains', description: 'Extend your brand presence into new locations with a white-label autonomous store.' },
  { title: 'Hospitals & Offices', description: 'Serve employees and visitors with a self-service store that operates around the clock.' },
  { title: 'Universities', description: 'Meet students where they are — dorms, student centers, and campus facilities.' },
];

const locations = [
  { src: '/images/autonomous-retail-apartment.png', alt: 'Apartment Complex' },
  { src: '/images/autonomous-retail-transport.png', alt: 'Transportation Hub' },
  { src: '/images/autonomous-retail-office.png', alt: 'Office Building' },
  { src: '/images/autonomous-retail-restaurant.png', alt: 'Restaurant & Shop' },
];

export default function AutonomousRetailPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src="/images/autonomous-retail-open-store.jpg"
          alt="Autonomous Retail"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Autonomous Retail</h1>
          <p className="text-xl text-gray-200">
            The Next Generation of Self-Service Shopping
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold mb-6">AI-Powered Micromarts</h2>
          <p className="text-lg text-gray-600 mb-6">
            White Rose Hospitality brings autonomous retail technology to properties and retailers across the region. Our AI and computer vision powered micromarts deliver a seamless, cashierless shopping experience — customers walk in, grab what they need, and walk out. The technology handles the rest.
          </p>
          <p className="text-lg text-gray-600">
            With industry-leading accuracy and millions of transactions processed monthly, our autonomous retail solution is proven, reliable, and ready to deploy in your space.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-rose-800 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl md:text-5xl font-serif font-bold mb-2">{stat.value}</div>
                <div className="text-rose-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two-column: Property Owners + Retailers */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-8">For Property Owners</h2>
              <div className="space-y-6">
                {forPropertyOwners.map((item) => (
                  <div key={item.title} className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="text-lg font-semibold mb-2 text-rose-800">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold mb-8">For Retailers</h2>
              <div className="space-y-6">
                {forRetailers.map((item) => (
                  <div key={item.title} className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="text-lg font-semibold mb-2 text-rose-800">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">Where It Works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((loc) => (
              <div key={loc.alt} className="relative h-64 rounded-2xl overflow-hidden">
                <Image src={loc.src} alt={loc.alt} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <p className="absolute bottom-4 left-4 text-white font-medium text-sm">{loc.alt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-8">See It in Action</h2>
          <video
            className="w-full rounded-2xl shadow-lg"
            controls
            playsInline
            preload="metadata"
          >
            <source src="/images/autonomous-retail.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-rose-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">Schedule a Demo</h2>
          <p className="text-xl mb-8 text-rose-100">
            See how autonomous retail can transform your property or extend your retail brand into new spaces.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-rose-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Schedule a Demo
          </Link>
        </div>
      </section>
    </>
  );
}
