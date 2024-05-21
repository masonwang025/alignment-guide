import React, { FC, ReactNode } from 'react';

interface LinkWrapperProps {
    children: ReactNode;
    href: string;
}

const LinkWrapper: FC<LinkWrapperProps> = ({ children, href }) => {
    return (
        <a href={href} className='text-blue-500 hover:text-blue-700 underline'>
            {children}
        </a>
    );
};

export default LinkWrapper;
