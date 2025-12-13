import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://boyshostelbhopal.com';

export const metadata: Metadata = {
  title: "Contact Us | Jain's boys Stay Bhopal MP Nagar - Book Your Stay",
  description: "Contact Jain's boys Stay Bhopal MP Nagar. Get in touch for bookings, inquiries about our best luxury hostel in Bhopal. Call +91 98260 80999 or visit us at Plot No. 106, Near Navoday Hospital, Zone-2 M.P. Nagar, Bhopal - 462011.",
  keywords: [
    'boys hostel contact bhopal',
    'hostel booking mp nagar',
    'boys stay hostel phone number',
    'hostel address bhopal'
  ],
  openGraph: {
    title: "Contact Us | Jain's boys Stay Bhopal MP Nagar",
    description: "Contact Jain's boys Stay Bhopal MP Nagar. Get in touch for bookings and inquiries about our best luxury hostel in Bhopal.",
    url: `${siteUrl}/contact`,
    images: [
      {
        url: `${siteUrl}/hero.png`,
        width: 1200,
        height: 630,
        alt: "Contact Jain's boys Stay - Bhopal MP Nagar",
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


