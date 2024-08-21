"use client";

import LocomotiveProvider from "@/providers/locomotive";
import Image from "next/image";
import Loading from "../loading";
import { useDarkModeStore } from "@/store/dark-mode";
import { LuDownload } from "react-icons/lu";
import Navbar from "@/components/navbar";
import { VscCircleFilled } from "react-icons/vsc";
import PercentageBar from "@/components/percentage";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function About() {
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

          <div className="flex-center gap-6 mt-24 small:mt-12">
            <Image
              src="/images/icons/lightning.svg"
              alt="Developer"
              width={44}
              height={82}
              className="dark:invert"
            />
            <div className="font-poppins text-4xl small:text-2xl font-extrabold text-center relative uppercase">
              <h2 className="whitespace-nowrap">Ederson Ederson Fagundes</h2>
              <h2
                className="absolute left-[15px] bottom-[100%] whitespace-nowrap text-transparent"
                style={{
                  WebkitTextStrokeWidth: "1px",
                  WebkitTextStrokeColor: darkMode
                    ? "rgba(255,255,255,1)"
                    : "rgba(70,70,70,1)",
                }}
                data-scroll
                data-scroll-speed="-2"
              >
                Ederson Ederson Fagundes
              </h2>
              <h2
                className="absolute left-[30px] bottom-[150%] whitespace-nowrap text-transparent opacity-30"
                style={{
                  WebkitTextStrokeWidth: "1px",
                  WebkitTextStrokeColor: darkMode
                    ? "rgba(255,255,255,1)"
                    : "rgba(70,70,70,1)",
                }}
                data-scroll
                data-scroll-speed="-3"
              >
                Ederson Ederson Fagundes
              </h2>
              <h2
                className="absolute left-[45px] bottom-[200%] whitespace-nowrap text-transparent opacity-10"
                style={{
                  WebkitTextStrokeWidth: "1px",
                  WebkitTextStrokeColor: darkMode
                    ? "rgba(255,255,255,1)"
                    : "rgba(70,70,70,1)",
                }}
                data-scroll
                data-scroll-speed="-4"
              >
                Ederson Ederson Fagundes
              </h2>
            </div>
            <Image
              src="/images/icons/lightning.svg"
              alt="Developer"
              width={44}
              height={82}
              className="dark:invert"
            />
          </div>

          <div className="text-dark-light leading-[250%] mt-28 text-sm max-w-main-10 space-y-7 small:px-4">
            <p>
              I&apos;m a passionate developer who started his journey focused on
              front-end and UI/UX. Along the way, I realized the importance of
              understanding back-end development to become a well-rounded
              developer. With two years of experience as a freelancer, I&apos;m
              always looking for new challenges and opportunities to grow
              professionally.
            </p>
            <p>
              I&apos;m a passionate developer who started his journey focused on
              front-end and UI/UX. Along the way, I realized the importance of
              understanding back-end development to become a well-rounded
              developer. With two years of experience as a freelancer, I&apos;m
              always looking for new challenges and opportunities to grow
              professionally. I&apos;m a passionate developer who started his
              journey focused on front-end and UI/UX. Along the way, I realized
              the importance of understanding back-end development to become a
              well-rounded developer. With two years of experience as a
              freelancer, I&apos;m always looking for new challenges and
              opportunities to grow professionally.
            </p>
            <p>
              I&apos;m a passionate developer who started his journey focused on
              front-end and UI/UX. Along the way, I realized the importance of
              understanding back-end development to become a well-rounded
              developer. With two years of experience as a freelancer, I&apos;m
              always looking for new challenges and opportunities to grow
              professionally.
            </p>
            <br />
          </div>
        </section>

        <section
          data-scroll-section
          className="flex-center flex-col text-center py-[5%]"
        >
          <div className="absolute -z-10 left-[25%] shadow-[0px_0px_700px_150px_#C9ECAE]" />
          <h2 className="font-poppins font-bold mb-14">My Skills</h2>
          <div className="flex gap-20 max-w-main-10 text-left small:flex-col small:px-4">
            <div>
              <h3 className="font-poppins font-bold mb-2.5">
                Communication and Team Coordination
              </h3>
              <p className="text-dark-light text-sm leading-[200%]">
                Experience in leading teams on freelance projects, developing
                effective communication and coordination skills.
              </p>
            </div>

            <div>
              <h3 className="font-poppins font-bold mb-2.5">
                Git and Version Control Mastery
              </h3>
              <p className="text-dark-light text-sm leading-[200%]">
                Experienced in code versioning with Git, I efficiently manage
                changes in collaborative projects.
              </p>
            </div>

            <div>
              <h3 className="font-poppins font-bold mb-2.5">
                Ability to Absorb Knowledge Quickly
              </h3>
              <p className="text-dark-light text-sm leading-[200%]">
                With a curious and flexible mind, I embrace new technologies and
                concepts with enthusiasm.
              </p>
            </div>
          </div>
        </section>

        <section
          data-scroll-section
          className="flex small:flex-col justify-between w-full max-w-main-10 mx-auto pb-[5%] small:px-4"
        >
          <div>
            <h3 className="font-poppins font-bold leading-[100%] mb-6">
              Technologies I master
            </h3>
          </div>
          <div>
            <h3 className="font-poppins font-bold leading-[100%] mb-6">
              Courses and Teaching
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-poppins font-bold mb-1">
                  EFSET English Certificate 59/100 B2 Upper Intermediate
                </h4>
                <div className="flex gap-0.5 text-dark-light max-w-main-5">
                  <p>2022</p>
                  <VscCircleFilled className="mt-1 text-sm mx-1" />
                  <p>
                    Oral Comprehension, Oral Expression, Written Comprehension
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-poppins font-bold mb-1">
                  Modern Web Course with Javascript 2022 + Projects
                </h4>
                <div className="flex gap-0.5 text-dark-light max-w-main-5">
                  <p>2022</p>
                  <VscCircleFilled className="mt-1 text-sm mx-1" />
                  <p>JavaScript, React.js, Node.js e Express</p>
                </div>
              </div>

              <div>
                <h4 className="font-poppins font-bold mb-1">
                  FullStack Web Development
                </h4>
                <div className="flex gap-0.5 text-dark-light max-w-main-5">
                  <p>2022</p>
                  <VscCircleFilled className="mt-1 text-sm mx-1" />
                  <p>JavaScript, React.js, Node.js, Express e MongoDB</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          data-scroll-section
          className="flex-center flex-col small:px-4 text-center pb-[10%] pt-[5%]"
        >
          <div className="absolute -z-10 right-[25%] shadow-[0px_0px_700px_150px_#AEBCEC]" />
          <h2 className="font-poppins uppercase font-bold mb-10">Front-end</h2>
          <p className="max-w-main-9s small:text-left text-sm leading-[250%] mb-16">
            I&apos;m a passionate developer who started his journey focused on
            front-end and UI/UX. Along the way, I realized the importance of
            understanding back-end development to become a well-rounded
            developer
          </p>

          <div className="flex flex-col gap-5 w-full max-w-main-8">
            <PercentageBar percentage={90} label="HTML" />
            <PercentageBar percentage={90} label="HTML" />
            <PercentageBar percentage={90} label="HTML" />
            <PercentageBar percentage={90} label="HTML" />
          </div>
        </section>

        <section
          data-scroll-section
          className="flex-center flex-col small:px-4 text-center pb-[10%]"
        >
          <h2 className="font-poppins uppercase font-bold mb-10">Back-end</h2>
          <p className="max-w-main-9s small:text-left text-sm leading-[250%] mb-16">
            I&apos;m a passionate developer who started his journey focused on
            front-end and UI/UX. Along the way, I realized the importance of
            understanding back-end development to become a well-rounded
            developer
          </p>

          <div className="flex flex-col gap-5 w-full max-w-main-8">
            <PercentageBar percentage={75} label="PHP" />
            <PercentageBar percentage={75} label="PHP" />
            <PercentageBar percentage={75} label="PHP" />
            <PercentageBar percentage={75} label="PHP" />
          </div>
        </section>

        <section
          data-scroll-section
          className="flex-center flex-col small:px-4 text-center pb-[10%]"
        >
          <h2 className="font-poppins uppercase font-bold mb-10">Design</h2>
          <p className="max-w-main-9s small:text-left text-sm leading-[250%] mb-16">
            I&apos;m a passionate developer who started his journey focused on
            front-end and UI/UX. Along the way, I realized the importance of
            understanding back-end development to become a well-rounded
            developer
          </p>

          <div className="flex flex-col gap-5 w-full max-w-main-8">
            <PercentageBar percentage={80} label="Figma" />
            <PercentageBar percentage={80} label="Figma" />
            <PercentageBar percentage={80} label="Figma" />
            <PercentageBar percentage={80} label="Figma" />
          </div>
        </section>

        <section
          data-scroll-section
          className="flex-center flex-col small:px-4 text-center pb-[10%]"
        >
          <h2 className="font-poppins uppercase font-bold mb-10">Mobile</h2>
          <p className="max-w-main-9s small:text-left text-sm leading-[250%] mb-16">
            I&apos;m a passionate developer who started his journey focused on
            front-end and UI/UX. Along the way, I realized the importance of
            understanding back-end development to become a well-rounded
            developer
          </p>

          <div className="flex flex-col gap-5 w-full max-w-main-8">
            <PercentageBar percentage={65} label="React Native" />
            <PercentageBar percentage={65} label="React Native" />
            <PercentageBar percentage={65} label="React Native" />
            <PercentageBar percentage={65} label="React Native" />
          </div>
        </section>

        <section
          data-scroll-section
          className="flex-center flex-col small:px-4 text-center pb-[10%]"
        >
          <h2 className="font-poppins uppercase font-bold mb-10">Hacking</h2>
          <p className="max-w-main-9s small:text-left text-sm leading-[250%] mb-16">
            I&apos;m a passionate developer who started his journey focused on
            front-end and UI/UX. Along the way, I realized the importance of
            understanding back-end development to become a well-rounded
            developer
          </p>

          <div className="flex flex-col gap-5 w-full max-w-main-8">
            <PercentageBar percentage={95} label="Kali Linux" />
            <PercentageBar percentage={95} label="Kali Linux" />
            <PercentageBar percentage={95} label="Kali Linux" />
            <PercentageBar percentage={95} label="Kali Linux" />
          </div>
        </section>

        <section
          data-scroll-section
          className="flex-center flex-col small:px-4 text-center pb-[10%]"
        >
          <h2 className="font-poppins uppercase font-bold mb-10">Others</h2>
          <p className="max-w-main-9s small:text-left text-sm leading-[250%] mb-16">
            I&apos;m a passionate developer who started his journey focused on
            front-end and UI/UX. Along the way, I realized the importance of
            understanding back-end development to become a well-rounded
            developer
          </p>

          <div className="flex flex-col gap-5 w-full max-w-main-8">
            <PercentageBar percentage={88} label="Arduino" />
            <PercentageBar percentage={88} label="Arduino" />
            <PercentageBar percentage={88} label="Arduino" />
            <PercentageBar percentage={88} label="Arduino" />
          </div>
        </section>

        <section
          data-scroll-section
          className="flex-center text-center pb-[10%]"
        >
          <a
            role="button"
            href="/documents/Resume - Ederson Franzen Fagundes-eng.pdf"
            download
            className="min-w-main-2 font-poppins flex-center border-2 py-3 px-3 border-dark bg-white text-dark dark:border-white dark:bg-dark dark:text-white"
          >
            <LuDownload className="text-2xl mr-2" />
            Portfolio
          </a>
        </section>

        <section data-scroll-section>
          <Footer />
        </section>
      </main>
    </LocomotiveProvider>
  );
}
