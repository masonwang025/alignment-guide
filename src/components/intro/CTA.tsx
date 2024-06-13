import { Link } from "nextra-theme-docs";

function CTA() {
    return (
        <div className='bg-gray-50 shadow-sm rounded-lg md:py-8 py-6 px-5 spacing-y-5 mt-8'>
            <p className='text-lg text-center pb-5'>Here's what we have for you.</p>
            <div className='flex flex-col items-center justify-cen→ter space-y-5'>
                <Link href='/quickstart' className="no-underline">
                    <p className='bg-accent-400 text-black py-2 px-4 rounded-lg'>
                        Quickstart →
                    </p>
                </Link>
            </div>
        </div>
    );
}

export default CTA;