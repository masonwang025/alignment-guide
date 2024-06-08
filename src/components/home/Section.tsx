import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ id, children, className, fullWidth, fullHeight }: { id: string; children?: React.ReactNode; className?: string; fullWidth?: boolean; fullHeight?: boolean }) => {
    const px = fullWidth ? 'px-0' : 'md:px-26 sm:px-20 px-14';
    const py = fullHeight ? 'py-0' : 'py-10 pb-14';

    return (
        <motion.section id={id} className={`snap-start flex flex-col vertical w-screen h-[calc(100dvh)] ${px} ${py} ${className}`}>
            {children}
        </motion.section>
    );
};

export default Section;
