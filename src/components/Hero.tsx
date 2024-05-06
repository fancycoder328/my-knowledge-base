import React from "react";
import { Spotlight } from "./ui/Spotlight";

export function Hero() {
  return (
    <div className="h-[40rem] w-full pb-[-100px] rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="px-4 max-w-7xl  mx-auto relative z-10  w-full pt-40 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Things<br /> I&apos;ve Learnt so far.
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto pb-[-100px]">
          Human Mind is unbelievable &amp; can contain almost an infinite amount of data. And it&apos;s not possible to write all of the data manually somewhere, but it&apos;s absolutely possible to write some of it. So this app is for some of my data that I found helpful for others and might interests them.
        </p>
      </div>
    </div>
  );
}
