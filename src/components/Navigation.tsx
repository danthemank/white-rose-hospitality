'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

const serviceLinks = [
  { href: '/services/events', label: 'Events' },
  { href: '/services/explore', label: 'Explore' },
  { href: '/services/perfect-pour-trailers', label: 'Perfect Pour Trailers' },
  { href: '/services/luxury-travel-trailers', label: 'Luxury Travel Trailers' },
  { href: '/services/autonomous-retail', label: 'Autonomous Retail' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/new-logo-horizontal.png"
              alt="White Rose Hospitality"
              width={200}
              height={52}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-rose-800 transition-colors font-medium">
              Home
            </Link>

            {/* Services Dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                onMouseEnter={() => setServicesOpen(true)}
                className="text-gray-700 hover:text-rose-800 transition-colors font-medium flex items-center gap-1"
              >
                Services
                <svg className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div
                  className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2"
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href="/services"
                    className="block px-4 py-2 text-gray-700 hover:bg-rose-50 hover:text-rose-800 transition-colors font-medium"
                    onClick={() => setServicesOpen(false)}
                  >
                    All Services
                  </Link>
                  <div className="border-t border-gray-100 my-1" />
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-gray-600 hover:bg-rose-50 hover:text-rose-800 transition-colors"
                      onClick={() => setServicesOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about" className="text-gray-700 hover:text-rose-800 transition-colors font-medium">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-rose-800 transition-colors font-medium">
              Contact
            </Link>
            <Link
              href="/contact"
              className="bg-rose-800 text-white px-6 py-2 rounded-full hover:bg-rose-900 transition-colors"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <Link href="/" className="block py-2 text-gray-700 hover:text-rose-800" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <button
              className="w-full text-left py-2 text-gray-700 hover:text-rose-800 flex items-center justify-between"
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            >
              Services
              <svg className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileServicesOpen && (
              <div className="pl-4">
                <Link href="/services" className="block py-2 text-gray-600 hover:text-rose-800" onClick={() => setIsOpen(false)}>
                  All Services
                </Link>
                {serviceLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="block py-2 text-gray-600 hover:text-rose-800" onClick={() => setIsOpen(false)}>
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
            <Link href="/about" className="block py-2 text-gray-700 hover:text-rose-800" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="/contact" className="block py-2 text-gray-700 hover:text-rose-800" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
            <Link
              href="/contact"
              className="block mt-4 bg-rose-800 text-white px-6 py-2 rounded-full text-center hover:bg-rose-900"
              onClick={() => setIsOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
