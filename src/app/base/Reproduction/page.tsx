import Layout from "@/layouts/Layout";
import Bold from "@/components/Bold";
import ReferencingVisual from "@/components/ReferencingVisual";
import ParagraphSecondaryHeader from "@/components/ParagraphSecondaryHeader";
import Link from "@/components/Link";
import Citation from "@/components/Citation";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Reproduction - Knowledge Base | Developer Sujay",
};

export default function Reproduction() {
    const content = (
        <>
            <p>
                <Bold>Reproduction</Bold> (or <Bold>procreation</Bold> or <Bold>breeding</Bold>) is the biological process by which new individual <Link slug="Organism" title="organisms" /> – &quot;offspring&quot; – are produced from their &quot;parent&quot; or parents. There are two forms of reproduction: asexual and sexual.
                <br />
                <br />
                In asexual reproduction, an organism can reproduce without the involvement of another organism. Asexual reproduction is not limited to <Link slug="Unicellular_organism" title="single-celled organisms" />. The cloning of an organism is a form of asexual reproduction. By asexual reproduction, an organism creates a <Link slug="Gene" title="genetically" /> similar or identical copy of itself. The evolution of sexual reproduction is a major puzzle for <Link slug="Biologist" title="biologists" />. The two-fold cost of sexual reproduction is that only 50% of organisms reproduce and organisms only pass on 50% of their genes.
                <br />
                <br />
                Sexual reproduction typically requires the sexual interaction of two specialized reproductive cells, called <Bold><Link slug="Gamete" title="gametes" /></Bold>, which contain half the number of <Link slug="Chromosome" title="chromosomes" /> of normal cells and are created by meiosis, with typically a male fertilizing a female of the same <Link slug="Species" title="species" /> to create a fertilized zygote. This produces offspring organisms whose genetic characteristics are derived from those of the two parental organisms.
            </p>
            <ParagraphSecondaryHeader id="Asexual">Asexual</ParagraphSecondaryHeader>
            <p id="Asexual">
                Asexual reproduction is a process by which organisms create genetically similar or identical copies of themselves without the contribution of genetic material from another organism. Bacteria divide asexually via <Bold>binary fission</Bold>; viruses take control of host cells to produce more viruses; Hydras (invertebrates of the order Hydroidea) and yeasts are able to reproduce by budding. These organisms often do not possess different sexes, and they are capable of &quot;splitting&quot; themselves into two or more copies of themselves. Most <Link slug="Plant" title="plants" /> have the ability to reproduce asexually and the ant species <Bold>Mycocepurus smithii</Bold> is thought to reproduce entirely by asexual means.
                <br />
                <br />
                Some species that are capable of reproducing asexually, like hydra, yeast (See Mating of yeasts<Citation href="Mating_of_yeasts" number={1} />) and jellyfish, may also reproduce sexually. For instance, most plants are capable of <Bold>vegetative reproduction</Bold> – reproduction without seeds or spores – but can also reproduce sexually. Likewise, bacteria may exchange genetic information by conjugation.
                <br />
                <br />
                Other ways of asexual reproduction include <Bold>parthenogenesis</Bold>, fragmentation and spore formation that involves only mitosis. Parthenogenesis is the growth and development of embryo or seed without fertilization. Parthenogenesis occurs naturally in some species, including lower plants (where it is called apomixis), invertebrates (e.g. water fleas, aphids, some bees and parasitic wasps), and <Link slug="Vertebrate" title="vertebrates" /> (e.g. some reptiles, some fish, and very rarely, domestic birds).
            </p>
            <ParagraphSecondaryHeader id="Sexual">Sexual</ParagraphSecondaryHeader>
            <p id="Sexual">
                Sexual reproduction is a biological process that creates a new <Link slug="Organism" title="organism" /> by combining the genetic material of two organisms in a process that starts with meiosis, a specialized type of cell division. Each of two parent organisms contributes half of the offspring&apos;s genetic makeup by creating haploid gametes. Most organisms form two different types of gametes. In these <Bold><i>anisogamous</i></Bold> species, the two sexes are referred to as male (producing <Link slug="Sperm" title="sperm" /> or microspores) and female (producing <Link slug="Ovum" title="ova" /> or megaspores). In <Bold><i>isogamous species</i></Bold>, the gametes are similar or identical in form (isogametes), but may have separable properties and then may be given other different names. Because both gametes look alike, they generally cannot be classified as male or female. For example, in the green alga, <i>Chlamydomonas reinhardtii</i>, there are so-called &quot;plus&quot; and &quot;minus&quot; gametes. A few types of organisms, such as many fungi and the ciliate <i>Paramecium aurelia</i>, have more than two &quot;sexes&quot;, called mating types. Most animals (including humans) and plants reproduce sexually. Sexually reproducing organisms have different sets of genes for every trait (called alleles). Offspring inherit one allele for each trait from each parent. Thus, offspring have a combination of the parents&apos; genes. It is believed that &quot;the masking of deleterious alleles favors the evolution of a dominant diploid phase in organisms that alternate between haploid and diploid phases&quot; where recombination occurs freely.
                <br />
                <br />
            </p>
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Hoverflies_mating_midair.jpg/250px-Hoverflies_mating_midair.jpg" w={450} h={450} caption={
                (
                    <>
                        Hoverflies mating in midair flight
                    </>
                )
            } />
            <p>
                <br />
                <br />
                Bryophytes reproduce sexually, but the larger and commonly-seen organisms are haploid and produce gametes. The gametes fuse to form a zygote which develops into a sporangium, which in turn produces haploid spores. The diploid stage is relatively small and short-lived compared to the haploid stage, i.e. <i>haploid dominance</i>. The advantage of diploidy, heterosis, only exists in the diploid life generation. Bryophytes retain sexual reproduction despite the fact that the haploid stage does not benefit from heterosis. This may be an indication that the sexual reproduction has advantages other than heterosis, such as genetic recombination between members of the species, allowing the expression of a wider range of traits and thus making the population more able to survive environmental variation.
                <br />
                <br />
                <br />
                <h1 className="font-bold text-xl">Allogamy</h1>
                <br />
                Allogamy is the fertilization of flowers through cross-pollination, this occurs when a flower&apos;s ovum is fertilized by spermatozoa from the pollen of a different plant&apos;s flower. Pollen may be transferred through pollen vectors or abiotic carriers such as wind. Fertilization begins when the pollen is brought to a female gamete through the pollen tube. Allogamy is also known as cross fertilization, in contrast to autogamy or geitonogamy which are methods of self-fertilization.
                <br />
                <br />
                <br />
                <h1 className="text-xl font-bold">Autogamy</h1>
                <br />
                Self-fertilization, also known as autogamy, occurs in hermaphroditic organisms where the two gametes fused in fertilization come from the same individual, e.g., many vascular plants, some foraminiferans, some ciliates. The term &quot;autogamy&quot; is sometimes substituted for autogamous pollination (not necessarily leading to successful fertilization) and describes self-pollination within the same flower, distinguished from geitonogamous pollination, transfer of pollen to a different flower on the same flowering plant, or within a single monoecious Gymnosperm plant.
                <br />
                <br />
                <br />
                <h1 className="text-xl font-bold">Mitosis and meiosis</h1>
                <br />
                Mitosis and meiosis are types of cell division. Mitosis occurs in somatic cells, while meiosis occurs in gametes.
                <br />
                <br />
                <Bold>Mitosis</Bold> The resultant number of cells in mitosis is twice the number of original cells. The number of chromosomes in the offspring cells is the same as that of the parent cell.
                <br />
                <br />
                <Bold>Meiosis</Bold> The resultant number of cells is four times the number of original cells. This results in cells with half the number of <Link slug="Chromesome" title="chromosomes" /> present in the parent cell. A diploid cell duplicates itself, then undergoes two divisions (tetraploid to diploid to haploid), in the process forming four haploid cells. This process occurs in two phases, meiosis I and meiosis II.
            </p>
            <ParagraphSecondaryHeader id="Same_sex">Same-sex</ParagraphSecondaryHeader>
            <p id="Same_sex">
                Scientific research is currently investigating the possibility of same-sex procreation, which would produce offspring with equal genetic contributions from either two females or two males. The obvious approaches, subject to a growing amount of activity, are female sperm and male eggs. In 2004, by altering the function of a few genes involved with imprinting, other Japanese scientists combined two mouse eggs to produce daughter mice and in 2018 Chinese scientists created 29 female mice from two female mice mothers but were unable to produce viable offspring from two father mice. Researches noted that there is little chance these techniques would be applied to humans in the near future.
            </p>
            <ParagraphSecondaryHeader id="Strategies">Strategies</ParagraphSecondaryHeader>
            <p id="Strategies">
                There are a wide range of reproductive strategies employed by different species. Some animals, such as the human and northern gannet, do not reach sexual maturity for many years after birth and even then produce few offspring. Others reproduce quickly; but, under normal circumstances, most offspring do not survive to adulthood. For example, a rabbit (mature after 8 months) can produce 10–30 offspring per year, and a fruit fly (mature after 10–14 days) can produce up to 900 offspring per year. These two main strategies are known as K-selection (few offspring) and r-selection (many offspring). Which strategy is favoured by evolution depends on a variety of circumstances. Animals with few offspring can devote more resources to the nurturing and protection of each individual offspring, thus reducing the need for many offspring. On the other hand, animals with many offspring may devote fewer resources to each individual offspring; for these types of animals it is common for many offspring to die soon after birth, but enough individuals typically survive to maintain the population. Some organisms such as honey bees and fruit flies retain sperm in a process called sperm storage thereby increasing the duration of their fertility.
                <br />
                <br />
                <br />
                <h1 className="text-xl font-bold">Other types</h1>
                <br />
                <br />
                <div className="pl-4">
                    <ul className="pl-4 list-disc">
                        <li>
                            <Bold>Polycyclic animals</Bold> reproduce intermittently throughout their lives.
                        </li>
                        <li>
                            <Bold>Semelparous organisms</Bold> reproduce only once in their lifetime,[22] such as annual plants (including all grain crops), and certain species of salmon, spider, bamboo and century plant.[23] Often, they die shortly after reproduction. This is often associated with r-strategists.
                        </li>
                        <li>
                            <Bold>Iteroparous organisms</Bold> produce offspring in successive (e.g. annual or seasonal) cycles, such as perennial plants. Iteroparous animals survive over multiple seasons (or periodic condition changes). This is more associated with K-strategists.
                        </li>
                    </ul>
                </div>
            </p>
            <ParagraphSecondaryHeader id="Asexual_versus_sexual_reproduction">Asexual vs. sexual reproduction</ParagraphSecondaryHeader>
            <p id="Asexual_versus_sexual_reproduction">
                Organisms that reproduce through asexual reproduction tend to grow in number exponentially. However, because they rely on mutation for variations in their <Link slug="DNA" title="DNA" />, all members of the species have similar vulnerabilities. Organisms that reproduce sexually yield a smaller number of offspring, but the large amount of variation in their genes makes them less susceptible to disease.
                <br />
                <br />
                <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Evolsex-dia1a.svg/250px-Evolsex-dia1a.svg.png" w={450} h={450} caption={
                    (
                        <>
                            Illustration of the <i>twofold cost of sexual reproduction</i>. If each organism were to contribute to the same number of offspring (two), <i>(a)</i> the population remains the same size each generation, where the <i>(b)</i> asexual population doubles in size each generation.
                        </>
                    )
                } />
                <br />
                <br />
                Many organisms can reproduce sexually as well as asexually. Aphids, slime molds, sea anemones, some species of starfish (by fragmentation), and many plants are examples. When environmental factors are favorable, asexual reproduction is employed to exploit suitable conditions for survival such as an abundant food supply, adequate shelter, favorable climate, disease, optimum pH or a proper mix of other lifestyle requirements. Populations of these organisms increase exponentially via asexual reproductive strategies to take full advantage of the rich supply resources.
                <br />
                <br />
                When food sources have been depleted, the climate becomes hostile, or individual survival is jeopardized by some other adverse change in living conditions, these organisms switch to sexual forms of reproduction. Sexual reproduction ensures a mixing of the gene pool of the species. The variations found in offspring of sexual reproduction allow some individuals to be better suited for survival and provide a mechanism for selective adaptation to occur. The meiosis stage of the sexual cycle also allows especially effective repair of DNA damages. In addition, sexual reproduction usually results in the formation of a life stage that is able to endure the conditions that threaten the offspring of an asexual parent. Thus, seeds, spores, eggs, pupae, cysts or other &quot;over-wintering&quot; stages of sexual reproduction ensure the survival during unfavorable times and the organism can &quot;wait out&quot; adverse situations until a swing back to suitability occurs.
            </p>
        </>
    );
    return (
        <>
            <Layout topic="Biology" title="Reproduction" thumbnail="/assets/reproduction.png" content={content} />
        </>
    );
};