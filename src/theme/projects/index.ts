export type Project = {
  title: string;
  subtitle: string;
  description: string;

  categories: string[];
  color: string;

  image: string;
  button: {
    label: string;
  };
  slug: string;

  prints: string[];

  github?: string;
  link?: string;
};

export const projects: Project[] = [
  {
    title: "Seti company website",
    subtitle: "Web project",
    description:
      "A homepage for Seti Company, developed using Next.js with smooth scrolling, Framer Motion, Swiper, and various other technologies. This webpage was created as a prototype and did not have a pre-designed layout.",
    categories: ["Web Development", "Next.js", "Framer Motion"],
    button: {
      label: "More about",
    },
    slug: "seti-company-website",
    color: "#1C95BE",
    image: "seti.webp",

    prints: ["seti.webp"],

    github: "https://github.com/edersonff/seti",
    link: "https://seti.ederson.tech/",
  },
  {
    title: "Merlin Home",
    subtitle: "Design and Development",
    description:
      "I designed and built a complete homepage for Merlin Tech Company from scratch. The project involved prototyping in Figma and developing with Next.js, Tailwind CSS, Framer Motion, and other technologies. Each page was customized to narrate the story behind the software.",
    categories: ["Web Development", "Web Design"],
    button: {
      label: "More about",
    },
    slug: "merlin-home",
    color: "#6741d5",
    image: "merlin-home.webp",

    prints: ["merlin-home.webp"],

    github: "https://github.com/edersonff/Merlin-Home",
    link: "https://merlin-tech.com.br/",
  },
  {
    title: "Zap Auto",
    subtitle: "Design and Development",
    description:
      "It’s one of my most challenging projects, where I spent nearly weeks developing a functional prototype. I utilized advanced technologies such as Next.js, OpenAI, PostgreSQL, OAuth, and more. The goal was to automate WhatsApp using an AI-driven chatbot.",
    categories: ["Web Development", "Web Design", "AI", "WhatsApp"],
    button: {
      label: "More about",
    },
    slug: "merlin-home",
    color: "#31d16e",
    image: "zapauto.webp",

    prints: ["zapauto.webp"],

    github: "https://github.com/edersonff/zapzap-auto",
    link: "https://zap.merlin-tech.com.br/",
  },
  {
    title: "Merlin Tech",
    subtitle: "Web project",
    description:
      "Built to promote Merlin Company and generate leads, this project served as a key step in the sales funnel. It was primarily used in social media bio links and other marketing channels.",
    categories: ["Web Development", "Next.js"],
    button: {
      label: "More about",
    },
    slug: "merlin-tech",
    color: "#402d6b",
    image: "merlin-tech.webp",

    prints: ["merlin-tech.webp"],

    github: "https://github.com/edersonff/Merlin-Tech",
    link: "https://tech.merlin-tech.com.br/",
  },
  {
    title: "Alarc Home",
    subtitle: "Design and Development",
    description:
      "I prototyped and built an institutional homepage for Alarc Company, primarily designed for internal communication. The site also included features such as blog posts, management tools, testimonials, and more.",
    categories: ["Web Development", "Web Design"],
    button: {
      label: "More about",
    },
    slug: "alarc-home",
    color: "#94cb65",
    image: "alarc-home.webp",

    prints: ["alarc-home.webp"],

    github: "https://github.com/edersonff/alarc-home",
    link: "https://alarc-home.vercel.app/",
  },
  {
    title: "Alarc Tools",
    subtitle: "Web project",
    description:
      "It was a platform designed to manage Mercado Livre products and pricing. The goal was to automatically disable a product if its price increase exceeded a specified limit and to send email notifications for all product changes.",
    categories: ["Web Development", "Next.js", "MongoDB", "Tailwind CSS"],
    button: {
      label: "More about",
    },
    slug: "alarc-tools",
    color: "#1979cf",
    image: "alarc-tools.webp",

    prints: ["alarc-tools.webp"],

    link: "https://tools.alarc.com.br/",
  },
  {
    title: "Vainorh",
    subtitle: "Web project",
    description:
      "I managed the project platform, developed new features, and fixed bugs, primarily in the backend. The software was built on a legacy version of Laravel and used Voyager as an admin panel for managing tables and data.",
    categories: ["Web Development", "Laravel"],
    button: {
      label: "More about",
    },
    slug: "vainorh",
    color: "#bdd6d4",
    image: "vainorh.webp",

    prints: ["vainorh.webp"],

    link: "https://app.vainorh.com.br/login",
  },
  {
    title: "Vainorh App",
    subtitle: "App project",
    description:
      "Another developer and I worked with Expo and React Native to completely restructure the app. We used the existing API and focused primarily on redesigning the user interface. The app already had a designed prototype and nearly all of the screens were completed.",
    categories: ["Mobile Development", "React Native"],
    button: {
      label: "More about",
    },
    slug: "vainorh-app",
    color: "#4291a4",
    image: "vainorh-app.webp",

    prints: ["vainorh-app-1.webp", "vainorh-app-2.webp"],

    link: "https://play.google.com/store/apps/details?id=com.vainorhapp.app",
  },
  {
    title: "Guia Jaraguá",
    subtitle: "Web project",
    description:
      "It was a project for a virtual phonebook, designed primarily to promote local businesses through a website. Each business could create their own page featuring WhatsApp, social media links, addresses, photos, and more. Although it was my first 'real project,' it primarily served as a test.",
    categories: ["Web Development", "Next.js"],
    button: {
      label: "More about",
    },
    slug: "guia-jaragua",
    color: "#0373b9",
    image: "guia-jaragua.webp",

    prints: ["guia-jaragua.webp"],

    link: "https://guia-jaragua.vercel.app/",
  },
  {
    title: "Anime",
    subtitle: "Web project",
    description:
      "It was a hobby project for a friend, built with Next.js. It featured a single screen and was eventually discontinued.",
    categories: ["Web Development", "Next.js"],
    button: {
      label: "More about",
    },
    slug: "anime",
    color: "#e7571c",
    image: "anime.webp",

    prints: ["anime.webp"],

    link: "https://manga-psi.vercel.app/",
  },
];
