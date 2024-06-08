import React, { forwardRef, Ref } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
    id: string;
    children?: React.ReactNode;
    className?: string;
    fullWidth?: boolean;
    fullHeight?: boolean;
}

const Section = forwardRef<HTMLElement, SectionProps>(({ id, children, className, fullWidth, fullHeight }, ref) => {
    const px = fullWidth ? 'px-0' : 'md:px-26 sm:px-20 px-14';
    const py = fullHeight ? 'py-0' : 'py-10 sm:pb-14 pb-10';

    return (
        <motion.section ref={ref as Ref<HTMLElement>} id={id} className={`snap-start flex flex-col vertical w-screen h-[calc(100dvh)] ${px} ${py} ${className}`}>
            {children}
        </motion.section>
    );
});

Section.displayName = 'Section';

export default Section;
