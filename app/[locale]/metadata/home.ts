import type { Metadata } from "next";
import enMessages from "@/messages/en/home.json";
import arMessages from "@/messages/ar/home.json";

export async function getHomeMetadata(locale: string): Promise<Metadata> {
  const t = locale === "ar" ? arMessages : enMessages;
  
  // Dynamic base URL for development vs production
  const baseUrl = process.env.NODE_ENV === 'production' 
    ? 'https://abusarajewelry.com' 
    : 'http://localhost:3000';

  return {
    title: t.metadata.title,
    description: t.metadata.description,
    keywords: t.metadata.keywords,
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        "en-US": `${baseUrl}/en`,
        "ar-JO": `${baseUrl}/ar`,
      },
    },
    openGraph: {
      title: t.metadata.title,
      description: t.metadata.description,
      url: `${baseUrl}/${locale}`,
      type: "website",
      images: [{ url: "/assets/og-default.jpg", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: t.metadata.title,
      description: t.metadata.description,
      images: ["/assets/og-default.jpg"],
    },
  };
}
