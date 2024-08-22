import { projects } from "@/theme/projects";
import type { MetadataRoute } from "next";
import { Languages } from "next/dist/lib/metadata/types/alternative-urls-types";

type Sitemap = {
  url: string;
  lastModified?: string | Date;
  changeFrequency?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: number;
  alternates?: {
    languages?: Languages<string>;
  };
};

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: process.env.NEXT_PUBLIC_URL + "/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: process.env.NEXT_PUBLIC_URL + "/about",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: process.env.NEXT_PUBLIC_URL + "/contact",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: process.env.NEXT_PUBLIC_URL + "/projects",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    ...projects.map(
      ({ slug }) =>
        ({
          url: `${process.env.NEXT_PUBLIC_URL}/projects/${slug}`,
          lastModified: new Date(),
          changeFrequency: "monthly",
          priority: 0.4,
        } as Sitemap)
    ),
  ];
}
