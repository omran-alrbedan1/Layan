'use client'
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Grid, X, ZoomIn } from "lucide-react";
import { KeyboardEvent, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { PRODUCTS, type Product, type ProductCategory } from "@/constants/products";

// Product localization
const PRODUCT_AR: Record<string, { name: string; tagline?: string }> = {
  "r-001": { name: "خاتم ذهب منحني", tagline: "أناقة منحوتة من الذهب الخالص." },
  "r-002": { name: "خاتم زمرد تراثي", tagline: "صاغته الطبيعة وأتقنه التصميم." },
  "r-003": { name: "خاتم بريق فاخر", tagline: "لمن يقدر الفخامة الهادئة." },
  "r-004": { name: "خاتم هالو بلونين", tagline: "عنصران بتناغم مثالي." },
  "r-005": { name: "خاتم سوليتير ذهب أبيض", tagline: "أناقة هادئة في كل تفصيل." },
  "r-006": { name: "خاتمان ذهبيان متداخلان", tagline: "تصميم هندسي بلمسة يدوية." },
  "r-007": { name: "خاتم ورق مرصع", tagline: "يلمع بنعومة مع كل حركة." },
  "r-008": { name: "خاتم نصف إتيرنتي مرصع", tagline: "رمز للحب والبريق." },
  "r-009": { name: "خاتم ذهب نقي", tagline: "أناقة نقية بذهب 18 قيراط." },
  "r-010": { name: "طقم خواتم ألماس", tagline: "بريق متعدد لإطلالة يومية." },
  "r-011": { name: "خاتم ذهب كلاسيكي", tagline: "تصميم خالد وحرفية لا تضاهى." },
  "r-012": { name: "خاتم ألماس أبدي", tagline: "خلود في كل تفصيل." },
  "r-013": { name: "خاتم ياقوت وألماس", tagline: "لون ملكي، أناقة نقية." },
  "r-014": { name: "خاتم ذهب ملتوي", tagline: "جمال ملتوي من معدن ثمين." },
  "r-015": { name: "خاتم فينتدج مزركش", tagline: "سحر الماضي، رقي الحاضر." },
  "r-016": { name: "خاتم ذهب بختم", tagline: "جريء، كلاسيكي، أنت بلا منازع." },
  "e-001": { name: "أقراط ذهب متدلية", tagline: "أناقة تتحرك معك." },
  "e-002": { name: "أقراط ألماس مرصعة", tagline: "بريق في كل إشراقة." },
  "e-003": { name: "أقراط ذهب دائرية", tagline: "منحنيات كلاسيكية، لمعان ساحر." },
  "e-004": { name: "أقراط لؤلؤ متدلية", tagline: "جمال خالد بلمسة راقية." },
  "e-005": { name: "أقراط ثريا", tagline: "أطلقي بياناً مع كل خطوة." },
  "e-006": { name: "أقراط ذهب متسلقة", tagline: "تصميم عصري، لمسة رقيقة." },
  "e-007": { name: "أقراط أحجار كريمة", tagline: "لون نابض، حرفية رائعة." },
  "h-001": { name: "أسوارة ذهب", tagline: "أناقة جريئة لمعصم عصري." },
  "h-002": { name: "أسوارة ألماس", tagline: "فخامة تحيط بك." },
  "h-003": { name: "أسوارة ملتوية", tagline: "فنية في كل لفة." },
  "h-004": { name: "أسوارة مرصعة", tagline: "بريق متألق من كل زاوية." },
  "h-005": { name: "أسوارة منحوتة", tagline: "تحفة فنية لمعصمك." },
  "s-001": { name: "طقم زفاف ذهبي", tagline: "أناقة متكاملة ليومك المميز." },
  "s-002": { name: "طقم ألماس مسائي", tagline: "أسرقي الأنظار من الغسق حتى الفجر." },
  "s-003": { name: "طقم ذهب كلاسيكي", tagline: "قطع خالدة تتكامل معاً." },
  "s-004": { name: "طقم عصري بسيط", tagline: "خطوط نظيفة، أناقة نقية." },
  "s-005": { name: "طقم لؤلؤ فينتدج", tagline: "سحر الماضي برؤية عصرية." },
  "s-006": { name: "طقم ذهب وياقوت", tagline: "أزرق ملكي يلتقي الذهب البراق." },
  "s-007": { name: "طقم سلاسل ناعم", tagline: "خفيف، متعدد الطبقات، جميل." },
  "s-008": { name: "طقم سهرة جريء", tagline: "قطع جريئة لأمسيات لا تنسى." },
  "s-009": { name: "طقم ذهب يومي", tagline: "أناقة بلا عناء للارتداء اليومي." },
  "b-001": { name: "سوار تنس ذهبي", tagline: "شريط من الضوء بكل رشاقة." },
  "b-002": { name: "سوار تنس ألماس", tagline: "بريق يرافق كل حركة." },
  "b-003": { name: "أسوارة تعليقات ذهبية", tagline: "رموز مرحة مصقولة بالذهب." },
  "b-004": { name: "سوار غصن مرصع", tagline: "الطبيعة مرصعة بالألماس." },
  "b-005": { name: "سوار ذهب منحوت", tagline: "تصميم معماري خالد." },
  "b-006": { name: "طبق أساور ذهبية", tagline: "أناقة قابلة للتكديس لكل مناسبة." },
  "b-007": { name: "سوار ألماس", tagline: "بريق جريء على معصمك." },
  "b-008": { name: "سوار ذهب منسوج", tagline: "حرفية معقدة، جمال خالد." },
  "b-009": { name: "سوار أحجار كريمة", tagline: "أناقة ملونة للفخامة اليومية." },
  "b-010": { name: "سوار ذهب رابط", tagline: "روابط جريئة، أسلوب راق." },
  "b-011": { name: "سوار خرز ألماس", tagline: "بريق خفيف على خيط رقيق." },
  "b-012": { name: "أسوارة ذهب ملتوية", tagline: "جمال ملتوي لإطلالة عصرية." },
  "b-013": { name: "سوار لؤلؤ وذهب", tagline: "لؤلؤ كلاسيكي يلتقي الذهب العصري." },
};

const CATEGORY_KEYS: Record<ProductCategory, string> = {
  rings: "category.rings",
  earrings: "category.earrings",
  "hand-cuff": "category.handCuff",
  sets: "category.sets",
  bracelets: "category.bracelets",
};

function localizeProduct(product: Product, language: string) {
  if (language === "en") return { name: product.name, tagline: product.tagline };
  return PRODUCT_AR[product.id] ?? { name: product.name, tagline: product.tagline };
}

// Convert products to gallery format
const galleryImages = PRODUCTS.map((product) => ({
  id: product.id,
  url: product.image,
  title: product.name,
  category: product.category,
}));

interface LuxeGalleryProps {
  withFeaturedRow?: boolean;
  className?: string;
  showHeading?: boolean;
}

export function LuxeGallery({ withFeaturedRow = true, className = "", showHeading = true }: LuxeGalleryProps) {
  const t = useTranslations('home');
  const locale = useLocale();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const categories = [
    "all",
    ...new Set(PRODUCTS.map((product) => product.category)),
  ];

  const filteredImages =
    filter === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  const handleNext = () => {
    if (selectedImage !== null) {
      const currentIndex = galleryImages.findIndex(
        (img) => img.id === selectedImage
      );
      const nextIndex = (currentIndex + 1) % galleryImages.length;
      setSelectedImage(galleryImages[nextIndex].id);
    }
  };

  const handlePrev = () => {
    if (selectedImage !== null) {
      const currentIndex = galleryImages.findIndex(
        (img) => img.id === selectedImage
      );
      const prevIndex =
        (currentIndex - 1 + galleryImages.length) % galleryImages.length;
      setSelectedImage(galleryImages[prevIndex].id);
    }
  };

  const selectedImageData = galleryImages.find(
    (img) => img.id === selectedImage
  );

  const handleCardKeyDown = (
    event: KeyboardEvent<HTMLDivElement>,
    imageId: string
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setSelectedImage(imageId);
    }
  };

  // Get localized data for selected image
  const getLocalizedData = (imageId: string) => {
    const product = PRODUCTS.find(p => p.id === imageId);
    if (product) {
      return localizeProduct(product, locale);
    }
    return { name: '', tagline: '' };
  };

  const selectedLocalizedData = selectedImage ? getLocalizedData(selectedImage) : null;

  return (
    <section
      className={`w-full bg-background px-4 py-16 ${className}`}
      aria-labelledby="gallery-heading"
    >
      <div className="mx-auto max-w-7xl">
        {showHeading && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
            role="region"
            aria-labelledby="gallery-heading"
          >
            <Badge className="mb-4" variant="secondary">
              <Grid className="mr-1 h-3 w-3" />
              {t('collection.eyebrow')}
            </Badge>
            <h2
              id="gallery-heading"
              className="mb-4 text-4xl font-bold tracking-tight"
            >
              {t('collection.title1')} {t('collection.title2')}
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              {t('collection.subtitle')}
            </p>
          </motion.div>
        )}

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 flex flex-wrap justify-center gap-2"
          role="group"
          aria-label="Gallery categories"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(category)}
              aria-pressed={filter === category}
            >
              {category === "all" ? t('category.all') : t(CATEGORY_KEYS[category as ProductCategory])}
            </Button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
          aria-label="Gallery items"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => {
              const localized = getLocalizedData(image.id);
              return (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  role="listitem"
                  className=""
                >
                  <Card
                    className="group relative cursor-pointer overflow-hidden border-border transition-all hover:border-ring hover:shadow-xl"
                    onClick={() => setSelectedImage(image.id)}
                    onKeyDown={(event) => handleCardKeyDown(event, image.id)}
                    role="button"
                    tabIndex={0}
                    aria-label={`View details for ${localized.name}`}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <motion.img
                        src={image.url}
                        alt={localized.name}
                        className="h-full w-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />

                      {/* Overlay */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm"
                        aria-hidden="true"
                      >
                        <ZoomIn className="mb-2 h-6 w-6 text-[var(--muted-foreground)]" />
                        <h3 className="mb-1 text-center text-base font-semibold text-white">
                          {localized.name}
                        </h3>
                        <Badge variant="secondary" className="text-xs">
                          {t(CATEGORY_KEYS[image.category as ProductCategory])}
                        </Badge>
                      </motion.div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && selectedImageData && selectedLocalizedData && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
              onClick={() => setSelectedImage(null)}
              role="dialog"
              aria-modal="true"
              aria-labelledby="gallery-dialog-title"
              aria-describedby="gallery-dialog-description"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-h-[90vh] max-w-5xl"
              >
                {/* Close Button */}
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute -right-12 top-0 text-white hover:bg-white/10"
                  onClick={() => setSelectedImage(null)}
                  aria-label="Close gallery dialog"
                >
                  <X className="h-6 w-6" />
                </Button>

                {/* Navigation Buttons */}
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  aria-label="View previous image"
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  aria-label="View next image"
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>

                {/* Image */}
                <motion.img
                  key={selectedImage}
                  src={selectedImageData.url}
                  alt={selectedLocalizedData.name}
                  className="max-h-[80vh] w-auto rounded-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />

                {/* Image Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="mt-4 text-center text-white"
                  id="gallery-dialog-description"
                >
                  <h3
                    className="mb-2 text-xl font-semibold"
                    id="gallery-dialog-title"
                  >
                    {selectedLocalizedData.name}
                  </h3>
                  {selectedLocalizedData.tagline && (
                    <p className="mb-2 text-sm text-white/80 italic">
                      {selectedLocalizedData.tagline}
                    </p>
                  )}
                  <Badge variant="secondary">
                    {t(CATEGORY_KEYS[selectedImageData.category as ProductCategory])}
                  </Badge>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}