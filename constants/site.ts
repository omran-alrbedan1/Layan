export const SITE = {
  name: "Layan Jewellery",
  shortName: "Layan",
  tagline: "Elegance in Every Detail",
  established: 1921,
  description: "Your trusted destination for fine gold and diamond jewelry in Aleppo, Syria.",
} as const;

export const CONTACT = {
  phoneDisplay: "098 948 973 646",
  phoneTel: "+963948973646",
  whatsappNumber: "963948973646",
  email: "mixnajo799@gmail.com",
  address: {
    line1: "محافظة حلب، شارع الفرقان، شارع مفرروشات الفتال",
    line2: "Aleppo, Syria",
    line2Ar: "حلب، سوريا",
    full: "محافظة حلب، شارع الفرقان، شارع مفرروشات الفتال، حلب، سوريا",
    fullAr: "محافظة حلب، شارع الفرقان، شارع مفرروشات الفتال، حلب، سوريا",
  },
  hours: [
    { day: "Saturday - Thursday", dayAr: "السبت - الخميس", time: "10:00 - 20:30" },
    { day: "Friday", dayAr: "الجمعة", time: "Closed" },
  ],
  mapsDirections: "https://www.google.com/maps/dir/?api=1&destination=Aleppo+Syria",
  mapsEmbed: "https://www.google.com/maps?q=Aleppo+Syria&output=embed",
} as const;

export const SOCIAL = {
  instagram: "https://www.instagram.com/layan_jewellery3?igsh=eTE5aWlzeWw3aDFr",
  facebook: "https://www.facebook.com/share/1aQJ36GBT4/",
} as const;

export const NAV_LINKS = [
  { to: "/", labelKey: "home" },
  { to: "/about", labelKey: "about" },
  { to: "/custom-design", labelKey: "customDesign" },
  { to: "/contact", labelKey: "contact" },
] as const;

export const FOOTER_LINKS = [
  ...NAV_LINKS,
  { to: "/blog", labelKey: "blog" },
  { to: "/policies", labelKey: "policies" },
] as const;

export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${CONTACT.whatsappNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}


// Custom Design Page Constants

export const STEPS = ["1", "2", "3", "4"] as const;

export const TRUST = [
  { icon: "PenLine", key: "1" },
  { icon: "CheckCircle2", key: "2" },
  { icon: "ShieldCheck", key: "3" },
  { icon: "MessageCircle", key: "4" },
] as const;

export const FAQS = ["1", "2", "3", "4"] as const;

export const JEWELRY_TYPES = [
  "ring",
  "necklace", 
  "bracelet",
  "set",
  "pendant",
  "earrings",
  "other",
] as const;

export const KARATS = ["18K", "21K", "24K"] as const;
export const COLORS = ["yellow", "white", "rose"] as const;
export const OCCASIONS = ["wedding", "engagement", "gift", "newborn", "personal", "other"] as const;
export const CONTACT_METHODS = ["whatsapp", "phone", "email"] as const;

