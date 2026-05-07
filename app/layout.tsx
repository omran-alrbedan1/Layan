import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fdf8f5" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a1a" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://abusarajewelry.com"),

  title: {
    template: "%s | Abu Sara Jewelry",
    default: "Abu Sara Jewelry — Fine Gold & Custom Jewelry Since 1921 | Amman",
  },

  description:
    "Jordan's trusted family-owned jeweler since 1921. Handcrafted gold, engagement rings, wedding bands, and custom designs in the heart of Amman.",

  keywords: [
    "jewelry Jordan",
    "gold jewelry Amman",
    "custom jewelry",
    "engagement rings Jordan",
    "Abu Sara Jewelry",
    "fine gold",
    "since 1921",
  ],

  authors: [{ name: "Abu Sara Jewelry" }],
  creator: "Abu Sara Jewelry",
  publisher: "Abu Sara Jewelry",
  category: "Jewelry & Watches",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "ar_JO",
    url: "https://abusarajewelry.com",
    siteName: "Abu Sara Jewelry",
    title: "Abu Sara Jewelry — Fine Gold & Custom Jewelry Since 1921",
    description:
      "Jordan's trusted family-owned jeweler since 1921. Handcrafted gold, engagement rings, and custom designs in Amman.",
    images: [
      {
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Abu Sara Jewelry - Handcrafted Gold Collection",
        type: "image/jpeg",
      },
    ],
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon-180.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon-16x16.png"],
  },

  manifest: "/site.webmanifest",

  alternates: {
    canonical: "https://abusarajewelry.com",
    languages: {
      "en-US": "https://abusarajewelry.com/en",
      "ar-JO": "https://abusarajewelry.com/ar",
    },
  },

  appleWebApp: {
    capable: true,
    title: "Abu Sara",
    statusBarStyle: "black-translucent",
  },

  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}