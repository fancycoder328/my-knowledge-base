import { siteMetaData } from "@/data/constants";
import Divider from "@/components/Divider";
import Layout from "@/layouts/Layout";
import Link from "@/components/Link";
import Redirect from "@/components/Redirect";

export default function Introduction() {
    const content = (
        <>
            <p>
                I developed this platform for keeping my knowledge of random things in public and anyone to see. Hope you&aposll learn something from here. You&aposre always free to read any of the articles. And that&aposs it for this card. This platform doesn&apost only include stuffs about development and coding, but includes about <Link slug={"Biology"} title="Biology" />, <Link slug={"Chemistry"} title="Chemistry" /> and <Redirect href="/base" text="more" />...
            </p>
            <Divider />
            <label htmlFor="ul">Some information that you probably don&apost need unless you&aposre a developer 😅:</label>
            <br />
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
                    Base URI:
                    <br />
                    <span className="pl-4">
                        <Redirect href={siteMetaData.baseURI} text={siteMetaData.baseURI} />
                    </span>
                </li>
                <br />
                <li>
                    Repository:
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
        </>
    );
    return (
        <>
            <Layout topic="Introduction" title="Introduction to Here" thumbnail="/assets/introduction.png" content={content} />
        </>
    );
};