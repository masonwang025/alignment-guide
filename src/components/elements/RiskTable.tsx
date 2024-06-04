import { cn } from '@/utils/shadcn-utils';
import React from 'react';

const RiskTable = () => {
    const tableClass = "table-fixed w-full border-collapse border border-gray-300";
    const cellClass = "border border-gray-300 py-2 px-2";
    const headerClass = `${cellClass} text-xl font-bold`;
    const textCenterClass = `${cellClass} text-center`;

    return (
        <div className="flex justify-center items-center">
            <div className="bg-gray-50 rounded-lg">
                <table className={tableClass}>
                    <thead>
                        <tr>
                            <th className={cellClass}></th>
                            <th className={headerClass}>Short Term</th>
                            <th className={headerClass}>Long Term</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className={cn(headerClass, "text-right")}>Accident</td>
                            <td className={textCenterClass}>e.g. Self-Driving Car Crashes</td>
                            <td className={cn(textCenterClass, "bg-accent-300")}><i>Oh boy</i></td>
                        </tr>
                        <tr>
                            <td className={cn(headerClass, "text-right")}>Misuse</td>
                            <td className={textCenterClass}>e.g. Deep Fakes</td>
                            <td className={textCenterClass}>e.g. AI-Enabled Dictatorship</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RiskTable;
