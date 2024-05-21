import React, { FC, ReactNode } from 'react';

interface TextHeaderWrapperProps {
    children: ReactNode;
    type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
}

const headingClasses = {
    h1: 'font-serif text-5xl mb-7 mt-5 text-dark',
    h2: 'font-serif text-3xl  mt-7 mb-7 pb-2 border-b border-gray-200 text-dark',
    h3: 'font-sans text-blue-500 text-xl',
    h4: 'font-sans text-purple-500 text-lg',
    h5: 'font-mono text-cyan-500 text-base',
    h6: 'font-mono text-yellow-500 text-sm',
    p: 'font-sans text-base',
};

const TextHeaderWrapper: FC<TextHeaderWrapperProps> = ({ children, type }) => {
    const className = headingClasses[type];
    const Tag = type as keyof JSX.IntrinsicElements;
    return <Tag className={className}>{children}</Tag>;
};

export default TextHeaderWrapper;
