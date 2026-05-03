'use client';

import { useState, useEffect } from 'react';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { HERO_IMAGES } from '@/constants/images';

interface HeroSlide {
  image: string;
  title: string;
  subtitle: string;
  cta: string;
  href: string;
}

export default function Hero() {
  const t = useTranslations('home');
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: HeroSlide[] = [
    {
      image: HERO_IMAGES.abuSaraHero,
      title: t('hero.title'),
      subtitle: t('hero.subtitle'),
      cta: t('hero.cta'),
      href: '/collections'
    },
    {
      image: HERO_IMAGES.abuSaraHero2,
      title: 'Exquisite Collections',
      subtitle: 'Discover our handcrafted jewelry pieces',
      cta: 'Explore Now',
      href: '/collections'
    },
    {
      image: HERO_IMAGES.abuSaraHero3,
      title: 'Heritage Since 1921',
      subtitle: 'Three generations of excellence in jewelry craftsmanship',
      cta: 'Our Story',
      href: '/about'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative w-full h-[60vh] min-h-100 max-h-150 overflow-hidden">
      {/* Carousel Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-black/25" />
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
              <h1 className="text-3xl md:text-4xl max-w-4xl font-serif font-light leading-snug drop-shadow">
                {slide.title}
                <br />
                <span className="font-semibold max-w-xl">{slide.subtitle}</span>
              </h1>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 bg-white/80 hover:bg-white text-gray-800 rounded-full flex items-center justify-center transition-colors duration-200"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 bg-white/80 hover:bg-white text-gray-800 rounded-full flex items-center justify-center transition-colors duration-200"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-1.5 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white opacity-100 w-6 sm:w-8' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
