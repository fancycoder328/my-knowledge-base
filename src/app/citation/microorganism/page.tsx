import CitationLayout from "@/layouts/CitationLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Microorganism - Knowledge Base | Developer Sujay",
};

export default function MicroorganismCitation() {

    const content = (
        <>
            <p>
                The word <i>microorganism</i> (/ˌmaɪkroʊˈɔːrɡənɪzəm/) uses combining forms of <i>micro-</i> (from the Greek: μικρός, mikros, &quot;small&quot;) and <i>organism</i> from the Greek: ὀργανισμός, <i>organismós</i>, &quot;organism&quot;). It is usually written as a single word but is sometimes hyphenated (<i>micro-organism</i>), especially in older texts. The informal synonym <i>microbe</i> (<i>/ˈmaɪkroʊb/</i>) comes from μικρός, mikrós, &quot;small&quot; and βίος, bíos, &quot;life&quot;.
            </p>
        </>
    );

    return (
        <>
            <CitationLayout type="Citation" title="Microorganism" thumbnail="/assets/microorganism.png" content={content} />
        </>
    );
};