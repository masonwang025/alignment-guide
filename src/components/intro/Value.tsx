import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import Toggle from '../elements/Toggle';

function Value({ iconComponent, title, children }: { iconComponent: React.ReactNode; title: string | React.ReactNode; children?: React.ReactNode }) {
	return (
		<div className='bg-primary-400 shadow-sm rounded-xl p-5 spacing-y-5 horizontal items-start'>
			<span className='mr-5'>{iconComponent}</span>
			<div className='flex-grow'>
				{children ? (
					<Accordion type='single' collapsible className='-mt-1'>
						<AccordionItem value='item-1' className='border-0 pb-0'>
							<AccordionTrigger className='py-0 my-2 hover:no-underline'>{title}</AccordionTrigger>
							<AccordionContent className='pb-0 pr-2'>{children}</AccordionContent>
						</AccordionItem>
					</Accordion>
				) : (
					<div className='pr-2'>{title}</div>
				)}
			</div>
		</div>
	);
}

export default Value;
