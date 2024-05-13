import CitationLayout from "@/layouts/CitationLayout";
import Link from "@/components/Link";
import Bold from "@/components/Bold";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Mating of yeasts - Knowledge Base | Developer Sujay",
};

export default function Mating_of_yeastsCitation() {
    const content = (
        <>
            <p>
                The yeast <i>Saccharomyces cerevisiae</i> is a simple <Link slug="Microorganism" title="single-celled" /> <Link slug="Eukaryote" title="eukaryote" /> with both a diploid and haploid mode of existence. The <Bold>mating of yeast</Bold> only occurs between haploids, which can be either the <Bold>a</Bold> or α (alpha) mating type and thus display simple sexual differentiation. Mating type is determined by a single locus, <i>MAT</i>, which in turn governs the sexual behaviour of both haploid and diploid cells. Through a form of genetic recombination, haploid yeast can switch mating type as often as every cell cycle.
            </p>
        </>
    );
    return (
        <>
            <CitationLayout type="Citation" title="Mating of yeasts [Citation]" thumbnail="/assets/mating_of_yeasts.png" content={content} />
        </>
    );
};