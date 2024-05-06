import React from "react";
import ReferencingVisualCaption from "./ReferencingVisualCaption";

export interface ReferencingVisualProps {
    src: string;
    w: number;
    h: number;
    caption: React.ReactNode;
};

export default function ReferencingVisual({ src, w, h, caption }: ReferencingVisualProps) {
    return (
        <>
            <img src={`${src}`} className="mx-auto" width={w} height={h} alt="Referencing Visual Display" />
            <div className="text-center pt-2">
                <ReferencingVisualCaption caption={caption} />
            </div>
        </>
    );
};