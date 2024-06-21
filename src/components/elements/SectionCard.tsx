import React from 'react';
import Link from 'next/link';

const SectionCard = ({ number, title, href, children, className }: { number: string; title: string; href: string; children: React.ReactNode; className?: string }) => {
	return (
		<Link href={href} className={`flex flex-col px-7 lg:py-7 py-5 rounded-xl border border-neutral-300 hover:bg-accent-300 hover:!border-transparent ${className}`}>
			<div className='font-serif text-4xl italic pb-4'>{number}</div>
			<div className='font-serif font-semibold text-2xl'>{title}</div>
			<div className='text-sm mt-2 text-neutral-500'>{children}</div>
		</Link>
	);
};

export default SectionCard;
