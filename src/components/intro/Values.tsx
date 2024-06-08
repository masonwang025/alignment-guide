import { XMarkIcon } from '@heroicons/react/24/solid';
import Value from './Value';

function Values() {
    return <div className="mt-8 space-y-8">


        <div className='center-v space-y-5'>
            <h1 className='text-accent-600 uppercase tracking-[0.06rem] text-[0.85rem] pb-2'>To be clear, we are NOT:</h1>
            <Value iconComponent={<XMarkIcon className='size-6' />}>
                <p>We do NOT advocate for slowing or pausing AI capabilities research.</p>
                <p>
                    The best alignment methods have stemmed from advancements in AI capabilities—a trend we expect to continue. Moreover, pausing AI at this stage is completely unrealistic and undesirable due
                    to overwhelming economic and technological incentives.
                </p>
            </Value>
            <Value iconComponent={<XMarkIcon className='size-6' />}>
                <p>We are NOT suggesting that a misaligned AGI must possess consciousness or even seem as intelligent as a cat or dog.</p>
                <p>
                    It doesn't need to harbor any animosity towards humans to pose a threat. Just as autonomous drones can be dangerous without consciousness, a misaligned AGI, with its significantly greater
                    potential, could be far more hazardous.
                </p>
            </Value>
        </div>

        <div className='center-v space-y-5'>
            <div className='space-y-5'>
                <h1 className='text-accent-600 uppercase tracking-[0.06rem] text-[0.85rem] pb-2'>So what are we doing here?</h1>
                <Value iconComponent={<span className='font-bold mr-2'>1.</span>}>
                    <p>We believe the development of <b>AGI is the most important technology</b> humans will ever create (and likely the last one too), and it is fundamental that it proceeds safely and correctly.</p>
                </Value>

                <Value iconComponent={<span className='font-bold mr-2'>2.</span>}>
                    <div className='space-y-2'>
                        <p>AGI Alignment, like the development of AGI itself, is a <b>challenging <i>technical</i> problem</b>.</p>
                        <p>While fields such as philosophy and politics are vital for validating and ensuring the adoption of solutions, alignment remains a technical issue requiring a technical approach.</p>
                    </div>
                </Value>

                <Value iconComponent={<span className='font-bold mr-2'>3.</span>}>
                    <div className='space-y-2'>
                        <p>Alignment is a <b>solvable problem, but also an urgent one</b>. </p>
                        <p>
                            Leading AI companies predict AGI by 2029, and we need to solve alignment beforehand since we won't get another chance afterward. We have one critical try to get it right—unlike a mere
                            segmentation fault, misaligned AGI could have catastrophic consequences.
                        </p>
                    </div>
                </Value>
            </div>
        </div>

    </div>
}

export default Values;