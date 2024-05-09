"use client";

import { motion } from "framer-motion";
import Go from "./Go";

export default function KnowledgeBasePageButton() {
  const buttonVariants = {
    hover: {
      scale: 2,
      transition: { duration: 0.2 },
    },
  };

  return (
    <Go to={"/base"}>
      <motion.button
        className="text-center flex justify-center items-center mx-auto px-[30px] py-[18px] rounded-full border border-white/[0.5] mb-14 relative backdrop-blur-xl text-sm antialiased bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
        variants={buttonVariants}
        whileHover="hover"
      >
        {"<"} Back to Base
      </motion.button>
    </Go>
  );
}
