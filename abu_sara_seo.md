# Abu Sara Jewelry — SEO Implementation Roadmap

> Based on the proven Wise Zone SEO approach, adapted for a bilingual (EN/AR) Next.js 15 jewelry e-commerce site.

---

## Phase 1: Foundation Setup

### Step 1: Create SEO Configuration File

Create `lib/seo.ts`:

```typescript
import type { Metadata } from "next";

const BASE_URL = "https://abusarajewelry.com";

export const defaultMetadata = {
  siteName: "Abu Sara Jewelry",
  baseUrl: BASE_URL,
  defaultLocale: "en",
};

export function buildMetadata({
  title,
  description,
  path = "",
  locale = "en",
  image,
  keywords,
  noIndex = false,
}: {
  title: string;
  description: string;
  path?: string;
  locale?: "en" | "ar";
  image?: string;
  keywords?: string[];
  noIndex?: boolean;
}): Metadata {
  const url = `${BASE_URL}/${locale}${path}`;
  const ogImage = image ?? `${BASE_URL}/assets/og-default.jpg`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
      languages: {
        "en-US": `${BASE_URL}/en${path}`,
        "ar-JO": `${BASE_URL}/ar${path}`,
      },
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    openGraph: {
      title,
      description,
      url,
      siteName: defaultMetadata.siteName,
      locale: locale === "ar" ? "ar_JO" : "en_US",
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
```

---

### Step 2: Create Sitemap

Create `app/sitemap.ts`:

```typescript
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const BASE_URL = "https://abusarajewelry.com";

  const staticPages = [
    "/",
    "/about",
    "/contact",
    "/custom-design",
  ];

  const locales = ["en", "ar"];
  const routes: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const page of staticPages) {
      routes.push({
        url: `${BASE_URL}/${locale}${page === "/" ? "" : page}`,
        lastModified: new Date(),
        changeFrequency: page === "/" ? "weekly" : "monthly",
        priority: page === "/" ? 1 : 0.8,
      });
    }
  }

  return routes;
}
```

---

### Step 3: Configure Robots.txt

Create `app/robots.ts`:

```typescript
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://abusarajewelry.com/sitemap.xml",
  };
}
```

---

## Phase 2: Per-Page Metadata

### Step 4: Create Metadata Directory

Create `app/[locale]/metadata/` and add one file per page.

#### 4.1 Home Page — `app/[locale]/metadata/home.ts`

```typescript
import type { Metadata } from "next";
import enMessages from "@/messages/en/home.json";
import arMessages from "@/messages/ar/home.json";

export async function getHomeMetadata(locale: string): Promise<Metadata> {
  const t = locale === "ar" ? arMessages : enMessages;

  return {
    title: t.metadata.title,
    description: t.metadata.description,
    keywords: t.metadata.keywords,
    alternates: {
      canonical: `https://abusarajewelry.com/${locale}`,
      languages: {
        "en-US": "https://abusarajewelry.com/en",
        "ar-JO": "https://abusarajewelry.com/ar",
      },
    },
    openGraph: {
      title: t.metadata.title,
      description: t.metadata.description,
      url: `https://abusarajewelry.com/${locale}`,
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
```

#### 4.2 About Page — `app/[locale]/metadata/about.ts`

```typescript
import type { Metadata } from "next";
import enMessages from "@/messages/en/about.json";
import arMessages from "@/messages/ar/about.json";

export async function getAboutMetadata(locale: string): Promise<Metadata> {
  const t = locale === "ar" ? arMessages : enMessages;
  const path = `https://abusarajewelry.com/${locale}/about`;

  return {
    title: t.metadata.title,
    description: t.metadata.description,
    keywords: t.metadata.keywords,
    alternates: {
      canonical: path,
      languages: {
        "en-US": "https://abusarajewelry.com/en/about",
        "ar-JO": "https://abusarajewelry.com/ar/about",
      },
    },
    openGraph: {
      title: t.metadata.title,
      description: t.metadata.description,
      url: path,
      type: "website",
      images: [{ url: "/assets/og-default.jpg", width: 1200, height: 630 }],
    },
  };
}
```

#### 4.3 Contact Page — `app/[locale]/metadata/contact.ts`

```typescript
import type { Metadata } from "next";
import enMessages from "@/messages/en/contact.json";
import arMessages from "@/messages/ar/contact.json";

export async function getContactMetadata(locale: string): Promise<Metadata> {
  const t = locale === "ar" ? arMessages : enMessages;
  const path = `https://abusarajewelry.com/${locale}/contact`;

  return {
    title: t.metadata.title,
    description: t.metadata.description,
    keywords: t.metadata.keywords,
    alternates: {
      canonical: path,
      languages: {
        "en-US": "https://abusarajewelry.com/en/contact",
        "ar-JO": "https://abusarajewelry.com/ar/contact",
      },
    },
    openGraph: {
      title: t.metadata.title,
      description: t.metadata.description,
      url: path,
      type: "website",
      images: [{ url: "/assets/og-default.jpg", width: 1200, height: 630 }],
    },
  };
}
```

#### 4.4 Custom Design Page — `app/[locale]/metadata/custom-design.ts`

```typescript
import type { Metadata } from "next";
import enMessages from "@/messages/en/custom-design.json";
import arMessages from "@/messages/ar/custom-design.json";

export async function getCustomDesignMetadata(locale: string): Promise<Metadata> {
  const t = locale === "ar" ? arMessages : enMessages;
  const path = `https://abusarajewelry.com/${locale}/custom-design`;

  return {
    title: t.metadata.title,
    description: t.metadata.description,
    keywords: t.metadata.keywords,
    alternates: {
      canonical: path,
      languages: {
        "en-US": "https://abusarajewelry.com/en/custom-design",
        "ar-JO": "https://abusarajewelry.com/ar/custom-design",
      },
    },
    openGraph: {
      title: t.metadata.title,
      description: t.metadata.description,
      url: path,
      type: "website",
      images: [{ url: "/assets/og-default.jpg", width: 1200, height: 630 }],
    },
  };
}
```

---

### Step 5: Add Metadata to Translation Files

Each translation file needs a `metadata` block. Follow this pattern:

#### English — `messages/en/home.json`

```json
{
  "metadata": {
    "title": "Abu Sara Jewelry — Fine Gold & Custom Jewelry Since 1921 | Amman",
    "description": "Abu Sara Jewelry has crafted premium gold jewelry in Amman since 1921. Browse our collections or request a fully custom design today.",
    "keywords": ["gold jewelry Amman", "custom jewelry Jordan", "engagement rings Jordan", "jewelry since 1921", "fine jewelry Amman"]
  }
}
```

#### Arabic — `messages/ar/home.json`

```json
{
  "metadata": {
    "title": "مجوهرات أبو سارة — ذهب وتصاميم مخصصة منذ ١٩٢١ | عمان",
    "description": "مجوهرات أبو سارة تصنع المجوهرات الذهبية الفاخرة في عمان منذ عام ١٩٢١. تصفح مجموعاتنا أو اطلب تصميمًا مخصصًا اليوم.",
    "keywords": ["مجوهرات ذهب عمان", "مجوهرات مخصصة الأردن", "خواتم خطوبة الأردن", "مجوهرات منذ 1921", "مجوهرات فاخرة عمان"]
  }
}
```

> Apply the same pattern to `about.json`, `contact.json`, and `custom-design.json` in both locales.

---

### Step 6: Wire Metadata into Page Files

```typescript
// app/[locale]/page.tsx
import { getHomeMetadata } from "./metadata/home";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return getHomeMetadata(locale);
}
```

```typescript
// app/[locale]/about/page.tsx
import { getAboutMetadata } from "../metadata/about";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return getAboutMetadata(locale);
}
```

```typescript
// app/[locale]/contact/page.tsx
import { getContactMetadata } from "../metadata/contact";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return getContactMetadata(locale);
}
```

```typescript
// app/[locale]/custom-design/page.tsx
import { getCustomDesignMetadata } from "../metadata/custom-design";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return getCustomDesignMetadata(locale);
}
```

---

## Phase 3: Structured Data (JSON-LD)

Create `components/seo/JsonLd.tsx`:

```typescript
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
    telephone: "+962 6 533 3333",
    address: {
      "@type": "PostalAddress",
      addressCountry: "JO",
      addressLocality: "Amman",
      streetAddress: "Goldsmith's Market, Downtown Amman",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 31.9539,
      longitude: 35.9106,
    },
    openingHours: "Mo-Sa 09:00-20:00",
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
      telephone: "+962 6 533 3333",
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
```

### Step 7: Add Schemas to Pages

```typescript
// app/[locale]/page.tsx  (Home)
import { JewelryStoreSchema, OrganizationSchema } from "@/components/seo/JsonLd";

export default function HomePage() {
  return (
    <>
      <JewelryStoreSchema />
      <OrganizationSchema />
      {/* page content */}
    </>
  );
}
```

```typescript
// app/[locale]/custom-design/page.tsx
import { CustomDesignServiceSchema, FAQSchema } from "@/components/seo/JsonLd";

const faqs = [
  { question: "How long does a custom design take?", answer: "Typically 2–4 weeks depending on complexity." },
  { question: "What gold karats do you offer?", answer: "We work with 18K and 21K gold in yellow, white, and rose." },
];

export default function CustomDesignPage() {
  return (
    <>
      <CustomDesignServiceSchema />
      <FAQSchema faqs={faqs} />
      {/* page content */}
    </>
  );
}
```

---

## Phase 4: Technical SEO

### Step 8: Update `next.config.ts`

```typescript
const nextConfig = {
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 828, 1200, 1920],
    minimumCacheTTL: 60,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
```

### Step 9: Create OG Image

Place a `1200×630px` image at `public/og-default.jpg`. It should show:
- Abu Sara logo
- Tagline in English
- A hero jewelry photo as background

> You can generate page-specific OG images later using Next.js `ImageResponse` in `app/[locale]/opengraph-image.tsx`.

---

## Phase 5: Content SEO Checklist

### Heading Structure (per page)

| Page | H1 | H2 examples |
|---|---|---|
| Home | "Abu Sara Jewelry" | "Our Collections", "Custom Design", "Our Heritage" |
| About | "Our Story Since 1921" | "Heritage", "Our Mission", "Timeline" |
| Contact | "Get in Touch" | "Contact Form", "Visit Our Store" |
| Custom Design | "Design Your Dream Jewelry" | "How It Works", "FAQ" |

### Image Alt Text Rules
- Every `<img>` and `<Image>` must have a descriptive `alt`
- Format: `[item] — Abu Sara Jewelry, Amman`
- Example: `"18K gold engagement ring — Abu Sara Jewelry, Amman"`
- Hero images: describe what's shown, not just "hero image"

### Meta Title Guidelines
- 50–60 characters max
- Format: `[Page Topic] | Abu Sara Jewelry — [Location/Year]`
- Include primary keyword near the front

### Meta Description Guidelines
- 150–160 characters max
- Include a call to action ("Browse", "Request", "Visit")
- Mention Amman or Jordan for local SEO

---

## Phase 6: Google Analytics

Create `components/analytics/GoogleAnalytics.tsx`:

```typescript
import Script from "next/script";

export function GoogleAnalytics({ measurementId }: { measurementId: string }) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}');
          `,
        }}
      />
    </>
  );
}
```

Add to `app/[locale]/layout.tsx`:

```typescript
<GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_ID!} />
```

Add to `.env.local`:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## Phase 7: Validation Checklist

### Before Launch
- [ ] `/sitemap.xml` loads and lists all pages (EN + AR)
- [ ] `/robots.txt` is accessible and correct
- [ ] All pages have unique `<title>` and `<meta name="description">`
- [ ] All `hreflang` alternate links are present
- [ ] All images have `alt` text
- [ ] JSON-LD validates at [search.google.com/test/rich-results](https://search.google.com/test/rich-results)
- [ ] PageSpeed Insights score ≥ 90 on mobile
- [ ] W3C HTML validation passes
- [ ] Google Mobile-Friendly Test passes

### After Launch
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify domain ownership in Search Console
- [ ] Set target country to Jordan in Search Console

---

## Quick Reference — Files to Create

```
app/
├── sitemap.ts                          ← NEW
├── robots.ts                           ← NEW
└── [locale]/
    ├── metadata/
    │   ├── home.ts                     ← NEW
    │   ├── about.ts                    ← NEW
    │   ├── contact.ts                  ← NEW
    │   └── custom-design.ts            ← NEW
    ├── page.tsx                        ← ADD generateMetadata + JewelryStoreSchema
    ├── about/page.tsx                  ← ADD generateMetadata + OrganizationSchema
    ├── contact/page.tsx                ← ADD generateMetadata
    └── custom-design/page.tsx          ← ADD generateMetadata + FAQSchema
lib/
└── seo.ts                              ← NEW
components/
├── seo/
│   └── JsonLd.tsx                      ← NEW
└── analytics/
    └── GoogleAnalytics.tsx             ← NEW
messages/
├── en/
│   ├── home.json                       ← ADD metadata block
│   ├── about.json                      ← ADD metadata block
│   ├── contact.json                    ← ADD metadata block
│   └── custom-design.json              ← ADD metadata block
└── ar/
    ├── home.json                       ← ADD metadata block
    ├── about.json                      ← ADD metadata block
    ├── contact.json                    ← ADD metadata block
    └── custom-design.json              ← ADD metadata block
public/
└── og-default.jpg                      ← NEW (1200×630px)
```

---

*Last updated: May 2026 — Abu Sara Jewelry SEO Roadmap v1.0*