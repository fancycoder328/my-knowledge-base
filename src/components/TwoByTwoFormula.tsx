import clsx from "clsx";

export interface TwoByTwoFormulaProps {
    firstFraction: string;
    secondFraction: string;
    className: string;
};

export default function TwoByTwoFormula({ firstFraction, secondFraction, className }: TwoByTwoFormulaProps) {
    return (
        <>
            <div className="flex flex-col justify-between items-center px-auto">
                <span>{firstFraction}</span>
                <div className={clsx("border-t-[0.5px]", className)} />
                <span>{secondFraction}</span>
            </div>
            <br />
        </>
    );
};  