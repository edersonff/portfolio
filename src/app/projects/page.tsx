"use client";

import LocomotiveProvider from "@/providers/locomotive";
import Image from "next/image";
import Loading from "../loading";
import { useDarkModeStore } from "@/store/dark-mode";
import Navbar from "@/components/navbar";
import Link from "next/link";
import ProjectSection from "@/sections/projects";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Projects() {
  const [darkMode, switchDarkMode] = useDarkModeStore((state) => [
    state.darkMode,
    state.switchDarkMode,
  ]);

  return (
    <LocomotiveProvider>
      <Loading isComponent={true} />

      <main className="flex flex-col relative">
        <Image
          data-scroll-section
          src="/images/background/white-noise.webp"
          alt="Deltix Logo"
          layout="fill"
          priority
          className="dark:opacity-50"
        />

        <section
          data-scroll-section
          className="w-full relative flex-center flex-col"
        >
          <Header />

          <div className="gap-6 mt-28">
            <div className="font-poppins text-5xl small:text-3xl font-bold text-center relative">
              <h2 className="whitespace-nowrap">My Projects</h2>
            </div>
          </div>

          <p className="text-dark-light text-center leading-[250%] mt-20 text-xl max-w-main-9 space-y-7 mb-24 small:text-left small:px-8">
            I&apos;m a passionate developer who started his journey focused on
            front-end and UI/UX. Along the way, I realized the importance of
            understanding back-end development to become a well-rounded
            developer. With two
          </p>

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
