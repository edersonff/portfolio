"use client";

import LocomotiveProvider from "@/providers/locomotive";
import Image from "next/image";
import Loading from "../../loading";
import Link from "next/link";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { notFound, useParams } from "next/navigation";
import { useMemo } from "react";
import { projects } from "@/theme/projects";
import { LuArrowUpRight } from "react-icons/lu";
import { FaGithub } from "react-icons/fa6";
import { useLocomotiveStore } from "@/store/locomotive";

export default function Project() {
  const locomotive = useLocomotiveStore((state) => state.locomotive);
  const getParms = useParams();

  const project = useMemo(() => {
    return projects.find((project) => project.slug === getParms.slug);
  }, [getParms.slug]);

  if (!project) {
    return notFound();
  }

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
          className="min-h-[80vh] small:min-h-[60vh] flex flex-col w-full relative"
        >
          <Image
            src="/images/background/fluid.webp"
            alt="Fluid Background"
            layout="fill"
            priority
            className="-z-[1] dark:opacity-15 small:object-cover"
          />
          <div className="absolute-full -z-[2] bg-dark/5 dark:bg-dark/5" />

          <Header />

          <div className="flex-1 -mt-[8%] small:mt-0 flex-center">
            <div className="max-w-main-8 small:px-8 text-center">
              <div className="mb-16">
                <p className="text-dark-light mb-1 text-sm">
                  {project.subtitle}
                </p>
                <h2
                  className="whitespace-nowrap font-poppins text-5xl small:text-3xl font-bold capitalize relative mb-12"
                  style={
                    {
                      // color: project.color,
                    }
                  }
                >
                  {project.title}
                </h2>

                <p className="text-dark-light leading-[250%] text-sm small:text-left">
                  {project.description}
                </p>
              </div>
              <div className="flex-center">
                {project.link && (
                  <Link
                    role="button"
                    target="_blank"
                    href={project.link}
                    className="min-w-main-3 gap-1 flex-center py-2.5 px-3 whitespace-nowrap group"
                    style={{
                      color: project.color,
                    }}
                  >
                    Visit website
                    <LuArrowUpRight className="text-3xl group-hover:rotate-45 transition-transform" />
                  </Link>
                )}
                {project.github && (
                  <Link
                    role="button"
                    target="_blank"
                    href={project.github}
                    className="hover:text-dark dark:hover:text-white -ml-10"
                  >
                    <FaGithub className="text-3xl group-hover:rotate-45 transition-transform" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>

        <section
          data-scroll-section
          className="flex-center relative -top-[15vh] small:-top-8 small:px-8 "
        >
          <div className="flex flex-col gap-main max-w-main-9 w-full">
            {project.prints.map((print, index) => (
              <Image
                src={"/images/prints/" + print}
                alt={project.title}
                key={index}
                width={1920}
                height={1080}
                onLoadingComplete={() => {
                  locomotive?.update();
                }}
                className="rounded-md w-full h-auto"
              />
            ))}
          </div>
        </section>

        <section data-scroll-section>
          <Footer />
        </section>
      </main>
    </LocomotiveProvider>
  );
}
