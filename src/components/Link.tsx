"use client";

import { useRouter } from "next/navigation";

export interface LinkProps {
    slug: string;
    title: string;
};

export default function Link({ slug, title }: LinkProps) {
    const router = useRouter();
    const handleClickEvent = (e: any) => {
        e.preventDefault();
        router.push(slug);
    };
    return (
        <>
            <span onClick={handleClickEvent} className="text-blue-400 hover:underline cursor-pointer">{title}</span>
        </>
    );
};