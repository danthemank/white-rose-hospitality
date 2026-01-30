import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Explore Central PA | White Rose Hospitality',
  description: 'Curated local tourism experiences across Central Pennsylvania — Gettysburg, Lancaster, Harrisburg, and the Susquehanna River.',
};

const destinations = [
  {
    title: 'Gettysburg',
    description: 'Walk the hallowed grounds of one of America\'s most pivotal battlefields. Our guided experiences bring Civil War history to life with expert narration and behind-the-scenes access.',
    image: '/images/white-rose-hospitality-gettysburg.jpg',
  },
  {
    title: 'Lancaster',
    description: 'Discover Lancaster County\'s rich culture — from Amish farmlands and artisan markets to world-class dining and craft beverages. A destination that blends tradition with modern charm.',
    image: '/images/white-rose-hospitality-lancaster.jpg',
  },
  {
    title: 'Harrisburg',
    description: 'Pennsylvania\'s capital city offers stunning architecture, riverside parks, vibrant arts scenes, and a growing food and drink culture along the Susquehanna.',
    image: '/images/white-rose-hospitality-harrisburg.jpg',
  },
  {
    title: 'Susquehanna River Trails',
    description: 'Hike the scenic trails along the Susquehanna River. From Chiques Rock in Lancaster County to hidden overlooks and river adventures, nature is always calling.',
    image: '/images/white-rose-hospitality-susquehanna-river-hike.jpg',
  },
];

const morePhotos = [
  { src: '/images/white-rose-hospitality-susquehanna-river-chiques-rock-hike-lancaster-county.jpg', alt: 'Chiques Rock, Lancaster County' },
  { src: '/images/white-rose-hospitality-susquehanna-river-hike-boat.jpg', alt: 'Susquehanna River Boating' },
  { src: '/images/white-rose-hospitality-susquehanna-river-statue-of-liberty.jpg', alt: 'Susquehanna River Statue of Liberty' },
];

export default function ExplorePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src="/images/white-rose-hospitality-gettysburg.jpg"
          alt="Explore Central PA"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Explore</h1>
          <p className="text-xl text-gray-200">
            Curated experiences across Central Pennsylvania&apos;s most iconic destinations
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold mb-6">Discover Central Pennsylvania</h2>
          <p className="text-lg text-gray-600 mb-6">
            Central Pennsylvania is one of America&apos;s best-kept secrets — a region steeped in history, natural beauty, and authentic culture. From the battlefields of Gettysburg to the rolling farmlands of Lancaster County, from the capital city of Harrisburg to the scenic trails along the Susquehanna River, there&apos;s always something to discover.
          </p>
          <p className="text-lg text-gray-600">
            White Rose Hospitality curates guided tours and local experiences that showcase the very best of what this region has to offer. Whether you&apos;re a visitor exploring for the first time or a local looking for something new, our Explore experiences are designed to create lasting memories.
          </p>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">Featured Destinations</h2>
          <div className="space-y-16">
            {destinations.map((dest, index) => (
              <div
                key={dest.title}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center`}
              >
                <div className="lg:w-1/2">
                  <div className="relative h-80 rounded-2xl overflow-hidden">
                    <Image src={dest.image} alt={dest.title} fill className="object-cover" />
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <h3 className="text-2xl font-serif font-bold mb-4">{dest.title}</h3>
                  <p className="text-gray-600 text-lg">{dest.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">More from the Region</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {morePhotos.map((photo) => (
              <div key={photo.alt} className="relative h-64 rounded-2xl overflow-hidden">
                <Image src={photo.src} alt={photo.alt} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <p className="absolute bottom-4 left-4 text-white font-medium">{photo.alt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-rose-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">Plan Your Experience</h2>
          <p className="text-xl mb-8 text-rose-100">
            Let us curate a Central PA experience tailored just for you.
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
