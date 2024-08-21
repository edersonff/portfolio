import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaDiscord, FaFacebook, FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { RiTelegramLine } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";
import { VscGithub } from "react-icons/vsc";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="content-container bg-gradient-to-b small:pb-10">
      <h2 className="hidden">Footer</h2>
      <div className="mx-auto w-full content px-24 p-4 py-10 pt-16 lg:py-8">
        <div className="mb-2">
          <Link href="#" className="flex items-start gap-2 flex-col ">
            <p className="font-poppins text-xl font-bold uppercase">Ederson</p>
            <p className="text-xs leading-[200%] max-w-main-3">
              Software Engineer, Web Developer, and Designer
            </p>
          </Link>
        </div>
        <hr className="my-4 border-dark/20 dark:border-white/20 sm:mx-auto " />
        <div className="flex justify-between small:flex-col gap-y-4">
          <div className="text-dark-light">
            <h3 className="font-poppins font-bold mb-2 text-sm">Contact</h3>

            <div className="text-xs gap-y-2 gap-x-4 grid grid-rows-2 small:grid-cols-2 small:gap-y-4 small:gap-x-2 big:grid-flow-col text-left">
              <Link
                href="mailto:edersonff_@hotmail.com.br"
                className="hover:underline block"
              >
                edersonff_@hotmail.com.br
              </Link>
              <Link
                href="https://wa.me/5547996556538"
                target="_blank"
                className="hover:underline"
              >
                (47) 99655-6538
              </Link>
              <Link href="/about" className="hover:underline block">
                About
              </Link>
              <Link href="/projects" className="hover:underline">
                Projects
              </Link>
              <Link href="/contact" className="hover:underline block">
                Contact
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-between small:items-start gap-1.5 py-0.5 items-end text-dark-light">
            <div className="flex items-center">
              {[
                {
                  icon: <FaWhatsapp className="text-xl" />,
                  href: "https://wa.me/5547996556538",
                },
                {
                  icon: <CiLinkedin className="text-2xl" />,
                  href: "https://www.linkedin.com/in/ederson-franzen-fagundes/",
                },
                {
                  icon: <VscGithub className="text-xl" />,
                  href: "https://github.com/edersonff",
                },
                {
                  icon: <FaInstagram className="text-xl" />,
                  href: "https://instagram.com/edersonfff",
                },
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  target="_blank"
                  className=" transition-all rounded-full p-1.5"
                >
                  {item.icon}
                </Link>
              ))}
            </div>

            <p className="text-xs text-center">
              © {year !== 2024 ? year + "-" : null}
              {year}{" "}
              <Link href="/" className=" hover:underline">
                Ederson Franzen Fagundes
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
