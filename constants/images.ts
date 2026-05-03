// ─── Hero & Banner Images ───────────────────────────────────────
export const    HERO_IMAGES = {
  abuSaraHero: '/assets/abu_sara_hero.png',
  abuSaraHero2: '/assets/abu_sara_hero2.png',
  abuSaraHero3: '/assets/abu_sara_hero3.png',
  aboutUsHero: '/assets/about_us_hero.png',
  customDesign: '/assets/custom-design.jpg',
  jewelry: '/assets/hero-jewelry.jpg',
  boutiqueDisplay: '/assets/boutique-gold-display.jpg',
  boutiqueInterior: '/assets/boutique-interior-real.jpg',
  shopInterior: '/assets/shop-interior.jpg',
} as const;

// ─── Heritage Images ───────────────────────────────────────────
export const HERITAGE_IMAGES = {
  shopfront: '/assets/heritage-shopfront.jpeg',
  shopfrontPng: '/assets/heritage-shopfront.png',
  goldsmithsMarket: '/assets/heritage-goldsmiths-market.png',
  vintage1948: '/assets/heritage-1948.jpg',
} as const;

// ─── Mission & Vision Images ───────────────────────────────────
export const MISSION_VISION_IMAGES = {
  mission: '/assets/mission.jpg',
  vision: '/assets/vision.jpg',
} as const;

// ─── Product Images - Rings ────────────────────────────────────
export const RING_IMAGES = {
  curved: '/assets/gallery/ring-pave-band.jpg',
  emerald: '/assets/gallery/ring-leaf-pave.jpg',
  exquisite: '/assets/gallery/ring-gold-stack.jpg',
  twoTone: '/assets/gallery/ring-pure-gold-band.jpg',
  whiteGold: '/assets/gallery/rings-diamond-stack-hand.jpg',
} as const;

// ─── Product Images - Necklaces ───────────────────────────────
export const NECKLACE_IMAGES = {
  diamond: '/assets/gallery/necklace-vline-diamond.jpg',
  goldChain: '/assets/gallery/necklace-gold-cuban.jpg',
  goldCuban: '/assets/gallery/necklace-gold-cuban.jpg',
  vlineDiamond: '/assets/gallery/necklace-vline-diamond.jpg',
} as const;

// ─── Product Images - Bracelets ────────────────────────────────
export const BRACELET_IMAGES = {
  cuff: '/assets/gallery/bracelet-branch-pave.jpg',
  tennis: '/assets/gallery/bracelet-tennis-worn.jpg',
  branchPave: '/assets/gallery/bracelet-branch-pave.jpg',
  charmsGold: '/assets/gallery/bracelet-charms-gold.jpg',
  tennisWorn: '/assets/gallery/bracelet-tennis-worn.jpg',
} as const;

// ─── Product Images - Earrings ─────────────────────────────────
export const EARRINGS_IMAGES = {
  chainTasselProduct: '/assets/gallery/earrings-chain-tassel-product.jpg',
  chainTasselWorn: '/assets/gallery/earrings-chain-tassel-worn.jpg',
  flame: '/assets/gallery/earrings-flame.jpg',
} as const;

// ─── Product Images - Pendants ─────────────────────────────────
export const PENDANT_IMAGES = {
  gold: '/assets/gallery/set-gold-shirt.jpg',
} as const;

// ─── Gallery Images ────────────────────────────────────────────
export const GALLERY_IMAGES = {
  // Rings
  ringGoldStack: '/assets/ring-exquisite.jpg',
  ringLeafPave: '/assets/ring-emerald.jpg',
  ringPaveBand: '/assets/ring-two-tone.jpg',
  ringPureGoldBand: '/assets/ring-white-gold.jpg',
  ringsDiamondStackHand: '/assets/ring-curved.jpg',
  
  // Sets & Collections
  goldShirt: '/assets/pendant-gold.jpg',
} as const;

// ─── Logo & Brand Images ───────────────────────────────────────
export const BRAND_IMAGES = {
  logo: '/assets/logo-as.jpg',
  goldLogo: '/assets/gold-logo.png',
  futurexLogo: '/assets/futurex-logo.svg',
  videoLogo: '/assets/video-logo.jpg',
} as const;

// ─── Category Images (for shop by category sections) ───────────
export const CATEGORY_IMAGES = {
  rings: RING_IMAGES.exquisite,
  necklaces: NECKLACE_IMAGES.diamond,
  bracelets: BRACELET_IMAGES.tennis,
  earrings: EARRINGS_IMAGES.chainTasselProduct,
  pendants: PENDANT_IMAGES.gold,
} as const;

// ─── Featured Products Array (for carousels) ─────────────────────
export const FEATURED_PRODUCTS = [
  {
    id: 1,
    name: 'Exquisite Diamond Ring',
    image: RING_IMAGES.exquisite,
    price: '$2,450.00',
    originalPrice: '$3,200.00',
    badge: 'Sale',
    rating: 5,
  },
  {
    id: 2,
    name: 'Diamond Tennis Bracelet',
    image: BRACELET_IMAGES.tennis,
    price: '$1,850.00',
    rating: 4,
  },
  {
    id: 3,
    name: 'Gold Chain Necklace',
    image: NECKLACE_IMAGES.goldChain,
    price: '$980.00',
    originalPrice: '$1,450.00',
    badge: '30% Off',
    rating: 4,
  },
  {
    id: 4,
    name: 'Flame Diamond Earrings',
    image: EARRINGS_IMAGES.flame,
    price: '$1,250.00',
    rating: 5,
  },
] as const;

// ─── Special Products Array (for special offers) ─────────────────
export const SPECIAL_PRODUCTS = [
  {
    id: 5,
    name: 'Curved Gold Ring',
    image: RING_IMAGES.curved,
    price: '$1,650.00',
    originalPrice: '$2,100.00',
    badge: '21% Off',
    rating: 4,
  },
  {
    id: 6,
    name: 'Branch Pavé Bracelet',
    image: BRACELET_IMAGES.branchPave,
    price: '$2,200.00',
    originalPrice: '$3,000.00',
    badge: '27% Off',
    rating: 5,
  },
  {
    id: 7,
    name: 'V-Line Diamond Necklace',
    image: NECKLACE_IMAGES.vlineDiamond,
    price: '$3,500.00',
    originalPrice: '$4,200.00',
    badge: '17% Off',
    rating: 5,
  },
  {
    id: 8,
    name: 'Chain Tassel Earrings',
    image: EARRINGS_IMAGES.chainTasselProduct,
    price: '$890.00',
    originalPrice: '$1,350.00',
    badge: '34% Off',
    rating: 4,
  },
] as const;

// ─── Blog Images ─────────────────────────────────────────────────
export const BLOG_IMAGES = [
  '/assets/gallery/ring-gold-stack.jpg',
  '/assets/gallery/necklace-gold-cuban.jpg',
  '/assets/gallery/bracelet-tennis-worn.jpg',
] as const;

// ─── All Images Export (for easy access) ─────────────────────────
export const ALL_IMAGES = {
  hero: HERO_IMAGES,
  heritage: HERITAGE_IMAGES,
  missionVision: MISSION_VISION_IMAGES,
  rings: RING_IMAGES,
  necklaces: NECKLACE_IMAGES,
  bracelets: BRACELET_IMAGES,
  earrings: EARRINGS_IMAGES,
  pendants: PENDANT_IMAGES,
  gallery: GALLERY_IMAGES,
  brand: BRAND_IMAGES,
  categories: CATEGORY_IMAGES,
  blog: BLOG_IMAGES,
} as const;

// ─── IMAGES Export (for products.ts compatibility) ───────────────
export const IMAGES = {
  // Gallery images
  necklaceVlineDiamond: NECKLACE_IMAGES.vlineDiamond,
  setGoldShirt: GALLERY_IMAGES.goldShirt,
  ringLeafPave: GALLERY_IMAGES.ringLeafPave,
  ringGoldStack: GALLERY_IMAGES.ringGoldStack,
  ringsDiamondStackHand: GALLERY_IMAGES.ringsDiamondStackHand,
  ringPureGoldBand: GALLERY_IMAGES.ringPureGoldBand,
  ringPaveBand: GALLERY_IMAGES.ringPaveBand,
  
  // Ring images
  ringWhite: RING_IMAGES.whiteGold,
  ringTwoTone: RING_IMAGES.twoTone,
  ringEmerald: RING_IMAGES.emerald,
  ringExquisite: RING_IMAGES.exquisite,
  ringCurved: RING_IMAGES.curved,
  
  // Necklace images
  necklaceGoldCuban: NECKLACE_IMAGES.goldCuban,
  necklaceDiamond: NECKLACE_IMAGES.diamond,
  necklaceGoldChain: NECKLACE_IMAGES.goldChain,
  
  // Bracelet images
  braceletBranchPave: BRACELET_IMAGES.branchPave,
  braceletCharmsGold: BRACELET_IMAGES.charmsGold,
  braceletTennisWorn: BRACELET_IMAGES.tennisWorn,
  braceletTennis: BRACELET_IMAGES.tennis,
  braceletCuff: BRACELET_IMAGES.cuff,
  
  // Earring images
  earringsFlame: EARRINGS_IMAGES.flame,
  earringsChainTasselProduct: EARRINGS_IMAGES.chainTasselProduct,
  earringsChainTasselWorn: EARRINGS_IMAGES.chainTasselWorn,
  
  // Pendant images
  pendantGold: PENDANT_IMAGES.gold,
} as const;

// ─── Default Fallback Images ────────────────────────────────────
export const DEFAULT_IMAGES = {
  product: '/assets/hero-jewelry.jpg',
  category: '/assets/hero-jewelry.jpg',
  blog: '/assets/gallery/ring-gold-stack.jpg',
  hero: '/assets/hero-jewelry.jpg',
} as const;
