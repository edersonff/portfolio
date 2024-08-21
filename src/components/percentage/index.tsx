import React from "react";
import { motion } from "framer-motion";
import { transition } from "@/theme/animation";
export default function PercentageBar({
  percentage,
  label,
}: {
  percentage: number;
  label: string;
}) {
  return (
    <div className="flex items-end gap-2 w-full">
      <div className="flex flex-col w-full">
        <p className="text-[10px] text-left font-bold mb-1">{percentage}%</p>
        <div className="w-full h-2 relative bg-zinc-300 dark:bg-zinc-500">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${percentage}%` }}
            viewport={{
              once: true,
            }}
            transition={{
              ...transition,
              duration: 1,
            }}
            className="h-full bg-dark"
          />
        </div>
      </div>
      <div>
        <h4 className="font-poppins text-left font-semibold leading-[100%]">
          {label}
        </h4>
      </div>
    </div>
  );
}
