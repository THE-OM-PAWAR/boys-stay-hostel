import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { StructuredData } from '@/components/structured-data';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://boyshostelbhopal.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Best Hostel in Bhopal | Jain's boys Stay MP Nagar - Luxury & Secure Accommodation",
    template: "%s | Jain's boys Stay Bhopal"
  },
  description:
    "Jain's boys Stay - Best luxury boys hostel in Bhopal, MP Nagar. Fully air-cooled campus, AC rooms, gym, yoga room, RO water, WiFi, entertainment room, pure veg food, 24/7 security. Top-rated hostel near MP Nagar Bhopal. Book now!",
  keywords: [
    'best hostel in bhopal',
    'hostel in bhopal',
    'boys hostel in mp nagar',
    'luxury boys hostel bhopal',
    'secure boys hostel bhopal',
    'affordable boys hostel mp nagar',
    'top hostel near mp nagar bhopal',
    'boys hostel mp nagar',
    'student hostel bhopal',
    'accommodation bhopal',
    'hostel near me',
    'hostel near mp nagar',
    'hostel near aiims bhopal',
    'hostel near air port bhopal',
    'hostel near airport bhopal',
    'hostel near railway station bhopal',
    'hostel near bus stand bhopal',
    'hostel near metro station bhopal',
    'hostel near hospital bhopal',
    'hostel near school bhopal',
    'hostel near college bhopal',
    'hostel near university bhopal',
    'hostel near mall bhopal',
    'hostel near rani kamlapati station',
    'hostel near isbt bhopal',
    'hostel near db city mall',
    'boys pg in bhopal',
    'hostel with mess bhopal',
    'affordable hostel bhopal',
    'jains boys stay',
    'jains boys stay bhopal',
    'jains boys stay mp nagar',
    'ac rooms hostel bhopal',
    'air conditioned hostel bhopal',
    'hostel with gym bhopal',
    'hostel with yoga room bhopal',
    'boys hostel near navoday hospital',
    'hostel zone 2 mp nagar',
    'boys pg near mp nagar',
    'student accommodation bhopal',
    'boys hostel with mess bhopal',
    'luxury accommodation bhopal',
    'secure accommodation bhopal',
    'hostel with wifi bhopal',
    'hostel with ro water bhopal',
    'hostel with entertainment room bhopal',
    'hostel with guest room bhopal',
    'pure veg hostel bhopal',
    'vegetarian hostel bhopal',
    'hostel with cctv bhopal',
    '24/7 security hostel bhopal',
    'hostel with lift bhopal',
    'hostel with power backup bhopal',
    'hostel with pick drop bhopal',
    'boys hostel near rani kamlapati station',
    'boys hostel near isbt bhopal',
    'boys hostel near db city mall',
    'boys hostel near aiims bhopal',
    'cheap hostel in bhopal',
    'budget hostel bhopal',
    'premium hostel bhopal',
    'modern hostel bhopal',
    'fully air cooled hostel bhopal',
    'double sharing room bhopal',
    'triple sharing room bhopal',
    'boys hostel booking bhopal',
    'hostel for students bhopal',
    'hostel for working professionals bhopal',
    'boys stay bhopal',
    'boys stay mp nagar',
    'best boys pg bhopal',
    'boys paying guest bhopal',
    'hostel facilities bhopal',
    'boys hostel amenities bhopal',
    'hostel near mp nagar zone 2',
    'boys hostel plot 106 mp nagar',
    'hostel near navoday hospital bhopal'
  ],
  authors: [{ name: "Jain's boys Stay" }],
  creator: "Jain's boys Stay",
  publisher: "Jain's boys Stay",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName: "Jain's boys Stay",
    title: "Best Hostel in Bhopal | Jain's boys Stay MP Nagar - Luxury & Secure",
    description: "Jain's boys Stay - Best luxury boys hostel in Bhopal, MP Nagar. Fully air-cooled campus, AC rooms, gym, yoga room, RO water, WiFi, entertainment room, pure veg food, 24/7 security. Top-rated hostel near MP Nagar Bhopal.",
    images: [
      {
        url: `${siteUrl}/hero.png`,
        width: 1200,
        height: 630,
        alt: "Jain's boys Stay - Best Hostel in Bhopal MP Nagar",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Best Hostel in Bhopal | Jain's boys Stay MP Nagar",
    description: "Jain's boys Stay - Best luxury boys hostel in Bhopal, MP Nagar. Fully air-cooled campus, AC rooms, gym, yoga room, RO water, WiFi, entertainment room, pure veg food, 24/7 security.",
    images: [`${siteUrl}/hero.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${poppins.variable}`}>
      <head>
        <StructuredData />
      </head>
      <body className={poppins.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
