import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="fixed-full flex-center text-center">
      <div>
        <div className="mb-20">
          <h1 className="text-6xl mb-12 font-extralight font-poppins">
            Page not found!
          </h1>
          <p className="max-w-main-8">
            Hi there! I&apos;m{" "}
            <span className="bg-main px-2 py-0.5 text-white font-bold">
              Ederson Franzen Fagundes
            </span>
            , a developer from Brazil. If you want to talk to me, just click on
            the button below. 🚀
          </p>
        </div>
        <div className="flex flex-wrap gap-10 justify-between">
          <Link
            target="_blank"
            href="https://wa.me/5547996556538"
            className="text-xl px-8 py-2 bg-teal-500 text-white font-medium rounded-full hover:bg-teal-600"
          >
            Talk to me on WhatsApp
          </Link>

          <Link
            href="/"
            className="text-xl px-8 py-2 bg-slate-950 text-white font-medium rounded-full hover:bg-slate-900"
          >
            Go back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
