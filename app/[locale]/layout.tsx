import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Header from '@/components/Header';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import "./globals.css";
import Footer from "@/components/Footer";
import { Toaster } from 'sonner';
import { JewelryStoreSchema, OrganizationSchema } from "@/components/seo/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = 'https://layan-puce.vercel.app';

  return {
    metadataBase: new URL(baseUrl),
    title: {
      template: "%s | Layan Jewellery",
      default: "Layan Jewellery — Fine Gold & Custom Jewelry",
    },
    description: "Your trusted destination for the finest gold and diamond jewelry in Aleppo, Syria. Handcrafted gold, custom designs, and expert jewelry services.",
    openGraph: {
      type: "website",
      locale: locale === 'ar' ? 'ar_SY' : 'en_US',
      url: `${baseUrl}/${locale}`,
      siteName: "Layan Jewellery",
      title: "Layan Jewellery — Fine Gold & Custom Jewelry",
      description: "Your trusted destination for the finest gold and diamond jewelry in Aleppo, Syria.",
      images: [{
        url: `${baseUrl}/assets/og-default.jpg`,
        width: 1200,
        height: 630,
        alt: "Layan Jewellery Collection",
      }],
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        'en': `${baseUrl}/en`,
        'ar': `${baseUrl}/ar`,
      },
    },
    verification: {
      google: "FlfiMiGj_egnoLp2dGol1lWAbv6o7OKzsaJ1VX0cbKk",
    },
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();
  const direction = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={direction} suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <JewelryStoreSchema />
          <OrganizationSchema />

          <Header />
          {children}
          <Footer />
          <WhatsAppFloat />
          <Toaster richColors />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
