export interface BlockQuoteProps {
    children: React.ReactNode;
};

export default function BlockQuote({children}: BlockQuoteProps) {
    return (
        <>
            <blockquote className="border-l-4 border-neutral-400 px-6 rounded-t-sm rounded-b-sm py-4 my-6">
                {children}
            </blockquote>
        </>
    );
};