"use client";

import { useState } from "react";
import { toast } from "sonner";
import ReferencingVisualCaption from "./ReferencingVisualCaption";

export interface ConfidentialImageProps {
    src: string;
    w: number;
    h: number;
    caption: React.ReactNode;
};

export default function ConfidentialImage({ src, w, h, caption }: ConfidentialImageProps) {
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleImageBlurness = () => {
        if (window.confirm("The image might be confidential for you to your nearby person. Confirm to remove image blurness?")) {
            setIsConfirmed(true);
            toast.warning("Image blurness removed. Repack app to blur again.");
        };
    };

    return (
        <>
            {isConfirmed ? (
                <>
                    <img
                        className={`h-auto mx-auto pb-2 transition-all duration-3000`}
                        src={src}
                        width={w}
                        height={h}
                        alt="Confidential image"
                    />
                    <button
                        className="bg-blue-500 hover:bg-blue-600 mx-auto text-center justify-center items-center text-white font-bold py-2 px-4 rounded transition-all z-50 -top-4 hidden duration-[12000ms]"
                    >
                        View Image
                    </button>
                </>
            ) : (
                <>
                    <img
                        className={`h-auto mx-auto pb-2 transition-all duration-3000 blur-2xl`}
                        src={src}
                        width={w}
                        height={h}
                        alt="Confidential image"
                    />
                    <button
                        className="bg-blue-500 hover:bg-blue-600 mx-auto text-center flex justify-center items-center text-white font-bold py-2 px-4 rounded transition-all z-50 -top-4"
                        onClick={handleImageBlurness}
                    >
                        View Image
                    </button>
                </>
            )}
            <div className="text-center">
                <ReferencingVisualCaption caption={caption} />
            </div>
        </>
    );
};