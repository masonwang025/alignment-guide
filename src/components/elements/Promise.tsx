import React from 'react';

const Promise: React.FC = ({ children, icon = '💡' }: { children: React.ReactNode; icon: string }) => {
    return (
        <div className='flex p-4 bg-accent-400 rounded-xl'>
            <div className='mr-4 text-2xl'>{icon}</div>
            <div className='min-h-3 self-center space-y-2'>{children}</div>
        </div>
    );
};

export default Promise;
