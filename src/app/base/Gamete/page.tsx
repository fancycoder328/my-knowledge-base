import Link from "@/components/Link";
import ParagraphSecondaryHeader from "@/components/ParagraphSecondaryHeader";
import Bold from "@/components/Bold";
import Layout from "@/layouts/Layout";
import { Metadata } from "next";
import ReferencingVisual from "@/components/ReferencingVisual";

export const metadata: Metadata = {
    title: "Gamete - Knowledge Base | Developer Sujay",
};

export default function Gamete() {
    const content = (
        <>
            <p>
                A <Bold>gamete</Bold> (/ˈɡæmiːt/; from Ancient Greek γαμετή <i>(gametḗ)</i> &apos;wife&apos;, ultimately from Ancient Greek γάμος <i>(gámos)</i> &apos;marriage&apos;) is a <Link slug="Haploid" title="haploid" /> cell that fuses with another haploid cell during fertilization in <Link slug="Organism" title="organisms" /> that reproduce sexually. Gametes are an organism&apos;s <Bold>reproductive cells</Bold>, also referred to as <Bold>sex cells</Bold>. The name gamete was introduced by the German cytologist Eduard Strasburger.
                <br />
                <br />
                Gametes of both mating individuals can be the same size and shape, a condition known as isogamy. By contrast, in the majority of species, the gametes are of different sizes, a condition known as anisogamy or heterogamy that applies to humans and other mammals. The human ovum has approximately 100,000 times the volume of a single human sperm cell. The type of gamete an organism produces determines its sex and sets the basis for the sexual roles and sexual selection. In humans and other species that produce two morphologically distinct types of gametes, and in which each individual produces only one type, a female is any individual that produces the larger type of gamete called an <Link slug="Ovum" title="ovum" />, and a male produces the smaller type, called a <Link slug="Sperm" title="sperm" /> cell or spermatozoon. Sperm cells are small and motile due to the presence of a tail-shaped structure, the flagellum, that provides propulsion. In contrast, each egg cell or ovum is relatively large and non-motile.
                <br />
                <br />
                Oogenesis, the process of female gamete formation in animals, involves meiosis (including meiotic recombination) of a <Link slug="Diploid" title="diploid" /> primary oocyte to produce a haploid ovum. Spermatogenesis, the process of male gamete formation in animals, involves meiosis in a diploid primary spermatocyte to produce haploid spermatozoa. In animals, ova are produced in the ovaries of females and sperm develop in the testes of males. During fertilization, a spermatozoon and an ovum, each carrying half of the genetic information of an individual, unite to form a zygote that develops into a new diploid organism.
            </p>
            <ParagraphSecondaryHeader id="Evolution">Evolution</ParagraphSecondaryHeader>
            <p id="Evolution">
                It is generally accepted that isogamy is the ancestral state from which anisogamy and oogamy evolved, although its evolution has left no fossil records. There are almost invariably only two gamete types, all analyses showing that intermediate gamete sizes are eliminated due to selection. Since intermediate sized gametes do not have the same advantages as small or large ones, they do worse than small ones in mobility and numbers, and worse than large ones in supply.
            </p>
            <ParagraphSecondaryHeader id="Differences_between_gametes_and_somatic_cells">
                Differences between gametes and somatic cells</ParagraphSecondaryHeader>
            <p id="Differences_between_gametes_and_somatic_cells">
                In contrast to a gamete, which has only one set of chromosomes, a diploid somatic cell has two sets of homologous <Link slug="Chromosome" title="chromosomes" />, one of which is a copy of the chromosome set from the sperm and one a copy of the chromosome set from the egg cell. Recombination of the genes during meiosis ensures that the chromosomes of gametes are not exact duplicates of either of the sets of chromosomes carried in the parental diploid chromosomes but a mixture of the two.
            </p>
            <br />
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Sperm-egg.jpg/263px-Sperm-egg.jpg" w={200} h={160} caption={
                (
                    <>
                        A human spermatozoon fusing with a human ovum. The spermatozoon is approximately 100,000 times smaller in size than the human ovum.
                    </>
                )
            } />
            <ParagraphSecondaryHeader id="Artificial_gametes">Artificial gametes</ParagraphSecondaryHeader>
            <p id="Artificial_gametes">
                Artificial gametes, also known as in vitro derived gametes (IVD), stem cell-derived gametes (SCDGs), and in vitro generated gametes (IVG), are gametes derived from stem cells. The use of such artificial gametes would &quot;necessarily require IVF techniques&quot;. Research shows that artificial gametes may be a reproductive technique for same-sex male couples, although a surrogate mother would still be required for the gestation period. Women who have passed menopause may be able to produce eggs and bear genetically related children with artificial gametes. Robert Sparrow wrote, in the Journal of Medical Ethics, that embryos derived from artificial gametes could be used to derive new gametes and this process could be repeated to create multiple human generations in the laboratory. This technique could be used to create cell lines for medical applications and for studying the heredity of genetic disorders. Additionally, this technique could be used for human enhancement by selectively breeding for a desired genome or by using recombinant DNA technology to create enhancements that have not arisen in nature.
            </p>
            <ParagraphSecondaryHeader id="Plants">Plants</ParagraphSecondaryHeader>
            <p id="Plants">
                <Link slug="Plant" title="plants" /> that reproduce sexually also produce gametes. However, since plants have a life cycle involving alternation of diploid and haploid generations some differences from animal life cycles exist. Plants use meiosis to produce spores that develop into <Link slug="Multicellular_organism" title="multicellular" /> haploid gametophytes which produce gametes by mitosis. In animals there is no corresponding multicellular haploid phase. The sperm of plants that reproduce using spores are formed by mitosis in an organ of the gametophyte known as the antheridium and the egg cells by mitosis in a flask-shaped organ called the archegonium. Plant sperm cells are their only motile cells, often described as flagellate, but more correctly as ciliate. Bryophytes have 2 flagella, horsetails have up to 200 and the mature spermatozoa of the cycad <i>Zamia pumila</i> has up to 50,000 flagella. Cycads and <i>Ginkgo biloba</i> are the only gymnosperms with motile sperm. In the flowering plants, the female gametophyte is produced inside the ovule within the ovary of the flower. When mature, the haploid gametophyte produces female gametes which are ready for fertilization. The male gametophyte is produced inside a pollen grain within the anther and is non-motile, but can be distributed by wind, water or animal vectors. When a pollen grain lands on a mature stigma of a flower it germinates to form a pollen tube that grows down the style into the ovary of the flower and then into the ovule. The pollen then produces non-motile sperm nuclei by mitosis that are transported down the pollen tube to the ovule where they are released for fertilization of the egg cell.
            </p>
        </>
    )
    return (
        <>
            <Layout topic="Biology" title="Gamete" thumbnail="/assets/gamete.png" content={content} />
        </>
    );
};