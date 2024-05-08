import Link from "next/link";

export interface TwoMainArticlesProps {
    firstArticleSlug: string;
    firstArticleName: string;
    secondArticleSlug: string;
    secondArticleName: string;
};

export default function TwoMainArticles({ firstArticleSlug, firstArticleName, secondArticleSlug, secondArticleName }: TwoMainArticlesProps) {
    return (
        <>
            <br />
            <span className="pl-4 italic">Main article:&nbsp;
                <Link href={`/base/${firstArticleSlug}`}>
                    <span className="text-blue-400 hover:underline">{firstArticleName}</span>
                </Link>
                &nbsp;and&nbsp;
                <Link href={`/base/${secondArticleSlug}`}>
                    <span className="text-blue-400 hover:underline">{secondArticleName}</span>
                </Link>
            </span>
            <br />
            <br />
        </>
    );
};