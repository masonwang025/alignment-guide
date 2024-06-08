import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Cursor from '../components/global/Cursor';
import Section from '../components/home/Section';
import Footer from '../components/global/Footer';
import separator from '../assets/separator.svg';
import ChevronDown from '../assets/icons/chevron-down.svg';
import ParticlesBackground from '../components/home/ParticlesBackground';

export default function Index() {
    const [phraseComplete, setPhraseComplete] = useState(false);
    const [typingComplete, setTypingComplete] = useState(false);
    const [particlesVisible, setParticlesVisible] = useState(true);

    const handleScroll = (targetId) => {
        const targetElement = document.getElementById(targetId);
        targetElement?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleScrollEvent = () => {
        const section2 = document.getElementById('2');
        const section3 = document.getElementById('3');
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        if (section2 && section3) {
            const section2Top = section2.offsetTop;
            const section3Top = section3.offsetTop;

            if (scrollPosition >= section2Top) {
                setParticlesVisible(false);
            } else {
                setParticlesVisible(true);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScrollEvent);
        return () => {
            window.removeEventListener('scroll', handleScrollEvent);
        };
    }, []);

    return (
        <div className='custom-cursor'>
            <Cursor />
            <ParticlesBackground visible={particlesVisible} />
            <div className='snap-y snap-mandatory overflow-y-scroll w-screen h-[calc(100dvh)] scroll-smooth'>
                {/* ——————— SECTION 1 ——————— */}
                <Section id='1' className='space-between center-h'>
                    <div />
                    <div className='relative w-3/4 px-2 md:w-1/2 text-center mx-auto'>
                        <TypeAnimation sequence={['AI smarter than us will be our ', () => setPhraseComplete(true)]} cursor={false} speed={60} repeat={0} className='font-serif text-4xl sm:text-5xl' />
                        {phraseComplete && <TypeAnimation sequence={['last invention.', 500, () => setTypingComplete(true)]} cursor={false} speed={60} repeat={0} className='font-serif text-4xl sm:text-5xl italic' />}
                    </div>

                    {typingComplete ? (
                        <motion.div className='flex flex-col vertical center-h' onClick={() => handleScroll('2')} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: 'easeInOut' }}>
                            <p className='text-lg pb-5 text-center'>So what?</p>
                            <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, repeatType: 'loop', duration: 1 }} style={{ zIndex: 5 }}>
                                <Image src={ChevronDown} alt='chevron-down' width={30} height={30} />
                            </motion.div>
                        </motion.div>
                    ) : (
                        <div className='h-32 md:h-16' />
                    )}
                </Section>

                {/* ——————— SECTION 2 ——————— */}
                <Section id='2' className='space-between vertical center-h'>
                    <div />
                    <div className='flex flex-col vertical center-h space-y-10'>
                        <h1 className='font-serif md:text-3xl text-2xl text-center'>
                            As AI nears and surpasses human-level intelligence, the fate of our species will depend on its actions. <span className='italic'>So we must figure out how to align it with humanity’s goals.</span>
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
                <Section id='3' className='space-between' fullWidth fullHeight>
                    <div />
                    <div className='lg:px-24 md:px-36 sm:px-32 px-16 sm:space-y-20 space-y-10 pt-5'>
                        <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-0 items-center'>
                            <div className='p-4 sm:space-y-2 space-y-0 text-center font-serif xl:text-3xl border-b border-gray-300 lg:border-r'>
                                <span className='italic text-accent-600 text-lg sm:text-xl lg:text-2xl'>01</span>
                                <div className='sm:text-2xl md:text-3xl text-xl'>Why alignment urgently matters</div>
                            </div>
                            <div className='p-4 sm:space-y-2 space-y-0 text-center font-serif xl:text-3xl border-b border-gray-300'>
                                <span className='italic text-accent-600 text-lg sm:text-xl lg:text-2xl'>02</span>
                                <div className='sm:text-2xl md:text-3xl text-xl'>Overview of current efforts</div>
                            </div>
                            <div className='p-4 sm:space-y-2 space-y-0 text-center font-serif xl:text-3xl border-b border-gray-300 lg:border-b-0 lg:border-r'>
                                <span className='italic text-accent-600 text-lg sm:text-xl lg:text-2xl'>03</span>
                                <div className='sm:text-2xl md:text-3xl text-xl'>Research directions</div>
                            </div>
                            <div className='p-4 sm:space-y-2 space-y-0 text-center font-serif xl:text-3xl'>
                                <span className='italic text-accent-600 text-lg sm:text-xl lg:text-2xl'>04</span>
                                <div className='sm:text-2xl md:text-3xl text-xl'>Next steps</div>
                            </div>
                        </div>

                        <div className='flex flex-col items-center justify-center space-y-5'>
                            <Link href='/introduction'>
                                <p className='bg-background text-black py-2 px-4 rounded-lg shadow-[0.625rem_0.625rem_0.875rem_0_rgb(225,226,228),-0.5rem_-0.5rem_1.125rem_0_rgb(255,255,255)] transition-shadow duration-200 hover:shadow-[inset_0.2rem_0.2rem_0.5rem_rgb(225,226,228),inset_-0.2rem_-0.2rem_0.5rem_rgb(255,255,255)]'>
                                    Open Guide
                                </p>
                            </Link>
                        </div>

                        {/* <div className='border border-gray-300 rounded-lg p-5 spacing-y-5'>
                            <h1 className='font-serif md:text-4xl text-3xl text-center mb-2'>Introduction</h1>
                            <p className='text-lg text-center pb-5'>What we think you should read or do first</p>
                            <div className='flex flex-col items-center justify-center space-y-5'>
                                <Link href='/introduction'>
                                    <p className='bg-background text-black py-2 px-4 rounded-lg shadow-[0.625rem_0.625rem_0.875rem_0_rgb(225,226,228),-0.5rem_-0.5rem_1.125rem_0_rgb(255,255,255)] transition-shadow duration-200 hover:shadow-[inset_0.2rem_0.2rem_0.5rem_rgb(225,226,228),inset_-0.2rem_-0.2rem_0.5rem_rgb(255,255,255)]'>
                                        Open Guide
                                    </p>
                                </Link>
                            </div>
                        </div> */}
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
