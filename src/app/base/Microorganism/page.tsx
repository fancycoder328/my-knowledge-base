import Layout from "@/layouts/Layout";
import Bold from "@/components/Bold";
import Citation from "@/components/Citation";
import Link from "@/components/Link";

export default function Microorganism() {

    const content = (
        <>
            <p>
                A <Bold>microorganism</Bold>, or <Bold>microbe</Bold>,<Citation href="microorganism" number={1} /> is an <Link slug="Organism" title="organism" /> of <Link slug="Microscopic_scale" title="microscopic scale" />, which may exist in its <Link slug="Unicellular_organism" title="single-celled" /> form or as a <Link slug="Colony_(biology)" title="colony of cells" />. <br /><br />The possible existence of unseen microbial life was suspected from ancient times, such as in Jain scriptures from sixth century BC India. The scientific study of microorganisms began with their observation under the <Link slug="Microscope" title="microscope" /> in the 1670s by Anton van Leeuwenhoek. In the 1850s, Louis Pasteur found that microorganisms caused food spoilage, debunking the theory of spontaneous generation. In the 1880s, Robert Koch discovered that microorganisms caused the <Link slug="Disease" title="diseases" />, <Link slug="Tuberculosis" title="tuberculosis" />, <Link slug="Cholera" title="cholera" />, <Link slug="Diphtheria" title="diphtheria" />, and <Link slug="Anthrax" title="anthrax" />. <br /><br />Because microorganisms include most <Link slug="Unicellular_organism" title="unicellular organism" /> from all <Link slug="Three_domain_system" title="three domains of life" /> they can be extremely diverse. Two of the three domains, <Link slug="Archaea" title="Archaea" /> and <Link slug="Bacteria" title="Bacteria" />, only contain microorganisms. The third domain <Link slug="Eukaryote" title="Eukaryota" /> includes all <Link slug="Milticellular_organism" title="multicellular organisms" /> as well as many unicellular protists and <Link slug="Protozoa" title="protozoans" /> that are microbes. Some protists are related to <Link slug="Animal" title="animals" /> and some to <Link slug="Green_plant" title="green plants" />. There are also many multicellular organisms that are microscopic, namely <Link slug="Microanimal" title="micro-animals" />, some <Link slug="Fungi" title="fungi" />, and some <Link slug="Algae" title="algae" />, but these are generally not considered microorganisms.
            </p>
        </>
    );

    return (
        <>
            <Layout topic="Microorganism" title="Microorganism" thumbnail="/assets/microorganism.png" content={content} />
        </>
    );
};