import { XMarkIcon } from '@heroicons/react/24/solid';

function FalseCard({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className='flex'>
            <span className='font-bold mr-5'>
                <XMarkIcon className='size-6 text-red-700' />
            </span>
            <div className='space-y-2'>
                <p className='text-red-700'>{title}</p>
                {children}
            </div>
        </div>
    );
}

export default FalseCard;
