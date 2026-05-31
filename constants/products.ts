import { IMAGES } from "./images";

export type ProductCategory = "rings" | "earrings" | "hand-cuff" | "sets" | "bracelets";

export interface Product {
  id: string;
  name: string;
  tagline?: string;
  image: string;
  category: ProductCategory;
  price?: string;
  featured?: boolean;
}

export const PRODUCTS: Product[] = [
  // ---------- Rings ----------
  {
    id: "r-001",
    name: "Gold Curved Band",
    tagline: "Sculpted elegance in pure gold.",
    image: IMAGES.ring1,
    category: "rings",
  },
  {
    id: "r-002",
    name: "Emerald Heirloom",
    tagline: "Crafted by nature, perfected by design.",
    image: IMAGES.ring2,
    category: "rings",
  },
  {
    id: "r-003",
    name: "Exquisite Brilliance",
    tagline: "For those who value understated luxury.",
    image: IMAGES.ring3,
    category: "rings",
  },
  {
    id: "r-004",
    name: "Two-Tone Halo",
    tagline: "Two elements in perfect harmony.",
    image: IMAGES.ring4,
    category: "rings",
  },
  {
    id: "r-005",
    name: "White Gold Solitaire",
    tagline: "Whispers elegance in every detail.",
    image: IMAGES.ring5,
    category: "rings",
  },
  {
    id: "r-006",
    name: "Gold Stack Duo",
    tagline: "Architectural geometry, hand-finished.",
    image: IMAGES.ring6,
    category: "rings",
  },
  {
    id: "r-007",
    name: "Pavé Leaf Statement",
    tagline: "Shining softly with every move.",
    image: IMAGES.ring7,
    category: "rings",
  },
  {
    id: "r-008",
    name: "Pavé Half-Eternity",
    tagline: "A symbol of love and brilliance.",
    image: IMAGES.ring8,
    category: "rings",
  },
  {
    id: "r-009",
    name: "Pure Gold Band",
    tagline: "Pure elegance in 18K perfection.",
    image: IMAGES.ring9,
    category: "rings",
  },
  {
    id: "r-010",
    name: "Diamond Stacking Set",
    tagline: "Layered sparkle for everyday elegance.",
    image: IMAGES.ring10,
    category: "rings",
  },
  {
    id: "r-011",
    name: "Classic Gold Ring",
    tagline: "Timeless design, impeccable craft.",
    image: IMAGES.ring11,
    category: "rings",
  },
  {
    id: "r-012",
    name: "Diamond Eternity Band",
    tagline: "Forever in every detail.",
    image: IMAGES.ring12,
    category: "rings",
  },
  {
    id: "r-013",
    name: "Sapphire & Diamond Ring",
    tagline: "A pop of color, pure elegance.",
    image: IMAGES.ring13,
    category: "rings",
  },
  {
    id: "r-014",
    name: "Twisted Gold Band",
    tagline: "Woven beauty in precious metal.",
    image: IMAGES.ring14,
    category: "rings",
  },
  {
    id: "r-015",
    name: "Vintage Filigree Ring",
    tagline: "Old-world charm, modern grace.",
    image: IMAGES.ring15,
    category: "rings",
  },
  {
    id: "r-016",
    name: "Gold Signet Ring",
    tagline: "Bold, classic, unmistakably you.",
    image: IMAGES.ring16,
    category: "rings",
  },

  // ---------- Earrings ----------
  {
    id: "e-001",
    name: "Gold Drop Earrings",
    tagline: "Elegance that moves with you.",
    image: IMAGES.earring1,
    category: "earrings",
  },
  {
    id: "e-002",
    name: "Diamond Stud Earrings",
    tagline: "Brilliance in every sparkle.",
    image: IMAGES.earring2,
    category: "earrings",
  },
  {
    id: "e-003",
    name: "Hoop Gold Earrings",
    tagline: "Classic curves, radiant shine.",
    image: IMAGES.earring3,
    category: "earrings",
  },
  {
    id: "e-004",
    name: "Pearl Drop Earrings",
    tagline: "Timeless beauty meets sophistication.",
    image: IMAGES.earring4,
    category: "earrings",
  },
  {
    id: "e-005",
    name: "Chandelier Earrings",
    tagline: "Make a statement with every step.",
    image: IMAGES.earring5,
    category: "earrings",
  },
  {
    id: "e-006",
    name: "Gold Climber Earrings",
    tagline: "Modern design, delicate touch.",
    image: IMAGES.earring6,
    category: "earrings",
  },
  {
    id: "e-007",
    name: "Gemstone Earrings",
    tagline: "Vibrant color, exquisite craft.",
    image: IMAGES.earring7,
    category: "earrings",
  },

  // ---------- Hand Cuff ----------
  {
    id: "h-001",
    name: "Gold Hand Cuff",
    tagline: "Bold elegance for the modern wrist.",
    image: IMAGES.handcuff1,
    category: "hand-cuff",
  },
  {
    id: "h-002",
    name: "Diamond Hand Cuff",
    tagline: "Luxury wrapped around you.",
    image: IMAGES.handcuff2,
    category: "hand-cuff",
  },
  {
    id: "h-003",
    name: "Twisted Hand Cuff",
    tagline: "Artistry in every twist.",
    image: IMAGES.handcuff3,
    category: "hand-cuff",
  },
  {
    id: "h-004",
    name: "Pavé Hand Cuff",
    tagline: "Shimmering brilliance from every angle.",
    image: IMAGES.handcuff4,
    category: "hand-cuff",
  },
  {
    id: "h-005",
    name: "Sculpted Hand Cuff",
    tagline: "A masterpiece for your wrist.",
    image: IMAGES.handcuff5,
    category: "hand-cuff",
  },

  // ---------- Sets ----------
  {
    id: "s-001",
    name: "Gold Bridal Set",
    tagline: "Complete elegance for your special day.",
    image: IMAGES.set1,
    category: "sets",
  },
  {
    id: "s-002",
    name: "Diamond Evening Set",
    tagline: "Dazzle from dusk till dawn.",
    image: IMAGES.set2,
    category: "sets",
  },
  {
    id: "s-003",
    name: "Classic Gold Suite",
    tagline: "Timeless pieces that complement each other.",
    image: IMAGES.set3,
    category: "sets",
  },
  {
    id: "s-004",
    name: "Modern Minimalist Set",
    tagline: "Clean lines, pure sophistication.",
    image: IMAGES.set4,
    category: "sets",
  },
  {
    id: "s-005",
    name: "Vintage Pearl Set",
    tagline: "Old-world charm reimagined.",
    image: IMAGES.set5,
    category: "sets",
  },
  {
    id: "s-006",
    name: "Gold & Sapphire Set",
    tagline: "Royal blue meets brilliant gold.",
    image: IMAGES.set6,
    category: "sets",
  },
  {
    id: "s-007",
    name: "Delicate Chain Set",
    tagline: "Light, layered, and lovely.",
    image: IMAGES.set7,
    category: "sets",
  },
  {
    id: "s-008",
    name: "Statement Cocktail Set",
    tagline: "Bold pieces for unforgettable evenings.",
    image: IMAGES.set8,
    category: "sets",
  },
  {
    id: "s-009",
    name: "Everyday Gold Set",
    tagline: "Effortless elegance for daily wear.",
    image: IMAGES.set9,
    category: "sets",
  },

  // ---------- Bracelets ----------
  {
    id: "b-001",
    name: "Gold Tennis Bracelet",
    tagline: "An effortless ribbon of light.",
    image: IMAGES.bracelet1,
    category: "bracelets",
  },
  {
    id: "b-002",
    name: "Diamond Tennis Line",
    tagline: "Sparkle that follows every gesture.",
    image: IMAGES.bracelet2,
    category: "bracelets",
  },
  {
    id: "b-003",
    name: "Gold Charm Bracelet",
    tagline: "Playful symbols, polished in gold.",
    image: IMAGES.bracelet3,
    category: "bracelets",
  },
  {
    id: "b-004",
    name: "Pavé Branch Cuff",
    tagline: "Nature, set in diamonds.",
    image: IMAGES.bracelet4,
    category: "bracelets",
  },
  {
    id: "b-005",
    name: "Sculpted Gold Cuff",
    tagline: "Architectural, effortless, eternal.",
    image: IMAGES.bracelet5,
    category: "bracelets",
  },
  {
    id: "b-006",
    name: "Gold Bangle Set",
    tagline: "Stackable elegance for every occasion.",
    image: IMAGES.bracelet6,
    category: "bracelets",
  },
  {
    id: "b-007",
    name: "Diamond Cuff Bracelet",
    tagline: "Bold brilliance on your wrist.",
    image: IMAGES.bracelet7,
    category: "bracelets",
  },
  {
    id: "b-008",
    name: "Woven Gold Bracelet",
    tagline: "Intricate craft, timeless beauty.",
    image: IMAGES.bracelet8,
    category: "bracelets",
  },
  {
    id: "b-009",
    name: "Gemstone Bracelet",
    tagline: "Colorful elegance for everyday luxury.",
    image: IMAGES.bracelet9,
    category: "bracelets",
  },
  {
    id: "b-010",
    name: "Gold Link Bracelet",
    tagline: "Bold links, refined style.",
    image: IMAGES.bracelet10,
    category: "bracelets",
  },
  {
    id: "b-011",
    name: "Diamond Bead Bracelet",
    tagline: "Subtle sparkle on a delicate string.",
    image: IMAGES.bracelet11,
    category: "bracelets",
  },
  {
    id: "b-012",
    name: "Twisted Gold Bangle",
    tagline: "Twisted beauty for a modern look.",
    image: IMAGES.bracelet12,
    category: "bracelets",
  },
  {
    id: "b-013",
    name: "Pearl & Gold Bracelet",
    tagline: "Classic pearls meet contemporary gold.",
    image: IMAGES.bracelet13,
    category: "bracelets",
  },
];

// Service functions
export async function getFeaturedProducts(): Promise<Product[]> {
  return Promise.resolve(PRODUCTS.filter(p => p.featured));
}

export async function getProductsByCategory(category: ProductCategory | "all"): Promise<Product[]> {
  if (category === "all") {
    return Promise.resolve(PRODUCTS);
  }
  const filtered = PRODUCTS.filter((p) => p.category === category);
  return Promise.resolve(filtered);
}

export async function getProductById(id: string): Promise<Product | null> {
  return Promise.resolve(PRODUCTS.find((p) => p.id === id) ?? null);
}

export const SITE = {
  name: "Layan Jewellery",
  shortName: "Layan",
  tagline: "Elegance in Every Detail",
  established: 1921,
  description:
    "Your trusted destination for fine gold and diamond jewelry in Aleppo, Syria.",
} as const;

export const CONTACT = {
  phoneDisplay: "098 948 973 646",
  phoneTel: "+963948973646",
  whatsappNumber: "963948973646",
  email: "mixnajo799@gmail.com",
  address: {
    line1: "محافظة حلب، شارع الفرقان، شارع مفرروشات الفتال",
    line1Ar: "محافظة حلب، شارع الفرقان، شارع مفرروشات الفتال",
    line2: "Aleppo, Syria",
    line2Ar: "حلب، سوريا",
    full: "محافظة حلب، شارع الفرقان، شارع مفرروشات الفتال، حلب، سوريا",
    fullAr: "محافظة حلب، شارع الفرقان، شارع مفرروشات الفتال، حلب، سوريا",
  },
  mapsDirections: "https://www.google.com/maps/search/?api=1&query=Aleppo+Syria",
  mapsEmbed: "https://www.google.com/maps?q=Aleppo+Syria&output=embed",
  hours: [
    { day: "Saturday - Thursday", dayAr: "السبت - الخميس", time: "10:00 - 20:30" },
    { day: "Friday", dayAr: "الجمعة", time: "Closed" },
  ],
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
