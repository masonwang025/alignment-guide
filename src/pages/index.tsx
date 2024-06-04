import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Cursor from '../components/global/Cursor';
import Section from '../components/home/Section';
import Footer from '../components/global/Footer';
import separator from '../assets/separator.svg';
import ChevronDown from '../assets/icons/chevron-down.svg';
import { XMarkIcon } from '@heroicons/react/24/solid';

export default function Index() {
    const [typingComplete, setTypingComplete] = useState(false);

    const handleScroll = (targetId) => {
        const targetElement = document.getElementById(targetId);
        targetElement?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className='custom-cursor'>
            <Cursor />
            <div className='snap-y snap-mandatory overflow-y-scroll w-screen h-screen scroll-smooth'>
                {/* ——————— SECTION 1 ——————— */}
                <Section id='1' className='space-between' fitWindow>
                    <div />
                    <TypeAnimation sequence={['AI smarter than us will be our last invention.', 500, () => setTypingComplete(true)]} cursor={false} speed={60} repeat={0} className='font-serif sm:text-5xl text-4xl text-center' />
                    {typingComplete ? (
                        <motion.div className='flex flex-col vertical center-h' onClick={() => handleScroll('2')} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: 'easeInOut' }}>
                            <p className='text-lg pb-5 text-center'>So what?</p>
                            <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, repeatType: 'loop', duration: 1 }} style={{ zIndex: 5 }}>
                                <Image src={ChevronDown} alt='chevron-down' width={30} height={30} />
                            </motion.div>
                        </motion.div>
                    ) : (
                        <div style={{ height: 65 }} />
                    )}
                </Section>

                {/* ——————— SECTION 2 ——————— */}
                <Section id='2' className='space-between vertical center-h' fitWindow>
                    <div />
                    <div className='flex flex-col vertical center-h space-y-10'>
                        <h1 className='font-serif md:text-3xl text-2xl text-center'>
                            As AI nears and surpasses human-level intelligence, the fate of our species will depend on its actions. So we must figure out how to align it with humanity’s goals.
                        </h1>
                        <Image src={separator} alt='seperator' width={20} height={20} />
                        <h1 className='font-serif md:text-3xl text-2xl text-center'>Most people don’t know what AI alignment is, why it’s important, or what you can do to contribute.</h1>
                    </div>

                    <div className='flex flex-col vertical center-h' onClick={() => handleScroll('3')}>
                        <p className='text-lg pb-5 text-center'>Here's a guide to get started</p>
                        <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, repeatType: 'loop', duration: 1 }} style={{ zIndex: 5 }}>
                            <Image src={ChevronDown} alt='chevron-down' width={30} height={30} />
                        </motion.div>
                    </div>
                </Section>

                {/* ——————— SECTION 3 ——————— */}
                <Section id='3' className='space-y-20'>
                    <div>
                        <h1 className='font-serif md:text-5xl text-4xl'>What's this all about?</h1>
                        <div className='pt-12 space-y-7'>
                            <p>
                                When you think of misaligned AI, you might think of the Terminator movies, but superintelligence doesn't need to be 'evil' to pose a threat. By default, all intelligent agents—including humans—aim
                                to preserve themselves, acquire resources, and improve themselves. This means AI smarter than us could inadvertently endanger humanity.
                            </p>
                            <p>
                                To be clear, there is <span className='font-bold'>no guarantee</span> that AI will care about the same exact values we do.
                            </p>
                            <p>Think of when the atomic bomb was first being created: before we ever needed to worry about misuse, there was the very real possibility that we could accidentally set the world on fire.</p>
                            <p>We’re on the path to build something much harder to contain than nuclear weapons—superintelligent AI. Alignment is making sure we don’t accidentally end the world.</p>
                        </div>
                    </div>

                    <div className='center-v space-y-5'>
                        <h1 className='text-accent-600 uppercase tracking-[0.06rem] text-[0.85rem] pb-2'>To be clear, we are NOT:</h1>
                        <div className='flex'>
                            <span className='font-bold mr-5'>
                                <XMarkIcon className='size-6' />
                            </span>
                            <div className='space-y-2'>
                                <p>We do NOT advocate for slowing or pausing AI capabilities research.</p>
                                <p>
                                    The best alignment methods have stemmed from advancements in AI capabilities—a trend we expect to continue. Moreover, pausing AI at this stage is completely unrealistic and undesirable due to
                                    overwhelming economic and technological incentives.
                                </p>
                            </div>
                        </div>
                        <div className='flex'>
                            <span className='font-bold mr-5'>
                                <XMarkIcon className='size-6' />
                            </span>
                            <div className='space-y-2'>
                                <p>We are NOT suggesting that a misaligned AGI must possess consciousness or even seem as intelligent as a cat or dog.</p>
                                <p>
                                    It doesn't need to harbor any animosity towards humans to pose a threat. Just as autonomous drones can be dangerous without consciousness, a misaligned AGI, with its significantly greater
                                    potential, could be far more hazardous.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='center-v space-y-5'>
                        <div className='space-y-5'>
                            <h1 className='text-accent-600 uppercase tracking-[0.06rem] text-[0.85rem] pb-2'>So what are we doing here?</h1>
                            <div className='flex'>
                                <span className='font-bold mr-2'>1.</span>
                                <p>We believe the development of AGI is the most important technology humans will ever create (and likely the last one too), and it is fundamental that it proceeds safely and correctly.</p>
                            </div>
                            <div className='flex'>
                                <span className='font-bold mr-2'>2.</span>
                                <div className='space-y-2'>
                                    <p>AGI Alignment, like the development of AGI itself, is a challenging technical problem.</p>
                                    <p>While fields such as philosophy and politics are vital for validating and ensuring the adoption of solutions, alignment remains a technical issue requiring a technical approach.</p>
                                </div>
                            </div>
                            <div className='flex'>
                                <span className='font-bold mr-2'>3.</span>
                                <div className='space-y-2'>
                                    <p>Alignment is a solvable problem, but also an urgent one. </p>
                                    <p>
                                        Leading AI companies predict AGI by 2029, and we need to solve alignment beforehand since we won't get another chance afterward. We have one critical try to get it right—unlike a mere
                                        segmentation fault, misaligned AGI could have catastrophic consequences.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h1 className='font-serif text-5xl text-center'>Quickstart</h1>
                        <p className='text-lg text-center pb-5'>What we think you should read or do first</p>
                        <div className='flex flex-col items-center justify-center space-y-5'>
                            <Link href='/quickstart'>
                                <p className='bg-background text-black py-2 px-4 rounded-lg shadow-[0.625rem_0.625rem_0.875rem_0_rgb(225,226,228),-0.5rem_-0.5rem_1.125rem_0_rgb(255,255,255)] transition-shadow duration-200 hover:shadow-[inset_0.2rem_0.2rem_0.5rem_rgb(225,226,228),inset_-0.2rem_-0.2rem_0.5rem_rgb(255,255,255)]'>
                                    Open Guide
                                </p>
                            </Link>
                        </div>
                    </div>
                    <Footer />
                </Section>
            </div>
            <style jsx global>{`
                .custom-cursor {
                    cursor: none;
                }
                html {
                    scroll-behavior: smooth;
                }
            `}</style>
        </div>
    );
}
