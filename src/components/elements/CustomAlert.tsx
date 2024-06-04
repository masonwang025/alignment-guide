import { InformationCircleIcon } from "@heroicons/react/24/solid"
import {
    Alert,
    AlertDescription,
    AlertIcon,
    AlertTitle,
} from "@/components/ui/alert"

interface AlertProps {
    title: string | React.ReactNode;
    description: string | React.ReactNode;
    className?: string;
    variant: "info" | "warning" | "primary" | "default";
    icon?: React.ElementType;
}

export function CustomAlert({ title, description, className, icon: Icon = InformationCircleIcon, variant = "default" }: AlertProps) {

    return (
        <Alert className={className} variant={variant}>
            <AlertIcon icon={<Icon className="h-4 w-4" />} variant={variant} />
            <div>
                <AlertTitle className="font-semibold">{title}</AlertTitle>
                <AlertDescription>
                    {description}
                </AlertDescription>
            </div>
        </Alert>
    )
}

export default CustomAlert

