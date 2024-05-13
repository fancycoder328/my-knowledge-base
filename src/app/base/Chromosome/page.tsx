import Layout from "@/layouts/Layout";
import ParagraphSecondaryHeader from "@/components/ParagraphSecondaryHeader";
import Link from "@/components/Link";
import Bold from "@/components/Bold";
import ReferencingVisual from "@/components/ReferencingVisual";
import TransparentReferencingVisual from "@/components/TransparentReferencingVisual";
import ReferencingVisualCaption from "@/components/ReferencingVisualCaption";
import HighLightText from "@/components/HighLightText";
import SubTitle from "@/components/SubTitle";
import Redirect from "@/components/Redirect";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Chromosome - Knowledge Base | Developer Sujay",
};

export default function Chromosome() {
    const content = (
        <>
            <p>
                A <Bold>chromosome</Bold> is a package of <Link slug="DNA" title="DNA" /> with part or all of the <Link slug="Genome" title="genetic material" /> of an <Link slug="Organism" title="organism" />. In most chromosomes, the very long thin DNA fibers are coated with nucleosome-forming packaging proteins; in <Link slug="Eukaryote" title="eukaryotic" /> cells the most important of these proteins are the histones. These proteins, aided by chaperone proteins, bind to and condense the DNA molecule to maintain its integrity. These chromosomes display a complex three-dimensional structure, which plays a significant role in transcriptional regulation.
                <br />
                <br />
            </p>
            <TransparentReferencingVisual className="bg-white" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Chromosome_DNA_Gene_unannotated.svg/350px-Chromosome_DNA_Gene_unannotated.svg.png" w={500} h={500} caption={
                (
                    <>
                        A chromosome and its packaged long strand of DNA unraveled. The DNA&apos;s base pairs encode genes, which provide functions. A human DNA can have up to 500 million base pairs with thousands of genes.
                    </>
                )
            } />
            <p>
                <br />
                <br />
                Chromosomes are normally visible under a light <Link slug="Microscope" title="microscope" /> only during the metaphase of cell division (where all chromosomes are aligned in the center of the cell in their condensed form). Before this happens, each chromosome is duplicated (S phase), and both copies are joined by a centromere, resulting either in an X-shaped structure (pictured above), if the centromere is located equatorially, or a two-arm structure, if the centromere is located distally. The joined copies are now called sister chromatids. During metaphase, the X-shaped structure is called a metaphase chromosome, which is highly condensed and thus easiest to distinguish and study. In animal cells, chromosomes reach their highest compaction level in anaphase during chromosome segregation.
                <br />
                <br />
                Chromosomal recombination during meiosis and subsequent sexual reproduction play a significant role in genetic diversity. If these structures are manipulated incorrectly, through processes known as chromosomal instability and translocation, the cell may undergo mitotic catastrophe. Usually, this will make the cell initiate apoptosis leading to its own death, but sometimes mutations in the cell hamper this process and thus cause progression of <Link slug="Cancer" title="cancer" />.
                <br />
                <br />
                Some use the term chromosome in a wider sense, to refer to the individualized portions of chromatin in cells, either visible or not under light microscopy. Others use the concept in a narrower sense, to refer to the individualized portions of chromatin during cell division, visible under light microscopy due to high condensation.
            </p>
            <ParagraphSecondaryHeader id="Etymology">Etymology</ParagraphSecondaryHeader>
            <p id="Etymology">
                The word chromosome (/ˈkroʊməˌsoʊm, -ˌzoʊm/) comes from the Greek χρῶμα (<i>chroma</i>, &quot;colour&quot;) and σῶμα (<i>soma</i>, &quot;body&quot;), describing their strong staining by particular dyes. The term was coined by the German anatomist Heinrich Wilhelm Waldeyer, referring to the term chromatin, which was introduced by Walther Flemming.
                <br />
                <br />
                Some of the early karyological terms have become outdated. For example, Chromatin (Flemming 1880) and Chromosom (Waldeyer 1888), both ascribe color to a non-colored state.
                <br />
                <br />
            </p>
            <TransparentReferencingVisual className="bg-white" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Chromosome.svg/220px-Chromosome.svg.png" w={450} h={450} caption={
                (
                    <>
                        Diagram of a replicated and condensed metaphase eukaryotic chromosome:
                        <div className="text-left pl-40 lg:pl-72">
                            <ul className="list-decimal pl-4">
                                <li>
                                    Chromatid
                                </li>
                                <li>
                                    Centromere
                                </li>
                                <li>
                                    Short arm
                                </li>
                                <li>
                                    Long arm
                                </li>
                            </ul>
                        </div>
                    </>
                )
            } />
            <ParagraphSecondaryHeader id="History_of_discovery">History of discovery</ParagraphSecondaryHeader>
            <p id="History_of_discovery">
                Otto Bütschli was the first scientist to recognize the structures now known as chromosomes.
                <br />
                <br />
                In a series of experiments beginning in the mid-1880s, Theodor Boveri gave definitive contributions to elucidating that chromosomes are the vectors of heredity, with two notions that became known as &apos;chromosome continuity&apos; and &apos;chromosome individuality&apos;.
                <br />
                <br />
                Wilhelm Roux suggested that each chromosome carries a different genetic configuration, and Boveri was able to test and confirm this hypothesis. Aided by the rediscovery at the start of the 1900s of Gregor Mendel&apos;s earlier work, Boveri was able to point out the connection between the rules of inheritance and the behaviour of the chromosomes. Boveri influenced two generations of American cytologists: Edmund Beecher Wilson, Nettie Stevens, Walter Sutton and Theophilus Painter were all influenced by Boveri (Wilson, Stevens, and Painter actually worked with him).
                <br />
                <br />
            </p>
            <div className="flex justify-center gap-[4px]">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Walter_sutton.jpg/140px-Walter_sutton.jpg" alt="Walter Sutton" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Theodor_Boveri.jpg/120px-Theodor_Boveri.jpg" alt="Theodor Boveri" />
            </div>
            <ReferencingVisualCaption caption={
                (
                    <p className="text-center pt-2">
                        Walter Sutton (left) and Theodor Boveri (right) independently developed the chromosome theory of inheritance in 1902.
                    </p>
                )
            } />
            <p>
                <br />
                <br />
                In his famous textbook The Cell in Development and Heredity, Wilson linked together the independent work of Boveri and Sutton (both around 1902) by naming the chromosome theory of inheritance the Boveri–Sutton chromosome theory (the names are sometimes reversed). Ernst Mayr remarks that the theory was hotly contested by some famous geneticists: William Bateson, Wilhelm Johannsen, Richard Goldschmidt and T.H. Morgan, all of a rather dogmatic turn of mind. Eventually, complete proof came from chromosome maps in Morgan&apos;s own lab.
                <br />
                <br />
                The number of human chromosomes was published in 1923 by Theophilus Painter. By inspection through the microscope, he counted twenty-four pairs, which would mean forty-eight chromosomes. His error was copied by others and it was not until 1956 that the true number, forty-six, was determined by Indonesian-born cytogeneticist Joe Hin Tjio.
            </p>
            <ParagraphSecondaryHeader id="Prokaryotes">Prokaryotes</ParagraphSecondaryHeader>
            <p id="Prokaryotes">
                The <Link slug="Prokaryote" title="prokaryotes" /> – <Link slug="Bacteria" title="bacteria" /> and <Link slug="Archaea" title="archaea" /> – typically have a single circular chromosome, but many variations exist. The chromosomes of most bacteria, which some authors prefer to call genophores, can range in size from only 130,000 base pairs in the endosymbiotic bacteria <i>Candidatus Hodgkinia cicadicola</i> and <i>Candidatus Tremblaya princeps</i>, to more than 14,000,000 base pairs in the soil-dwelling bacterium <i>Sorangium cellulosum</i>. Spirochaetes of the <Link slug="Genus" title="genus" /> <i>Borrelia</i> are a notable exception to this arrangement, with bacteria such as <i>Borrelia burgdorferi</i>, the cause of Lyme disease, containing a single linear chromosome.
                <br />
                <br />
                <br />
            </p>
            <h1 className="text-xl font-bold">Structure in sequences</h1>
            <p>
                <br />
                Prokaryotic chromosomes have less sequence-based structure than eukaryotes. Bacteria typically have a one-point (the origin of replication) from which replication starts, whereas some archaea contain multiple replication origins. The genes in prokaryotes are often organized in operons, and do not usually contain introns, unlike eukaryotes.
                <br />
                <br />
                <br />
            </p>
            <h1 className="text-xl font-bold">DNA packaging</h1>
            <p>
                <br />
                Prokaryotes do not possess nuclei. Instead, their DNA is organized into a structure called the nucleoid. The nucleoid is a distinct structure and occupies a defined region of the bacterial cell. This structure is, however, dynamic and is maintained and remodeled by the actions of a range of histone-like proteins, which associate with the bacterial chromosome. In archaea, the DNA in chromosomes is even more organized, with the DNA packaged within structures similar to eukaryotic nucleosomes.
                <br />
                <br />
                Certain bacteria also contain plasmids or other extrachromosomal DNA. These are circular structures in the cytoplasm that contain cellular DNA and play a role in horizontal gene transfer. In prokaryotes and viruses, the DNA is often densely packed and organized; in the case of archaea, by homology to eukaryotic histones, and in the case of bacteria, by histone-like proteins.
                <br />
                <br />
                Bacterial chromosomes tend to be tethered to the plasma membrane of the bacteria. In molecular biology application, this allows for its isolation from plasmid DNA by centrifugation of lysed bacteria and pelleting of the membranes (and the attached DNA).
                <br />
                <br />
                Prokaryotic chromosomes and plasmids are, like eukaryotic DNA, generally supercoiled. The DNA must first be released into its relaxed state for access for transcription, regulation, and replication.
            </p>
            <ParagraphSecondaryHeader id="Eukaryotes">Eukaryotes</ParagraphSecondaryHeader>
            <p id="Eukaryotes">
                Each eukaryotic chromosome consists of a long linear DNA molecule associated with proteins, forming a compact complex of proteins and DNA called <i>chromatin</i>. Chromatin contains the vast majority of the DNA in an organism, but a small amount inherited maternally can be found in the mitochondria. It is present in most cells, with a few exceptions, for example, red blood cells.
                <br />
                <br />
                Histones are responsible for the first and most basic unit of chromosome organization, the nucleosome.
                <br />
                <br />
            </p>
            <TransparentReferencingVisual className="bg-white" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Eukaryote_DNA-en.svg/280px-Eukaryote_DNA-en.svg.png" w={500} h={500} caption={
                (
                    <>
                        Organization of DNA in a eukaryotic cell
                    </>
                )
            } />
            <p>
                <br />
                <br />
                Eukaryotes (<Link slug="Cell_(biology)" title="cells" /> with nuclei such as those found in plants, fungi, and animals) possess multiple large linear chromosomes contained in the cell&apos;s nucleus. Each chromosome has one centromere, with one or two arms projecting from the centromere, although, under most circumstances, these arms are not visible as such. In addition, most eukaryotes have a small circular mitochondrial genome, and some eukaryotes may have additional small circular or linear cytoplasmic chromosomes.
                <br />
                <br />
            </p>
            <TransparentReferencingVisual className="bg-white" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Chromatin_Structures.png/850px-Chromatin_Structures.png" w={500} h={500} caption={
                (
                    <>
                        Organization of DNA in a eukaryotic cell
                    </>
                )
            } />
            <p>
                <br />
                <br />
                In the nuclear chromosomes of eukaryotes, the uncondensed DNA exists in a semi-ordered structure, where it is wrapped around histones (structural proteins), forming a composite material called chromatin.
                <br />
                <br />
                <br />
            </p>
            <h1 className="text-xl font-bold">Interphase chromatin</h1>
            <p>
                <br />
                The packaging of DNA into nucleosomes causes a 10 nanometer fibre which may further condense up to 30 nm fibres Most of the euchromatin in interphase nuclei appears to be in the form of 30-nm fibers. Chromatin structure is the more decondensed state, i.e. the 10-nm conformation allows transcription.
                <br />
                <br />
            </p>
            <TransparentReferencingVisual className="bg-white" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Heterochromatin_vs._euchromatin.svg/398px-Heterochromatin_vs._euchromatin.svg.png" w={500} h={500} caption={
                (
                    <>
                        Heterochromatin vs. euchromatin
                    </>
                )
            } />
            <p>
                <br />
                During interphase (the period of the cell cycle where the cell is not dividing), two types of chromatin can be distinguished:
                <br />
                <br />
            </p>
            <div className="pl-4">
                <ul className="pl-4 list-disc">
                    <li>
                        Euchromatin, which consists of DNA that is active, e.g., being expressed as protein.
                    </li>
                    <li>
                        Heterochromatin, which consists of mostly inactive DNA. It seems to serve structural purposes during the chromosomal stages. Heterochromatin can be further distinguished into two types:
                        <br />
                        <br />
                        <div className="pl-4">
                            <ul className="pl-4 list-disc">
                                <li>
                                    <i>Constitutive heterochromatin</i>, which is never expressed. It is located around the centromere and usually contains repetitive sequences.
                                </li>
                                <li>
                                    <i>Facultative heterochromatin</i>, which is sometimes expressed.
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            <br />
            <br />
            <h1 className="text-xl font-bold">Metaphase chromatin and division</h1>
            <br />
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/HumanChromosomesChromomycinA3.jpg/200px-HumanChromosomesChromomycinA3.jpg" w={200} h={200} caption={
                (
                    <>
                        Human chromosomes during metaphase
                    </>
                )
            } />
            <p>
                <br />
                <br />
                In the early stages of mitosis or meiosis (cell division), the chromatin double helix becomes more and more condensed. They cease to function as accessible genetic material (transcription stops) and become a compact transportable form. The loops of thirty-nanometer chromatin fibers are thought to fold upon themselves further to form the compact metaphase chromosomes of mitotic cells. The DNA is thus condensed about ten-thousand-fold.
                <br />
                <br />
            </p>
            <TransparentReferencingVisual className="bg-white" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Stages_of_early_mitosis_in_a_vertebrate_cell_with_micrographs_of_chromatids.svg/220px-Stages_of_early_mitosis_in_a_vertebrate_cell_with_micrographs_of_chromatids.svg.png" w={300} h={300} caption={
                (
                    <>
                        Stages of early mitosis in a vertebrate cell with micrographs of chromatids
                    </>
                )
            } />
            <p>
                <br />
                <br />
                The chromosome scaffold, which is made of proteins such as condensin, TOP2A and KIF4, plays an important role in holding the chromatin into compact chromosomes. Loops of thirty-nanometer structure further condense with scaffold into higher order structures.
                <br />
                <br />
                This highly compact form makes the individual chromosomes visible, and they form the classic four-arm structure, a pair of sister chromatids attached to each other at the centromere. The shorter arms are called <i>p arms</i> (from the French <i>petit</i>, small) and the longer arms are called <i>q arms</i> (<i>q</i> follows <i>p</i> in the Latin alphabet; q-g &quot;grande&quot;; alternatively it is sometimes said q is short for queue meaning tail in French). This is the only natural context in which individual chromosomes are visible with an optical microscope.
                <br />
                <br />
                Mitotic metaphase chromosomes are best described by a linearly organized longitudinally compressed array of consecutive chromatin loops.
                <br />
                <br />
                During mitosis, microtubules grow from centrosomes located at opposite ends of the cell and also attach to the centromere at specialized structures called kinetochores, one of which is present on each sister chromatid. A special DNA base sequence in the region of the kinetochores provides, along with special proteins, longer-lasting attachment in this region. The microtubules then pull the chromatids apart toward the centrosomes, so that each daughter cell inherits one set of chromatids. Once the cells have divided, the chromatids are uncoiled and DNA can again be transcribed. In spite of their appearance, chromosomes are structurally highly condensed, which enables these giant DNA structures to be contained within a cell nucleus.
                <br />
                <br />
                <br />
            </p>
            <h1 className="text-xl font-bold">Human chromosomes</h1>
            <p>
                <br />
                Chromosomes in humans can be divided into two types: autosomes (body chromosome(s)) and allosome (sex chromosome(s)). Certain genetic traits are linked to a person&apos;s sex and are passed on through the sex chromosomes. The autosomes contain the rest of the genetic hereditary information. All act in the same way during cell division. Human cells have 23 pairs of chromosomes (22 pairs of autosomes and one pair of sex chromosomes), giving a total of 46 per cell. In addition to these, human cells have many hundreds of copies of the mitochondrial genome. Sequencing of the human genome has provided a great deal of information about each of the chromosomes. Below is a table compiling statistics for the chromosomes, based on the Sanger Institute&apos;s human genome information in the Vertebrate Genome Annotation (VEGA) database. Number of genes is an estimate, as it is in part based on gene predictions. Total chromosome length is an estimate as well, based on the estimated size of unsequenced heterochromatin regions.
            </p>
            <br />
            <br />
            <div className="flex flex-col text-white">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="border overflow-hidden">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead>
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-base font-medium text-gray-300 border-r">Chromosome</th>
                                        <th scope="col" className="px-6 py-3 text-base font-medium text-gray-300 border-r">
                                            <Link slug="Gene" title="Genes" />
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-base font-medium border-r text-gray-300">Total base pairs</th>
                                        <th scope="col" className="px-6 border-r py-3 text-base font-medium text-gray-300">% of bases</th>
                                        <th scope="col" className="px-6 py-3 text-base font-medium border-r text-gray-300">Sequenced base pairs</th>
                                        <th scope="col" className="px-6 py-3 text-base font-medium text-gray-300">% sequenced base pairs</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-6 py-4 border-r whitespace-nowrap text-sm font-medium text-center">1</td>
                                        <td className="px-6 py-4 border-r whitespace-nowrap text-sm">2000</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">247,199,719</td>
                                        <td className="px-6 py-4 border-r whitespace-nowrap text-end text-sm font-medium">
                                            8.0
                                        </td>
                                        <td className="px-6 py-4 border-r whitespace-nowrap text-end text-sm font-medium">
                                            224,999,719
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                            91.02%
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r font-medium text-center">2</td>
                                        <td className="px-6 py-4 border-r whitespace-nowrap text-sm">1300</td>
                                        <td className="border-r px-6 py-4 whitespace-nowrap text-sm">242,751,149</td>
                                        <td className="px-6 py-4 border-r whitespace-nowrap text-end text-sm font-medium">
                                            7.9
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium border-r">
                                            237,712,649
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                            97.92%
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center border-r">3</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">1000</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">199,446,827</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium border-r">
                                            6.5
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium border-r">
                                            194,704,827
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                            97.62%
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center border-r">4</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">1000</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">191,263,063</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium border-r">
                                            6.2
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium border-r">
                                            187,297,063
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                            97.93%
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center border-r">5</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">900</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">180,837,866</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium border-r">
                                            5.9
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium border-r">
                                            177,702,766
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                            98.27%
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center border-r">6</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">1000</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">170,896,993</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium border-r">
                                            5.5
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium border-r">
                                            167,273,993
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                            97.88%
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center border-r">7</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">900</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">170,896,993</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium border-r">
                                            5.2
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium border-r">
                                            154,952,424
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                            97.56%
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center border-r">X (sex chromosome)</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">800</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">154,913,754</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium border-r">
                                            5.0
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium border-r">
                                            151,058,754
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                            97.51%
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center border-r">8</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">700</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">146,274,826</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium border-r">
                                            4.7
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium border-r">
                                            142,612,826
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                            97.50%
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center border-r">9</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">800</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">140,442,298</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium border-r">
                                            4.6
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium border-r">
                                            120,312,298
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                            85.67%
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center border-r">10</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">700</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">135,374,737</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium border-r">
                                            4.4
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium border-r">
                                            131,624,737
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                            97.23%
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center border-r">11</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">1300</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">134,452,384</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium border-r">
                                            4.4
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium border-r">
                                            131,130,853
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                            97.53%
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center border-r">12</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">1100</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">132,289,534</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium border-r">
                                            4.3
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium border-r">
                                            130,303,534
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                            98.50%
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center border-r">13</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">300</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">114,127,980</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium border-r">
                                            3.7
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium border-r">
                                            95,559,980
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                            83.73%
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center border-r">14</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">800</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">106,360,585</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium border-r">
                                            3.5
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium border-r">
                                            88,290,585
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                            83.01%
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center border-r">15</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">600</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">100,338,915</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium border-r">
                                            3.3
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium border-r">
                                            81,341,915
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                            81.07%
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center border-r">16</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">800</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">88,822,254</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium border-r">
                                            2.9
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium border-r">
                                            78,884,754
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                            88.81%
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center border-r">17</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">1200</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">78,654,742</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium border-r">
                                            2.6
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium border-r">
                                            77,800,220
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                            98.91%
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center border-r">18</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">200</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">76,117,153</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium border-r">
                                            2.5
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium border-r">
                                            74,656,155
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                            98.08%
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center border-r">19</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">1500</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">63,806,651</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium border-r">
                                            2.1
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium border-r">
                                            55,785,651
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                            87.43%
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center border-r">20</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">500</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">62,435,965</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium border-r">
                                            2.0
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium border-r">
                                            59,505,254
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                            95.31%
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center border-r">Y (sex chromosome)</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">200</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">57,741,652</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium border-r">
                                            1.9
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium border-r">
                                            25,121,652
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                            43.51%
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center border-r">22</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">500</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">49,528,953</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium border-r">
                                            1.6
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium border-r">
                                            34,893,953
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                            70.45%
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center border-r">21</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">200</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">46,944,323</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium border-r">
                                            1.5
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium border-r">
                                            34,171,998
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                            72.79%
                                        </td>
                                    </tr>
                                    <tr className="bg-neutral-700">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center border-r">
                                            <Bold>Total</Bold>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">
                                            <Bold>21,000</Bold>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">
                                            <Bold>3,079,843,747</Bold>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium border-r">
                                            <Bold>100.0</Bold>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium border-r">
                                            <Bold>2,857,698,560</Bold>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                            <Bold>92.79%</Bold>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <p>
                Based on the micrographic characteristics of size, position of the centromere and sometimes the presence of a chromosomal satellite, the human chromosomes are classified into the following groups:
                <br />
                <br />
            </p>
            <div className="flex flex-col text-white">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="border overflow-hidden">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead>
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-base font-medium text-gray-300 border-r text-left">Group</th>
                                        <th scope="col" className="px-6 py-3 text-base font-medium text-gray-300 border-r text-left">
                                            Chromosomes
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-base font-medium text-center border-r text-gray-300">Features</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-6 py-4 border-r whitespace-nowrap text-sm font-medium">
                                            <Bold>A</Bold>
                                        </td>
                                        <td className="px-6 py-4 border-r whitespace-nowrap text-sm">1–3</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">Large, metacentric or submetacentric</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r font-medium">
                                            <Bold>B</Bold>
                                        </td>
                                        <td className="px-6 py-4 border-r whitespace-nowrap text-sm">4–5</td>
                                        <td className="border-r px-6 py-4 whitespace-nowrap text-sm">Large, submetacentric</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border-r">
                                            <Bold>C</Bold>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">6–12, X</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">Medium-sized, submetacentric</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border-r">
                                            <Bold>D</Bold>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">13–15</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">Medium-sized, acrocentric, with satellite</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border-r">
                                            <Bold>E</Bold>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">16–18</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">Small, metacentric or submetacentric</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border-r">
                                            <Bold>F</Bold>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">19–20</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">Very small, metacentric</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border-r">
                                            <Bold>G</Bold>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">21–22, Y</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">Very small, acrocentric (and 21, 22 with satellite)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <ParagraphSecondaryHeader id="Karyotype">Karyotype</ParagraphSecondaryHeader>
            <p id="Karyotype">
                In general, the karyotype is the characteristic chromosome complement of a <Link slug="Eukaryote" title="eukaryote" /> <Link slug="Species" title="species" />. The preparation and study of karyotypes is part of cytogenetics.
                <br />
                <br />
            </p>
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/NHGRI_human_male_karyotype.png/200px-NHGRI_human_male_karyotype.png" w={400} h={400} caption={
                (
                    <>
                        Karyogram of a human male
                    </>
                )
            } />
            <br />
            <br />
            <p>
                Although the replication and transcription of DNA is highly standardized in eukaryotes, the same cannot be said for their karyotypes, which are often highly variable. There may be variation between species in chromosome number and in detailed organization. In some cases, there is significant variation within species. Often there is:
            </p>
            <br />
            <div className="pl-4">
                <ul className="pl-4 list-decimal">
                    <li>
                        variation between the two sexes
                    </li>
                    <li>
                        variation between the germline and soma (between <Link slug="Gamete" title="gametes" /> and the rest of the body)
                    </li>
                    <li>
                        variation between members of a population, due to balanced genetic polymorphism
                    </li>
                    <li>
                        geographical variation between races
                    </li>
                    <li>
                        mosaics or otherwise abnormal individuals.
                    </li>
                </ul>
            </div>
            <br />
            <br />
            <p>
                Also, variation in karyotype may occur during development from the fertilized egg.
                <br />
                <br />
                The technique of determining the karyotype is usually called <i>karyotyping</i>. Cells can be locked part-way through division (in metaphase) in vitro (in a reaction vial) with colchicine. These cells are then stained, photographed, and arranged into a <i>karyogram</i>, with the set of chromosomes arranged, autosomes in order of length, and sex chromosomes (here X/Y) at the end.
                <br />
                <br />
                Like many sexually reproducing species, humans have special gonosomes (sex chromosomes, in contrast to autosomes). These are XX in females and XY in males.
                <br />
                <br />
            </p>
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Human_karyotype_with_bands_and_sub-bands.png/220px-Human_karyotype_with_bands_and_sub-bands.png" w={450} h={450} caption={
                (
                    <>
                        Schematic karyogram of a human, with annotated bands and sub-bands. It is a graphical representation of the idealized human diploid karyotype. It shows dark and white regions on G banding. Each row is vertically aligned at centromere level. It shows 22 homologous chromosomes, both the female (XX) and male (XY) versions of the sex chromosome (bottom right), as well as the mitochondrial genome (at bottom left).
                    </>
                )
            } />
            <br />
            <br />
            <br />
            <h1 className="text-xl font-bold">History and analysis techniques</h1>
            <br />
            <p>
                Investigation into the human karyotype took many years to settle the most basic question: <i>How many chromosomes does a normal diploid human cell contain?</i> In 1912, Hans von Winiwarter reported 47 chromosomes in spermatogonia and 48 in oogonia, concluding an XX/XO sex determination mechanism. In 1922, Painter was not certain whether the diploid number of man is 46 or 48, at first favouring 46. He revised his opinion later from 46 to 48, and he correctly insisted on humans having an XX/XY system.
                <br />
                <br />
                New techniques were needed to definitively solve the problem:
            </p>
            <div className="pl-4">
                <ul className="pl-4 list-decimal">
                    <li>
                        Using cells in culture
                    </li>
                    <li>
                        Arresting mitosis in metaphase by a solution of colchicine
                    </li>
                    <li>
                        Pretreating cells in a hypotonic solution 0.075 M KCl, which swells them and spreads the chromosomes
                    </li>
                    <li>
                        Squashing the preparation on the slide forcing the chromosomes into a single plane
                    </li>
                    <li>
                        Cutting up a photomicrograph and arranging the result into an indisputable karyogram.
                    </li>
                </ul>
            </div>
            <br />
            <br />
            <p>
                It took until 1954 before the human diploid number was confirmed as 46. Considering the techniques of Winiwarter and Painter, their results were quite remarkable. Chimpanzees, the closest living relatives to <Link slug="Human" title="modern humans" />, have 48 chromosomes as do the other great apes: in humans two chromosomes fused to form chromosome 2.
            </p>
            <ParagraphSecondaryHeader id="Aberrations">Aberrations</ParagraphSecondaryHeader>
            <p id="Aberrations">
                Chromosomal aberrations are disruptions in the normal chromosomal content of a cell. They can cause genetic conditions in humans, such as Down syndrome, although most aberrations have little to no effect. Some chromosome abnormalities do not cause disease in carriers, such as translocations, or chromosomal inversions, although they may lead to a higher chance of bearing a child with a chromosome disorder. Abnormal numbers of chromosomes or chromosome sets, called aneuploidy, may be lethal or may give rise to genetic disorders. Genetic counseling is offered for families that may carry a chromosome rearrangement.
                <br />
                <br />
                The gain or loss of DNA from chromosomes can lead to a variety of <Bold>genetic disorders</Bold>. Human examples include:
                <br />
                <br />
            </p>
            <div className="pl-4">
                <ul className="pl-4 list-disc">
                    <li>
                        <Bold><i>Cri du chat</i></Bold>, which is <HighLightText text="caused by the deletion of part of the short arm of chromosome 5" />. &quot;<i>Cri du chat</i>&quot; means &quot;<i>cry of the cat</i>&quot; in French; the condition was so-named because affected babies make <Bold>high-pitched cry</Bold> that sound like those of <Bold>a cat</Bold>. Affected individuals have <Bold>wide-set of eyes</Bold>, a <Bold>small head</Bold> and <Bold>jaw</Bold>, <Bold>moderate</Bold> to <Bold>severe mental health problems</Bold>, and are <Bold>very short</Bold>.
                    </li>
                    <li>
                        <Bold><i>Down syndrome</i></Bold>, the most common <Bold>trisomy</Bold>, usually <HighLightText text="caused by an extra copy of chromosome 21 (trisomy 21)" />. Characteristics include <Bold>decreased muscle tone</Bold>, <Bold>stockier build</Bold>, <Bold>asymmetrical skull</Bold>, <Bold>slanting eyes</Bold> and <Bold>mild</Bold> to <Bold>moderate development disability</Bold>.
                    </li>
                    <li>
                        <Bold><i>Edwards Syndrome</i></Bold>, or <Bold>trisomy-18</Bold>, the second most common <Bold>trisomy</Bold>. Symptoms include <Bold>moto retardation</Bold>, <Bold>developmental disability</Bold> and <Bold>numerous congenital anomalies</Bold> causing <Bold>serious health problems</Bold>. <HighLightText text="Ninety percent of those affected die in infancy" />. They have characteristic <Bold>clenched hands</Bold> and <Bold>overlapping fingers</Bold>.
                    </li>
                    <li>
                        <Bold><i>Isodicentric 15</i></Bold>, also called <Bold>idic(15)</Bold>, <Bold>partial tetrasomy 15q</Bold>, or <Bold>inverted duplication 15</Bold> (<Bold>inv dup 15</Bold>).
                    </li>
                    <li>
                        <Bold><i>Jacobsen syndrome</i></Bold>, which is very rare. It is also called <Bold>the 11q terminal deletion disorder</Bold>. Those affected have <Bold>normal intelligence</Bold> or <Bold>mild development disability</Bold>, with <Bold>poor expressive language skills</Bold>. Most have a <Bold>bleeding disorder</Bold> called <i>Paris-Trousseau</i> syndrome.
                    </li>
                    <li>
                        <Bold>Klinefelter syndrome</Bold> (XXY). Men with Klinefelter syndrome <HighLightText text="are usually sterile and tend to be taller and have longer arms and legs than their peers" />. Boys with the syndrome are often <Bold>shy</Bold> and <Bold>quiet</Bold> and have a <Bold>higher incidence</Bold> of <Bold>speech delay</Bold> and <Bold>dyslexia</Bold>. Without <Bold>testosterone treatment</Bold>, some may develop <Bold>gynecomastia</Bold> during <Bold>puberty</Bold>.
                    </li>
                    <li>
                        <Bold><i>Patau syndrome</i></Bold>, also called <Bold>D-Syndrome</Bold> or <Bold>trisomy-13</Bold>. Symptoms are <HighLightText text="somewhat similar to those of trisomy-18, without the characteristic folded hand" />.
                    </li>
                    <li>
                        <Bold><i>Small supernumerary marker chromosome</i></Bold>. This means there is an <HighLightText text="extra, abnormal chromosome" />. Features depend on the origin of the extra genetic material. <Bold>Cat-eye syndrome</Bold> and <Bold>isodicentric chromosme 15 syndrome</Bold> (or <Bold>Idic15</Bold>) are both <HighLightText text="caused by a supernumerary marker chromosome, as is Pallister–Killian syndrome" />.
                    </li>
                    <li>
                        <Bold>Triple-X syndrome</Bold> (<Bold>XXX</Bold>). <HighLightText text="XXX girls tend to be tall and thin and have a higher incidence of dyslexia" />.
                    </li>
                    <li>
                        <Bold><i>Turner syndrome</i></Bold> (<Bold>X</Bold> instead of <Bold>XX</Bold> or <Bold>XY</Bold>). In Turner syndrome, <HighLightText text="female sexual characteristics are present but underdeveloped" />. Females with Turner syndrome often have a <Bold>short stature</Bold>, <Bold>low hairline</Bold>, <Bold>abnormal eye features</Bold> and <Bold>bone development</Bold> and a &quot;<Bold>caved-in</Bold>&quot; <Bold>appearance</Bold> to Bold
                        the chest.
                    </li>
                    <li>
                        <Bold><i>Wolf-Hirschhorn syndrome</i></Bold>, which is <HighLightText text="caused by partial deletion of the short arm of chromosome 4" />. It is characterized by <Bold>growth retardartion</Bold>, <Bold>delayed motor skills development</Bold>, &quot;<Bold>Greek Helmet</Bold>&quot; <Bold>facial features</Bold>, and <Bold>mild</Bold> to <Bold>profound mental health problems</Bold>.
                    </li>
                    <li>
                        <Bold><i>XYY syndrome</i></Bold>. XYY boys <HighLightText text="are usually taller than their siblings" />. Like <Bold>XXY boys</Bold> and <Bold>XXX girls</Bold>, they are more likely to have <Bold>learning difficulties</Bold>.
                    </li>
                </ul>
            </div>
            <br />
            <br />
            <h1 className="text-xl font-bold">Sperm aneuploidy</h1>
            <br />
            <p>
                Exposure of males to certain lifestyle, environmental and/or occupational hazards may increase the risk of aneuploid spermatozoa. In particular, risk of aneuploidy is increased by tobacco smoking, and occupational exposure to benzene, insecticides, and perfluorinated compounds. Increased aneuploidy is often associated with increased DNA damage in spermatozoa.
            </p>
            <ParagraphSecondaryHeader id="Number_in_various_organisms">Number in various organisms</ParagraphSecondaryHeader>
            <span id="Number_in_various_organisms" />
            <SubTitle>In eukaryotes</SubTitle>
            <p>
                The number of chromosomes in eukaryotes is highly variable (see table). In fact, chromosomes can fuse or break and thus evolve into novel karyotypes. Chromosomes can also be fused artificially. For example, the 16 chromosomes of yeast have been fused into one giant chromosome and the cells were still viable with only somewhat reduced growth rates.
                <br />
                <br />
                The tables below give the total number of chromosomes (including sex chromosomes) in a cell nucleus. For example, most eukaryotes are diploid, like <Redirect href="/base/Human#Genetics" text="humans" /> who have 22 different types of autosomes, each present as two homologous pairs, and two sex chromosomes. This gives 46 chromosomes in total. Other organisms have more than two copies of their chromosome types, such as bread wheat, which is <i>hexaploid</i> and has six copies of seven different chromosome types – 42 chromosomes in total.
                <br />
                <br />
            </p>
            <h1 className="text-lg pb-2 text-center">Chromosome numbers in some plants</h1>
            <div className="flex flex-col text-white">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="border overflow-hidden">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead>
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-base font-medium text-gray-300 border-r text-left">Plant species</th>
                                        <th scope="col" className="px-6 py-3 text-base font-medium text-gray-300 text-left">
                                            Number of Chromsomes
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-6 py-4 border-r whitespace-nowrap text-sm font-medium">
                                            <i>Arabidopsis thaliana</i> (diploid)
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">10</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r font-medium">
                                            Rye (diploid)
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">14</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border-r">
                                            Einkorn wheat (diploid)
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">14</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border-r">
                                            Maize (diploid or palaeotetraploid)
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">20</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border-r">
                                            Durum wheat (tetraploid)
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">28</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border-r">
                                            Bread wheat (hexaploid)
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">42</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border-r">
                                            Cultivated tobacco (tetraploid)
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">48</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border-r">
                                            Adder&apos;s tongue fern (polyploid)
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">approx. 1,200</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <h1 className="text-lg pb-2 text-center">Chromosome numbers (2n) in some animals</h1>
            <div className="flex flex-col text-white">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="border overflow-hidden">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead>
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-base font-medium text-gray-300 border-r text-left">Species</th>
                                        <th scope="col" className="px-6 py-3 text-base font-medium text-gray-300 text-left">
                                            Number of Chromsomes
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-6 py-4 border-r whitespace-nowrap text-sm font-medium">
                                            Indian muntjac
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">7</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r font-medium">
                                            Common fruit fly
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">8</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border-r">
                                            Pill millipede (<i>Arthrosphaera fumosa</i>)
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">30</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border-r">
                                            Earthworm (<i>Octodrilus complanatus</i>)
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">36</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border-r">
                                            Tibetan fox
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">36</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border-r">
                                            Domestic cat
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">38</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border-r">
                                            Domestic pig
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">38</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border-r">
                                            Laboratory mouse
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">42</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border-r">
                                            Rabbit (<i>Oryctolagus cuniculus</i>)
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">44</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border-r">
                                            Syrian hamster
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">44</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border-r">
                                            Guppy (<i>poecilia reticulata</i>)
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">46</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border-r">
                                            Human
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">46</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border-r">
                                            Hares
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">48</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border-r">
                                            Gorillas
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">48</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border-r">
                                            Chimpanzees
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">48</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border-r">
                                            Domestic sheep
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">54</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border-r">
                                            Garden snail
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">54</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border-r">
                                            Silkworm
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">56</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border-r">
                                            Elephant
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">56</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border-r">
                                            Cow
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">60</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border-r">
                                            Donkey
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">62</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border-r">
                                            Guinea pig
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">64</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border-r">
                                            Horse
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">64</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border-r">
                                            Dog
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">78</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border-r">
                                            Hedgehog
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">90</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border-r">
                                            Goldfish
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">100–104</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border-r">
                                            Kingfisher
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">132</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <h1 className="text-lg pb-2 text-center">Chromosome numbers in other organisms</h1>
            <div className="flex flex-col text-white">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="border overflow-hidden">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead>
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-base font-medium text-gray-300 border-r text-left">Species</th>
                                        <th scope="col" className="px-6 py-3 text-base font-medium text-gray-300 text-left border-r">
                                            Large chromsomes
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-base font-medium text-gray-300 text-left border-r">
                                            Intermediate chromsomes
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-base font-medium text-gray-300 text-left">
                                            Microchromsomes
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-6 py-4 border-r whitespace-nowrap text-sm font-medium">
                                            <i>Trypanosoma brucei</i>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">11</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">6</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">≈100</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r font-medium">
                                            Domestic pigeon (<i>Columbalivia domestica</i>)
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">18</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">–</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">59–63</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border-r">
                                            Chicken
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">8</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">2 sex chromosomes</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">60</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <p>
                Normal members of a particular eukaryotic species all have the same number of nuclear chromosomes (see the table). Other eukaryotic chromosomes, i.e., mitochondrial and plasmid-like small chromosomes, are much more variable in number, and there may be thousands of copies per cell.
            </p>
            <br />
            <br />
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/PLoSBiol3.5.Fig1bNucleus46Chromosomes.jpg/200px-PLoSBiol3.5.Fig1bNucleus46Chromosomes.jpg" w={250} h={450} caption={
                (
                    <>
                        The 23 human chromosome territories during prometaphase in fibroblast cells
                    </>
                )
            } />
            <br />
            <br />
            <p>
                Asexually reproducing species have one set of chromosomes that are the same in all body cells. However, asexual species can be either haploid or diploid.
                <br />
                <br />
                Sexually reproducing species have somatic cells (body cells), which are diploid [2n] having two sets of chromosomes (23 pairs in humans), one set from the mother and one from the father. Gametes, reproductive cells, are haploid [n]: They have one set of chromosomes. Gametes are produced by meiosis of a diploid germline cell. During meiosis, the matching chromosomes of father and mother can exchange small parts of themselves (crossover), and thus create new chromosomes that are not inherited solely from either parent. When a male and a female gamete merge (fertilization), a new diploid organism is formed.
                <br />
                <br />
                Some animal and plant species are polyploid [Xn]: They have more than two sets of homologous chromosomes. Plants important in agriculture such as tobacco or wheat are often polyploid, compared to their ancestral species. Wheat has a haploid number of seven chromosomes, still seen in some cultivars as well as the wild progenitors. The more-common pasta and bread wheat types are polyploid, having 28 (tetraploid) and 42 (hexaploid) chromosomes, compared to the 14 (diploid) chromosomes in the wild wheat.
            </p>
            <br />
            <br />
            <SubTitle>In prokaryotes</SubTitle>
            <p>
                Prokaryote species generally have one copy of each major chromosome, but most cells can easily survive with multiple copies. For example, <i>Buchnera</i>, a symbiont of aphids has multiple copies of its chromosome, ranging from 10–400 copies per cell. However, in some large bacteria, such as <i>Epulopiscium fishelsoni</i> up to 100,000 copies of the chromosome can be present. Plasmids and plasmid-like small chromosomes are, as in eukaryotes, highly variable in copy number. The number of plasmids in the cell is almost entirely determined by the rate of division of the plasmid – fast division causes high copy number.
            </p>
        </>
    );
    return (
        <>
            <Layout topic="Biology" title="Chromosome" thumbnail="/assets/chromosome.png" content={content} />
        </>
    );
};