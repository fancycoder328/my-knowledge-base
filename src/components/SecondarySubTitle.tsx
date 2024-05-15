export interface SecondarySubTitleProps {
    children: React.ReactNode;
};

export default function SecondarySubTitle({ children }: SecondarySubTitleProps) {
    return (
        <>
            <span className="text-lg font-bold">{children}</span>
            <br />
        </>
    );
};