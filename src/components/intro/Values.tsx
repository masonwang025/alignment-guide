import Value from './Value';

function Values() {
    return (
        <div className='space-y-5'>
            <Value iconComponent={<span className='font-serif italic text-2xl mr-2'>01</span>}>
                <p>
                    We believe the development of <b>AGI is the most important technology</b> humans will ever create (and likely the last one too), and it is fundamental that it proceeds safely and correctly.
                </p>
            </Value>

            <Value iconComponent={<span className='font-serif italic text-2xl mr-2'>02</span>}>
                <div className='space-y-2'>
                    <p>
                        AGI Alignment, like the development of AGI itself, is a{' '}
                        <b>
                            challenging <i>technical</i> problem
                        </b>
                        .
                    </p>
                    <p>While fields such as philosophy and politics are vital for validating and ensuring the adoption of solutions, alignment remains a technical issue requiring a technical approach.</p>
                </div>
            </Value>

            <Value iconComponent={<span className='font-serif italic text-2xl mr-2'>03</span>}>
                <div className='space-y-2'>
                    <p>
                        Alignment is a <b>solvable problem, but also an urgent one</b>.{' '}
                    </p>
                    <p>
                        Leading AI companies predict AGI by 2029, and we need to solve alignment beforehand since we won't get another chance afterward. We have one critical try to get it right—unlike a mere segmentation fault,
                        misaligned AGI could have catastrophic consequences.
                    </p>
                </div>
            </Value>
        </div>
    );
}

export default Values;
