'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  DescriptionPanel,
  GreenPanel,
  SolidPanel,
  PurplePanel,
} from './panels';

gsap.registerPlugin(ScrollTrigger);

export default function LayeredPanels() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const panels = container.querySelectorAll('.panel');

    // Set z-index for layering effect first
    panels.forEach((panel, i) => {
      gsap.set(panel, { zIndex: panels.length - i });
    });

    const ctx = gsap.context(() => {
      // Animate panels sliding up from bottom
      gsap.to('.panel:not(:last-child)', {
        yPercent: -100,
        ease: 'none',
        stagger: 0.5,
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: '+=300%',
          scrub: true,
          pin: true,
        },
      });
    }, container);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="container"
      className="panel-container"
    >
      <DescriptionPanel />
      <GreenPanel />
      <SolidPanel />
      <PurplePanel />
    </div>
  );
}
