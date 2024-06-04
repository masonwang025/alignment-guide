import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ id, children, className, fullWidth }: { id: string; children: React.ReactNode; className?: string; fullWidth?: boolean }) => {
    const px = fullWidth ? 'px-0' : 'lg:px-24 md:px-16 sm:px-12 px-10';
    return (
        <motion.section id={id} className={`snap-start flex flex-col vertical w-screen h-screen ${px} py-10 ${className}`}>
            {children}
        </motion.section>
    );
};

export default Section;
