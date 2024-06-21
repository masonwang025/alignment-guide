import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { XCircleIcon } from '@heroicons/react/24/solid';

function FalseCard({ title, children }: { title: string; children: React.ReactNode }) {
	return (
		<div className='flex items-start'>
			<span className='font-bold mr-5'>
				<XCircleIcon className='size-6 text-red-700 mt-2.5' />
			</span>
			<Accordion type='single' collapsible className='w-full'>
				<AccordionItem value='item-1' className='border-0 pb-0'>
					<AccordionTrigger className='py-0 my-2 hover:no-underline'>{<span className='mr-2'>{title}</span>}</AccordionTrigger>
					<AccordionContent className='pb-0 pr-2 mr-2'>{children}</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	);
}

export default FalseCard;
