import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ id, children, className, fullWidth, fitWindow }: { id: string; children?: React.ReactNode; className?: string; fullWidth?: boolean; fitWindow?: boolean }) => {
    const px = fullWidth ? 'px-0' : 'md:px-26 sm:px-20 px-14';
    const heightClass = fitWindow ? 'h-screen' : '';

    return (
        <motion.section id={id} className={`snap-start flex flex-col vertical w-screen ${heightClass} ${px} py-10 ${className}`}>
            {children}
        </motion.section>
    );
};

export default Section;
