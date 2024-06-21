import { GlobeAltIcon } from '@heroicons/react/24/outline';
import React from 'react';

function Contact() {
	return (
		<div className='mt-6 space-y-2'>
			<div className='grid md:grid-cols-2 space-x-0 md:space-x-2 space-y-2 md:space-y-0'>
				<ContactCard name='Mason Wang' email='mwang25@stanford.edu' twitterLink='https://twitter.com/masonwang025' website='https://masonjwang.com'>
					<p>Undergrad and NLP research @ Stanford.</p>
				</ContactCard>
				<ContactCard name='Ben Keigwin' email='keigwin@sas.upenn.edu' twitterLink='https://twitter.com/BenKeig137'>
					<p>PhD student @ UPenn.</p>
				</ContactCard>
			</div>

			<div className='px-7 lg:py-7 py-5 rounded-xl border border-neutral-300'>
				<p className='inline'>Thank you to</p>
				&nbsp;&nbsp;
				<div className='inline-flex whitespace-nowrap text-neutral-500'>
					<div className='flex items-center space-x-2 '>
						<p className='text-[#334155] font-bold'>Tina Mai</p>
						<a href={'https://twitter.com/t1namai'} target='_blank' rel='noopener noreferrer'>
							<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-twitter-x' viewBox='0 0 16 16'>
								<path d='M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z' />
							</svg>
						</a>
						<a href={'https://tinamai.xyz'} target='_blank' rel='noopener noreferrer'>
							<GlobeAltIcon className='w-5 h-5' />
						</a>
					</div>
				</div>
				&nbsp;&nbsp;
				<p className='inline'>for designing and helping with this website.</p>
			</div>
		</div>
	);
}

export default Contact;

function ContactCard({ name, email, children, twitterLink, website }: { name: string; email: string; children: React.ReactNode; twitterLink: string; website?: string }) {
	return (
		<div className='flex flex-col px-7 lg:py-7 py-5 rounded-xl border border-neutral-300 space-between'>
			<div>
				<div className='font-serif font-semibold text-2xl'>{name}</div>
				<p className='text-neutral-500 mb-2'>{email}</p>
				{children}
			</div>
			<ul className='horizontal space-x-2 mt-4 text-neutral-500'>
				<a href={twitterLink} target='_blank' rel='noopener noreferrer'>
					<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-twitter-x mt-0.5' viewBox='0 0 16 16'>
						<path d='M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z' />
					</svg>
				</a>
				{website && (
					<a href={website} target='_blank' rel='noopener noreferrer'>
						<GlobeAltIcon className='w-5 h-5' />
					</a>
				)}
			</ul>
		</div>
	);
}
