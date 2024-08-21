import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { transition } from "@/theme/animation";

export default function Nav({ href, label }: { href: string; label: string }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <Link
      className="px-5 py-1.5"
      href={href}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="relative py-1">
        <motion.div
          initial={{ transformOrigin: "left" }}
          animate={{
            transform: isHover ? "scaleX(1)" : "scaleX(0)",
            transformOrigin: isHover ? "left" : "right",
          }}
          transition={{ ...transition, duration: 0.5 }}
          className="bg-main h-0.5 absolute bottom-0 left-0 w-full"
        />

        {label}
      </div>
    </Link>
  );
}
