import Layout from "@/layouts/Layout";
import Bold from "@/components/Bold";
import ParagraphSecondaryHeader from "@/components/ParagraphSecondaryHeader";
import Link from "@/components/Link";
import ReferencingVisual from "@/components/ReferencingVisual";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Biology - Knowledge Base | Developer Sujay",
};

export default function Biology() {
    const Fly = (
        <>
            Diagram of a fly from Robert Hooke&apos;s innovative <i>Micrographia</i>, 1665
        </>
    );
    const CharlesDarwin = (
        <>
            In 1842, Charles Darwin penned his first sketch of <i>On the Origin of Species</i>.
        </>
    );
    const content = (
        <>
            <p>
                <Bold>Biology</Bold> is the <Link slug="Science" title="scientific" /> study of life. It is a natural science with a broad scope but has several unifying themes that tie it together as a single, coherent field. For instance, all <Link slug="Organism" title="organisms" /> are made up of <Link slug="Cell_(biology)" title="cells" /> that process hereditary information encoded in <Link slug="Gene" title="genes" /> which can be transmitted to future generations. Another major theme is <Link slug="Evolution" title="evolution" />, which explains the unity and diversity of life. Energy processing is also important to life as it allows organisms to <Link slug="Animal_locomotion" title="move" />, grow, and <Link slug="Reproduction" title="reproduce" />. Finally, all organisms are able to regulate their own internal environments.
                <br />
                <br />
                <Link slug="Biologist" title="Biologists" /> are able to study life at multiple levels of organization, from the molecular biology of a cell to the anatomy and physiology of plants and animals, and evolution of populations. Hence, there are multiple subdisciplines within biology, each defined by the nature of their research questions and the tools that they use. Like other scientists, biologists use the scientific method to make observations, pose questions, generate hypotheses, perform experiments, and form conclusions about the world around them.
                <br />
                <br />
                Life on Earth, which emerged more than 3.7 billion years ago, is immensely diverse. Biologists have sought to study and classify the various forms of life, from <Link slug="Prokaryote" title="prokaryotic" /> organisms such as <Link slug="Archaea" title="archaea" /> and <Link slug="Bacteria" title="bacteria" /> to <Link slug="Eukaryote" title="eukaryotic" /> organisms such as protists, <Link slug="Fungi" title="fungi" />, <Link slug="Plant" title="plants" />, and <Link slug="Animal" title="animals" />. These various organisms contribute to the biodiversity of an ecosystem, where they play specialized roles in the cycling of nutrients and energy through their biophysical environment.
            </p>
            <ParagraphSecondaryHeader id="History">History</ParagraphSecondaryHeader>
            <p id="History">
                The earliest of roots of science, which included medicine, can be traced to ancient Egypt and Mesopotamia in around 3000 to 1200 BCE. Their contributions shaped ancient Greek natural philosophy. Ancient Greek philosophers such as Aristotle (384–322 BCE) contributed extensively to the development of biological knowledge. He explored biological causation and the diversity of life. His successor, Theophrastus, began the scientific study of plants. Scholars of the medieval Islamic world who wrote on biology included al-Jahiz (781–869), Al-Dīnawarī (828–896), who wrote on botany, and Rhazes (865–925) who wrote on anatomy and physiology. Medicine was especially well studied by Islamic scholars working in Greek philosopher traditions, while natural history drew heavily on Aristotelian thought.
                <br />
                <br />
            </p>
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Hooke-bluefly.jpg/170px-Hooke-bluefly.jpg" w={300} h={300} caption={Fly} />
            <p>
                <br />
                <br />
                Biology began to quickly develop with Anton van Leeuwenhoek&apos;s dramatic improvement of the <Link slug="Microscope" title="microscope" />. It was then that scholars discovered spermatozoa, bacteria, infusoria and the diversity of microscopic life. Investigations by Jan Swammerdam led to new interest in entomology and helped to develop techniques of microscopic dissection and staining. Advances in microscopy had a profound impact on biological thinking. In the early 19th century, biologists pointed to the central importance of the <Link slug="Cell_(biology)" title="cell" />. In 1838, Schleiden and Schwann began promoting the now universal ideas that (1) the basic unit of organisms is the cell and (2) that individual cells have all the characteristics of life, although they opposed the idea that (3) all cells come from the division of other cells, continuing to support spontaneous generation. However, Robert Remak and Rudolf Virchow were able to reify the third tenet, and by the 1860s most biologists accepted all three tenets which consolidated into cell theory.
                <br />
                <br />
                Meanwhile, taxonomy and classification became the focus of natural historians. Carl Linnaeus published a basic taxonomy for the natural world in 1735, and in the 1750s introduced scientific names for all his species. Georges-Louis Leclerc, Comte de Buffon, treated species as artificial categories and living forms as malleable—even suggesting the possibility of common descent.
                <br />
                <br />
                In 1842, Charles Darwin penned his first sketch of On the Origin of Species.
                Serious evolutionary thinking originated with the works of Jean-Baptiste Lamarck, who presented a coherent theory of evolution. The British naturalist <Bold>Charles Darwin</Bold>, combining the biogeographical approach of Humboldt, the uniformitarian <Link slug="Geology" title="geology" /> of Lyell, Malthus&apos;s writings on population growth, and his own morphological expertise and extensive natural observations, forged a more successful evolutionary theory based on natural selection; similar reasoning and evidence led Alfred Russel Wallace to independently reach the same conclusions.
                <br />
                <br />
            </p>
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Charles_Darwin_aged_51.jpg/170px-Charles_Darwin_aged_51.jpg" w={300} h={300} caption={CharlesDarwin} />
            <p>
                <br />
                <br />
                The basis for modern genetics began with the work of Gregor Mendel in 1865. This outlined the principles of biological inheritance. However, the significance of his work was not realized until the early 20th century when evolution became a unified theory as the modern synthesis reconciled Darwinian evolution with classical genetics. In the 1940s and early 1950s, a series of experiments by Alfred Hershey and Martha Chase pointed to <Link slug="DNA" title="DNA" /> as the component of <Link slug="Chromosome" title="chromosome" /> that held the trait-carrying units that had become known as <Link slug="Gene" title="genes" />. A focus on new kinds of model organisms such as <Link slug="Virus" title="viruses" /> and bacteria, along with the discovery of the double-helical structure of DNA by James Watson and Francis Crick in 1953, marked the transition to the era of molecular genetics. From the 1950s onwards, biology has been vastly extended in the molecular domain. The <Link slug="Genetic_code" title="genetic code" /> was cracked by Har Gobind Khorana, Robert W. Holley and Marshall Warren Nirenberg after DNA was understood to contain codons. The Human Genome Project was launched in 1990 to map the human <Link slug="Genome" title="genome" />.
            </p>
        </>
    );

    return (
        <>
            <Layout topic="Biology" title="Biology" thumbnail="/assets/biology.png" content={content} />
        </>
    );
};