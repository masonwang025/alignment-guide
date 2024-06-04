import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Cursor from '../components/global/Cursor';
import Section from '../components/home/Section';
import separator from '../assets/separator.svg';
import graphic from '../assets/magnificent-grants-image.png';
import ChevronDown from '../assets/icons/chevron-down.svg';

export default function Index() {
    const [typingComplete, setTypingComplete] = useState(false);

    useEffect(() => {
        const handleScroll = (event) => {
            event.preventDefault();
            const targetId = event.currentTarget.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);
            targetElement?.scrollIntoView({ behavior: 'smooth' });
        };

        const scrollLinks = document.querySelectorAll('.scroll-link');
        scrollLinks.forEach((link) => {
            link.addEventListener('click', handleScroll);
        });

        return () => {
            scrollLinks.forEach((link) => {
                link.removeEventListener('click', handleScroll);
            });
        };
    }, []);

    return (
        <div className='custom-cursor'>
            <Cursor />
            <div className='snap-y snap-mandatory overflow-y-scroll w-screen h-screen scroll-smooth'>
                {/* ——————— SECTION 1 ——————— */}
                <Section id='1' className='space-between'>
                    <div />
                    <TypeAnimation sequence={['AI smarter than us will be our last invention.', 500, () => setTypingComplete(true)]} cursor={false} speed={60} repeat={0} className='font-serif sm:text-5xl text-4xl text-center' />
                    {typingComplete ? (
                        <motion.div className='scroll-link flex flex-col vertical center-h' data-target='2' initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: 'easeInOut' }}>
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
                <Section id='2' className='space-between vertical center-h'>
                    <div />
                    <div className='flex flex-col vertical center-h space-y-10'>
                        <h1 className='font-serif lg:text-3xl text-2xl'>
                            As AI nears and surpasses human-level intelligence, the fate of our species will depend on its actions. So we must figure out how to align it with humanity’s goals.
                        </h1>
                        <Image src={separator} alt='seperator' width={20} height={20} />
                        <h1 className='font-serif lg:text-3xl text-2xl text-center'>Most people don’t know what AI alignment is, why it’s important, or what you can do to contribute.</h1>
                    </div>

                    <div className='scroll-link flex flex-col vertical center-h' data-target='3'>
                        <p className='text-lg pb-5 text-center'>Here's a guide to get started</p>
                        <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, repeatType: 'loop', duration: 1 }} style={{ zIndex: 5 }}>
                            <Image src={ChevronDown} alt='chevron-down' width={30} height={30} />
                        </motion.div>
                    </div>
                </Section>

                {/* ——————— SECTION 3 ——————— */}
                <Section id='3' className='space-between'>
                    <div />
                    <div>
                        <h1 className='font-serif lg:text-5xl text-4xl'>What's this all about?</h1>
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
                    <div className='scroll-link flex flex-col vertical center-h' data-target='4'>
                        <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, repeatType: 'loop', duration: 1 }} style={{ zIndex: 5 }}>
                            <Image src={ChevronDown} alt='chevron-down' width={30} height={30} />
                        </motion.div>
                    </div>
                </Section>

                {/* ——————— SECTION 4 ——————— */}
                <Section id='4' className='center-v'>
                    <h1 className='font-serif text-5xl pb-5 text-center'>Blah blah</h1>
                    <div className='flex flex-col items-center justify-center space-y-5'>
                        <Link href='/quickstart'>
                            <p className='bg-background text-black py-2 px-4 rounded-lg shadow-[0.625rem_0.625rem_0.875rem_0_rgb(225,226,228),-0.5rem_-0.5rem_1.125rem_0_rgb(255,255,255)] transition-shadow duration-200 hover:shadow-[inset_0.2rem_0.2rem_0.5rem_rgb(225,226,228),inset_-0.2rem_-0.2rem_0.5rem_rgb(255,255,255)]'>
                                Open Guide
                            </p>
                        </Link>
                    </div>
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
