import React from "react";

export interface ReferencingVisualCaptionProps {
    caption: React.ReactNode;
};

export default function ReferencingVisualCaption({ caption }: ReferencingVisualCaptionProps) {
    return (
        <span className="text-center text-neutral-300 text-xs">{caption}</span>
    );
};