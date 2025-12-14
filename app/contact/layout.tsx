import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://boyshostelbhopal.com';

export const metadata: Metadata = {
  title: "Contact Boys Hostel Bhopal | Jain Hostel MP Nagar - Book Your Stay",
  description: "Contact Boys Hostel Bhopal - Jain Hostel MP Nagar. Get in touch for bookings, inquiries about our best boys hostel in Bhopal. Call +91 98260 80999 or visit us at Plot No. 106, Near Navoday Hospital, Zone-2 M.P. Nagar, Bhopal - 462011.",
  keywords: [
    'boys hostel bhopal contact',
    'boys hostel contact bhopal',
    'hostel booking mp nagar',
    'boys stay hostel phone number',
    'hostel address bhopal',
    'boys hostel bhopal phone number'
  ],
  openGraph: {
    title: "Contact Boys Hostel Bhopal | Jain Hostel MP Nagar",
    description: "Contact Boys Hostel Bhopal - Jain Hostel MP Nagar. Get in touch for bookings and inquiries about our best boys hostel in Bhopal.",
    url: `${siteUrl}/contact`,
    images: [
      {
        url: `${siteUrl}/hero.png`,
        width: 1200,
        height: 630,
        alt: "Contact Jain Hostel - Bhopal MP Nagar",
      },
    ],
  },
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


