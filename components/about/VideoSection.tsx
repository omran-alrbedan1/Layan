'use client';

import { useRef, useState } from "react";
import { useTranslations } from 'next-intl';
import { BRAND_IMAGES } from '@/constants/images';

export function VideoSection() {
  const t = useTranslations('about');
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoPlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoEnded = () => setIsPlaying(false);

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Video */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <video
                ref={videoRef}
                className="w-full h-100 rounded-lg cursor-pointer"
                poster={BRAND_IMAGES.videoLogo}
                preload="metadata"
                onClick={handleVideoPlay}
                onEnded={handleVideoEnded} 
              >
                <source src="/assets/video/about.mp4" type="video/mp4" />
              </video>

              {!isPlaying && (
                <div
                  className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg cursor-pointer"
                  onClick={handleVideoPlay}
                >
                  <div className="text-white text-center">
                    <svg className="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="mb-6 text-3xl font-serif font-light text-gray-900">
              {t("video.title")}
            </h3>
            <div className="w-20 h-px bg-[#c9a98a] mb-8" />
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              {t("video.description1")}
            </p>
            <p className="leading-relaxed text-gray-600">
              {t("video.description2")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
