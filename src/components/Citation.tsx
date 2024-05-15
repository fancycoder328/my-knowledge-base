"use client";

import Go from "./Go";

export interface CitationProps {
    href: string;
    number: number;
};

export default function Citation({ href, number }: CitationProps) {
    return (
        <>
            <span className="text-blue-400 cursor-pointer">
                <Go to={`/citation/${href}`}>
                    <sup>
                        [
                        <span className="hover:underline">{number}</span>
                        ]
                    </sup>
                </Go>
            </span>
        </>
    );
};