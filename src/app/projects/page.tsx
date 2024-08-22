"use client";

import LocomotiveProvider from "@/providers/locomotive";
import Image from "next/image";
import Loading from "../loading";
import { useDarkModeSSRStore } from "@/store/dark-mode";
import Navbar from "@/components/navbar";
import Link from "next/link";
import ProjectSection from "@/sections/projects";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Projects() {
  const [darkMode, switchDarkMode] = useDarkModeSSRStore((state) => [
    state.darkMode,
    state.switchDarkMode,
  ]);

  return (
    <LocomotiveProvider>
      <Loading isComponent={true} />

      <main className="flex flex-col relative">
        <div data-scroll-section className="absolute-full">
          <div
            className="absolute-full dark:opacity-20 opacity-60"
            style={{
              backgroundImage: `url('/images/background/white-noise.webp')`,
              backgroundRepeat: "repeat",
            }}
          />
        </div>

        <section
          data-scroll-section
          className="w-full relative flex-center flex-col"
        >
          <Header />

          <div className="mt-28">
            <h2 className="whitespace-nowrap font-poppins text-5xl small:text-3xl font-bold text-center relative">
              My Projects
            </h2>

            <p className="text-dark-light text-center leading-[250%] mt-20 text-xl max-w-main-9 space-y-7 mb-24 small:text-left small:px-8">
              Some of my projects were developed while I was working as a
              backend/mobile developer at BeMobile, while others were completed
              as a freelance developer and designer for various companies and
              individuals. I primarily used Next.js, Figma, Tailwind CSS, and
              put in a lot of effort to ensure high-quality results.
            </p>
          </div>

          <div className="absolute -z-10 right-[25%] shadow-[0px_0px_700px_150px_#AEBCEC]" />
        </section>

        <ProjectSection />

        <section data-scroll-section>
          <Footer />
        </section>
      </main>
    </LocomotiveProvider>
  );
}
