import React from 'react';
import Link from 'next/link';

const SectionCard = ({ number, title, href, children }: { number: string; title: string; href: string; children: React.ReactNode }) => {
    return (
        <Link href={href} className='flex flex-col px-7 lg:py-7 py-5 rounded-xl border border-gray-300 hover:bg-accent-300 hover:!border-transparent'>
            <div className='font-serif text-4xl italic pb-4'>{number}</div>
            <div className='font-serif font-semibold text-2xl'>{title}</div>
            <div>{children}</div>
        </Link>
    );
};

export default SectionCard;
