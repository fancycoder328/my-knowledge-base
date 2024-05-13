import Link from "@/components/Link";
import Bold from "@/components/Bold";
import Citation from "@/components/Citation";
import OnboardingCitation from "@/components/OnboardingCitation";
import Layout from "@/layouts/Layout";
import { Metadata } from "next";
import ReferencingVisual from "@/components/ReferencingVisual";
import TransparentReferencingVisual from "@/components/TransparentReferencingVisual";
import ParagraphSecondaryHeader from "@/components/ParagraphSecondaryHeader";
import SubTitle from "@/components/SubTitle";
import MainArticle from "@/components/MainArticle";
import HighLightText from "@/components/HighLightText";

export const metadata: Metadata = {
    title: "Human body",
};

export default function Human_body() {
    const content = (
        <>
            <p>
                The <Bold>human body</Bold> is the entire structure of a <Link slug="Human" title="human being" />. It is composed of many different types of <Link slug="Cell_(biology)" title="cells" /> that together create tissues and subsequently organs and then organ systems. They ensure homeostasis and the viability of the human body.
                <br />
                <br />
                It consists of head, hair, neck, torso (which includes the thorax and abdomen), arms and hands, legs and feet.
            </p>
            <br />
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Human_Body_02.png/330px-Human_Body_02.png" w={350} h={500} caption={
                (
                    <>
                        Female (left) and male (right) adult human bodies photographed in ventral (above) and dorsal (below) perspectives. Naturally-occurring pubic, body, and facial hair have been deliberately removed to show anatomy.
                    </>
                )
            } />
            <br />
            <p>
                The study of the human body includes anatomy, physiology, histology and embryology. The body varies anatomically in known ways. Physiology focuses on the systems and organs of the human body and their functions. Many systems and mechanisms interact in order to maintain homeostasis, with safe levels of substances such as sugar and oxygen in the blood.
                <br />
                <br />
                The body is studied by health professionals, physiologists, anatomists, and artists to assist them in their work.
            </p>
            <ParagraphSecondaryHeader id="Composition">Composition</ParagraphSecondaryHeader>
            <h1 className="text-base pb-2 text-center font-bold">Elements of the human body by mass. Trace elements are less than 1% combined (and each less than 0.1%).</h1>
            <TransparentReferencingVisual className="bg-white" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/201_Elements_of_the_Human_Body.02.svg/450px-201_Elements_of_the_Human_Body.02.svg.png" w={350} h={500} caption={
                (
                    <></>
                )
            } />
            <br />
            <div className="flex flex-col text-white">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="border overflow-hidden">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead>
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-base font-medium text-gray-300 border-r text-left">Element</th>
                                        <th scope="col" className="px-6 py-3 text-base font-medium text-gray-300 text-left border-r">
                                            Symbol
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-base font-medium text-gray-300 text-left border-r">
                                            % mass
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-base font-medium text-gray-300 text-left">
                                            % atoms
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-6 py-4 border-r whitespace-nowrap text-sm font-medium">
                                            Oxygen
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">O</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">65.0</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">24.0</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 border-r whitespace-nowrap text-sm font-medium">
                                            Carbon
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">C</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">18.5</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">12.0</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 border-r whitespace-nowrap text-sm font-medium">
                                            Hydrogen
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">H</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">9.5</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">62.0</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 border-r whitespace-nowrap text-sm font-medium">
                                            Nitrogen
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">N</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">3.2</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">1.1</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 border-r whitespace-nowrap text-sm font-medium">
                                            Calcium
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">Ca</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">1.5</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">0.22</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 border-r whitespace-nowrap text-sm font-medium">
                                            Phosphorus
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">P</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">1.0</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">0.22</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 border-r whitespace-nowrap text-sm font-medium">
                                            Potassium
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">K</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">0.4</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">0.03</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 border-r whitespace-nowrap text-sm font-medium">
                                            <Link slug="Sulfur" title="Sulfur" />
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">S</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">0.3</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">0.038</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 border-r whitespace-nowrap text-sm font-medium">
                                            Sodium
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">Na</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">0.2</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">0.037</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 border-r whitespace-nowrap text-sm font-medium">
                                            Chlorine
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">Cl</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">0.2</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">0.024</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 border-r whitespace-nowrap text-sm font-medium">
                                            Magnesium
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">Mg</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">0.1</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">0.015</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 border-r whitespace-nowrap text-sm font-medium">
                                            Tracing elements
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">—</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm border-r">{"<"} 0.1</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">{"<"} 0.3</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <p id="Composition">
                The human body is composed of elements including hydrogen, oxygen, carbon, calcium, phosphorus and <Link slug="Sulfur" title="sulfur" />. These elements reside in trillions of cells and non-cellular components of the body.
                <br />
                <br />
                The adult male body is about 60% water for a total water content of some 42 litres (9.2 imp gal; 11 US gal). This is made up of about 19 litres (4.2 imp gal; 5.0 US gal) of extracellular fluid including about 3.2 litres (0.70 imp gal; 0.85 US gal) of blood plasma and about 8.4 litres (1.8 imp gal; 2.2 US gal) of interstitial fluid, and about 23 litres (5.1 imp gal; 6.1 US gal) of fluid inside cells. The content, acidity and composition of the water inside and outside cells is carefully maintained. The main electrolytes in body water outside cells are sodium and chloride, whereas within cells it is potassium and other phosphates.
            </p>
            <br />
            <SubTitle>Cells</SubTitle>
            <p>
                The body contains trillions of cells, the fundamental unit of life. At maturity, there are roughly 30 trillion cells, and 38 trillion bacteria in the body, an estimate arrived at by totaling the cell numbers of all the organs of the body and cell types. The skin of the body is also host to billions of commensal organisms as well as immune cells. Not all parts of the body are made from cells. Cells sit in an extracellular matrix that consists of proteins such as collagen, surrounded by extracellular fluids.
            </p>
            <br />
            <SubTitle>Genome</SubTitle>
            <MainArticle slug="Genome" title="Genome" />
            <p>
                Cells in the body function because of <Link slug="DNA" title="DNA" />. DNA sits within the nucleus of a cell. Here, parts of DNA are copied and sent to the body of the cell via RNA. The RNA is then used to create proteins, which form the basis for cells, their activity, and their products. Proteins dictate cell function and gene expression, a cell is able to self-regulate by the amount of proteins produced. However, not all cells have DNA; some cells such as mature red blood cells lose their nucleus as they mature.
            </p>
            <br />
            <SubTitle>Tissues</SubTitle>
            <p>
                Tissues
                edit
                The body consists of many different types of tissue, defined as cells that act with a specialised function. The study of tissues is called histology and is often done with a microscope. The body consists of four main types of tissues. These are lining cells (epithelia), connective tissue, nerve tissue and muscle tissue.
                <br />
                <br />
                Cells that lie on surfaces exposed to the outside world or gastrointestinal tract (epithelia) or internal cavities (endothelium) come in numerous shapes and forms – from single layers of flat cells, to cells with small beating hair-like cilia in the lungs, to column-like cells that line the stomach. Endothelial cells are cells that line internal cavities including blood vessels and glands. Lining cells regulate what can and cannot pass through them, protect internal structures, and function as sensory surfaces.
            </p>
            <br />
            <SubTitle>Organs</SubTitle>
            <p>
                Organs, structured collections of cells with a specific function, mostly sit within the body, with the exception of skin. Examples include the heart, lungs and liver. Many organs reside within cavities within the body. These cavities include the abdomen (which contains the stomach, for example) and pleura, which contains the lungs.
            </p>
            <br />
            <SubTitle>Heart</SubTitle>
            <TransparentReferencingVisual className="bg-white" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Diagram_of_the_human_heart_%28cropped%29.svg/207px-Diagram_of_the_human_heart_%28cropped%29.svg.png" w={250} h={250} caption={
                (
                    <>
                        Diagram of the human heart
                    </>
                )
            } />
            <br />
            <p>
                The heart is an organ located in the thoracic cavity between the lungs and slightly to the left. It is surrounded by the pericardium, which holds it in place in the mediastinum and serves to protect it from blunt trauma, infection and help lubricate the movement of the heart via pericardial fluid. The heart works by pumping blood around the body allowing oxygen, nutrients, waste, hormones and white blood cells to be transported.
                <br />
                <br />
                The heart is composed of two atria and two ventricles. The primary purpose of the atria is to allow uninterrupted venous blood flow to the heart during ventricular systole. This allows enough blood to get into the ventricles during atrial systole. Consequently, the atria allows a cardiac output roughly 75% greater than would be possible without them. The purpose of the ventricles is to pump blood to the lungs through the right ventricle and to the <Link slug="Circulatory_system" title="rest of the body" /> through the left ventricle.
                <br />
                <br />
                The heart has an electrical conduction system to control the contraction and relaxation of the muscles. It starts in the sinoatrial node traveling through the atria causing them to pump blood into the ventricles. It then travels to the atrioventricular node, which makes the signal slow down slightly allowing the ventricles to fill with blood before pumping it out and starting the cycle over again.
                <br />
                <br />
                Coronary artery disease is the leading cause of death worldwide, making up 16% of all deaths. It is caused by the buildup of plaque in the coronary arteries supplying the heart, eventually the arteries may become so narrow that not enough blood is able to reach the myocardium, a condition known as myocardial infarction or heart attack, this can cause heart failure or cardiac arrest and eventually death. <HighLightText text="Risk factors for coronary artery disease include obesity, smoking, high cholesterol, high blood pressure, lack of exercise and diabetes. Cancer can affect the heart, though it is exceedingly rare and has usually metastasized from another part of the body such as the lungs or breasts" />. This is because the heart cells quickly stop dividing and all growth occurs through size increase rather than cell division.
            </p>
            <br />
            <SubTitle>Gallbladder</SubTitle>
            <p>
                The gallbladder is a hollow pear-shaped organ located posterior to the inferior middle part of the right lobe of the liver. It is variable in shape and size. It stores bile before it is released into the small intestine via the common bile duct to help with digestion of fats. It receives bile from the liver via the cystic duct, which connects to the common hepatic duct to form the common bile duct.
                <br />
                <br />
                The gallbladder gets its blood supply from the cystic artery, which in most people, emerges from the right hepatic artery.
                <br />
                <br />
                Gallstones is a common disease in which one or more stones form in the gallbladder or biliary tract. Most people are asymptomatic but if a stone blocks the biliary tract, it causes a gallbladder attack, symptoms may include sudden pain in the upper right abdomen and or center of the abdomen. Nausea and vomiting may also occur. Typical treatment is removal of the gallbladder through a procedure called a cholecystectomy. Having gallstones is a risk factor for gallbladder cancer, which although quite uncommon, is rapidly fatal if not diagnosed early.
            </p>
            <br />
            <SubTitle>Systems</SubTitle>
            <div className="pl-4">
                <ul className="pl-4 list-disc">
                    <li>
                        <SubTitle>Circulatory system</SubTitle>
                        <MainArticle slug="Circulatory_system" title="Circulatory system" />
                        <p>
                            The circulatory system consists of the heart and blood vessels (arteries, veins and capillaries). The heart propels the circulation of the blood, which serves as a &quot;transportation system&quot; to transfer oxygen, fuel, nutrients, waste products, immune cells and signaling molecules (i.e. hormones) from one part of the body to another. Paths of blood circulation within the human body can be divided into two circuits: the pulmonary circuit, which pumps blood to the lungs to receive oxygen and leave carbon dioxide, and the systemic circuit, which carries blood from the heart off to the rest of the body. The blood consists of fluid that carries cells in the circulation, including some that move from tissue to blood vessels and back, as well as the spleen and bone marrow.
                        </p>
                    </li>
                    <br />
                    <li>
                        <SubTitle>Digestive system</SubTitle>
                        <TransparentReferencingVisual className="bg-white" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Digestive_system_diagram_en.svg/220px-Digestive_system_diagram_en.svg.png" w={200} h={450} caption={
                            (
                                <>
                                    Digestive system
                                </>
                            )
                        } />
                        <br />
                        <p>
                            The digestive system consists of the mouth including the tongue and teeth, esophagus, stomach, (gastrointestinal tract, small and large intestines, and rectum), as well as the liver, pancreas, gallbladder, and salivary glands. It converts food into small, nutritional, non-toxic molecules for distribution and absorption into the body. These molecules take the form of proteins (which are broken down into amino acids), fats, vitamins and minerals (the last of which are mainly ionic rather than molecular). After being swallowed, food moves through the gastrointestinal tract by means of peristalsis: the systematic expansion and contraction of muscles to push food from one area to the next.
                            <br />
                            <br />
                            Digestion begins in the mouth, which chews food into smaller pieces for easier digestion. Then it is swallowed, and moves through the esophagus to the stomach. In the stomach, food is mixed with gastric acids to allow the extraction of nutrients. What is left is called chyme; this then moves into the small intestine, which absorbs the nutrients and water from the chyme. What remains passes on to the large intestine, where it is dried to form feces; these are then stored in the rectum until they are expelled through the anus.
                        </p>
                    </li>
                    <br />
                    <li>
                        <SubTitle>Endocrine system</SubTitle>
                        <p>
                            The endocrine system consists of the principal endocrine glands: the pituitary, thyroid, adrenals, pancreas, parathyroids, and gonads, but nearly all organs and tissues produce specific endocrine hormones as well. The endocrine hormones serve as signals from one body system to another regarding an enormous array of conditions, resulting in variety of changes of function.
                        </p>
                    </li>
                    <br />
                    <li>
                        <SubTitle>Immune system</SubTitle>
                        <p>
                            The immune system consists of the white blood cells, the thymus, lymph nodes and lymph channels, which are also part of the lymphatic system. The immune system provides a mechanism for the body to distinguish its own cells and tissues from outside cells and substances and to neutralize or destroy the latter by using specialized proteins such as antibodies, cytokines, and toll-like receptors, among many others.
                        </p>
                    </li>
                    <br />
                    <li>
                        <SubTitle>Integumentary system</SubTitle>
                        <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Skin_layers.svg/236px-Skin_layers.svg.png" w={300} h={250} caption={
                            (
                                <>
                                    Skin
                                </>
                            )
                        } />
                        <br />
                        <p>
                            The integumentary system consists of the covering of the body (the skin), including hair and nails as well as other functionally important structures such as the sweat glands and sebaceous glands. The skin provides containment, structure, and protection for other organs, and serves as a major sensory interface with the outside world.
                        </p>
                    </li>
                    <br />
                    <li>
                        <SubTitle>Lymphatic system</SubTitle>
                        <p>
                            The lymphatic system extracts, transports and metabolizes lymph, the fluid found in between cells. The lymphatic system is similar to the circulatory system in terms of both its structure and its most basic function, to carry a body fluid.
                        </p>
                    </li>
                    <br />
                    <li>
                        <SubTitle>Musculoskeletal system</SubTitle>
                        <p>
                            The musculoskeletal system<OnboardingCitation citeNoteNumber={1} content={
                                (
                                    <>
                                        The <Bold>human musculoskeletal system</Bold> is an organ system that gives humans the ability to move using their muscular and skeletal systems. The musculoskeletal system provides form, support, stability, and movement to the body.
                                    </>
                                )
                            } /> consists of the human skeleton (which includes bones, ligaments, tendons, joints and cartilage) and attached muscles. It gives the body basic structure and the ability for movement. In addition to their structural role, the larger bones in the body contain bone marrow, the site of production of blood cells. Also, all bones are major storage sites for calcium and phosphate. This system can be split up into the muscular system and the skeletal system.
                        </p>
                    </li>
                    <br />
                    <li>
                        <SubTitle>Nervous system</SubTitle>
                        <TransparentReferencingVisual className="bg-white" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Nervous_system_diagram.png/183px-Nervous_system_diagram.png" w={200} h={500} caption={
                            (
                                <>
                                    Nervous system
                                </>
                            )
                        } />
                        <br />
                        <p>
                            The <Link slug="Nervous_System" title="nervous system" /> consists of the body&apos;s <Link slug="Neuron" title="neurons" /> and glial cells, which together form the nerves, ganglia and gray matter, which in turn form the <Link slug="Human_Brain" title="brain" /> and related structures. The brain is the organ of thought, emotion, memory, and sensory processing; it serves many aspects of communication and controls various systems and functions. The special senses consist of vision, hearing, taste, and smell. The eyes, ears, tongue, and nose gather information about the body&apos;s environment.
                            <br />
                            <br />
                            From a structural perspective, the nervous system is typically subdivided into two component parts: the <Link slug="Central_nervous_system" title="central nervous system" /> (CNS), composed of the brain and the <Link slug="Spinal_cord" title="spinal cord" />; and the peripheral nervous system (PNS), composed of the nerves and ganglia outside the brain and spinal cord. The CNS is mostly responsible for organizing <Link slug="Motion" title="motion" />, processing sensory information, thought, memory, <Link slug="Cognition" title="cognition" /> and other such functions. It remains a matter of some debate whether the CNS directly gives rise to consciousness. The peripheral nervous system (PNS) is mostly responsible for gathering information with sensory neurons and directing body movements with motor neurons.
                            <br />
                            <br />
                            From a functional perspective, the nervous system is again typically divided into two component parts: the somatic nervous system (SNS) and the autonomic nervous system (ANS). The SNS is involved in voluntary functions like speaking and sensory processes. The ANS is involved in involuntary processes, such as digestion and regulating blood pressure.
                            <br />
                            <br />
                            The nervous system is subject to many different diseases. In epilepsy, abnormal electrical activity in the brain can cause seizures. In multiple sclerosis, the immune system attacks the nerve linings, damaging the nerves&apos; ability to transmit signals. Amyotrophic lateral sclerosis (ALS), also known as Lou Gehrig&apos;s disease, is a motor neuron disease which gradually reduces movement in patients. There are also many other diseases of the nervous system.
                        </p>
                    </li>
                    <br />
                    <li>
                        <SubTitle>Reproductive system</SubTitle>
                        <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Male_and_female_gonads_1.png/220px-Male_and_female_gonads_1.png" w={300} h={200} caption={
                            (
                                <>
                                    Male gonad (testes, left) and female gonad (ovaries, right)
                                </>
                            )
                        } />
                        <br />
                        <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Scheme_female_reproductive_system-en.svg/220px-Scheme_female_reproductive_system-en.svg.png" w={300} h={200} caption={
                            (
                                <>
                                    Internal gross anatomy of the female reproductive system
                                </>
                            )
                        } />
                        <br />
                        <p>
                            The purpose of the reproductive system is to reproduce and nurture the growth of offspring. The functions include the production of germ cells and hormones. The sex organs of the male reproductive system and the female reproductive system develops and mature at puberty. These systems include the internal and external genitalia.
                            <br />
                            <br />
                            Female puberty generally occurs between the ages of 9 and 13 and is characterized by ovulation and menstruation; the growth of secondary sex characteristics, such as growth of pubic and underarm hair, breast, uterine and vaginal growth, widening hips and increased height and weight, also occur during puberty. Male puberty sees the further development of the penis and testicles.
                            <br />
                            <br />
                            The female inner sex organs are the two ovaries, their fallopian tubes, the uterus, and the cervix. At birth <HighLightText text="there are about 70,000 immature egg cells that degenerate until at puberty there are around 40,000" />. No more egg cells are produced. Hormones stimulate the beginning of <Link slug="Menstruation" title="menstruation" />, and the ongoing menstrual cycles. The female external sex organs are the vulva (labia, clitoris, and vaginal opening).
                            <br />
                            <br />
                            The male external genitalia include the penis and scrotum that contains the testicles. The testicle is the gonad, the sex gland that produces the <Link slug="Sperm" title="sperm cells" />. Unlike the <Link slug="Ovum" title="egg cells" /> in the female, sperm cells are produced throughout life. Other internal sex organs are the epididymides, vasa deferentia, and some accessory glands.
                            <br />
                            <br />
                            Diseases that affect the reproductive system include <Bold>polycystic ovary syndrome</Bold>, a number of disorders of the testicles including <Bold>testicular torsion</Bold>, and a number of sexually transmitted infections including <Bold>syphilis</Bold>, <Bold>HIV</Bold>, <Bold>chlamydia</Bold>, <Bold>HPV</Bold> (<Bold>Human Papilloma Virus</Bold>) and <Bold>genital warts</Bold>. <HighLightText text="Cancer can affect most parts of the reproductive system including the penis, testicles, prostate, ovaries, cervix, vagina, fallopian, uterus and vulva" />.
                        </p>
                    </li>
                    <br />
                    <li>
                        <SubTitle>Respiratory system</SubTitle>
                        <p>
                            The respiratory system consists of the nose, nasopharynx, trachea, and lungs. It brings oxygen from the air and excretes carbon dioxide and water back into the air. First, air is pulled through the trachea into the lungs by the diaphragm pushing down, which creates a vacuum. Air is briefly stored inside small sacs known as alveoli (sing.: alveolus) before being expelled from the lungs when the diaphragm contracts again. Each alveolus is surrounded by capillaries carrying deoxygenated blood, which absorbs oxygen out of the air and into the bloodstream.
                            <br />
                            <br />
                            For the respiratory system to function properly, there need to be as few impediments as possible to the movement of air within the lungs. Inflammation of the lungs and excess mucus are common sources of breathing difficulties. In asthma, the respiratory system is persistently inflamed, causing wheezing and/or shortness of breath. Pneumonia occurs through infection of the alveoli, and may be caused by tuberculosis. Emphysema, commonly a result of smoking, is caused by damage to connections between the alveoli.
                        </p>
                    </li>
                    <br />
                    <li>
                        <SubTitle>Urinary system</SubTitle>
                        <TransparentReferencingVisual className="bg-white" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Urinary_System_%28Female%29.png/220px-Urinary_System_%28Female%29.png" w={300} h={200} caption={
                            (
                                <>
                                    Female urinary system
                                </>
                            )
                        } />
                        <br />
                        <p>
                            The urinary system consists of the two kidneys, two ureters, bladder, and urethra. It removes waste materials from the blood through urine, which carries a variety of waste molecules and excess ions and water out of the body.
                            <br />
                            <br />
                            First, the kidneys filter the blood through their respective nephrons, removing waste products like urea, creatinine and maintaining the proper balance of electrolytes and turning the waste products into urine by combining them with water from the blood. The kidneys filter about 150 quarts (170 liters) of blood daily, but most of it is returned to the blood stream with only 1-2 quarts (1-2 liters) ending up as urine. The urine is brought by the ureters from the kidneys down to the bladder.
                            <br />
                            <br />
                            The smooth muscle lining the ureter walls continuously tighten and relax through a process called peristalsis to force urine away from the kidneys and down into the bladder. Small amounts of urine are released into the bladder every 10–15 seconds.
                            <br />
                            <br />
                            The bladder is a hollow balloon shaped organ located in the pelvis. It stores urine until the brain signals it to relax the urinary sphincter and release the urine into the urethra starting urination. A normal bladder can hold up to 16 ounces (half a liter) for 3–5 hours comfortably.
                            <br />
                            <br />
                            Numerous diseases affect the urinary system including kidney stones, which are formed when materials in the urine concentrate enough to form a solid mass, urinary tract infections, which are infections of the urinary tract and can cause pain when urinating, frequent urination and even death if left untreated. Renal failure occurs when the kidneys fail to adequately filter waste from the blood and can lead to death if not treated with dialysis or kidney transplantation. Cancer can affect the bladder, kidneys, urethra and ureters, with the latter two being far more rare.
                        </p>
                    </li>
                </ul>
            </div>
            <ParagraphSecondaryHeader id="Anatomy">Anatomy</ParagraphSecondaryHeader>
            <span id="Anatomy"></span>
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Body_cavities.jpg/300px-Body_cavities.jpg" w={400} h={300} caption={
                (
                    <>
                        Cavities of human body
                    </>
                )
            } />
            <p>
                Human anatomy is the study of the shape and form of the human body. The human body has four <Link slug="Limb" title="limbs" /> (two arms and two legs), a <Link slug="Human_head" title="head" /> and a neck, which connect to the torso. The body&apos;s shape is determined by a strong skeleton made of bone and cartilage, surrounded by fat (adipose tissue), muscle, connective tissue, organs, and other structures. The spine at the back of the skeleton contains the flexible vertebral column, which surrounds the spinal cord, which is a collection of nerve fibres connecting the brain to the rest of the body. Nerves connect the spinal cord and brain to the rest of the body. All major bones, muscles, and nerves in the body are named, with the exception of anatomical variations such as sesamoid bones and accessory muscles.
            </p>
            <br />
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Human-brain-mri-gif-brain-mri-gif.gif" w={200} h={350} caption={
                (
                    <>
                        FMRI scan of a healthy <Link slug="Human_Brain" title="human brain" />
                    </>
                )
            } />
            <br />
            <p>
                Blood vessels carry blood throughout the body, which moves because of the beating of the heart. Venules and veins collect blood low in oxygen from tissues throughout the body. These collect in progressively larger veins until they reach the body&apos;s two largest veins, the superior and inferior vena cava, which drain blood into the right side of the heart. From here, the blood is pumped into the lungs where it receives oxygen and drains back into the left side of the heart. From here, it is pumped into the body&apos;s largest artery, the aorta, and then progressively smaller arteries and arterioles until it reaches tissue. Here, blood passes from small arteries into capillaries, then small veins and the process begins again. Blood carries oxygen, waste products, and hormones from one place in the body to another. Blood is filtered at the kidneys and liver.
                <br />
                <br />
                The body consists of a number of body cavities, separated areas which house different organ systems. The brain and central nervous system reside in an area protected from the rest of the body by the blood brain barrier. The lungs sit in the pleural cavity. The intestines, liver, and spleen sit in the abdominal cavity.
                <br />
                <br />
                Height, weight, shape and other body proportions vary individually and with age and sex. Body shape is influenced by the distribution of bones, muscle and fat tissue.
            </p>
            <ParagraphSecondaryHeader id="Physiology">Physiology</ParagraphSecondaryHeader>
            <p id="Physiology">
                Human physiology is the study of how the human body functions. This includes <HighLightText text="the mechanical, physical, bioelectrical, and biochemical functions of humans in good health, from organs to the cells of which they are composed" />. The human body consists of many interacting systems of organs. These interact to maintain homeostasis, keeping the body in a stable state with safe levels of substances such as sugar and oxygen in the blood.
                <br />
                <br />
                Each system contributes to homeostasis, of itself, other systems, and the entire body. Some combined systems are referred to by joint names. For example, the nervous system and the endocrine system operate together as the neuroendocrine system. The nervous system receives information from the body, and transmits this to the brain via nerve impulses and neurotransmitters. At the same time, the endocrine system releases hormones, such as to help regulate blood pressure and volume. Together, these systems regulate the internal environment of the body, maintaining blood flow, posture, energy supply, temperature, and acid balance (pH).
            </p>
            <ParagraphSecondaryHeader id="Development">Development</ParagraphSecondaryHeader>
            <span id="Development"></span>
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Little_baby_from_Puno.jpg/220px-Little_baby_from_Puno.jpg" w={200} h={200} caption={
                (
                    <>
                        A baby from Puno, Peru being carried
                    </>
                )
            } />
            <br />
            <p>
                Development of the human body is the process of growth to maturity. The process begins with fertilisation, where an egg released from the ovary of a female is penetrated by sperm. The egg then lodges in the uterus, where an embryo and later fetus develop until birth. Growth and development occur after birth, and include both physical and psychological development, influenced by genetic, hormonal, environmental and other factors. Development and growth continue throughout life, through childhood, adolescence, and through adulthood to old age, and are referred to as the process of aging.
            </p>
            <ParagraphSecondaryHeader id="Society_and_culture">Society and culture</ParagraphSecondaryHeader>
            <span id="Society_and_culture"></span>
            <SubTitle>Professional study</SubTitle>
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Anatomical_Male_Figure_Showing_Heart%2C_Lungs%2C_and_Main_Arteries.jpg/170px-Anatomical_Male_Figure_Showing_Heart%2C_Lungs%2C_and_Main_Arteries.jpg" w={200} h={450} caption={
                (
                    <>
                        Anatomical study by Leonardo da Vinci
                    </>
                )
            } />
            <br />
            <p>
                Health professionals learn about the human body from illustrations, models, and demonstrations. Medical and dental students in addition gain practical experience, for example by dissection of cadavers. Human anatomy, physiology, and biochemistry are basic medical sciences, generally taught to medical students in their first year at medical school.
            </p>
            <br />
            <SubTitle>Depiction</SubTitle>
            <p>
                In Western societies, the contexts for depictions of the human body include information, art and pornography. Information includes both <Link slug="Science" title="science" /> and education, such as anatomical drawings. Any ambiguous image not easily fitting into one of these categories may be misinterpreted, leading to disputes. The most contentious disputes are between fine art and erotic images, which define the legal distinction of which images are permitted or prohibited.
            </p>
            <br />
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Corinth_stehender_M%C3%A4dchenakt.jpg/130px-Corinth_stehender_M%C3%A4dchenakt.jpg" w={200} h={450} caption={
                (
                    <>
                        Figure drawing by Lovis Corinth (before 1925)
                    </>
                )
            } />
            <br />
            <SubTitle>History and anatomy</SubTitle>
            <ReferencingVisual src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Externarvm_hvmani_corporis_sedivm_partivmve%2C_1543..JPG/220px-Externarvm_hvmani_corporis_sedivm_partivmve%2C_1543..JPG" w={230} h={400} caption={
                (
                    <>
                        Two facing pages of text with woodcuts of naked male and female figures, in the <i>Epitome</i> by Andreas Vesalius, 1543
                    </>
                )
            } />
            <br />
            <p>
                In Ancient Greece, the <i>Hippocratic Corpus</i> described the anatomy of the skeleton and muscles. The 2nd century physician Galen of Pergamum compiled classical knowledge of anatomy into a text that was used throughout the Middle Ages. In the Renaissance, Andreas Vesalius (1514–1564) pioneered the modern study of human anatomy by dissection, writing the influential book <i>De humani corporis fabrica</i>. Anatomy advanced further with the invention of the microscope and the study of the cellular structure of tissues and organs. Modern anatomy uses techniques such as magnetic resonance imaging, computed tomography, fluoroscopy and ultrasound imaging to study the body in unprecedented detail.
            </p>
            <ParagraphSecondaryHeader id="History_of_physiology">History of physiology</ParagraphSecondaryHeader>
            <p id="History_of_physiology">
                The study of human physiology began with Hippocrates in Ancient Greece, around 420 BCE, and with Aristotle (384–322 BCE) who applied critical thinking and emphasis on the relationship between structure and function. Galen (c. 126 – c. 199) was the first to use experiments to probe the body&apos;s functions. The term physiology was introduced by the French physician Jean Fernel (1497–1558). In the 17th century, William Harvey (1578–1657) described the <Link slug="Circulatory_system" title="circulatory system" />, pioneering the combination of close observation with careful experiment. In the 19th century, physiological knowledge began to accumulate at a rapid rate with the cell theory of Matthias Schleiden and Theodor Schwann in 1838, that organisms are made up of cells. Claude Bernard (1813–1878) created the concept of the milieu interieur (internal environment), which Walter Cannon (1871–1945) later said was regulated to a steady state in homeostasis. In the 20th century, the physiologists Knut Schmidt-Nielsen and George Bartholomew extended their studies to comparative physiology and ecophysiology. Most recently, evolutionary physiology has become a distinct subdiscipline.
            </p>
        </>
    )
    return (
        <>
            <Layout topic="Anatomy" title="Human body" thumbnail="/assets/human_body.png" content={content} />
        </>
    );
};