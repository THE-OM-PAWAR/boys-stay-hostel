import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Haven Hostel - Your Home Away From Home',
  description:
    'Experience comfortable, affordable stays in the heart of the city. Connect with travelers from around the world.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${poppins.variable}`}>
      <body className={poppins.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
