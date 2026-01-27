import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services | White Rose Hospitality',
  description: 'Explore our comprehensive hospitality services including event planning, catering, and more.',
};

const services = [
  {
    title: 'Event Planning',
    description:
      'From concept to execution, we handle every detail of your special event. Whether it\'s a wedding, corporate gathering, or private celebration, our team ensures a seamless experience.',
    features: ['Venue selection', 'Timeline management', 'Vendor coordination', 'Day-of coordination'],
  },
  {
    title: 'Catering Services',
    description:
      'Delight your guests with our exceptional culinary offerings. Our catering team creates customized menus that perfectly complement your event.',
    features: ['Custom menu design', 'Dietary accommodations', 'Professional service staff', 'Bar services'],
  },
  {
    title: 'Corporate Events',
    description:
      'Elevate your business gatherings with our professional corporate event services. From conferences to team-building activities, we create impactful experiences.',
    features: ['Conference planning', 'Team building events', 'Product launches', 'Networking events'],
  },
  {
    title: 'Wedding Services',
    description:
      'Make your special day truly unforgettable. Our wedding specialists work closely with you to bring your vision to life with elegance and precision.',
    features: ['Full planning packages', 'Decor and styling', 'Ceremony coordination', 'Reception management'],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-rose-900 to-rose-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-serif font-bold mb-6">Our Services</h1>
          <p className="text-xl text-rose-100 max-w-2xl mx-auto">
            Comprehensive hospitality solutions tailored to your unique needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl p-8 hover:border-rose-300 hover:shadow-lg transition-all"
              >
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-gray-700"
                    >
                      <svg
                        className="w-5 h-5 text-rose-600 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us today to discuss how we can help make your event exceptional.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-rose-800 text-white px-8 py-4 rounded-full font-semibold hover:bg-rose-900 transition-colors"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
