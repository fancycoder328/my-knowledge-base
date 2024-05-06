import { IconLink } from "@tabler/icons-react";
import IDLink from "./IDLink";

export interface ParagraphSecondaryHeaderProps {
    id: string;
    children: React.ReactNode;
};

export default function ParagraphSecondaryHeader({ id, children }: ParagraphSecondaryHeaderProps) {
    const icon = (
        <>
            <IconLink className="transition hover:rotate-45 hover:text-blue-400" />
        </>
    );
    return (
        <>
            <span className="h-14 pt-14 pb-10 pl-3 flex gap-3 items-center border-b border-neutral-100 text-xl lg:text-4xl md:text-3xl">
                <IDLink id={`#${id}`} icon={icon} />
               {children}
            </span>
            <br />
            <br />
        </>
    );
};