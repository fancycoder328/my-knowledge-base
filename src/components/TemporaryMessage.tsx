import Layout from "@/layouts/Layout";

export default function TemporaryMessage() {
    const content = (
        <>
            <p className="text-center">
                This message is temporary to all of the pages without information. The message will be replaced with the article when completely written.
            </p>
        </>
    );
    return (
        <>
            <Layout topic="Temporary Message" title="Temporary Message" thumbnail="/assets/temporary_message.png" content={content} />
        </>
    );
};  