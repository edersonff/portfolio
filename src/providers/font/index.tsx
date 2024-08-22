"use client";

import { useDarkModeSSRStore } from "@/store/dark-mode";
import { Inter, Poppins } from "next/font/google";
import React from "react";

const inter = Inter({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["500", "600", "700", "900"],
  subsets: ["latin-ext"],
  display: "swap",
  variable: "--font-poppins",
});

export default function FontProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const darkMode = useDarkModeSSRStore((state) => state.darkMode);

  return (
    <body
      className={`${inter.className} ${inter.variable} ${poppins.variable} ${
        darkMode ? "dark" : "light"
      }`}
    >
      {children}
    </body>
  );
}
