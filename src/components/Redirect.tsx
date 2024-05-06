import Link from "next/link";

export interface RedirectProps {
    href: string;
    text: string;
};

export default function Redirect({ href, text }: RedirectProps) {
    return (
        <>
            <Link className="text-blue-400 hover:underline" href={ href }>{ text }</Link>
        </>
    );
};