"use client";

import { useRouter } from "next/navigation";

export interface GoProps {
    to: string;
    children: React.ReactNode;
};

export default function Go({ to, children }: GoProps) {
    const router = useRouter();
    const handleClick = () => {
        router.push(to);
    };

    return (
        <span onClick={handleClick}>{children}</span>
    );
};  