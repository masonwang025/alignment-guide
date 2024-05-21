import React, { FC, ReactNode } from 'react';
import '../../styles/globals.css';

interface TextHeaderWrapperProps {
    children: ReactNode;
    headingType: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const headingClasses = {
    h1: 'font-serif text-red-500 text-3xl',
    h2: 'font-serif text-green-500 text-2xl',
    h3: 'font-sans text-blue-500 text-xl',
    h4: 'font-sans text-purple-500 text-lg',
    h5: 'font-mono text-cyan-500 text-base',
    h6: 'font-mono text-yellow-500 text-sm',
};

const TextHeaderWrapper: FC<TextHeaderWrapperProps> = ({ children, headingType }) => {
    const className = headingClasses[headingType];
    const Tag = headingType as keyof JSX.IntrinsicElements;
    return <Tag className={className}>{children}</Tag>;
};

export default TextHeaderWrapper;
