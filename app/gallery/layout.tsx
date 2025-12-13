import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://boysstayhostel.com';

export const metadata: Metadata = {
  title: "Photo Gallery | Jain's Boy's Stay Bhopal MP Nagar - Rooms & Facilities",
  description: "View photo gallery of Jain's Boy's Stay Bhopal MP Nagar. See our AC rooms, gym, yoga room, entertainment room, and modern amenities at the best luxury hostel in Bhopal.",
  keywords: [
    'boys hostel gallery bhopal',
    'hostel photos mp nagar',
    'hostel rooms images bhopal',
    'boys stay hostel gallery'
  ],
  openGraph: {
    title: "Photo Gallery | Jain's Boy's Stay Bhopal MP Nagar",
    description: "View photo gallery of Jain's Boy's Stay Bhopal MP Nagar. See our AC rooms, gym, yoga room, entertainment room, and modern amenities.",
    url: `${siteUrl}/gallery`,
    images: [
      {
        url: `${siteUrl}/hero.png`,
        width: 1200,
        height: 630,
        alt: "Jain's Boy's Stay Gallery - Bhopal MP Nagar",
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


