import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ id, children, className, fullWidth, fitWindow, snap }: { id: string; children?: React.ReactNode; className?: string; fullWidth?: boolean; fitWindow?: boolean; snap?: boolean }) => {
    const px = fullWidth ? 'px-0' : 'md:px-26 sm:px-20 px-14';
    const heightClass = fitWindow ? 'h-screen' : '';
    const snapClass = snap ? 'snap-start' : '';

    return (
        <motion.section id={id} className={`flex flex-col vertical w-screen ${heightClass} ${px} py-10 ${className} ${snapClass} pb-24 md:pb-16`}>
            {children}
        </motion.section>
    );
};

export default Section;
