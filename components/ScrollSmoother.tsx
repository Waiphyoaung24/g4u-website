"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollSmootherWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    // Sync Lenis with GSAP ScrollTrigger
    lenisRef.current.on("scroll", ScrollTrigger.update);

    // Add Lenis raf to GSAP ticker for smooth synchronization
    gsap.ticker.add((time) => {
      lenisRef.current?.raf(time * 1000);
    });

    // Disable GSAP's default lag smoothing to work better with Lenis
    gsap.ticker.lagSmoothing(0);

    // Cleanup on unmount
    return () => {
      lenisRef.current?.destroy();
      gsap.ticker.remove((time) => {
        lenisRef.current?.raf(time * 1000);
      });
    };
  }, []);

  return <>{children}</>;
}
