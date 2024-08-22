import type { Metadata } from "next";
import Providers from "@/providers";

export const metadata: Metadata = {
  title: "Ederson Franzen Fagundes - Portfolio",
  description:
    "I'm a passionate Brazilian developer who has been studying programming since I was a child. Over the years, I've explored various projects and hobbies, including game development, pentesting, and electronics hardware",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_URL,
    siteName: "Ederson Franzen Fagundes - Portfolio",
    title: "Ederson Franzen Fagundes - Portfolio",
    description:
      "I'm a passionate Brazilian developer who has been studying programming since I was a child. Over the years, I've explored various projects and hobbies, including game development, pentesting, and electronics hardware",
    images: [
      {
        url: process.env.NEXT_PUBLIC_URL + "/og/image.webp",
        width: 1280,
        height: 720,
        alt: "Ederson Franzen Fagundes - Portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <>{children}</>
    </Providers>
  );
}
