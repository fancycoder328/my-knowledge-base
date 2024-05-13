"use client";

import { useState } from "react";
import { toast } from "sonner";
import ReferencingVisualCaption from "./ReferencingVisualCaption";

export interface CensoredImageProps {
    src: string;
    w: number;
    h: number;
    caption: React.ReactNode;
};

export default function CensoredImage({ src, w, h, caption }: CensoredImageProps) {
    const [isConfirmed, setIsConfirmed] = useState(false);


    const handleImageBlurness = () => {
        if (window.confirm("The image might be inappropriate for you or your nearby person. Confirm to remove image blurness?")) {
            setIsConfirmed(true);
            toast.warning("Image blurness removed. Repack app to blur again.");
        }
    };
    return (
        <>
            <img
                className={`h-auto mx-auto pb-2 transition-all duration-3000 ${isConfirmed ? '' : 'blur-2xl'
                    }`}
                src={src}
                width={w}
                height={h}
                alt="Censored image"
                onClick={handleImageBlurness}
            />
            <div className="text-center">
                <ReferencingVisualCaption caption={caption} />
            </div>
        </>
    );
};