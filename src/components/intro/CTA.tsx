import { Link } from 'nextra-theme-docs';
import Button from '../global/Button';

function CTA() {
	return (
		<div className='bg-accent-300 rounded-xl md:py-8 py-6 px-5 spacing-y-5 mt-8 shadow-[0_-1px_3px_0_rgb(0_0_0_/_0.035),0_1px_3px_0_rgb(0_0_0_/_0.035),1px_0_3px_0_rgb(0_0_0_/_0.035),-1px_0_3px_0_rgb(0_0_0_/_0.035)]'>
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
