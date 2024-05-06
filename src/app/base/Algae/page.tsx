import Bold from "@/components/Bold";
import Link from "@/components/Link";
import Layout from "@/layouts/Layout";

export default function Algae() {
    const content = (
        <>
            <p>
            <Bold>Algae</Bold> (UK: /ˈælɡiː/ AL-ghee, US: /ˈældʒiː/ AL-jee;[3] sg.: <Bold>alga</Bold> /ˈælɡə/ AL-gə) are any of a large and diverse group of photosynthetic, <Link slug="Eukaryote" title="eukaryotic organisms" />. The name is an informal term for a polyphyletic grouping that includes species from multiple distinct clades. Included organisms range from unicellular microalgae, such as Chlorella, Prototheca and the diatoms, to multicellular forms, such as the giant kelp, a large brown alga which may grow up to 50 metres (160 ft) in length. Most are aquatic and lack many of the distinct cell and tissue types, such as stomata, xylem and phloem that are found in land plants. The largest and most complex marine algae are called seaweeds, while the most complex freshwater forms are the Charophyta, a division of green algae which includes, for example, Spirogyra and stoneworts. Algae that are carried by water are plankton, specifically phytoplankton.
            </p>
        </>
    );
    return (
        <>
            <Layout topic="Biology" title="Algae" thumbnail="/assets/algae.png" content={content} />
        </>
    );
};