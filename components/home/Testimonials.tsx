'use client';

import { useTranslations } from 'next-intl';
import { HERO_IMAGES } from '@/constants/images';

// Testimonial data
const testimonials = [
  {
    key: 'sarah',
    avatar: HERO_IMAGES.abuSaraHero,
    featured: false
  },
  {
    key: 'elizabeth',
    avatar: HERO_IMAGES.abuSaraHero2,
    featured: true
  },
  {
    key: 'emma',
    avatar: HERO_IMAGES.abuSaraHero,
    featured: false
  }
];

// Testimonial Card Component
function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  const t = useTranslations('home.testimonials');
  
  return (
    <div className={`bg-white rounded-lg shadow-sm p-4 sm:p-6 relative w-full sm:w-137.5 ${
      testimonial.featured ? 'border-l-4 border-primary ltr:border-l-4 rtl:border-r-4 ml-0 ltr:ml-0 rtl:mr-0 sm:ltr:-ml-14 sm:rtl:-mr-14' : ''
    }`}>
      {/* Quote Icon */}
      <div className="absolute top-4 ltr:right-4 rtl:left-4 text-primary text-2xl sm:text-4xl">
        "
      </div>

      {/* Customer Info */}
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-full overflow-hidden shrink-0">
          <img 
            src={testimonial.avatar} 
            alt={t(`${testimonial.key}.name`)}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-gray-900 mb-2">
            {t(`${testimonial.key}.name`)}
          </p>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed text-left ltr:text-left rtl:text-right">
            {t(`${testimonial.key}.text`)}
          </p>
        </div>
      </div>
    </div>
  );
}

// Main Testimonials Component
export default function Testimonials() {
  const t = useTranslations('home');

  return (
    <section className="px-4 max-w-6xl mx-auto mb-14">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif font-light text-gray-900 mb-4">
              {t('testimonials.title')}
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              {t('testimonials.description')}
            </p>
          </div>
        </div>

        {/* Right Testimonials */}
        <div className="space-y-4">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.key} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
