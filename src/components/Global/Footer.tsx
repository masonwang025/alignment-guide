import Link from 'next/link';
import Logo from './Logo';

const Footer = () => (
    <div className='flex flex-row justify-between items-center border-t border-gray-300 px-5 py-10'>
        <Link href='/' className='hover:opacity-75'>
            {Logo}
        </Link>
        <p className='text-accent-600 text-xs'>© 2024 or something like that</p>
    </div>
);

export default Footer;
