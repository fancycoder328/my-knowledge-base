import Link from "next/link";

export interface CitationProps {
    href: string;
    number: number;
};

export default function Citation({ href, number }: CitationProps) {
    return (
        <>
            <Link className="text-blue-400" href={`/citation/${href}`}>
                <sup>
                    [
                        <span className="hover:underline">{number}</span>
                    ]
                </sup>
            </Link>
        </>
    );
};