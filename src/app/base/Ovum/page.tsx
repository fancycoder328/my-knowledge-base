import Layout from "@/layouts/Layout";
import ParagraphSecondaryHeader from "@/components/ParagraphSecondaryHeader";
import Bold from "@/components/Bold";
import Link from "@/components/Link";
import ReferencingVisual from "@/components/ReferencingVisual";
import TransparentReferencingVisual from "@/components/TransparentReferencingVisual";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Ovum - Knowledge Base | Developer Sujay",
};

export default function Ovum() {
    const content = (
        <>
            <p>
                The <Bold>egg cell</Bold> or <Bold>ovum</Bold> (pl.: <Bold>ova</Bold>) is the female reproductive cell, or <Link slug="Gamete" title="gamete" />, in most anisogamous organisms (organisms that reproduce sexually with a larger, female gamete and a smaller, male one). The term is used when the female gamete is not capable of movement (non-motile). If the male gamete (<Link slug="Sperm" title="sperm" />) is capable of movement, the type of sexual reproduction is also classified as oogamous. A nonmotile female <Link slug="Gamete" title="gamete" /> formed in the oogonium of some <Link slug="Algae" title="algae" />, <Link slug="Fungi" title="fungi" />, oomycetes, or bryophytes is an <Bold>oosphere</Bold>. When fertilized, the oosphere becomes the oospore.
                <br />
                <br />
                When egg and sperm fuse during fertilisation, a <Link slug="Diploid" title="diploid" /> cell (the zygote) is formed, which rapidly grows into a new organism.
            </p>
            <ParagraphSecondaryHeader id="History">History</ParagraphSecondaryHeader>
            <p id="History">
                While the non-mammalian animal egg was obvious, the doctrine ex ovo omne vivum (&quot;every living [animal comes from] an egg&quot;), associated with William Harvey (1578–1657), was a rejection of spontaneous generation and preformationism as well as a bold assumption that mammals also reproduced via eggs. Karl Ernst von Baer discovered the mammalian ovum in 1827. The fusion of spermatozoa with ova (of a starfish) was observed by Oskar Hertwig in 1876.
            </p>
            <ParagraphSecondaryHeader id="Animals">Animals</ParagraphSecondaryHeader>
            <p id="Animals">
                In animals, egg cells are also known as <i>ova</i> (singular <i>ovum</i>, from the Latin word <i>ovum</i> meaning &apos;egg&apos;). The term <Bold>ovule</Bold> in animals is used for the young ovum of an animal. In vertebrates, ova are produced by female gonads (sex glands) called ovaries. A number of ova are present at birth in mammals and mature via oogenesis.
                <br />
                <br />
                Studies performed on humans, dogs, and cats in the 1870s suggested that the production of oocytes (immature egg cells) stops at or shortly after birth. A review of reports from 1900 to 1950 by zoologist Solomon Zuckerman cemented the belief that females have a finite number of oocytes that are formed before they are born. This dogma has been challenged by a number of studies since 2004. Several studies suggest that ovarian stem cells exist within the mammalian ovary. Whether or not mature mammals can actually create new egg cells remains uncertain and is an ongoing research question.
                <br />
                <br />
            </p>
            <TransparentReferencingVisual className="bg-white" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Ovum_Diagram.svg/372px-Ovum_Diagram.svg.png" w={500} h={500} caption={
                (
                    <>
                        <Link slug="Human" title="Human" /> egg cell
                    </>
                )
            } />
            <p>
                <br />
                <h1 className="text-xl font-bold">Mammals including humans</h1>
                <br />
                In all <Link slug="Mammal" title="mammals" /> the ovum is fertilized inside the female body.
                <br />
                <br />
                Human ova grow from primitive germ cells that are embedded in the substance of the ovaries. Each of them divides repeatedly to give secretions of the uterine glands, ultimately forming a blastocyst.
                <br />
                <br />
                The ovum is one of the largest cells in the human body, typically visible to the naked eye without the aid of a <Link slug="Microscope" title="microscope" /> or other magnification device. The human ovum measures approximately <Bold>120 μm</Bold> (<Bold>0.0047 in</Bold>) in diameter.
                <br />
                <br />
            </p>
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Human_egg_cell.svg/220px-Human_egg_cell.svg.png" w={500} h={500} caption={
                (
                    <>
                        Diagram of a human egg cell
                    </>
                )
            } />
            <p>
                <br />
                <br />
                <h1 className="text-xl font-bold">Ooplasm</h1>
                <br />
                Ooplasm is like the yolk of the ovum, a cell substance at its center, which contains its nucleus, named the germinal vesicle, and the nucleolus, called the germinal disc.
                <br />
                <br />
                The ooplasm consists of the cytoplasm of the ordinary animal cell with its spongioplasm and hyaloplasm, often called the formative yolk; and the nutritive yolk or deutoplasm, made of rounded granules of fatty and albuminoid substances imbedded in the cytoplasm.
                <br />
                <br />
                <Link slug="Mammal" title="Mammalian" /> ova contain only a tiny amount of the nutritive yolk, for nourishing the embryo in the early stages of its development only. In contrast, bird eggs contain enough to supply the chick with nutriment throughout the whole period of incubation.
                <br />
                <br />
            </p>
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Sperm-egg.jpg/220px-Sperm-egg.jpg" w={500} h={500} caption={
                (
                    <>
                        Ovum and <Link slug="Sperm" title="sperm" /> fusing together
                    </>
                )
            } />
            <p>
                <br />
                <br />
                <h1 className="text-xl font-bold">Ova development in oviparous animals</h1>
                <br />
                In the oviparous animals (all birds, most fish, amphibians and reptiles), the ova develop protective layers and pass through the oviduct to the outside of the body. They are fertilized by male sperm either inside the female body (as in birds), or outside (as in many fish). After fertilization, an embryo develops, nourished by nutrients contained in the egg. It then hatches from the egg, outside the mother&apos;s body.
                <br />
                <br />
                The egg cell&apos;s cytoplasm and mitochondria are the sole means the egg can reproduce by mitosis and eventually form a blastocyst after fertilization.
                <br />
                <br />
            </p>
            <TransparentReferencingVisual className="bg-white" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Acrosome_reaction_diagram_en.svg/220px-Acrosome_reaction_diagram_en.svg.png" w={500} h={500} caption={
                (
                    <>
                        The process of fertilizing an ovum (top to bottom).
                    </>
                )
            } />
            <p>
                <br />
                <br />
                <h1 className="text-xl font-bold">Ovoviviparity</h1>
                <br />
                There is an intermediate form, the ovoviviparous animals: the embryo develops within and is nourished by an egg as in the oviparous case, but then it hatches inside the mother&apos;s body shortly before birth, or just after the egg leaves the mother&apos;s body. Some fish, reptiles and many invertebrates use this technique.
            </p>
            <ParagraphSecondaryHeader id="Plants">Plants</ParagraphSecondaryHeader>
            <p id="Plants">
                Nearly all land plants have alternating <Link slug="Diploid" title="diploid" /> and <Link slug="Haploid" title="haploid" /> generations. Gametes are produced by the gametophyte, which is the <Link slug="Haploid" title="haploid" /> generation. The female gametophyte produces structures called archegonia, and the egg cells form within them via mitosis. The typical bryophyte archegonium consists of a long neck with a wider base containing the egg cell. Upon maturation, the neck opens to allow sperm cells to swim into the archegonium and fertilize the egg. The resulting zygote then gives rise to an embryo, which will grow into a new <Link slug="Diploid" title="diploid" /> individual (sporophyte). In seed plants, a structure called the <Bold>ovule</Bold> contains the female gametophyte. The gametophyte produces an egg cell. After fertilization, the ovule develops into a seed containing the embryo.
                <br />
                <br />
                In flowering plants, the female gametophyte (sometimes referred to as the embryo sac) has been reduced to just eight cells inside the ovule. The gametophyte cell closest to the micropyle opening of the ovule develops into the egg cell. Upon pollination, a pollen tube delivers sperm into the gametophyte and one sperm nucleus fuses with the egg nucleus. The resulting zygote develops into an embryo inside the ovule. The ovule, in turn, develops into a seed and in many cases, the plant ovary develops into a fruit to facilitate the dispersal of the seeds. Upon germination, the embryo grows into a seedling.
                <br />
                <br />
                In the moss <i>Physcomitrella patens</i>, the Polycomb protein FIE is expressed in the unfertilised egg cell (Figure, right) as the blue colour after GUS staining reveals. Soon after fertilisation the FIE gene is inactivated (the blue colour is no longer visible, left) in the young embryo.
                <br />
                <br />
            </p>
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/DEV035048A.jpg/220px-DEV035048A.jpg" w={500} h={500} caption={
                (
                    <>
                        Gene expression pattern determined by histochemical GUS assays in <i>Physcomitrella patens</i>. The Polycomb gene FIE is expressed (blue) in unfertilized egg cells of the moss <i>Physcomitrella patens</i> (right) and expression ceases after fertilization in the developing <Link slug="Diploid" title="diploid" /> sporophyte (left). In situ GUS staining of two female sex organs (archegonia) of a transgenic plant expressing a translational fusion of FIE-uidA under control of the native FIE promoter
                    </>
                )
            } />
        </>
    );
    return (
        <>
            <Layout topic="Biology" title="Egg cell" thumbnail="/assets/ovum.png" content={content} />
        </>
    );
};