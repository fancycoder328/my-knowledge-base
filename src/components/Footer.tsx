import { siteMetaData } from "@/data/constants";

export default function Footer() {
    return (
        <footer className="rounded-lg shadow bg-neutral-900 m-4">
            <span className="block text-sm py-6 border border-neutral-900/[0.1] text-gray-500 text-center dark:text-gray-400">{siteMetaData.copyRightSentence}</span>
        </footer >
    );
};