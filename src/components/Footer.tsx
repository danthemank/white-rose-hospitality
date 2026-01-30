import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Image
              src="/images/new-logo-horizontal.png"
              alt="White Rose Hospitality"
              width={200}
              height={52}
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="mt-4 text-gray-400 max-w-md">
              Based in York, PA — serving Central Pennsylvania with innovative hospitality solutions from events and experiences to autonomous retail.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services/events" className="text-gray-400 hover:text-rose-400 transition-colors">Events</Link></li>
              <li><Link href="/services/explore" className="text-gray-400 hover:text-rose-400 transition-colors">Explore</Link></li>
              <li><Link href="/services/perfect-pour-trailers" className="text-gray-400 hover:text-rose-400 transition-colors">Perfect Pour Trailers</Link></li>
              <li><Link href="/services/luxury-travel-trailers" className="text-gray-400 hover:text-rose-400 transition-colors">Luxury Travel Trailers</Link></li>
              <li><Link href="/services/autonomous-retail" className="text-gray-400 hover:text-rose-400 transition-colors">Autonomous Retail</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-rose-400 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-rose-400 transition-colors">Contact</Link></li>
            </ul>
            <div className="mt-6">
              <p className="text-gray-400 text-sm">York, Pennsylvania</p>
              <p className="text-gray-400 text-sm">info@whiterosehospitality.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} White Rose Hospitality. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
