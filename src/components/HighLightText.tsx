export interface HighLightTextProps {
    text: string;
};

export default function HighLightText({ text }: HighLightTextProps) {
    return (
        <>
            <span className=" bg-orange-400 px-[2px] rounded-[3px]">
                {text}
            </span>
        </>
    );
};