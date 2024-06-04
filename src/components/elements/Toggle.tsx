import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const Toggle: React.FC<{ title: string | React.ReactNode, children: React.ReactNode }> = ({ title, children }) => {
    return (
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1" className="border-0 pb-0">
                <AccordionTrigger className="py-0 my-2">{title}</AccordionTrigger>
                <AccordionContent>{children}</AccordionContent>
            </AccordionItem>
        </Accordion>
    );
};

export default Toggle;