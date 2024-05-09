import Bold from "@/components/Bold";
import CitationLayout from "@/layouts/CitationLayout";

export default function IntroductionCitation() {
    const content = (
        <>
            <p>
                The <Bold>Citation</Bold> is a feature for displaying long information along with Images and visual references. While the <Bold>Onboarding Citation</Bold> feature doesn&apos;t redirects to another page, <Bold>Citation</Bold> makes you redirect to another page to show the long information.
            </p>
        </>
    );
    return (
        <>
            <CitationLayout type="Citation" title="Citation example" thumbnail="/assets/introduction.png" content={content} />
        </>
    );
};