import { cn } from '@/utils/shadcn-utils';
import React from 'react';

const RiskTable = () => {
	const tableClass = 'table-auto w-full border-collapse border border-zinc-300';
	const cellClass = 'border border-zinc-300 py-2 px-4 md:px-8';
	const headerClass = `${cellClass} font-bold px-4 md:px-8 text-center`;
	const textCenterClass = `${cellClass} text-center`;

	return (
		<div className='flex justify-center items-center'>
			<div className='bg-zinc-50 rounded-lg'>
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
							<td className={headerClass}>Accident</td>
							<td className={textCenterClass}>e.g. Self-Driving Car Crashes</td>
							<td className={cn(textCenterClass, 'bg-accent-400')}>
								<i>Oh boy</i>
							</td>
						</tr>
						<tr>
							<td className={headerClass}>Misuse</td>
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
