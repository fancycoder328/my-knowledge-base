export interface BoldProps {
    children: React.ReactNode;
};

export default function Bold({ children }: BoldProps) {
    return (
        <>
            <span className="font-bold">
                {children}
            </span>
        </>
    );
};