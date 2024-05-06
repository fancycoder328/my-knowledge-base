import { TracingBeamComponent } from "@/components/TracingBeam";
import KnowledgeBasePageButton from "@/components/KnowledgeBasePageButton";
import Divider from "@/components/Divider";

export interface CitationLayoutProps {
	type: string,
	title: string;
	thumbnail: string;
	content: React.ReactNode;
};

export default function CitationLayout({ type, title, thumbnail, content }: CitationLayoutProps) {
	return (
		<>
			<TracingBeamComponent topic={type} title={title} thumbnail={thumbnail} content={content} />
			<div className="flex">
				<Divider />
			</div>
			<KnowledgeBasePageButton />
		</>
	);
};