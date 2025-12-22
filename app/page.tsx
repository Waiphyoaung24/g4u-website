'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import Logo from '@/components/ui/Logo';
import Navigation from '@/components/ui/Navigation';
import ArticleCard, { type ArticleData } from '@/components/ui/ArticleCard';
import StickyGallery from '@/components/ui/StickyGallery';
import Footer from '@/components/ui/Footer';

gsap.registerPlugin(ScrollTrigger);

const CLOUDINARY_IMAGE = 'https://res.cloudinary.com/dkk8ylzhy/image/upload/v1765793803/DSCF0211_xbkk4w.jpg';

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // GSAP Animations
    const ctx = gsap.context(() => {
      // Logo fade in
      gsap.from('#logo', {
        opacity: 0,
        y: -20,
        duration: 1,
        ease: 'power3.out',
      });

      // Navigation slide in
      gsap.from('nav', {
        opacity: 0,
        y: -10,
        duration: 0.8,
        delay: 0.3,
        ease: 'power2.out',
      });

      // Fade in article cards on scroll
      gsap.utils.toArray<HTMLElement>('.header-small').forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: 'power2.out',
        });
      });

      // Parallax effect for titles
      gsap.utils.toArray<HTMLElement>('.title').forEach((title) => {
        gsap.from(title, {
          scrollTrigger: {
            trigger: title,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
          opacity: 0,
          x: -50,
          duration: 1,
          ease: 'power3.out',
        });
      });
    }, mainRef);

    return () => {
      ctx.revert();
      lenis.destroy();
      gsap.ticker.remove(raf);
    };
  }, []);

  // Sample data
  const galleryArticles: ArticleData[] = [
    {
      id: '1',
      image: CLOUDINARY_IMAGE,
      subtitle: 'Lorem ipsum',
      title: 'Maecenas hendrerit risus nunc, ut congue nisl porta bibendum.',
      author: 'Ana Smith',
      date: '12 NOV 2019',
    },
    {
      id: '2',
      image: CLOUDINARY_IMAGE,
      subtitle: 'Lorem ipsum',
      title: 'Maecenas hendrerit risus nunc, ut congue nisl porta bibendum.',
      author: 'Ana Smith',
      date: '12 NOV 2019',
    },
    {
      id: '3',
      image: CLOUDINARY_IMAGE,
      subtitle: 'Lorem ipsum',
      title: 'Maecenas hendrerit risus nunc, ut congue nisl porta bibendum.',
      author: 'Ana Smith',
      date: '12 NOV 2019',
    },
    {
      id: '4',
      image: CLOUDINARY_IMAGE,
      subtitle: 'Lorem ipsum',
      title: 'Maecenas hendrerit risus nunc, ut congue nisl porta bibendum.',
      author: 'Ana Smith',
      date: '12 NOV 2019',
    },
    {
      id: '5',
      image: CLOUDINARY_IMAGE,
      subtitle: 'Lorem ipsum',
      title: 'Maecenas hendrerit risus nunc, ut congue nisl porta bibendum.',
      author: 'Ana Smith',
      date: '12 NOV 2019',
    },
    {
      id: '6',
      image: CLOUDINARY_IMAGE,
      subtitle: 'Lorem ipsum',
      title: 'Maecenas hendrerit risus nunc, ut congue nisl porta bibendum.',
      author: 'Ana Smith',
      date: '12 NOV 2019',
    },
    {
      id: '7',
      image: CLOUDINARY_IMAGE,
      subtitle: 'Lorem ipsum',
      title: 'Maecenas hendrerit risus nunc, ut congue nisl porta bibendum.',
      author: 'Ana Smith',
      date: '12 NOV 2019',
    },
    {
      id: '8',
      image: CLOUDINARY_IMAGE,
      subtitle: 'Lorem ipsum',
      title: 'Maecenas hendrerit risus nunc, ut congue nisl porta bibendum.',
      author: 'Ana Smith',
      date: '12 NOV 2019',
    },
  ];

  const stickyArticle: ArticleData = {
    id: 'sticky',
    image: CLOUDINARY_IMAGE,
    subtitle: 'Lorem ipsum',
    title: 'Maecenas hendrerit risus nunc, ut congue nisl porta bibendum.',
    author: 'Ana Smith',
    date: '12 NOV 2019',
  };

  const gridArticles: ArticleData[] = [
    {
      id: 'grid-1',
      image: CLOUDINARY_IMAGE,
      subtitle: 'Lorem ipsum',
      title: 'Maecenas hendrerit risus nunc, ut congue nisl porta bibendum.',
      author: 'Ana Smith',
      date: '12 NOV 2019',
    },
    {
      id: 'grid-2',
      image: CLOUDINARY_IMAGE,
      subtitle: 'Lorem ipsum',
      title: 'Maecenas hendrerit risus nunc, ut congue nisl porta bibendum.',
      author: 'Ana Smith',
      date: '12 NOV 2019',
    },
    {
      id: 'grid-3',
      image: CLOUDINARY_IMAGE,
      subtitle: 'Lorem ipsum',
      title: 'Maecenas hendrerit risus nunc, ut congue nisl porta bibendum.',
      author: 'Ana Smith',
      date: '12 NOV 2019',
    },
  ];

  return (
    <div ref={mainRef}>
      <div className="line"></div>
      <div className="top">
        <Logo />
      </div>
      <Navigation />

      {/* Hero Section */}
      <section className="container">
        <h2 className="title">lorem ipsum</h2>
        <Image
          className="img img-1"
          src={CLOUDINARY_IMAGE}
          alt="Featured article"
          width={1200}
          height={800}
          priority
          style={{ width: '100%', height: 'auto' }}
        />
        <ArticleCard
          id="hero"
          image={CLOUDINARY_IMAGE}
          subtitle="Lorem"
          title="Maecenas hendrerit risus nunc, ut congue nisl porta bibendum."
          author="Ana Smith"
          date="12 NOV 2019"
          variant="large"
        />
      </section>

      {/* Gallery Section */}
      <section className="articles container">
        <h2 className="title">pellente</h2>
        <StickyGallery stickyArticle={stickyArticle} articles={galleryArticles} />
      </section>

      {/* Grid Section */}
      <section className="articles container">
        <h2 className="title">congue</h2>
        <div className="row">
          {gridArticles.map((article, index) => (
            <div key={article.id}>
              <ArticleCard {...article} />
            </div>
          ))}
          <div>
            <Image
              className="img"
              src={CLOUDINARY_IMAGE}
              alt="Read more"
              width={500}
              height={750}
              style={{ width: '100%', height: 'auto' }}
            />
            <div className="header-small last">
              <p className="subtitle">Lorem ipsum</p>
              <h4>Maecenas hendrerit risus nunc, ut congue nisl porta bibendum.</h4>
              <p className="author subtitle">Ana Smith 12 NOV 2019</p>
            </div>
            <div className="more">
              <p className="subtitle">read more</p>
              <button>
                <ArrowRight size={32} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
