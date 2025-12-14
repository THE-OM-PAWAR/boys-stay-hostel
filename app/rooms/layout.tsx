import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://boyshostelbhopal.com';

export const metadata: Metadata = {
  title: 'AC Rooms at Boys Hostel Bhopal | Double & Triple Sharing MP Nagar',
  description: "Book AC rooms at Boys Hostel Bhopal - Jain boys Stay MP Nagar. Double sharing and triple sharing rooms with modern amenities. Best boys hostel in Bhopal with secure accommodation.",
  keywords: [
    'boys hostel bhopal rooms',
    'ac rooms in bhopal',
    'double sharing room bhopal',
    'triple sharing room bhopal',
    'boys hostel rooms mp nagar',
    'hostel rooms bhopal',
    'affordable rooms bhopal',
    'boys hostel bhopal ac rooms'
  ],
  openGraph: {
    title: 'AC Rooms at Boys Hostel Bhopal | Double & Triple Sharing MP Nagar',
    description: "Book AC rooms at Boys Hostel Bhopal - Jain boys Stay MP Nagar. Double sharing and triple sharing rooms with modern amenities at the best boys hostel in Bhopal.",
    url: `${siteUrl}/rooms`,
    images: [
      {
        url: `${siteUrl}/images/galleryroom2.jpeg`,
        width: 1200,
        height: 630,
        alt: "AC Rooms in Bhopal - Jain boys Stay MP Nagar",
      },
    ],
  },
  alternates: {
    canonical: `${siteUrl}/rooms`,
  },
};

export default function RoomsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


