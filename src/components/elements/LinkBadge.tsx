// inspo: https://leerob.io/

import { DocumentIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

function LinkBadge({ href, newWindow, icon, className, children }: { href: string; newWindow?: boolean; icon?: React.ReactNode; className?: string; children?: React.ReactNode }) {
	return (
		<Link
			href={href}
			target={newWindow ? '_blank' : undefined}
			className={`trans inline-block bg-background-light border border-neutral-400 px-2.5 py-[0.75] hover:bg-neutral-50 rounded-lg ${className}`}
			rel={newWindow ? 'noopener noreferrer' : undefined}
		>
			<span className='horizontal center-v space-x-1.5'>
				{icon || <DocumentIcon className='h-4' />}
				<span>{children}</span>
				{newWindow && <span className='ml-1.5'>↗</span>}
			</span>
		</Link>
	);
}

export default LinkBadge;
