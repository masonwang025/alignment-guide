import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const Toggle: React.FC<{ title: string | React.ReactNode, children: React.ReactNode, className?: string }> = ({ title, children, className }) => {
    return (
        <Accordion type="single" collapsible className={className}>
            <AccordionItem value="item-1" className="border-0 pb-0">
                <AccordionTrigger className="py-0 my-2">{title}</AccordionTrigger>
                <AccordionContent className="pb-0">{children}</AccordionContent>
            </AccordionItem>
        </Accordion>
    );
};

export default Toggle;