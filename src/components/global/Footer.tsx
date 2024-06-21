import Link from 'next/link';
import Logo from './Logo';

const Footer = () => (
	<div className='flex flex-row justify-between items-center border-t border-neutral-300 px-5 sm:py-10 py-7'>
		<Link href='/' className='hover:opacity-75'>
			<Logo footer />
		</Link>
		<p className='text-primary-600 text-xs'>© 2024 The Alignment Guide Project</p>
	</div>
);

export default Footer;
