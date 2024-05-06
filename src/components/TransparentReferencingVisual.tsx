import React from "react";
import ReferencingVisualCaption from "./ReferencingVisualCaption";
import clsx from "clsx";

export interface TransparentReferencingVisualProps {
    src: string;
    w: number;
    h: number;
    caption: React.ReactNode;
    className: string;
};

export default function TransparentReferencingVisual({ src, w, h, caption, className }: TransparentReferencingVisualProps) {
    return (
        <>
            <img src={`${src}`} className={clsx("mx-auto", className)} width={w} height={h} alt="Referencing Visual Display" />
            <div className="text-center pt-2">
                <ReferencingVisualCaption caption={caption} />
            </div>
        </>
    );
};