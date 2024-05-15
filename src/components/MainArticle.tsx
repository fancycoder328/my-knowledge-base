"use client";

import Go from "./Go";

export interface MainArticleProps {
    slug: string;
    title: string;
};

export default function MainArticle({ slug, title }: MainArticleProps) {
    return (
        <>
            <br />
            <span className="pl-4 italic">Main article:&nbsp;
                <Go to={`/base/${slug}`}>
                    <span className="text-blue-400 hover:underline cursor-pointer">{title}</span>
                </Go>
            </span>
            <br />
            <br />
        </>
    );
};