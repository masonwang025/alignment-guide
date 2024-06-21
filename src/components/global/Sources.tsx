import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

const Sources = ({ children }: { children: React.ReactNode }) => {
	return (
		<Accordion type='single' collapsible className='px-4 py-2 bg-accent-400 rounded-xl mt-10'>
			<AccordionItem value='item-1' className='border-0 pb-0'>
				<AccordionTrigger className='py-0 my-2 hover:no-underline'>Sources and resources</AccordionTrigger>
				<AccordionContent className='pb-0 pr-2 text-gray-500'>{children}</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
};

export default Sources;
