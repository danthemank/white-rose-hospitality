import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'White Rose Hospitality | Exceptional Hospitality Services',
  description:
    'White Rose Hospitality provides exceptional hospitality services that create memorable experiences for every guest.',
  keywords: ['hospitality', 'hotel', 'events', 'catering', 'wedding', 'corporate events'],
  openGraph: {
    title: 'White Rose Hospitality',
    description: 'Exceptional Hospitality Services',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} antialiased font-sans`}>
        <Navigation />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
