import Redirect from "./Redirect";

export interface LinkProps {
    slug: string;
    title: string;
};

export default function Link({ slug, title }: LinkProps) {
    return (
        <>
            <Redirect href={`/base/${ slug }`} text={title} />
        </>
    );
};