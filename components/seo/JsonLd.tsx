export function JewelryStoreSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "JewelryStore",
    name: "مجوهرات ليان",
    url: "https://rovana-gilt.vercel.app",
    logo: "https://rovana-gilt.vercel.app/assets/logo-as.jpg",
    image: "https://rovana-gilt.vercel.app/assets/logo-as.jpg",
    description: "متجرك الموثوق لارقى مجوهرات الذهب والألماس في حلب، سوريا",
    telephone: "+963948973646",
    address: {
      "@type": "PostalAddress",
      addressCountry: "SY",
      addressLocality: "حلب",
      streetAddress: "محافظة حلب، شارع الفرقان، شارع مفرروشات الفتال",
    },
    openingHours: "Mo-Th 10:00-20:30",
    priceRange: "$$$",
    hasMap: "https://maps.app.goo.gl",
    sameAs: [
      "https://www.instagram.com/layan_jewellery3?igsh=eTE5aWlzeWw3aDFr",
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
    name: "مجوهرات ليان",
    url: "https://rovana-gilt.vercel.app",
    logo: "https://rovana-gilt.vercel.app/assets/logo-as.jpg",
    description: "متجرك الموثوق لارقى مجوهرات الذهب والألماس في حلب، سوريا",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+963948973646",
      contactType: "خدمة العملاء",
      availableLanguage: ["العربية", "الإنجليزية"],
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "SY",
      addressLocality: "حلب",
      streetAddress: "محافظة حلب، شارع الفرقان، شارع مفرروشات الفتال",
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
    url: "https://rovana-gilt.vercel.app/ar/custom-design",
    provider: {
      "@type": "JewelryStore",
      name: "مجوهرات ليان",
    },
    areaServed: {
      "@type": "Country",
      name: "سوريا",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}