import Layout from "@/layouts/Layout";
import Bold from "@/components/Bold";
import Citation from "@/components/Citation";
import Link from "@/components/Link";
import HighLightText from "@/components/HighLightText";
import ReferencingVisual from "@/components/ReferencingVisual";
import ParagraphSecondaryHeader from "@/components/ParagraphSecondaryHeader";
import SubTitle from "@/components/SubTitle";
import { Metadata } from "next";
import BlockQuote from "@/components/BlockQuote";
import TransparentReferencingVisual from "@/components/TransparentReferencingVisual";
import MainArticle from "@/components/MainArticle";

export const metadata: Metadata = {
    title: "Microorganism - Knowledge Base | Developer Sujay",
};

export default function Microorganism() {

    const content = (
        <>
            <p>
                A <Bold>microorganism</Bold>, or <Bold>microbe</Bold>,<Citation href="microorganism" number={1} /> is an <Link slug="Organism" title="organism" /> of <Link slug="Microscopic_scale" title="microscopic scale" />, which may exist in its <Link slug="Unicellular_organism" title="single-celled" /> form or as a <Link slug="Colony_(biology)" title="colony of cells" />.
                <br />
                <br />
            </p>
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/E_coli_at_10000x%2C_original.jpg/250px-E_coli_at_10000x%2C_original.jpg" w={300} h={300} caption={
                (
                    <>
                        A cluster of <i>Escherichia coli</i> bacteria magnified 10,000 times
                    </>
                )
            } />
            <br />
            <p>
                The possible existence of unseen microbial life was suspected from ancient times, such as in Jain scriptures from sixth century BC India. The scientific study of microorganisms began with their observation under the <Link slug="Microscope" title="microscope" /> in the 1670s by Anton van Leeuwenhoek. In the 1850s, Louis Pasteur found that microorganisms caused food spoilage, debunking the theory of spontaneous generation. In the 1880s, Robert Koch discovered that microorganisms caused the <Link slug="Disease" title="diseases" />, <Link slug="Tuberculosis" title="tuberculosis" />, <Link slug="Cholera" title="cholera" />, <Link slug="Diphtheria" title="diphtheria" />, and <Link slug="Anthrax" title="anthrax" />.
                <br />
                <br />
                Because microorganisms include most <Link slug="Unicellular_organism" title="unicellular organism" /> from all <Link slug="Three_domain_system" title="three domains of life" /> they can be extremely diverse. Two of the three domains, <Link slug="Archaea" title="Archaea" /> and <Link slug="Bacteria" title="Bacteria" />, only contain microorganisms. The third domain <Link slug="Eukaryote" title="Eukaryota" /> includes all <Link slug="Milticellular_organism" title="multicellular organisms" /> as well as many unicellular protists and <Link slug="Protozoa" title="protozoans" /> that are microbes. Some protists are related to <Link slug="Animal" title="animals" /> and some to <Link slug="Green_plant" title="green plants" />. There are also many multicellular organisms that are microscopic, namely <Link slug="Microanimal" title="micro-animals" />, some <Link slug="Fungi" title="fungi" />, and some <Link slug="Algae" title="algae" />, but these are generally not considered microorganisms.
                <br />
                <br />
                Microorganisms can have <HighLightText text="very different habitats, and live everywhere from the poles to the equator, deserts, geysers, rocks, and the deep sea" />. Some are adapted to extremes such as very hot or very cold conditions, others to high pressure, and a few, such as <i>Deinococcus radiodurans</i>, to high radiation environments. Microorganisms also make up the microbiota found in and on all multicellular organisms. There is evidence that 3.45-billion-year-old Australian rocks once contained microorganisms, the earliest direct evidence of life on Earth.
                <br />
                <br />
                Microbes are important in human culture and health in many ways, serving to ferment foods and treat sewage, and to produce fuel, enzymes, and other bioactive compounds. Microbes are essential tools in biology as model organisms and have been put to use in biological warfare and bioterrorism. Microbes are a vital component of fertile soil. In the <Link slug="Human_body" title="human body" />, microorganisms make up the human microbiota, including the essential gut flora. The pathogens responsible for many infectious diseases are microbes and, as such, are the target of hygiene measures.
            </p>
            <ParagraphSecondaryHeader id="Discovery">Discovery</ParagraphSecondaryHeader>
            <SubTitle>Ancient precursors</SubTitle>
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Mahaveer_swami.jpg/170px-Mahaveer_swami.jpg" w={200} h={400} caption={
                (
                    <>
                        Mahavira postulated the existence of microscopic creatures in the 6th century BC
                    </>
                )
            } />
            <br />
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Anthonie_van_Leeuwenhoek_%281632-1723%29._Natuurkundige_te_Delft_Rijksmuseum_SK-A-957.jpeg/170px-Anthonie_van_Leeuwenhoek_%281632-1723%29._Natuurkundige_te_Delft_Rijksmuseum_SK-A-957.jpeg" w={200} h={400} caption={
                (
                    <>
                        Antonie van Leeuwenhoek was the first to study microscopic organisms.
                    </>
                )
            } />
            <br />
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Spallanzani.jpg/170px-Spallanzani.jpg" w={200} h={400} caption={
                (
                    <>
                        Lazzaro Spallanzani showed that boiling a broth stopped it from decaying.
                    </>
                )
            } />
            <br />
            <p id="Discovery">
                The possible existence of microscopic organisms was discussed for many centuries before their discovery in the seventeenth century. By the 6th century BC, the Jains of present-day India postulated the existence of tiny organisms called nigodas. These nigodas are said to be born in clusters; they live everywhere, including the bodies of plants, animals, and people; and their life lasts only for a fraction of a second. According to Mahavira, the 24th preacher of Jainism, the humans destroy these nigodas on a massive scale, when they eat, breathe, sit, and move. Many modern Jains assert that Mahavira&apos;s teachings presage the existence of microorganisms as discovered by modern science.
                <br />
                <br />
                The earliest known idea to indicate the possibility of diseases spreading by yet unseen organisms was that of the Roman scholar Marcus Terentius Varro in a first-century BC book entitled On Agriculture in which he called the unseen creatures animalia minuta, and warns against locating a homestead near a swamp:
            </p>
            <BlockQuote>… and because there are bred certain minute creatures that cannot be seen by the eyes, which float in the air and enter the body through the mouth and nose and they cause serious diseases.</BlockQuote>
            <p>
                In <i>The Canon of Medicine</i> (1020), Avicenna suggested that <Link slug="Tuberculosis" title="tuberculosis" /> and other diseases might be contagious.
            </p>
            <br />
            <SubTitle>Early modern</SubTitle>
            <p>
                Turkish scientist Akshamsaddin mentioned the microbe in his work <i>Maddat ul-Hayat</i> (The Material of Life) about two centuries prior to Antonie van Leeuwenhoek&apos;s discovery through experimentation:
            </p>
            <BlockQuote>
                It is incorrect to assume that diseases appear one by one in humans. Disease infects by spreading from one person to another. This infection occurs through seeds that are so small they cannot be seen but are alive.
            </BlockQuote>
            <p>
                In 1546, Girolamo Fracastoro proposed that epidemic diseases were caused by transferable seedlike entities that could transmit infection by direct or indirect contact, or even without contact over long distances.
                <br />
                <br />
                Antonie van Leeuwenhoek is considered to be one of the fathers of microbiology. He was the first in 1673 to discover and conduct scientific experiments with microorganisms, using simple single-lensed microscopes of his own design. Robert Hooke, a contemporary of Leeuwenhoek, also used microscopy to observe microbial life in the form of the fruiting bodies of moulds. In his 1665 book <i>Micrographia</i>, he made drawings of studies, and he coined the term <i><Link slug="Cell_(biology)" title="cell" /></i>.
            </p>
            <br />
            <SubTitle>19th century</SubTitle>
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Albert_Edelfelt_-_Louis_Pasteur_-_1885.jpg/340px-Albert_Edelfelt_-_Louis_Pasteur_-_1885.jpg" w={200} h={400} caption={
                (
                    <>
                        Louis Pasteur showed that Spallanzani&apos;s findings held even if air could enter through a filter that kept particles out.
                    </>
                )
            } />
            <br />
            <p>
                Louis Pasteur (1822–1895) exposed boiled broths to the air, in vessels that contained a filter to prevent particles from passing through to the growth medium, and also in vessels without a filter, but with air allowed in via a curved tube so dust particles would settle and not come in contact with the broth. By boiling the broth beforehand, Pasteur ensured that no microorganisms survived within the broths at the beginning of his experiment. Nothing grew in the broths in the course of Pasteur&apos;s experiment. This meant that the living organisms that grew in such broths came from outside, as spores on dust, rather than spontaneously generated within the broth. Thus, Pasteur refuted the theory of spontaneous generation and supported the germ theory of disease.
            </p>
            <br />
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Robert_Koch.jpg/340px-Robert_Koch.jpg" w={230} h={420} caption={
                (
                    <>
                        Robert Koch showed that microorganisms caused disease.
                    </>
                )
            } />
            <br />
            <p>
                In 1876, Robert Koch (1843–1910) established that microorganisms can cause disease. He found that the blood of cattle that were infected with anthrax always had large numbers of <i>Bacillus anthracis</i>. Koch found that he could transmit anthrax from one animal to another by taking a small sample of blood from the infected animal and injecting it into a healthy one, and this caused the healthy animal to become sick. He also found that he could grow the bacteria in a nutrient broth, then inject it into a healthy animal, and cause illness. Based on these experiments, he devised criteria for establishing a causal link between a microorganism and a disease and these are now known as Koch&apos;s postulates. Although these postulates cannot be applied in all cases, they do retain historical importance to the development of scientific thought and are still being used today.
                <br />
                <br />
                The discovery of microorganisms such as <i>Euglena</i> that did not fit into either the <Link slug="Animal" title="animal" /> or <Link slug="Plant" title="plant" /> kingdoms, since they were photosynthetic like plants, but motile like animals, led to the naming of a third kingdom in the 1860s. In 1860 John Hogg called this the Protoctista, and in 1866 Ernst Haeckel named it the Protista.
                <br />
                <br />
                The work of Pasteur and Koch did not accurately reflect the true diversity of the microbial world because of their exclusive focus on microorganisms having direct medical relevance. It was not until the work of Martinus Beijerinck and Sergei Winogradsky late in the nineteenth century that the true breadth of microbiology was revealed. Beijerinck made two major contributions to microbiology: the discovery of viruses and the development of enrichment culture techniques. While his work on the tobacco mosaic virus established the basic principles of virology, it was his development of enrichment culturing that had the most immediate impact on microbiology by allowing for the cultivation of a wide range of microbes with wildly different physiologies. Winogradsky was the first to develop the concept of chemolithotrophy and to thereby reveal the essential role played by microorganisms in geochemical processes. He was responsible for the first isolation and description of both nitrifying and nitrogen-fixing bacteria. French-Canadian microbiologist Felix d&apos;Herelle co-discovered bacteriophages and was one of the earliest applied microbiologists.
            </p>
            <ParagraphSecondaryHeader id="Classification_and_structure">Classification and structure</ParagraphSecondaryHeader>
            <p id="Classification_and_structure">
                Microorganisms can be found almost anywhere on Earth. <Link slug="Bacteria" title="Bacteria" /> and <Link slug="Archaea" title="archaea" /> are almost always microscopic, while a number of <Link slug="Eukaryote" title="eukaryotes" /> are also microscopic, including most protists, some <Link slug="Fungi" title="fungi" />, as well as some <Link slug="Microanimal" title="micro-animals" /> and plants. <Link slug="Virus" title="Viruses" /> are generally regarded as not living and therefore not considered to be microorganisms, although a subfield of microbiology is virology, the study of viruses.
            </p>
            <br />
            <SubTitle>Evolution</SubTitle>
            <TransparentReferencingVisual className="bg-white" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Phylogenetic_tree.svg/650px-Phylogenetic_tree.svg.png" w={450} h={300} caption={
                (
                    <>
                        Carl Woese&apos;s 1990 phylogenetic tree based on rRNA data shows the domains of Bacteria, Archaea, and Eukaryota. All are microorganisms except some eukaryote groups.
                    </>
                )
            } />
            <br />
            <p>
                Single-celled microorganisms were the first forms of life to develop on Earth, approximately 3.5 billion years ago. Further evolution was slow, and for about 3 billion years in the Precambrian eon, (much of the history of life on Earth), all <Link slug="Organism" title="organisms" /> were microorganisms. Bacteria, algae and fungi have been identified in amber that is 220 million years old, which shows that the morphology of microorganisms has changed little since at least the Triassic period. The newly discovered biological role played by nickel, however – especially that brought about by volcanic eruptions from the Siberian Traps – may have accelerated the evolution of methanogens towards the end of the Permian–Triassic extinction event.
                <br />
                <br />
                Microorganisms tend to have a relatively fast rate of evolution. Most microorganisms can reproduce rapidly, and bacteria are also able to freely exchange genes through conjugation, transformation and transduction, even between widely divergent species. This horizontal gene transfer, coupled with a high mutation rate and other means of transformation, allows microorganisms to swiftly evolve (via natural selection) to survive in new environments and respond to environmental stresses. This rapid evolution is important in medicine, as it has led to the development of multidrug resistant pathogenic bacteria, <i>superbugs</i>, that are resistant to antibiotics.
                <br />
                <br />
                A possible transitional form of microorganism between a prokaryote and a eukaryote was discovered in 2012 by Japanese scientists. <i>Parakaryon myojinensis</i> is a unique microorganism larger than a typical prokaryote, but with nuclear material enclosed in a membrane as in a eukaryote, and the presence of endosymbionts. This is seen to be the first plausible evolutionary form of microorganism, showing a stage of development from the prokaryote to the eukaryote.
            </p>
            <br />
            <SubTitle>Archaea</SubTitle>
            <MainArticle slug="Archaea" title="Archaea" />
            <p>
                Archaea are <Link slug="Prokaryote" title="prokaryotic" /> unicellular organisms, and form the first domain of life in Carl Woese&apos;s three-domain system. A prokaryote is defined as having no cell nucleus or other membrane bound-organelle. Archaea share this defining feature with the bacteria with which they were once grouped. In 1990 the microbiologist Woese proposed the three-domain system that divided living things into bacteria, archaea and eukaryotes, and thereby split the prokaryote domain.
                <br />
                <br />
                Archaea differ from bacteria in both their genetics and biochemistry. For example, while bacterial cell membranes are made from phosphoglycerides with ester bonds, archaean membranes are made of ether lipids. Archaea were originally described as extremophiles living in extreme environments, such as hot springs, but have since been found in all types of habitats. Only now are scientists beginning to realize how common archaea are in the environment, with Thermoproteota (formerly Crenarchaeota) being the most common form of life in the ocean, dominating ecosystems below 150 metres (490 ft) in depth. These organisms are also common in soil and play a vital role in ammonia oxidation.
                <br />
                <br />
                The combined domains of archaea and bacteria make up the most diverse and abundant group of organisms on Earth and inhabit practically all environments where the temperature is below +140 °C (284 °F). They are found in water, soil, air, as the microbiome of an organism, hot springs and even deep beneath the Earth&apos;s crust in rocks. The number of prokaryotes is estimated to be around five nonillion, or 5 × 10<sup>30</sup>, accounting for at least half the biomass on Earth.
                <br />
                <br />
                The biodiversity of the prokaryotes is unknown, but may be very large. A May 2016 estimate, based on laws of scaling from known numbers of species against the size of organism, gives an estimate of perhaps 1 trillion species on the planet, of which most would be microorganisms. Currently, only one-thousandth of one percent of that total have been described. <Link slug="Archaea" title="Archael cells" /> of some species aggregate and transfer <Link slug="DNA" title="DNA" /> from one cell to another through direct contact, particularly under stressful environmental conditions that cause DNA damage.
            </p>
            <SubTitle>Bacteria</SubTitle>
            <MainArticle slug="Bacteria" title="Bacteria" />
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Staphylococcus_aureus_01.jpg/330px-Staphylococcus_aureus_01.jpg" w={250} h={250} caption={
                (
                    <>
                        <i>Staphylococcus aureus</i> bacteria magnified about 10,000x
                    </>
                )
            } />
            <br />
            <p>
                Like archaea, bacteria are prokaryotic – unicellular, and having no cell nucleus or other membrane-bound organelle. Bacteria are microscopic, with a few extremely rare exceptions, such as <i>Thiomargarita namibiensis</i>. Bacteria function and reproduce as individual cells, but they can often aggregate in multicellular colonies. Some species such as myxobacteria can aggregate into complex swarming structures, operating as multicellular groups as part of their life cycle, or form clusters in bacterial colonies such as <i>E.coli</i>.
                <br />
                <br />
                Their <Link slug="Genome" title="genome" /> is usually a circular bacterial chromosome – a single loop of DNA, although they can also harbor small pieces of DNA called plasmids. These plasmids can be transferred between cells through bacterial conjugation. Bacteria have an enclosing cell wall, which provides strength and rigidity to their cells. They reproduce by binary fission or sometimes by budding, but do not undergo meiotic sexual reproduction. However, many bacterial species can transfer DNA between individual cells by a horizontal gene transfer process referred to as natural transformation. Some species form extraordinarily resilient spores, but for bacteria this is a mechanism for survival, not reproduction. Under optimal conditions bacteria can grow extremely rapidly and their numbers can double as quickly as every 20 minutes.
            </p>
            <br />
            <SubTitle>Eukaryotes</SubTitle>
            <MainArticle slug="Eukaryote" title="Eukaryote" />
            <p>
                Most living things that are visible to the naked eye in their adult form are eukaryotes, including <Link slug="Human" title="humans" />. However, many eukaryotes are also microorganisms. Unlike bacteria and archaea, eukaryotes contain organelles such as the cell nucleus, the Golgi apparatus and mitochondria in their <Link slug="Cell_(biology)" title="cells" />. The nucleus is an organelle that houses the DNA that makes up a cell&apos;s genome. DNA (Deoxyribonucleic acid) itself is arranged in complex <Link slug="Chromosome" title="chromosomes" />. Mitochondria are organelles vital in metabolism as they are the site of the citric acid cycle and oxidative phosphorylation. They evolved from symbiotic bacteria and retain a remnant genome. Like bacteria, plant cells have cell walls, and contain organelles such as chloroplasts in addition to the organelles in other eukaryotes. Chloroplasts produce energy from light by photosynthesis, and were also originally symbiotic bacteria.
                <br />
                <br />
                Unicellular eukaryotes consist of a single cell throughout their life cycle. This qualification is significant since most <Link slug="Multicellular_organism" title="multicellular" /> eukaryotes consist of a single cell called a zygote only at the beginning of their life cycles. Microbial eukaryotes can be either <Link slug="Haploid" title="haploid" /> or <Link slug="Diploid" title="diploid" />, and some organisms have multiple cell nuclei.
                <br />
                <br />
                Unicellular eukaryotes usually reproduce asexually by mitosis under favorable conditions. However, under stressful conditions such as nutrient limitations and other conditions associated with DNA damage, they tend to reproduce sexually by meiosis and syngamy.
            </p>
            <br />
            <SubTitle>Protists</SubTitle>
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Euglena_mutabilis_-_400x_-_1_%2810388739803%29_%28cropped%29.jpg/255px-Euglena_mutabilis_-_400x_-_1_%2810388739803%29_%28cropped%29.jpg" w={200} h={200} caption={
                (
                    <>
                        <i>Euglena mutabilis</i>, a photosynthetic flagellate
                    </>
                )
            } />
            <br />
            <p>
                Of eukaryotic groups, the protists are most commonly <Link slug="Unicellular_organism" title="unicellular" /> and microscopic. This is a highly diverse group of organisms that are not easy to classify. Several <Link slug="Algae" title="algae" /> <Link slug="Species" title="species" /> are multicellular protists, and slime molds have unique life cycles that involve switching between unicellular, colonial, and multicellular forms. The number of species of protists is unknown since only a small proportion has been identified. Protist diversity is high in oceans, deep sea-vents, river sediment and an acidic river, suggesting that many eukaryotic microbial communities may yet be discovered.
            </p>
            <br />
            <SubTitle>Fungi</SubTitle>
            <MainArticle slug="Fungi" title="Fungi" />
            <p>
                The fungi have several unicellular species, such as baker&apos;s yeast (<i>Saccharomyces cerevisiae</i>) and fission yeast (<i>Schizosaccharomyces pombe</i>). Some fungi, such as the pathogenic yeast <i>Candida albicans</i>, can undergo phenotypic switching and grow as single cells in some environments, and filamentous hyphae in others.
            </p>
            <br />
            <SubTitle>Plants</SubTitle>
            <MainArticle slug="Plant" title="Plant" />
            <p>
                The green algae are a large group of photosynthetic eukaryotes that include many microscopic organisms. Although some green algae are classified as protists, others such as charophyta are classified with embryophyte plants, which are the most familiar group of land plants. Algae can grow as single cells, or in long chains of cells. The green algae include unicellular and colonial flagellates, usually but not always with two flagella per cell, as well as various colonial, coccoid, and filamentous forms. In the Charales, which are the algae most closely related to higher plants, cells differentiate into several distinct tissues within the organism. There are about 6000 species of green algae.
            </p>
            <ParagraphSecondaryHeader id="This_can_be_continued">[This can be continued]</ParagraphSecondaryHeader>
        </>
    );

    return (
        <>
            <Layout topic="Microorganism" title="Microorganism" thumbnail="/assets/microorganism.png" content={content} />
        </>
    );
};