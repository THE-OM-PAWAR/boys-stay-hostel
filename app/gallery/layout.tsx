import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://boyshostelbhopal.com';

export const metadata: Metadata = {
  title: "Boys Hostel Bhopal Gallery | Photo Gallery - Rooms & Facilities MP Nagar",
  description: "View photo gallery of Boys Hostel Bhopal - Jain boys Stay MP Nagar. See our AC rooms, gym, yoga room, entertainment room, and modern amenities at the best boys hostel in Bhopal.",
  keywords: [
    'boys hostel bhopal gallery',
    'boys hostel gallery bhopal',
    'hostel photos mp nagar',
    'hostel rooms images bhopal',
    'boys stay hostel gallery',
    'boys hostel bhopal photos'
  ],
  openGraph: {
    title: "Boys Hostel Bhopal Gallery | Photo Gallery MP Nagar",
    description: "View photo gallery of Boys Hostel Bhopal - Jain boys Stay MP Nagar. See our AC rooms, gym, yoga room, entertainment room, and modern amenities at the best boys hostel in Bhopal.",
    url: `${siteUrl}/gallery`,
    images: [
      {
        url: `${siteUrl}/hero.png`,
        width: 1200,
        height: 630,
        alt: "Jain boys Stay Gallery - Bhopal MP Nagar",
      },
    ],
  },
  alternates: {
    canonical: `${siteUrl}/gallery`,
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


