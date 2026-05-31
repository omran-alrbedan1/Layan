import type { Metadata } from "next";
import enMessages from "@/messages/en/home.json";
import arMessages from "@/messages/ar/home.json";

const BASE_URL = "https://layan-puce.vercel.app";

export async function getHomeMetadata(locale: string): Promise<Metadata> {
  const t = locale === "ar" ? arMessages : enMessages;
  const path = `${BASE_URL}/${locale}`;
  const ogImage = `${BASE_URL}/assets/og-default.jpg`;

  return {
    metadataBase: new URL(BASE_URL),
    title: t.metadata.title,
    description: t.metadata.description,
    keywords: t.metadata.keywords,
    alternates: {
      canonical: path,
      languages: {
        "en-US": `${BASE_URL}/en`,
        "ar-JO": `${BASE_URL}/ar`,
      },
    },
    openGraph: {
      title: t.metadata.title,
      description: t.metadata.description,
      url: path,
      siteName: "Layan Jewellery",
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: t.metadata.title,
      description: t.metadata.description,
      images: [ogImage],
    },
  };
}
