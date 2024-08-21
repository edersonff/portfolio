"use client";

import React, { useEffect, useState } from "react";
import { LottieComponentProps } from "lottie-react";
import { lotties } from "./lotties";

import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function LottieReact({
  children,
  animation,
  color,
  ...props
}: Partial<LottieComponentProps> & {
  animation: keyof typeof lotties;
}) {
  const [anim, setAnim] = useState<Object | null>(lotties[animation]);

  useEffect(() => {
    setAnim(lotties[animation]);
  }, []);

  return (
    <Lottie {...props} animationData={anim}>
      {children}
    </Lottie>
  );
}
