import gsap from "gsap";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

export default function Parallax() {
  const imageRef = useRef<HTMLImageElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const topIconsRef = useRef<HTMLDivElement>(null);
  const bottomIconsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      !imageRef.current ||
      !backgroundRef.current ||
      !topIconsRef.current
      // !bottomIconsRef.current
    ) {
      return;
    }

    const moveXQuick = (el: HTMLElement) =>
      gsap.quickTo(el, "x", { duration: 0.6, ease: "power3" });
    const moveYQuick = (el: HTMLElement) =>
      gsap.quickTo(el, "y", { duration: 0.6, ease: "power3" });

    const moveImageX = moveXQuick(imageRef.current);
    const moveImageY = moveYQuick(imageRef.current);

    const moveBackgroundX = moveXQuick(backgroundRef.current);
    const moveBackgroundY = moveYQuick(backgroundRef.current);

    const moveTopIconsX = moveXQuick(topIconsRef.current);
    const moveTopIconsY = moveYQuick(topIconsRef.current);

    // const moveBottomIconsX = moveXQuick(bottomIconsRef.current);
    // const moveBottomIconsY = moveYQuick(bottomIconsRef.current);

    function onMove({ x, y }: { x: number; y: number }) {
      const width = window.innerWidth;
      const height = window.innerHeight;

      const constantX = x - width / 2;
      const constantY = y - height / 2;

      const backgroundY = Math.max(constantY * 0.01, 0);

      moveImageX(constantX * 0.05);
      moveImageY(Math.max(constantY * 0.05, 0));

      moveBackgroundX(constantX * 0.01);
      moveBackgroundY(backgroundY);

      moveTopIconsX(constantX * 0.01);
      moveTopIconsY(backgroundY);

      // moveBottomIconsX(x * 0.1);
      // moveBottomIconsY(y * 0.1);
    }

    const mousemove = (e: MouseEvent) => {
      console.log(e.clientX, e.clientY);
      onMove({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mousemove);

    return () => {
      window.removeEventListener("mousemove", mousemove);
    };
  }, [imageRef, backgroundRef, topIconsRef, bottomIconsRef]);
  return (
    <div className="relative overflow-hidden small:scale-90">
      <Image
        src="/images/ederson/transparent-bg.webp"
        alt="Ederson Franzen Fagundes"
        width={400}
        height={400}
        className="relative z-10 object-contain object-right-bottom translate-y-5 -scale-x-100"
        ref={imageRef}
      />
      <div className="absolute flex flex-col items-end bottom-0 right-0">
        <div className="flex gap-4 dark:invert" ref={topIconsRef}>
          <Image
            src="/images/icons/linkedin-outline.svg"
            alt="LinkedIn"
            width={30}
            height={30}
            className="cursor-pointer"
          />
          <Image
            src="/images/icons/github-outline.svg"
            alt="GitHub"
            width={30}
            height={30}
            className="cursor-pointer"
          />
          <Image
            src="/images/icons/whatsapp-outline.svg"
            alt="WhatsApp"
            width={30}
            height={30}
            className="cursor-pointer"
          />
          <Image
            src="/images/icons/instagram-outline.svg"
            alt="Instagram"
            width={30}
            height={30}
            className="cursor-pointer"
          />
        </div>

        <div ref={backgroundRef} className="w-[320px] h-[320px] bg-dark" />
      </div>
    </div>
  );
}
