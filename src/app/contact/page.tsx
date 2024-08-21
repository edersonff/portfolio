"use client";

import LocomotiveProvider from "@/providers/locomotive";
import Image from "next/image";
import Loading from "../loading";
import { useDarkModeStore } from "@/store/dark-mode";
import { LuDownload } from "react-icons/lu";
import Navbar from "@/components/navbar";
import { VscCircleFilled } from "react-icons/vsc";
import PercentageBar from "@/components/percentage";
import Link from "next/link";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Contact() {
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
              <h2 className="whitespace-nowrap">Let’s talk</h2>
            </div>
          </div>

          <p className="text-dark-light text-center leading-[250%] !important mt-20 text-xl max-w-main-9 space-y-7 mb-36">
            I&apos;m a passionate developer who started his journey focused on
            front-end and UI/UX. Along the way, I realized the importance of
            understanding back-end development to become a well-rounded
            developer. With two
          </p>

          <div className="absolute -z-10 left-[25%] shadow-[0px_0px_700px_150px_#C9ECAE]" />
          <div className="absolute -z-10 right-[25%] shadow-[0px_0px_700px_150px_#AEBCEC]" />
        </section>

        <section
          data-scroll-section
          className="flex-center text-xl flex-col small:px-4"
        >
          <div className="max-w-main-8 w-full space-y-main">
            <label className="flex w-full flex-col" htmlFor="email">
              <span className="font-light leading-[250%]">Your E-mail</span>
              <input
                className="w-full border-b border-dark dark:border-white bg-transparent pb-1 pt-2 outline-none"
                id="email"
                type="text"
              />
            </label>

            <label className="flex w-full flex-col" htmlFor="name">
              <span className="font-light leading-[250%]">Your Name</span>
              <input
                className="w-full border-b border-dark dark:border-white bg-transparent pb-1 pt-2 outline-none"
                id="name"
                type="text"
              />
            </label>

            <label className="flex w-full flex-col" htmlFor="message">
              <span className="font-light leading-[250%]">
                How can I help you?
              </span>
              <textarea
                className="w-full border-b border-dark dark:border-white bg-transparent pb-1 pt-2 outline-none"
                id="message"
                rows={6}
              />
            </label>
          </div>
          <div className="flex-center mt-20">
            <button className="min-w-main-3 gap-1 flex-center py-2.5 px-3.5 group border-b border-r border-dark dark:border-white">
              Send message
            </button>
          </div>
        </section>

        <section
          data-scroll-section
          className="flex-center flex-col text-center pb-[10%] pt-[10%]"
        >
          <hr className="max-w-main-10 w-full pb-[5%] border-dark/30" />
          <p className="mb-10 text-dark-light text-sm max-w-main-5">
            And you can also contact me directly through my e-mail or phone
            number.
          </p>
          <div className="font-bold text-2xl small:text-lg space-x-6 small:space-x-2">
            <Link href="" className="hover:underline">
              edersonff_@hotmail.com.br
            </Link>
            <Link href="" className="hover:underline">
              (47) 99655-6538
            </Link>
          </div>
        </section>

        <section data-scroll-section>
          <Footer />
        </section>
      </main>
    </LocomotiveProvider>
  );
}
