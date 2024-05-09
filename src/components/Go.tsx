export interface GoProps {
    to: string;
    children: React.ReactNode;
};

export default function Go({ to, children }: GoProps) {
    const handleClick = () => {
        window.location.replace(to);
    };

    return (
        <span onClick={handleClick}>{children}</span>
    );
};  