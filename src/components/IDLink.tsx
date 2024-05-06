import React from "react";
import Link from "next/link";

export interface IDLinkProps {
    id: string;
    icon: React.ReactNode;
};

export default function IDLink({ id, icon }: IDLinkProps) {
    return (
        <>
            <Link href={id}>{icon}</Link>
        </>
    );
};