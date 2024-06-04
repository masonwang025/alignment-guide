// inspo: https://leerob.io/

import { DocumentIcon } from '@heroicons/react/24/outline'

function LinkBadge({ link, text, newWindow, icon, className }: {
    link: string;
    text: string | React.ReactNode;
    newWindow?: boolean;
    icon?: React.ReactNode;
    className?: string;
}) {
    return (
        <a href={link} target={newWindow ? "_blank" : undefined} className={`trans inline-block bg-background-light border border-gray-400 px-2.5 py-[0.75] hover:bg-gray-50 rounded-lg ${className}`} rel={newWindow ? "noopener noreferrer" : undefined}>
            <span className="horizontal center-v space-x-1.5">
                {icon || <DocumentIcon className="h-4" />}
                <span>{text}</span>
                {newWindow && <span className="ml-1.5">↗</span>}
            </span>
        </a>
    )
}

export default LinkBadge;

