"use client";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { MovingBorderButton } from "./MovingBorderButton";
import Link from "next/link";

export function TypeWriterEffect() {
  const words = [
    {
      text: "Explore",
    },
    {
      text: "this",
    },
    {
      text: "Dimension",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "differently.",
    },
    {
      text: "Randomly.",
      className: "tex.t-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex mt-[-195px] flex-col items-center justify-center h-[40rem] ">
      <p className="text-neutral-600 dark:text-neutral-200 text-base  mb-10">
        A collection of stuffs I found interest on
      </p>
      <TypewriterEffect words={words} />
      <div className="flex flex-col md:flex-row mt-10 space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <Link href={"/base"}>
          <MovingBorderButton text="Let&apos;s GO!" />
        </Link>
      </div>
    </div>
  );
}
