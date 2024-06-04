import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ id, children, className, fullWidth }: { id: string; children: React.ReactNode; className?: string; fullWidth?: boolean }) => {
    const px = fullWidth ? 'px-0' : 'md:px-26 sm:px-20 px-14';
    return (
        <motion.section id={id} className={`snap-start flex flex-col vertical w-screen h-screen ${px} py-10 ${className}`}>
            {children}
        </motion.section>
    );
};

export default Section;
