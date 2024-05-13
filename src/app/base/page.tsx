import { knowledgeBase } from "@/data/baseConstants";
import { ThreeDimensionalCard } from "@/components/3DCard";
import { Vortex } from "@/components/ui/vortex";
import { Sparkles } from "@/components/Sparkles";
import { Suspense } from "react";
import Loader from "@/components/Loader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Base - Knowledge Base | Developer Sujay",
};

export default function BasePage() {
  return (
    <>
      <div className="w-[calc(100%-4rem)] mx-auto rounded-md">
        <Sparkles />
        <Vortex
          backgroundColor="black"
          rangeY={800}
          particleCount={800}
          baseHue={120}
        >
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 items-center justify-center px-2 md:px-10 py-4 w-full h-full">
            {knowledgeBase.paragraphs.map((paragraph, i) => (
              <ul key={i}>
                <li>
                  <Suspense fallback={<Loader />}>
                    <ThreeDimensionalCard title={paragraph.title} shortDescription={paragraph.shortDescription} thumbnail={paragraph.thumbnail} topic={paragraph.topic} href={`/base/${paragraph.slug}`} />
                  </Suspense>
                </li>
              </ul>
            ))}
          </div>
        </Vortex >
      </div >
    </>
  );
};