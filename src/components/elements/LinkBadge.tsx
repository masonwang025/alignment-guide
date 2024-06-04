// inspo: https://leerob.io/

function LinkBadge({ link, text, newWindow, icon, className }: {
    link: string;
    text: string | React.ReactNode;
    newWindow?: boolean;
    icon?: React.ReactNode;
    className?: string;
}) {
    return (
        <a href={link} target={newWindow ? "_blank" : undefined} className={`trans inline-block bg-background-light border border-gray-400 px-2.5 py-[0.75] hover:bg-gray-50 rounded-lg ${className}`}>
            {icon}
            {text}
        </a>
    )
}

export default LinkBadge;

