"use client";

import LocomotiveProvider from "@/providers/locomotive";
import Image from "next/image";
import Loading from "./loading";
import Link from "next/link";
import Nav from "@/components/nav";
import { useDarkModeStore } from "@/store/dark-mode";
import { PiSunFill } from "react-icons/pi";
import { LuArrowUpRight } from "react-icons/lu";
import ProjectSection from "@/sections/projects";
import Parallax from "@/components/parallax";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Home() {
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
          className="min-h-[80vh] flex flex-col w-full relative"
        >
          <Image
            src="/images/background/fluid.webp"
            alt="Deltix Logo"
            layout="fill"
            priority
            className="-z-[1] dark:opacity-15 small:object-cover"
          />
          <div className="absolute-full -z-[2] bg-dark/5 dark:bg-dark/5" />

          <Header />

          <div className="flex-1 -mt-[4%] small:my-[10%] flex-center">
            <div className="content w-full flex justify-between items-center small:flex-col">
              <div className="small:w-full">
                <p className="text-xl small:text-base">Hello, I am</p>
                <h2 className="uppercase font-poppins text-[64px] small:text-4xl font-bold leading-[100%] mb-4">
                  Ederson Franzen <br className="small:hidden" /> Fagundes
                </h2>

                <p className="text-xl small:text-base font-semibold mb-[10%]">
                  My name is Ederson, I’m{" "}
                  <span className="font-normal">{"{2004-2024}"}</span> years old
                </p>

                <div className="flex gap-x-main small:flex-col">
                  <Link
                    role="button"
                    href="/contact"
                    className="big:min-w-main-3 small:flex-1 flex-center border-2 py-2.5 px-3 border-dark bg-white hover:bg-white/80 text-dark dark:border-white dark:bg-dark dark:text-white"
                  >
                    Contact me
                  </Link>
                  <Link
                    role="button"
                    href="/projects"
                    className="big:min-w-main-3 small:flex-1 gap-1 flex-center py-2.5 px-3 whitespace-nowrap group"
                  >
                    Explore my portfolio
                    <LuArrowUpRight className="text-3xl group-hover:rotate-45 transition-transform" />
                  </Link>
                </div>
              </div>

              <Parallax />
            </div>
          </div>
        </section>

        <section data-scroll-section className="w-full relative">
          <h2
            className="text-white text-9xl small:text-7xl font-poppins font-extrabold whitespace-nowrap uppercase dark:text-dark"
            style={{
              WebkitTextStrokeWidth: "1px",
              WebkitTextStrokeColor: darkMode
                ? "rgba(255,255,255,0.5)"
                : "rgba(58,58,58,0.5)",
            }}
            data-scroll
            data-scroll-speed="10"
            data-scroll-direction="horizontal"
          >
            Developer Editor Designer Hacker Developer Editor Designer Hacker
          </h2>
        </section>

        <section
          data-scroll-section
          className="flex-center flex-col text-center py-[10%] small:px-4"
        >
          <div className="absolute -z-10 left-[25%] shadow-[0px_0px_700px_150px_#C9ECAE]" />
          <h2 className="font-poppins uppercase font-bold mb-10">
            The developer behind the code.
          </h2>
          <p className="mb-8 max-w-main-8 text-sm leading-[250%] small:text-left">
            I&apos;m a passionate developer who started his journey focused on
            front-end and UI/UX. Along the way, I realized the importance of
            understanding back-end development to become a well-rounded
            developer. With two years of experience as a freelancer, I&apos;m
            always looking for new challenges and opportunities to grow
            professionally.
          </p>
          <Link
            role="button"
            href="/projects"
            className="min-w-main-3 gap-1 flex-center py-2.5 px-4 group"
          >
            Explore my portfolio
            <LuArrowUpRight className="text-3xl group-hover:rotate-45 transition-transform" />
          </Link>
        </section>

        <ProjectSection />

        <section data-scroll-section>
          <Footer />
        </section>
      </main>
    </LocomotiveProvider>
  );
}
