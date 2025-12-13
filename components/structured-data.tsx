export function StructuredData() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://boyshostelbhopal.com';
  
  // LocalBusiness structured data
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteUrl}#organization`,
    name: "Jain's boys Stay",
    alternateName: "Jain's boys Stay - A Luxury Boys Hostel",
    description: "Best luxury boys hostel in Bhopal, MP Nagar. Jain's boys Stay offers fully air-cooled campus, AC rooms, gym, yoga room, RO water, WiFi, entertainment room, pure veg hygienic food, 24/7 security, and pick & drop facility.",
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
    name: "Jain's boys Stay",
    description: "Best luxury boys hostel in Bhopal, MP Nagar. Jain's boys Stay offers fully air-cooled campus, AC rooms, gym, yoga room, RO water, WiFi, entertainment room, pure veg hygienic food, 24/7 security, and pick & drop facility.",
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

  // FAQ Schema (can be expanded)
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the best hostel in Bhopal?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Jain's boys Stay is one of the best luxury hostels in Bhopal, located in MP Nagar. We offer fully air-cooled campus, AC rooms, gym, yoga room, RO water, WiFi, entertainment room, pure veg hygienic food, 24/7 security, CCTV surveillance, lift facility, power backup, and pick & drop facility."
        }
      },
      {
        '@type': 'Question',
        name: "Where is Jain's boys Stay located?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Jain's boys Stay is located at Plot No. 106, Near Navoday Hospital, Zone-2 M.P. Nagar, Bhopal - 462011. We are conveniently located near Rani Kamlapati Station, ISBT Bus Stand, and DB City Mall."
        }
      },
      {
        '@type': 'Question',
        name: "What amenities are available at Jain's boys Stay?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Jain's boys Stay offers fully air-cooled campus, AC rooms, gym, yoga room, RO water cooler, WiFi-covered campus, entertainment room with games, guest room, pure veg hygienic food, 24/7 security guard, CCTV camera surveillance, lift facility, 24/7 power backup, and pick & drop facility."
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


