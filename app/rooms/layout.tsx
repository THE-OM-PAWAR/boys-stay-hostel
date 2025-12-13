import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://boysstayhostel.com';

export const metadata: Metadata = {
  title: 'AC Rooms in Bhopal | Boys Hostel MP Nagar - Double & Triple Sharing',
  description: "Book AC rooms in Bhopal at Jain's Boy's Stay MP Nagar. Double sharing and triple sharing rooms with modern amenities. Best luxury boys hostel in Bhopal with secure accommodation.",
  keywords: [
    'ac rooms in bhopal',
    'double sharing room bhopal',
    'triple sharing room bhopal',
    'boys hostel rooms mp nagar',
    'hostel rooms bhopal',
    'affordable rooms bhopal'
  ],
  openGraph: {
    title: 'AC Rooms in Bhopal | Boys Hostel MP Nagar',
    description: "Book AC rooms in Bhopal at Jain's Boy's Stay MP Nagar. Double sharing and triple sharing rooms with modern amenities.",
    url: `${siteUrl}/rooms`,
    images: [
      {
        url: `${siteUrl}/images/galleryroom2.jpeg`,
        width: 1200,
        height: 630,
        alt: "AC Rooms in Bhopal - Jain's Boy's Stay MP Nagar",
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


