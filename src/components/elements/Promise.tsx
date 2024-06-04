import React from 'react';

const Promise: React.FC = ({ children, icon = '💡' }: { children: React.ReactNode, icon: string }) => {
    return (
        <div className="flex items-center p-4 bg-gray-100 rounded-md border border-gray-300">
            <div className="mr-4 text-2xl">
                {icon}
            </div>
            <div className="text-gray-800">
                {children}
            </div>
        </div>
    );
};

export default Promise;