import React from 'react';

const Button = ({ text, darker }: { text: string; darker?: boolean }) => {
	return (
		<div
			className={
				darker
					? 'bg-accent-300 text-black md:text-lg font-light hover:font-normal hover:font-serif hover:italic hover:md:text-xl hover:text-lg hover:tracking-wide py-3 px-6 rounded-xl shadow-[0.625rem_0.625rem_0.875rem_0_rgb(200,200,200),-0.5rem_-0.5rem_1.125rem_0_rgb(255,255,255)] transition-shadow duration-200 hover:shadow-[inset_0.2rem_0.2rem_0.5rem_rgb(200,200,200),inset_-0.2rem_-0.2rem_0.5rem_rgb(255,255,255)]'
					: 'bg-background text-black md:text-lg font-light hover:font-normal hover:font-serif hover:italic hover:md:text-xl hover:text-lg hover:tracking-wide py-3 px-6 rounded-xl shadow-[0.625rem_0.625rem_0.875rem_0_rgb(225,226,228),-0.5rem_-0.5rem_1.125rem_0_rgb(255,255,255)] transition-shadow duration-200 hover:shadow-[inset_0.2rem_0.2rem_0.5rem_rgb(225,226,228),inset_-0.2rem_-0.2rem_0.5rem_rgb(255,255,255)]'
			}
		>
			<div className='flex inline space-x-3 horizontal center-v'>
				<p>{text}</p>
				<p className='!font-sans !font-normal !md:text-lg !text-base'>→</p>
			</div>
		</div>
	);
};

export default Button;
