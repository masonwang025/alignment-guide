import React from 'react';

const SectionCard = ({ number, title, children }: { number: string; title: string; children: React.ReactNode }) => {
    return (
        <div className='flex flex-col px-7 lg:py-7 py-5 rounded-xl border border-gray-300 hover:bg-accent-300 hover:!border-transparent'>
            <div className='font-serif text-4xl italic pb-4'>{number}</div>
            <div className='font-serif font-semibold text-2xl'>{title}</div>
            <div>{children}</div>
        </div>
    );
};

export default SectionCard;
