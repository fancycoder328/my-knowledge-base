"use client";

export interface RedirectProps {
    href: string;
    text: string;
};

export default function Redirect({ href, text }: RedirectProps) {
    return (
        <>
            <span className="text-blue-400 hover:underline cursor-pointer" onClick={() => window.open(`${href}`)}>{ text }</span>
        </>
    );
};