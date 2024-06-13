import { XMarkIcon } from '@heroicons/react/24/solid';
import Toggle from '../elements/Toggle';

function FalseCard({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className='flex items-start'>
            <span className='font-bold mr-5'>
                <XMarkIcon className='size-6 text-red-700 mt-2.5' />
            </span>
            <div className='space-y-2 w-full'>
                <Toggle className='' title={<p className='text-red-700 w-full'>{title}</p>}>
                    {children}
                </Toggle>
            </div>
        </div>
    );
}

export default FalseCard;
