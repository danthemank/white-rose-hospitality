import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Events | White Rose Hospitality',
  description: 'Full-service event hospitality — mobile bars, catering coordination, and event planning for festivals, weddings, and corporate events.',
};

const features = [
  {
    title: 'Mobile Bar Service',
    description: 'Our Perfect Pour Trailers bring a fully equipped bar directly to your event. Multiple beer taps, professional setup, and sleek presentation.',
  },
  {
    title: 'Event Planning',
    description: 'End-to-end coordination for corporate events, festivals, weddings, and private parties. We handle the details so you can enjoy the moment.',
  },
  {
    title: 'Catering Coordination',
    description: 'We work with top local caterers and vendors to deliver a seamless food and beverage experience tailored to your event.',
  },
  {
    title: 'Festival & Large-Scale Events',
    description: 'From beer festivals to community celebrations, we have the equipment and expertise to serve hundreds of guests efficiently.',
  },
  {
    title: 'Corporate Hospitality',
    description: 'Elevate your corporate events with premium bar service, branded experiences, and professional hospitality staff.',
  },
  {
    title: 'Private Parties',
    description: 'Birthdays, anniversaries, or any celebration — our mobile bar and event services add a special touch to your private gatherings.',
  },
];

export default function EventsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src="/images/perfect-pour-trailers.jpg"
          alt="Events"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Events</h1>
          <p className="text-xl text-gray-200">
            Unforgettable event hospitality across Central Pennsylvania
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold mb-6">Elevate Your Next Event</h2>
          <p className="text-lg text-gray-600 mb-6">
            White Rose Hospitality brings premium event services to Central Pennsylvania and beyond. Whether you&apos;re planning a craft beer festival, a corporate networking event, a wedding reception, or an intimate private gathering, our team delivers exceptional hospitality from start to finish.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Our flagship Perfect Pour Trailers provide a fully mobile, self-contained bar experience — complete with multiple beer taps, integrated cooling, and a sleek professional presentation that draws crowds and elevates any venue.
          </p>
          <p className="text-lg text-gray-600">
            We coordinate every detail: vendor management, staffing, setup, and teardown. You focus on your guests — we handle the rest.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">What We Offer</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-rose-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-rose-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">Plan Your Next Event</h2>
          <p className="text-xl mb-8 text-rose-100">
            Let us bring the bar, the planning, and the hospitality to your next event.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-rose-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
