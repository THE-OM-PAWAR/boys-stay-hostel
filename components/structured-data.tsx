export function StructuredData() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://boyshostelbhopal.com';
  
  // LocalBusiness structured data
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteUrl}#organization`,
    name: "Jain boys Stay",
    alternateName: "Boys Hostel Bhopal - Jain boys Stay hostel",
    description: "Boys Hostel Bhopal - Jain boys Stay hostel. Best luxury boys hostel in Bhopal, MP Nagar. Jain boys Stay offers fully air-cooled campus, AC rooms, gym, yoga room, RO water, WiFi, entertainment room, pure veg hygienic food, 24/7 security, and pick & drop facility.",
    url: siteUrl,
    logo: `${siteUrl}/logo.svg`,
    image: [
      `${siteUrl}/hero.png`,
      `${siteUrl}/about.png`
    ],
    telephone: '+919826080999',
    email: 'modi_investmentpoint@yahoo.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Plot No. 106, Near Navoday Hospital, Zone-2 M.P. Nagar',
      addressLocality: 'Bhopal',
      addressRegion: 'Madhya Pradesh',
      postalCode: '462011',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '23.2599',
      longitude: '77.4126'
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      opens: '00:00',
      closes: '23:59'
    },
    priceRange: '₹₹',
    servesCuisine: 'Indian',
    amenityFeature: [
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Air Conditioning',
        value: true
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Fully Air-Cooled Campus',
        value: true
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'WiFi',
        value: true
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Gym',
        value: true
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Yoga Room',
        value: true
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'RO Water',
        value: true
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Entertainment Room',
        value: true
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Guest Room',
        value: true
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Pure Veg Food',
        value: true
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: '24/7 Security',
        value: true
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'CCTV Surveillance',
        value: true
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Lift Facility',
        value: true
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: '24/7 Power Backup',
        value: true
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Pick & Drop Facility',
        value: true
      }
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '150',
      bestRating: '5',
      worstRating: '1'
    },
    sameAs: [
      // Add social media links when available
    ]
  };

  // Hostel/LodgingBusiness structured data
  const hostelSchema = {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    '@id': `${siteUrl}#lodging`,
    name: "Jain boys Stay",
    description: "Boys Hostel Bhopal - Jain boys Stay hostel. Best luxury boys hostel in Bhopal, MP Nagar. Jain boys Stay offers fully air-cooled campus, AC rooms, gym, yoga room, RO water, WiFi, entertainment room, pure veg hygienic food, 24/7 security, and pick & drop facility.",
    url: siteUrl,
    image: [
      `${siteUrl}/hero.png`,
      `${siteUrl}/about.png`
    ],
    telephone: '+919826080999',
    email: 'modi_investmentpoint@yahoo.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Plot No. 106, Near Navoday Hospital, Zone-2 M.P. Nagar',
      addressLocality: 'Bhopal',
      addressRegion: 'Madhya Pradesh',
      postalCode: '462011',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '23.2599',
      longitude: '77.4126'
    },
    checkinTime: '12:00',
    checkoutTime: '11:00',
    numberOfRooms: '50',
    starRating: {
      '@type': 'Rating',
      ratingValue: '4.8'
    },
    amenityFeature: [
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Air Conditioning',
        value: true
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Fully Air-Cooled Campus',
        value: true
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Free WiFi',
        value: true
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Gym',
        value: true
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Yoga Room',
        value: true
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'RO Water',
        value: true
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Entertainment Room',
        value: true
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Guest Room',
        value: true
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Pure Veg Food',
        value: true
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: '24/7 Security',
        value: true
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'CCTV Surveillance',
        value: true
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Lift Access',
        value: true
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: '24/7 Power Backup',
        value: true
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Pick & Drop Facility',
        value: true
      }
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '150',
      bestRating: '5',
      worstRating: '1'
    }
  };

  // BreadcrumbList for navigation
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteUrl
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Rooms',
        item: `${siteUrl}/rooms`
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Gallery',
        item: `${siteUrl}/gallery`
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Contact',
        item: `${siteUrl}/contact`
      }
    ]
  };

  // FAQ Schema (expanded with more basic FAQs)
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Boys hostel Bhopal?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Jain boys Stay Hostel is a leading boys hostel in Bhopal, offering top-notch facilities and a comfortable stay experience for students and working professionals in MP Nagar."
        }
      },
      {
        '@type': 'Question',
        name: 'What is the best boys hostel in Bhopal?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Jain boys Stay hostel is the best boys hostel in Bhopal, located in MP Nagar. We offer fully air-cooled campus, AC rooms, gym, yoga room, RO water, WiFi, entertainment room, pure veg hygienic food, 24/7 security, CCTV surveillance, lift facility, power backup, and pick & drop facility."
        }
      },
      {
        '@type': 'Question',
        name: "Where is Jain boys Stay hostel located?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Jain boys Stay hostel is located at Plot No. 106, Near Navoday Hospital, Zone-2 M.P. Nagar, Bhopal - 462011. We are conveniently located near Rani Kamlapati Station, ISBT Bus Stand, and DB City Mall."
        }
      },
      {
        '@type': 'Question',
        name: "What amenities are available at Jain boys Stay hostel?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Jain boys Stay hostel offers fully air-cooled campus, AC rooms, gym, yoga room, RO water cooler, WiFi-covered campus, entertainment room with games, guest room, pure veg hygienic food, 24/7 security guard, CCTV camera surveillance, lift facility, 24/7 power backup, and pick & drop facility."
        }
      },
      {
        '@type': 'Question',
        name: "How can I book a room at Jain boys Stay hostel?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "You can book a room by contacting us through our website form, calling us at +91 98260 80999, or visiting our hostel directly. Early booking is recommended to secure your seat."
        }
      },
      {
        '@type': 'Question',
        name: "Is food included in the hostel fees?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Yes, Jain boys Stay hostel provides pure vegetarian hygienic food as part of the hostel package. The meals are prepared fresh daily."
        }
      },
      {
        '@type': 'Question',
        name: "Is there a girls hostel near MP Nagar Bhopal?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Yes, there are girls hostels near MP Nagar. Jain boys Stay hostel specializes in boys hostel accommodations, but we can guide you to good options for girls hostel as well."
        }
      },
      {
        '@type': 'Question',
        name: "Are the rooms air-conditioned?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Yes, we offer both AC and air-cooled rooms. All our rooms are well-ventilated for maximum comfort."
        }
      },
      {
        '@type': 'Question',
        name: "Is WiFi available for residents?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Yes, the entire campus is WiFi enabled and all residents have access to high-speed internet."
        }
      },
      {
        '@type': 'Question',
        name: "Do you offer 24/7 security at the hostel?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Yes, our hostel is secured with 24/7 security guards and CCTV surveillance to ensure safety for all residents."
        }
      },
      {
        '@type': 'Question',
        name: "Is there a gym and entertainment area in the hostel?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Yes, we provide an on-campus gym, yoga room, and various indoor entertainment facilities and games for residents."
        }
      },
      {
        '@type': 'Question',
        name: "Can working professionals stay at Jain boys Stay Hostel?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Yes, the hostel is open to students as well as working professionals who need comfortable and secure accommodation in Bhopal."
        }
      },
      {
        '@type': 'Question',
        name: "Is Jain boys Stay boys hostel near any hospitals or malls?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Yes, our hostel is conveniently located near Navoday Hospital and close to DB City Mall, making it easy to access healthcare and shopping facilities."
        }
      },
      {
        '@type': 'Question',
        name: "What types of rooms are available at the hostel?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Jain boys Stay hostel offers a variety of rooms including single, double, and triple sharing rooms with options for AC or air-cooled environment."
        }
      },
      {
        '@type': 'Question',
        name: "Who can stay at Jain boys Stay hostel?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Boys who are students or working professionals looking for quality accommodation in Bhopal can apply for a seat at Jain boys Stay hostel."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hostelSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}


