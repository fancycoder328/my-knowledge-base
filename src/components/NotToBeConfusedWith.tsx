import Link from "next/link";
import { IconInfoCircleFilled } from "@tabler/icons-react";

export interface NotToBeConfusedWithProps {
    slug: string;
    title: string;
};

export default function NotToBeConfusedWith({ slug, title }: NotToBeConfusedWithProps) {
    return (
        <>
            <blockquote className="border-l-4 border-neutral-500 pl-4 rounded-[3.5px] h-10 items-center flex mb-5">
                <IconInfoCircleFilled className="mr-4" />
                Not to be confused with&nbsp;<Link className="text-blue-400 hover:underline italic" href={`/base/${ slug }`}>{ title }</Link>.
            </blockquote>
        </>
    );
};