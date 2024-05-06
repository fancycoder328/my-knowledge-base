"use client";
import React from "react";
import Image from "next/image";
import { TracingBeam } from "./ui/tracing-beam";

export interface TracingBeamComponentProps {
    topic: string;
    title: string;
    thumbnail: string;
    content: React.ReactNode;
};

export function TracingBeamComponent({ topic, title, thumbnail, content }: TracingBeamComponentProps) {
    return (
        <TracingBeam className="px-6">
            <div className="max-w-2xl mx-auto antialiased pt-4 relative">
                <div className="mb-10">
                    <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                        {topic}
                    </h2>

                    <p className="text-xl mb-4">
                        {title}
                    </p>

                    <div className="text-sm  prose prose-sm dark:prose-invert">
                        {typeof thumbnail === "string" ? (
                            <Image
                                src={thumbnail}
                                alt="Thumbnail"
                                height="1000"
                                width="1000"
                                className="rounded-lg mb-10 object-cover"
                            />
                        ): (
                            thumbnail
                        )}
                        {content}
                    </div>
                </div>
            </div>
        </TracingBeam>
    );
};