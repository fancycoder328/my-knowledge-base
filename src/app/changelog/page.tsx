import { Metadata } from "next";
import ChangeLogComponent from "./components/ChangeLog";

export const metadata: Metadata = {
    title: "Change Log - Knowledge Base | Developer Sujay",
};

export default function ChangeLog() {
    return (
        <ChangeLogComponent />
    );
};