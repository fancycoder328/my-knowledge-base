import { siteMetaData } from "@/data/constants";
import Divider from "@/components/Divider";
import Layout from "@/layouts/Layout";
import Link from "@/components/Link";
import Redirect from "@/components/Redirect";
import OnboardingCitation from "@/components/OnboardingCitation";
import Citation from "@/components/Citation";
import Bold from "@/components/Bold";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Introduction - Knowledge Base | Developer Sujay",
};

export default function Introduction() {
    const content = (
        <>
            <p>
                I developed this platform for keeping my knowledge of random things in public and anyone to see. Hope you&apos;ll learn something from here. You&apos;re always free to read any of the articles. There&apos;s two features called <Bold>Citation</Bold><Citation href="introduction" number={1} /> and <Bold>Onboarding Citation</Bold><OnboardingCitation citeNoteNumber={1} content={
                    (
                        <>
                            The <Bold>Onboarding Citation</Bold> is a feature for displaying short information in the same page without sliding up or down or without leaving the current page. The &quot;[n {"{note number}"}]&quot; means that there&apos;s a short note for this sentence or phrase the &apos;n&apos; tagged on.
                        </>
                    )
                } />. I wrote all of the articles with data from either a book or from <Link slug="Internet" title="Internet" />. This platform doesn&apos;t only include stuffs about development and coding, but includes about <Link slug={"Biology"} title="Biology" />, <Link slug={"Chemistry"} title="Chemistry" /> and <Redirect href="/base" text="more" />...
            </p>
            <Divider />
            <label htmlFor="ul">Some information that you probably don&apos;t need unless you&apos;re a developer 😅:</label>
            <br />
            <div className="pl-4">
                <ul className="pt-4 pl-4 list-disc" id="ul">
                    <li>
                        Tech Stack:
                        <br />
                        <span className="pl-4">{siteMetaData.techStack.join(", ")}.</span>
                    </li>
                    <br />
                    <li>
                        Literal Tech Stack:
                        <br />
                        <span className="pl-4">{siteMetaData.literalTechStack.join(", ")}.</span>
                    </li>
                    <br />
                    <li>
                        Previous Base URI:
                        <br />
                        <span className="pl-4">
                            <Redirect href={siteMetaData.previousBaseURI} text={siteMetaData.previousBaseURI} />
                        </span>
                    </li>
                    <br />
                    <li>
                        Base URI:
                        <br />
                        <span className="pl-4">
                            <Redirect href={siteMetaData.baseURI} text={siteMetaData.baseURI} />
                        </span>
                    </li>
                    <br />
                    <li>
                        Source Repository:
                        <br />
                        <span className="pl-4">
                            <Redirect href={siteMetaData.repository} text={siteMetaData.repository} />
                        </span>
                    </li>
                    <br />
                    <li>
                        Copyright Issued Year:
                        <br />
                        <span className="pl-4">
                            {siteMetaData.copyRightYear}
                        </span>
                    </li>
                </ul>
            </div>
        </>
    );
    return (
        <>
            <Layout topic="Introduction" title="Introduction to Here" thumbnail="/assets/introduction.png" content={content} />
        </>
    );
};