import Bold from "@/components/Bold";
import NotToBeConfusedWith from "@/components/NotToBeConfusedWith";
import Layout from "@/layouts/Layout";
import ParagraphSecondaryHeader from "@/components/ParagraphSecondaryHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Makemake (deity) - Knowledge Base | Developer Sujay",
};

export default function Makemake_deity() {
    const content = (
        <>
            <NotToBeConfusedWith slug="Makemake" title="Makemake" />
            <p>
                <Bold>Makemake</Bold> (also written as <Bold>Make-make</Bold>; pronounced [ˈmakeˈmake] in Rapa Nui) in the Rapa Nui mythology of Easter Island is the creator of humanity, the god of fertility and the chief god of the &quot;Tangata manu&quot; or bird-man sect (this sect succeeded the island&apos;s more famous Moai era). He appeared to be the local form, or name, of the old Polynesian god Tane. He had no wife.
                <br />
                <br />
                Makemake, as a face with large eyes or perhaps a skull with large eye sockets and a phallic nose, is a frequent subject of the Rapa Nui petroglyphs.
            </p>
            <ParagraphSecondaryHeader id="The_Birdman_sect">The Birdman sect</ParagraphSecondaryHeader>
            <p id="The_Birdman_sect">
                Métraux states that Easter Island&apos;s &quot;greatest religious festival, the only one concerning which circumstantial details survive, was that of the bird-man, intimately linked with the cult of the god Makemake.&quot;.
                <br />
                <br />
                Makemake drove the birds to nest on the islet of Motu Nui (&apos;big islet&apos;), the center of the <i>tangata-manu</i> (bird-man) sect. Four gods were associated with it: Makemake, Haua-tuꞌu-take-take (&apos;Chief of the eggs&apos;, usually simply called &apos;Haua&apos;), <i>vîꞌe</i> Hoa (Haua&apos;s wife) and vîꞌe Kenatea. Each of the four gods had a supernatural servant, whose &quot;names were given&quot; in the ceremonies.
                <br />
                <br />
                The <i>ivi</i> atua was the &apos;seer&apos; who has the vision to select who swam to Motu Nui. A <i>hopu</i> was one of those who make the swim to the islet. Per Englert, the <i>hopu manu</i> were &quot;those who served the <i>tagata manu</i> and, upon finding the first <i>manutara</i> egg, took it to Orongo [on the mainland].&quot; The <i>manu tara</i>, or sooty tern, was the bird that the ceremony centred on; it was the first <i>manu tara</i> egg that was the goal of the ceremony.
            </p>
            <ParagraphSecondaryHeader id="Companion">Companion</ParagraphSecondaryHeader>
            <p id="Companion">
                Makemake&apos;s principal companion was <Bold>Haua</Bold>. &quot;The formula which accompanies an offering to Makemake always includes Haua who appears in the myth as the god&apos;s companion.&quot;.
                <br />
                <br />
                Makemake&apos;s offspring were Tive, Rorai, Hova and &quot;the noblewoman Arangi-kote-kote&quot;.
            </p>
            <ParagraphSecondaryHeader id="Modern_uses_of_Makemake">Modern uses of Makemake</ParagraphSecondaryHeader>
            <p id="Modern_uses_of_Makemake">
                In 2000, BBC produced the documentary &quot;The Lost Gods of Easter Island&quot; exploring a carved wooden idol that David Attenborough purchased in an auction room. It was cheap because the seller believed it was a forgery. Its whole history is discovered: while there was still wood of the (now locally extinct) Toromiro tree on Easter Island it was carved to represent the god Makemake, traded with the crew of Captain Cook&apos;s ship, transported to Tahiti, probably traded by the Tahitians eventually ending up in the auction.
                <br />
                <br />
                <br />
            </p>
            <h1 className="font-bold text-xl">Astronomy</h1>
            <p>
                <br />
                The trans-Neptunian dwarf planet Makemake is so named because both the planet and the island are connected to Easter; the planet was discovered shortly after Easter 2005, and the first European contact with Easter Island was on Easter Sunday 1722. The dwarf planet&apos;s code name was &quot;Easterbunny&quot;.
            </p>
        </>
    );
    return (
        <>
            <Layout topic="Mythology" title="Makemake (deity)" thumbnail="/assets/makemake_(deity).png" content={content} />
        </>
    );
};