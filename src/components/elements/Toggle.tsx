import React from 'react';
import { Toggle, ToggleItem, ToggleTrigger, ToggleContent } from '@/components/ui/toggle';

const ToggleComponent: React.FC<{ title: string | React.ReactNode; children: React.ReactNode; className?: string }> = ({ title, children, className }) => {
	return (
		<Toggle type='single' collapsible className={className}>
			<ToggleItem value='item-1' className='border-0 pb-0'>
				<ToggleTrigger className='py-0 my-2 hover:no-underline'>{title}</ToggleTrigger>
				<ToggleContent className='pb-0 pr-2 text-gray-500'>{children}</ToggleContent>
			</ToggleItem>
		</Toggle>
	);
};

export default ToggleComponent;
