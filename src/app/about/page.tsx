import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | White Rose Hospitality',
  description: 'Learn about White Rose Hospitality and our commitment to exceptional service.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-rose-900 to-rose-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-serif font-bold mb-6">About Us</h1>
          <p className="text-xl text-rose-100 max-w-2xl mx-auto">
            Dedicated to creating memorable experiences through exceptional hospitality
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4">
                White Rose Hospitality was founded with a simple yet powerful vision:
                to transform ordinary moments into extraordinary memories through
                exceptional hospitality services.
              </p>
              <p className="text-gray-600 mb-4">
                Our team brings together years of experience in event planning,
                catering, and hospitality management. We believe that every event,
                no matter the size, deserves the highest level of care and attention.
              </p>
              <p className="text-gray-600">
                From intimate gatherings to grand celebrations, we approach each
                project with creativity, precision, and a genuine passion for
                making people feel special.
              </p>
            </div>
            <div className="bg-rose-100 rounded-2xl p-8 h-80 flex items-center justify-center">
              <span className="text-rose-300 text-lg">[Image Placeholder]</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-12 text-center">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Excellence',
                description:
                  'We strive for excellence in every detail, ensuring that each event exceeds expectations.',
              },
              {
                title: 'Integrity',
                description:
                  'Honesty and transparency are at the core of how we work with our clients and partners.',
              },
              {
                title: 'Passion',
                description:
                  'Our genuine love for hospitality drives us to create truly memorable experiences.',
              },
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="text-xl font-semibold text-rose-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
