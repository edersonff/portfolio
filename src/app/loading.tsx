"use client";

import { useLoadingStore } from "@/store/loading";
import { transition } from "@/theme/animation";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect } from "react";

export default function Loading({ isComponent }: { isComponent: boolean }) {
  const [loading, setLoading] = useLoadingStore((state) => [
    state.loading,
    state.setLoading,
  ]);
  useEffect(() => {
    if (isComponent) {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [isComponent]);

  return (
    <div
      className="fixed-full z-[999999] flex-center small:px-6  from-primary to-secondary overflow-hidden transition-opacity duration-1000 delay-1000 "
      style={{
        opacity: loading ? 1 : 0,
        pointerEvents: loading ? "auto" : "none",
      }}
    >
      <Image
        src="/deltix/logo-white-2.svg"
        alt="Deltix Logo"
        width={211}
        height={68}
        priority
      />
    </div>
  );
}
