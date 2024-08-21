export type Project = {
  title: string;
  subtitle: string;
  description: string;

  categories: string[];
  color: string;

  image: string;
  button: {
    label: string;
    link: string;
  };
};

export const projects: Project[] = [
  {
    title: "Seti company website",
    subtitle: "Web project",
    description:
      "Full website design and build for a concept team collaboration platform. This website also includes a beautiful blog. I have built the website and the blog in Webflow which has one of the best CMS for blog hosting.",
    categories: ["Web Development", "Web Design"],
    button: {
      label: "More about",
      link: "/projects/seti-company-website",
    },
    color: "#1C95BE",
    image: "seti.webp",
  },
];
