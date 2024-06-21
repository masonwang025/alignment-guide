import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/utils/shadcn-utils';

const alertVariants = cva(
	'relative horizontal w-full rounded-lg border border-neutral-200 p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 dark:border-neutral-800',
	{
		variants: {
			variant: {
				default: 'bg-white text-neutral-950',
				info: 'bg-blue-50 text-blue-500',
				warning: 'bg-orange-50 text-orange-600 !border-orange-600',
				primary: 'bg-neutral-700 text-white',
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	}
);

const textColorVariants = {
	default: 'text-neutral-950',
	info: 'text-blue-500',
	warning: 'text-orange-500',
	primary: 'text-white',
};

const Alert = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>>(({ className, variant, ...props }, ref) => (
	<div ref={ref} role='alert' className={cn(alertVariants({ variant }), className)} {...props} />
));
Alert.displayName = 'Alert';

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(({ className, ...props }, ref) => (
	<div ref={ref} className={cn('mb-1 font-medium leading-none tracking-tight', className)} {...props} />
));
AlertTitle.displayName = 'AlertTitle';

const AlertDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(({ className, ...props }, ref) => (
	<div ref={ref} className={cn('text-sm [&_p]:leading-relaxed', className)} {...props} />
));
AlertDescription.displayName = 'AlertDescription';

const AlertIcon = ({ icon, variant }) => <div className={cn(textColorVariants[variant], 'inline-block pr-1')}>{icon}</div>;

export { Alert, AlertTitle, AlertDescription, AlertIcon };
