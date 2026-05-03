export const SITE = {
  name: "Abu Sara Jewelry",
  shortName: "Abu Sara",
  tagline: "Elegance in Every Detail",
  established: 1921,
  description: "A legacy of craftsmanship and trust since 1948 - Jordan's family-owned house of fine diamond and gold jewelry.",
} as const;

export const CONTACT = {
  phoneDisplay: "0777 616 777",
  phoneTel: "+962777616777",
  whatsappNumber: "962777616777",
  email: "info@abusarajewelry.com",
  address: {
    line1: "Sweifieh",
    line1Ar: "الصويفية",
    line2: "Amman, Jordan",
    line2Ar: "عمّان، الأردن",
    full: "Sweifieh, Amman, Jordan",
    fullAr: "الصويفية، عمّان، الأردن",
  },
  hours: [
    { day: "Saturday - Thursday", dayAr: "السبت - الخميس", time: "10:00 - 20:30" },
    { day: "Friday", dayAr: "الجمعة", time: "Closed" },
  ],
  mapsDirections: "https://www.google.com/maps/dir/?api=1&destination=Sweifieh%2C+Amman%2C+Jordan",
  mapsEmbed: "https://www.google.com/maps?q=Sweifieh%2C+Amman%2C+Jordan&output=embed",
} as const;

export const SOCIAL = {
  instagram: "#",
  facebook: "#",
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

