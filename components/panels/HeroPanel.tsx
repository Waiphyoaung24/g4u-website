'use client';

import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

export default function HeroPanel() {
  return (
    <section className="panel absolute inset-0 h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-10"></div>

      {/* Ambient Glow Effect - simulating the zippo flame light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-orange-500/20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] bg-yellow-400/30 rounded-full blur-[60px] animate-pulse"></div>

      {/* Corner Decorations */}
      <div className="absolute top-6 left-6 sm:top-10 sm:left-10 w-12 h-12 sm:w-16 sm:h-16 border-l border-t border-white/10 z-20"></div>
      <div className="absolute top-6 right-6 sm:top-10 sm:right-10 w-12 h-12 sm:w-16 sm:h-16 border-r border-t border-white/10 z-20"></div>
      <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 w-12 h-12 sm:w-16 sm:h-16 border-l border-b border-white/10 z-20"></div>
      <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 w-12 h-12 sm:w-16 sm:h-16 border-r border-b border-white/10 z-20"></div>

      {/* Hero Image - Mannequin with Zippo */}
      <div className="absolute inset-0 flex items-center justify-center bg-black">
        <div className="relative w-full h-full max-w-4xl mx-auto bg-black">
          <Image
            src="/imgs/g4u-hero.png"
            alt="Grow4U - Mannequin lighting a joint"
            fill
            priority
            className="object-contain object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            style={{ backgroundColor: 'black' }}
          />
        </div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-20 flex flex-col items-center justify-between h-full py-16 sm:py-20">
        {/* Top Section - Logo/Brand */}
        <div className="text-center">
          <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent mx-auto mb-4"></div>
          <p className="text-xs sm:text-sm uppercase tracking-[0.4em] sm:tracking-[0.5em] text-gray-400 font-[var(--font-montserrat)]">
            Premium Quality
          </p>
        </div>

        {/* Middle Section - Spacer for image visibility */}
        <div className="flex-1"></div>

        {/* Bottom Section - Title, CTA, Scroll */}
        <div className="text-center px-4">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-3 sm:mb-4 font-[var(--font-montserrat)] tracking-tight">
            <span className="text-white">GROW</span>
            <span className="text-green-500">4U</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8 font-[var(--font-montserrat)] max-w-md mx-auto tracking-wide">
            Elevate your experience
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12">
            <a
              href="/store"
              className="w-full sm:w-auto px-8 sm:px-10 py-3 bg-green-500 text-white font-[var(--font-montserrat)] font-medium text-sm uppercase tracking-wider hover:bg-green-400 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30"
            >
              Shop Now
            </a>
            <a
              href="/about"
              className="w-full sm:w-auto px-8 sm:px-10 py-3 border border-white/30 text-white font-[var(--font-montserrat)] font-medium text-sm uppercase tracking-wider hover:bg-white/10 hover:border-white/50 transition-all duration-300"
            >
              Learn More
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-[var(--font-montserrat)]">
              Scroll
            </span>
            <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
          </div>
        </div>
      </div>

      {/* Vignette Effect */}
      <div className="absolute inset-0 pointer-events-none z-10 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]"></div>
    </section>
  );
}
