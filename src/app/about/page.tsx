"use client";

import LocomotiveProvider from "@/providers/locomotive";
import Image from "next/image";
import Loading from "../loading";
import { useDarkModeSSRStore } from "@/store/dark-mode";
import { LuDownload } from "react-icons/lu";
import Navbar from "@/components/navbar";
import { VscCircleFilled } from "react-icons/vsc";
import PercentageBar from "@/components/percentage";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  FaAndroid,
  FaC,
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaJs,
  FaLaravel,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaReact,
} from "react-icons/fa6";
import {
  SiCsharp,
  SiExpress,
  SiIos,
  SiKalilinux,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiPostgresql,
  SiSpringboot,
  SiTypescript,
} from "react-icons/si";
import { GrHeroku } from "react-icons/gr";
import { TbBrandThreejs } from "react-icons/tb";

export default function About() {
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
              I am a passionate Brazilian developer with expertise in backend,
              frontend, and mobile development, as well as video editing, live
              program production, 3D modeling, and game creation. My passion for
              technology drives me to dedicate myself fully to each project. I
              thrive in team environments and am continually seeking new
              challenges to advance my professional growth.
            </p>
            <p>
              What sets me apart is my love for what I do. Although I began
              working in this field recently, I have been studying technology
              since I was ten years old, driven by my lifelong fascination with
              it. This long-standing enthusiasm makes learning and acquiring new
              knowledge a natural part of my journey.
            </p>
            <p>
              When approaching new problems, I do so with enthusiasm, seeing
              challenges as opportunities to grow. My hard skills include
              expertise in backend technologies like NodeJS and Laravel,
              frontend frameworks such as ReactJS and Next.js, and mobile
              development with React Native. Additionally, I have strong soft
              skills, including focus, empathy, and proactivity. I am also
              proficient in video editing, design, game creation, and
              automation, and am currently expanding my knowledge in WebGL, and
              multiplayer game development.
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
            <div className="flex-1">
              <h3 className="font-poppins font-bold mb-2.5">
                Git and Version Control
              </h3>
              <p className="text-dark-light text-sm leading-[200%]">
                Experienced in code versioning with Git, I efficiently manage
                changes.
              </p>
            </div>

            <div className="flex-1">
              <h3 className="font-poppins font-bold mb-2.5">
                Communication and Team projects
              </h3>
              <p className="text-dark-light text-sm leading-[200%]">
                Experience in leading teams on freelance and team projects
              </p>
            </div>

            <div className="flex-1">
              <h3 className="font-poppins font-bold mb-2.5">
                Ability to learn Quickly
              </h3>
              <p className="text-dark-light text-sm leading-[200%]">
                Curious and flexible, I embrace new technologies and concepts.
              </p>
            </div>
          </div>
        </section>

        <section
          data-scroll-section
          className="flex small:flex-col justify-between gap-main w-full max-w-main-10 mx-auto pb-[5%] small:px-4"
        >
          <div>
            <h3 className="font-poppins font-bold leading-[100%] mb-6">
              Technologies I master
            </h3>
            <div className="flex flex-wrap gap-4 text-5xl max-w-main-6 [&>*:hover]:text-main [&>*]:transition-colors">
              <RiNextjsFill />
              <FaReact />
              <FaNodeJs />
              <RiTailwindCssFill />
              <FaLaravel />
              <SiNestjs />
              <FaPhp />
              <SiKalilinux />
              <FaJava />
              <SiTypescript />
              <FaJs />
              <FaPython />
              <SiExpress />
              <SiMongodb />
              <SiMysql />
              <SiPostgresql />
              <FaGitAlt />
              <FaC />
              <FaHtml5 />
              <FaCss3Alt />
              <GrHeroku />
              <TbBrandThreejs />
              <SiCsharp />
              <SiSpringboot />
              <FaAndroid />
              <SiIos />
            </div>
          </div>
          <div>
            <h3 className="font-poppins font-bold leading-[100%] mb-6">
              Courses and Teaching
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-poppins font-bold mb-1">
                  Game development course (Flash, Studio Max 3D)
                </h4>
                <div className="flex gap-0.5 text-dark-light max-w-main-5">
                  <p>2019</p>
                  <VscCircleFilled className="mt-1 text-sm mx-1" />
                  <p>VisualMídia, 9.5 performance, 70 hours</p>
                </div>
              </div>
              <div>
                <h4 className="font-poppins font-bold mb-1">
                  English course, one of three-level oral and written
                </h4>
                <div className="flex gap-0.5 text-dark-light max-w-main-5">
                  <p>2019</p>
                  <VscCircleFilled className="mt-1 text-sm mx-1" />
                  <p>VisualMídia, 9.0 performance, 65 hours</p>
                </div>
              </div>
              <div>
                <h4 className="font-poppins font-bold mb-1">
                  Technical integrated high school in development
                </h4>
                <div className="flex gap-0.5 text-dark-light max-w-main-5">
                  <p>2022</p>
                  <VscCircleFilled className="mt-1 text-sm mx-1" />
                  <p>
                    3-year integrated technical course in Systems Development.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-poppins font-bold mb-1">
                  Software Engineering degree
                </h4>
                <div className="flex gap-0.5 text-dark-light max-w-main-5">
                  <p>Now</p>
                  <VscCircleFilled className="mt-1 text-sm mx-1" />
                  <p>
                    Software Engineering degree remotely from Anhangüera
                    University
                  </p>
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
          <p className="max-w-main-9 small:text-left text-sm leading-[250%] mb-16">
            Like many developers, I began with front-end development as a child.
            Nowadays, most of my projects include an interface and are created
            from design prototypes.
          </p>

          <div className="flex flex-col gap-5 w-full max-w-main-8">
            <PercentageBar percentage={90} label="React" />
            <PercentageBar percentage={95} label="Next" />
            <PercentageBar percentage={85} label="Tailwind" />
            <PercentageBar percentage={95} label="CSS" />
            <PercentageBar percentage={60} label="Saas" />
            <PercentageBar percentage={70} label="jQuery" />
            <PercentageBar percentage={40} label="Three.js" />
            <PercentageBar percentage={90} label="Typescript" />
          </div>
        </section>

        <section
          data-scroll-section
          className="flex-center flex-col small:px-4 text-center pb-[10%]"
        >
          <h2 className="font-poppins uppercase font-bold mb-10">Back-end</h2>
          <p className="max-w-main-9 small:text-left text-sm leading-[250%] mb-16">
            I began my career as a backend developer, working with Laravel, a
            PHP framework. It was a significant transition, but I adapted and
            eventually mastered the stack over time.
          </p>

          <div className="flex flex-col gap-5 w-full max-w-main-8">
            <PercentageBar percentage={75} label="PHP" />
            <PercentageBar percentage={80} label="Node.JS" />
            <PercentageBar percentage={75} label="Adonis" />
            <PercentageBar percentage={85} label="Laravel" />
            <PercentageBar percentage={55} label="Nest" />
          </div>
        </section>

        <section
          data-scroll-section
          className="flex-center flex-col small:px-4 text-center pb-[10%]"
        >
          <h2 className="font-poppins uppercase font-bold mb-10">Design</h2>
          <p className="max-w-main-9 small:text-left text-sm leading-[250%] mb-16">
            Unfortunately, this was a major weakness of mine, so I began
            teaching myself by taking design courses and continuously seeking
            improvement. Often, I&apos;m not satisfied with my own prototypes
            and find myself starting over.
          </p>

          <div className="flex flex-col gap-5 w-full max-w-main-8">
            <PercentageBar percentage={82} label="Figma" />
            <PercentageBar percentage={90} label="Canva" />
            <PercentageBar percentage={70} label="Design concepts" />
          </div>
        </section>

        <section
          data-scroll-section
          className="flex-center flex-col small:px-4 text-center pb-[10%]"
        >
          <h2 className="font-poppins uppercase font-bold mb-10">Mobile</h2>
          <p className="max-w-main-9 small:text-left text-sm leading-[250%] mb-16">
            After a few months working at BeMobile, I requested a new challenge
            and was assigned to mobile development. By that time, I had already
            been studying React Native for a year.
          </p>

          <div className="flex flex-col gap-5 w-full max-w-main-8">
            <PercentageBar percentage={90} label="React Native" />
            <PercentageBar percentage={65} label="Android" />
            <PercentageBar percentage={40} label="IOS" />
          </div>
        </section>

        <section
          data-scroll-section
          className="flex-center flex-col small:px-4 text-center pb-[10%]"
        >
          <h2 className="font-poppins uppercase font-bold mb-10">Hacking</h2>
          <p className="max-w-main-9 small:text-left text-sm leading-[250%] mb-16">
            For me, it has always been a hobby. During high school, I hacked
            three third-party systems from my private school. My first hack was
            at the age of 12 in 2017, I always found it fun and a way to occupy
            my nights.
          </p>

          <div className="flex flex-col gap-5 w-full max-w-main-8">
            <PercentageBar percentage={80} label="Kali Linux" />
            <PercentageBar percentage={55} label="Whonix" />
            <PercentageBar percentage={65} label="Pentesting" />
            <PercentageBar percentage={60} label="SQL injection" />
            <PercentageBar percentage={80} label="WPS/WPS2 hacking" />
            <PercentageBar percentage={55} label="Bruteforce hacking" />
            <PercentageBar percentage={60} label="Network hacking" />
          </div>
        </section>

        <section
          data-scroll-section
          className="flex-center flex-col small:px-4 text-center pb-[10%]"
        >
          <h2 className="font-poppins uppercase font-bold mb-10">Others</h2>
          <p className="max-w-main-9 small:text-left text-sm leading-[250%] mb-16">
            Driven by curiosity, I have always explored technology and
            computer-related topics. Through this, I&apos;ve learned about
            electronics, game development, pixel art, 3D modeling, and much
            more.
          </p>

          <div className="flex flex-col gap-5 w-full max-w-main-8">
            <PercentageBar percentage={70} label="Arduino" />
            <PercentageBar percentage={50} label="Lego Ev3" />
            <PercentageBar percentage={75} label="Video Editing" />
            <PercentageBar percentage={60} label="Game Development" />
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
            className="min-w-main-2 font-poppins flex-center border-2 py-3 px-3 border-dark bg-white hover:bg-white/70 text-dark dark:border-white dark:bg-dark dark:hover:bg-dark/70 dark:text-white"
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
