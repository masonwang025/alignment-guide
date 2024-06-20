import React from 'react';

const Button = ({ text, bgColor = 'bg-background' }: { text: string; bgColor?: string }) => {
	return (
		<div
			className={`${bgColor} text-lg hover:font-serif hover:italic hover:text-xl hover:tracking-wide py-3 px-6 rounded-xl shadow-[0.625rem_0.625rem_0.875rem_0_rgb(225,226,228),-0.5rem_-0.5rem_1.125rem_0_rgb(255,255,255)] transition-shadow duration-200 hover:shadow-[inset_0.2rem_0.2rem_0.5rem_rgb(225,226,228),inset_-0.2rem_-0.2rem_0.5rem_rgb(255,255,255)]`}
		>
			<div className='flex inline space-x-3 items-center'>
				<p>{text}</p>
				<p className='!font-sans'>→</p>
			</div>
		</div>
	);
};

export default Button;
