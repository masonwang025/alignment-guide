import React, { FC, ReactNode } from 'react';

interface LinkWrapperProps {
	children: ReactNode;
	href: string;
}

const LinkWrapper: FC<LinkWrapperProps> = ({ children, href }) => {
	return (
		<a href={href} className='hover:text-primary-600 hover:text-opacity-70 underline underline-offset-4 decoration-1.5 decoration-dotted'>
			{/* <a href={href} className='hover:text-opacity-70 hover:font-serif hover:italic hover:text-lg hover:leading-3 hover:tracking-wide underline underline-offset-4 decoration-1.5 decoration-dotted'> */}
			{children}
		</a>
	);
};

export default LinkWrapper;
