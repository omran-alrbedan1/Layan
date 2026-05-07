// Jewelry store — local business
export function JewelryStoreSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "JewelryStore",
    name: "Abu Sara Jewelry",
    url: "https://abusarajewelry.com",
    logo: "https://abusarajewelry.com/assets/logo-as.jpg",
    image: "https://abusarajewelry.com/assets/logo-as.jpg",
    description: "Premium gold jewelry and custom design services in Amman, Jordan. Established 1921.",
    foundingDate: "1921",
    telephone: "+962777616777",
    address: {
      "@type": "PostalAddress",
      addressCountry: "JO",
      addressLocality: "Amman",
      streetAddress: "Salah Al-Shemat St. 7",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 31.9539,
      longitude: 35.9106,
    },
    openingHours: "Mo-Sa 10:00-20:30",
    priceRange: "$$$",
    sameAs: [
      "https://www.instagram.com/abusarajewelry",
      "https://www.facebook.com/abusarajewelry",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Organization schema
export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Abu Sara Jewelry",
    url: "https://abusarajewelry.com",
    logo: "https://abusarajewelry.com/assets/logo-as.jpg",
    foundingDate: "1921",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+962777616777",
      contactType: "customer service",
      availableLanguage: ["Arabic", "English"],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Custom design service schema
export function CustomDesignServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Custom Jewelry Design",
    description: "Bespoke gold jewelry design service. Submit your concept and our master craftsmen will bring it to life.",
    url: "https://abusarajewelry.com/en/custom-design",
    provider: {
      "@type": "JewelryStore",
      name: "Abu Sara Jewelry",
    },
    areaServed: {
      "@type": "Country",
      name: "Jordan",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// FAQ schema — for use on Custom Design page
export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
