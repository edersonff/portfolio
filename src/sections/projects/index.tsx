import { projects, Project as ProjectType } from "@/theme/projects";
import { addAlpha } from "@/utils/colors";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProjectSection() {
  return (
    <section data-scroll-section className="py-[10%]">
      <div className="content flex flex-col gap-[35vh] small:gap-[15vh]">
        {projects.map((project, index) => (
          <Project invert={index % 2 === 0} key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

function Project({
  title,
  subtitle,
  image,
  button,
  slug,
  categories,
  description,
  color,
  invert,
}: ProjectType & {
  invert: boolean;
}) {
  return (
    <div
      className={
        "flex small:flex-col gap-y-main justify-between " +
        (invert ? "flex-row-reverse" : "flex-row")
      }
    >
      <div className="max-w-main-5">
        <p className="text-stone-300 dark:text-stone-500 text-sm mb-2">
          {subtitle}
        </p>
        <h3
          className="text-5xl small:text-3xl font-poppins font-bold leading-[125%] mb-4"
          style={{
            color,
          }}
        >
          {title}
        </h3>
        <div className="flex gap-4 font-bold mb-11">
          {categories.map((category) => (
            <div
              key={category}
              className="text-[10px] small:text-[8px] px-2.5 py-1.5 border border-transparent transition-colors"
              style={{
                backgroundColor: addAlpha(color, 0.2),
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "transparent";
              }}
            >
              {category}
            </div>
          ))}
        </div>

        <p className="text-dark-light text-xs leading-[200%] mb-11">
          {description}
        </p>

        <Link
          href={"/projects/" + slug}
          role="button"
          className="w-full py-3.5 flex-center hover:opacity-90 transition-opacity"
          style={{
            backgroundColor: addAlpha(color, 0.2),
          }}
        >
          {button.label}
        </Link>
      </div>
      <Link href={"/projects/" + slug} className="relative">
        <Image
          src="/images/illustrations/dots.svg"
          alt={title}
          width={125}
          height={125}
          className="absolute left-0 top-0 transform -translate-x-[20%] -translate-y-[20%]"
        />

        <Image
          src={`/images/projects/${image}`}
          alt={title}
          width={565}
          height={423}
          className="relative z-10"
        />
      </Link>
    </div>
  );
}
