import { Hero } from "@/components/Hero";
import { TypeWriterEffect } from "@/components/TypeWriter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Knowledge Base | Developer Sujay",
};

export default function Home() {
  return (
    <>
      <Hero />
      <TypeWriterEffect />
    </>
  );
}
