import React from "react";
import { motion } from "framer-motion";
import { transition } from "@/theme/animation";
import Link from "next/link";
import { FaX } from "react-icons/fa6";
import { useNavbarStore } from "@/store/navbar";
import Nav from "../nav";
import { PiSunFill } from "react-icons/pi";
import { useDarkModeStore } from "@/store/dark-mode";
import { IoMenu } from "react-icons/io5";

export default function Header() {
  const [darkMode, switchDarkMode] = useDarkModeStore((state) => [
    state.darkMode,
    state.switchDarkMode,
  ]);
  const [navbar, setNavbar] = useNavbarStore((state) => [
    state.navbar,
    state.setNavbar,
  ]);

  return (
    <div className="content relative z-50 w-full pt-10 flex justify-between items-center font-poppins font-bold uppercase">
      <h2 className="text-xl">
        <Link href="/">Ederson</Link>
      </h2>
      <div className="flex items-center justify-end gap-[30%] small:gap-4">
        <div className="flex small:hidden items-center text-xs">
          <Nav href="/about" label="About" />
          <Nav href="/projects" label="Projects" />
          <Nav href="/contact" label="Contact" />
        </div>

        <div
          className="p-1 border border-transparent hover:border-primary transition-colors rounded-full cursor-pointer big:hidden"
          onClick={() => setNavbar(true)}
        >
          <IoMenu className="text-2xl" style={{ fontSize: "24px" }} />
        </div>

        <div
          className="p-1 border border-transparent hover:border-primary transition-colors rounded-full cursor-pointer"
          onClick={switchDarkMode}
        >
          <PiSunFill className="text-2xl" style={{ fontSize: "24px" }} />
        </div>
      </div>
    </div>
  );
}
