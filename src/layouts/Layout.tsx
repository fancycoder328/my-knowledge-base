import { TracingBeamComponent } from "@/components/TracingBeam";
import KnowledgeBasePageButton from "@/components/KnowledgeBasePageButton";
import Divider from "@/components/Divider";

export interface LayoutProps {
	topic: string,
	title: string;
	thumbnail: string;
	content: React.ReactNode;
};

export default function Layout({ topic, title, thumbnail, content }: LayoutProps) {
	return (
		<>
			<TracingBeamComponent topic={topic} title={title} thumbnail={thumbnail} content={content} />
			<div className="flex">
				<Divider />
			</div>
			<KnowledgeBasePageButton />
		</>
	);
};