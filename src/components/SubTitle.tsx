export interface SubTitleProps {
    children: React.ReactNode;
};

export default function SubTitle({ children }: SubTitleProps) {
    return (
        <>
            <h1 className="text-xl font-bold">{children}</h1>
            <br />
        </>
    );
};