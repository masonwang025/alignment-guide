import Image from 'next/image';
import logoIcon from '../../assets/logo.svg';

const Logo = () => (
    <div className='flex flex-row items-center gap-3'>
        <Image src={logoIcon} alt='logo' width={20} height={20} />
        <p>Alignment Guide</p>
    </div>
);

export default Logo;
