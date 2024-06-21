import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

import { cn } from '@/utils/shadcn-utils';

const Toggle = AccordionPrimitive.Root;

const ToggleItem = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Item>, React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>>(({ className, ...props }, ref) => (
	// @ts-ignore
	<AccordionPrimitive.Item ref={ref} className={cn('border-b', className)} {...props} />
));
ToggleItem.displayName = 'AccordionItem';

const ToggleTrigger = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Trigger>, React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>>(
	({ className, children, ...props }, ref) => (
		<AccordionPrimitive.Header className='flex'>
			<AccordionPrimitive.Trigger
				ref={ref}
				className={cn('group font-sans text-base text-[#334155] items-start text-left justify-between space-x-2 py-4 transition-all hover:underline [&[data-state=open]>svg]:rotate-180', className)}
				{...props}
			>
				{/* {children} */}
				<div className='inline group-hover:text-gray-500 groupp-hover:opacity-80'>{children}</div>
				<ChevronDown className='inline size-5 p-0.5 bg-primary-400 text-primary-600 group-hover:bg-gray-600 group-hover:text-white rounded-full shrink-0 transition-transform duration-200' />
			</AccordionPrimitive.Trigger>
		</AccordionPrimitive.Header>
	)
);
ToggleTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const ToggleContent = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Content>, React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>>(
	({ className, children, ...props }, ref) => (
		<AccordionPrimitive.Content ref={ref} className='overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down' {...props}>
			<div className={cn('pb-4 pt-0', className)}>{children}</div>
		</AccordionPrimitive.Content>
	)
);

ToggleContent.displayName = AccordionPrimitive.Content.displayName;

export { Toggle, ToggleItem, ToggleTrigger, ToggleContent };
