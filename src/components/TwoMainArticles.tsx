import Go from "./Go";

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
                <Go to={`/base/${firstArticleSlug}`}>
                    <span className="text-blue-400 hover:underline">{firstArticleName}</span>
                </Go>
                &nbsp;and&nbsp;
                <Go to={`/base/${secondArticleSlug}`}>
                    <span className="text-blue-400 hover:underline">{secondArticleName}</span>
                </Go>
            </span>
            <br />
            <br />
        </>
    );
};