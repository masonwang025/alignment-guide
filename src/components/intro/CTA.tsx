import { Link } from 'nextra-theme-docs';
import Button from '../global/Button';

function CTA() {
	return (
		<div className='bg-accent-300 shadow-md shadow-neutral-300 rounded-xl md:py-8 py-6 px-5 spacing-y-5 mt-8'>
			<h3 className='text-center pb-5'>Here's what we have for you.</h3>
			<div className='flex flex-col items-center justify-center space-y-5'>
				<Link href='/quickstart' className='no-underline'>
					<Button text='Quickstart' darker />
				</Link>
			</div>
		</div>
	);
}

export default CTA;
