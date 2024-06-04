import React, { FC, ReactNode } from 'react';

interface TextHeaderWrapperProps {
    children: ReactNode;
    type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
}

const headingClasses = {
    h1: 'font-serif text-5xl mt-5 mb-7 text-dark',
    h2: 'font-serif text-3xl  mt-7 mb-7 pb-2 border-b border-gray-300 text-dark',
    h3: 'font-serif text-2xl text-dark',
    h4: 'font-serif text-xl text-dark',
    h5: 'font-serif text-lg text-dark',
    h6: 'font-serif text-base text-dark',
    p: 'font-sans text-base',
};

const TextHeaderWrapper: FC<TextHeaderWrapperProps> = ({ children, type }) => {
    const className = headingClasses[type];
    const Tag = type as keyof JSX.IntrinsicElements;
    return <Tag className={className}>{children}</Tag>;
};

export default TextHeaderWrapper;
