import { cn } from "@/utils/shadcn-utils";

function StyledText({ highlight, children, className }: { highlight?: boolean, children: React.ReactNode, className?: string }) {
    return (
        <span className={cn(className, {
            'bg-highlight': highlight,
        })}>
            {children}
        </span>
    )
}

export default StyledText;