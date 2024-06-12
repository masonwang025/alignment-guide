import { XMarkIcon } from '@heroicons/react/24/solid';
import Toggle from '../elements/Toggle';

function FalseCard({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className='flex'>
            <span className='font-bold mr-5'>
                <XMarkIcon className='size-6 text-red-700' />
            </span>
            <div className='space-y-2 w-full'>
                <Toggle className='-mt-6' title={<p className='text-red-700 w-full'>{title}</p>}>
                    {children}
                </Toggle>
            </div>
        </div>
    );
}

export default FalseCard;
