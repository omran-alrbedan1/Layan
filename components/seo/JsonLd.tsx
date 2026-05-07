export function JewelryStoreSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "JewelryStore",
    name: "ابو سارة للمجوهرات",
    url: "https://abusarajewelry.com",
    logo: "https://abusarajewelry.com/assets/logo-as.jpg",
    image: "https://abusarajewelry.com/assets/logo-as.jpg",
    description: "مجوهرات ذهبية فاخرة وخدمات تصميم مخصص في عمان، الأردن. تأسست عام 1921.",
    foundingDate: "1921",
    telephone: "+962777616777",
    address: {
      "@type": "PostalAddress",
      addressCountry: "JO",
      addressLocality: "عمان",
      streetAddress: "شارع صلاح الشمات 7",
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

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ابو سارة للمجوهرات",
    url: "https://abusarajewelry.com",
    logo: "https://abusarajewelry.com/assets/logo-as.jpg",
    foundingDate: "1921",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+962777616777",
      contactType: "خدمة العملاء",
      availableLanguage: ["العربية", "الإنجليزية"],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// مخطط خدمة التصميم المخصص
export function CustomDesignServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "تصميم المجوهرات المخصص",
    description: "خدمة تصميم مجوهرات ذهبية حسب الطلب. شاركنا فكرتك وسيقوم حرفيونا المهرة بإحيائها.",
    url: "https://abusarajewelry.com/ar/custom-design",
    provider: {
      "@type": "JewelryStore",
      name: "ابو سارة للمجوهرات",
    },
    areaServed: {
      "@type": "Country",
      name: "الأردن",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}