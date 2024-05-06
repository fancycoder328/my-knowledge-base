import Layout from "@/layouts/Layout";
import Bold from "@/components/Bold";
import Link from "@/components/Link";
import NotToBeConfusedWith from "@/components/NotToBeConfusedWith";
import Redirect from "@/components/Redirect";
import ParagraphSecondaryHeader from "@/components/ParagraphSecondaryHeader";

export default function Makemake() {
    const content = (
        <>
            <NotToBeConfusedWith slug="Makemake_(diety)" title="Makemake (deity)" />
            <p>
                <Bold>Makemake</Bold> (minor-planet designation: <Bold>136472 Makemake</Bold>) is a <Link slug="Dwarf_Planet" title="dwarf planet" /> and the second-largest of what is known as the classical population of <Link slug="Kuiper_belt" title="Kuiper belt" /> objects, with a diameter approximately that of Saturn&apos;s moon <Link slug="Iapetus_(moon)" title="Iapetus" />, or 60% that of <Link slug="Pluto" title="Pluto" />. It has <Link slug="S_2015_(136472)_1" title="one known satellite" />. Its extremely low average temperature, about 40 <Link slug="Kelvin" title="K" /> (<Bold>−230 °C</Bold>), means its surface is covered with <Link slug="Methane" title="methane" />, <Link slug="Ethane" title="ethane" />, and possibly <Link slug="Nitrogen" title="nitrogen" /> ices. Makemake shows signs of geothermal activity and thus may be capable of supporting active <Link slug="Geology" title="geology" /> and harboring an active subsurface ocean.<br /><br />Makemake was discovered on <Bold>March 31</Bold>, <Bold>2005</Bold> by a team led by Michael E. Brown, and announced on <Bold>June 29</Bold>, <Bold>2005</Bold>. It was initially known as <Bold>2005 FY<sub>9</sub></Bold> and later given the minor-planet number <Bold>136472</Bold>. In <Bold>July 2008</Bold>, it was named after < Link slug="Makemake_(deity)" title="Makemake" />, a creator god in the <Bold>Rapa Nui</Bold> <Link slug="Mythology" title="mythology" /> of <Bold>Easter Island</Bold>, under the expectation by the <Redirect href="https://www.iau.org/" text="International Astronomical Union" /> (<Bold>IAU</Bold>) that it would prove to be a dwarf planet.
            </p>
            <ParagraphSecondaryHeader id="Discovery">Discovery</ParagraphSecondaryHeader>
            <p id="Discovery">
                Makemake was discovered by <Bold>Michael E. Brown</Bold>, <Bold>Chadwick A. Trujillio</Bold> and <Bold>David Lincoln Rabinowitz</Bold> on <Bold>March 31</Bold>. <Bold>2005</Bold>.
            </p>
            <ParagraphSecondaryHeader id="Designation">Designation</ParagraphSecondaryHeader>
            <p id="Designation">
                <Bold>MPC designation</Bold>: <Bold>(136472) Makemake</Bold>;<br /><Bold>Named after</Bold>: <Link slug="Makemake_(deity)" title="Makemake" />;<br /><Bold>Alternative designation</Bold>: <Bold>2005 FY<sub>9</sub></Bold>;<br /><Bold>Category</Bold>: <Link slug="Dwarf_Planet" title="Dwarf Planet" />, <Bold>Trans-Neptunian Object</Bold>, <Bold>cubewano</Bold>, <Bold>scattered-near</Bold>;<br /><Bold>Adjective(s)</Bold>: Makemakean;
            </p>
            <ParagraphSecondaryHeader id="Orbital_characteristics">Orbital characteristics</ParagraphSecondaryHeader>
            <p id="Orbital_characteristics">
                <Bold>Epoch</Bold>: <Bold>May 31</Bold>, <Bold>2020</Bold>;<br /><Bold>JD</Bold>: <Bold>2458900.5</Bold>;<br /><Bold>Earliest</Bold>: <Bold>January 29</Bold>, <Bold>1955</Bold>;<br /><Bold>Precovery date</Bold>: unknown yet;<br /><Bold>Aphelion</Bold>: <Bold>52.756 AU (7.8922 Tm)</Bold>;<br /><Bold>Perihelion</Bold>: <Bold>38.104 AU (5.7003 Tm)</Bold>;<br /><Bold>Semi-major axis</Bold>: <Bold>45.430 AU (6.7962 Tm)</Bold>;<br /><Bold>Eccentricity</Bold>: <Bold>0.16126</Bold>;<br /><Bold>Orbital period (sidereal)</Bold>: <Bold>306.21 yr (111,845 d)</Bold>;<br /><Bold>Average Orbital Speed</Bold>: <Bold>4.419 km/s</Bold>;<br /><Bold>Mean anomaly</Bold>: <Bold>165.514°</Bold>;<br /><Bold>Inclination</Bold>: <Bold>28.9835°</Bold>;<br /><Bold>Longitude of ascending node</Bold>: <Bold>79.620°</Bold>;<br /><Bold>Next time of Perihelion</Bold>: <Bold>17 November</Bold>, <Bold>2186</Bold>;<br /><Bold>Argument of perihelion</Bold>: <Bold>294.834°</Bold>;<br /><Bold>Known satellite(s)</Bold>: <Bold>1</Bold>
            </p>
        </>
    );
    return (
        <>
            <Layout topic="Dwarf Planet" title="Makemake" thumbnail="/assets/makemake.png" content={content} />
        </>
    );
};