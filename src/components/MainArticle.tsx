import Link from "next/link";

export interface MainArticleProps {
    slug: string;
    title: string;
};

export default function MainArticle({ slug, title }: MainArticleProps) {
    return (
        <>
            <br />
            <span className="pl-4 italic">Main article:&nbsp;
                <Link href={`/base/${slug}`}>
                    <span className="text-blue-400 hover:underline">{title}</span>
                </Link>
            </span>
            <br />
            <br />
        </>
    );
};