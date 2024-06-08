import React from 'react';

const SectionCard = ({ number, title, children }: { number: string; title: string; children: React.ReactNode }) => {
    return (
        <div className='flex flex-col p-7 rounded-lg border border-gray-300'>
            <div className='font-serif text-4xl italic pb-4'>{number}</div>
            <div className='font-serif font-semibold text-2xl'>{title}</div>
            <div className='space-y-1'>{children}</div>
        </div>
    );
};

export default SectionCard;
