import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Logo from '../components/global/Logo';
import Section from '../components/home/Section';
import Cursor from '../components/global/Cursor';
import Header from '../components/home/Header';
import separator from '../assets/separator.svg';
// import spring from '../assets/home/spring.png';
import graphic from '../assets/magnificent-grants-image.png';
import ChevronDown from '../assets/icons/chevron-down.svg';

export default function Index() {
    return (
        <div className='custom-cursor'>
            <Cursor />
            <div className='snap-y snap-mandatory overflow-y-scroll w-screen h-screen scroll-smooth'>
                <Section id='1' fullWidth className='center-v'>
                    <h1 className='font-serif lg:text-5xl text-4xl text-center'>AI smarter than us will be our last invention.</h1>
                    {/* <p className='text-center pt-10 text-gray-500'>** i'm thinking of a cool hero i pwomise **</p> */}
                    {/* <motion.svg width='100%' height='auto' viewBox='0 0 1317 616' fill='none' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='xMidYMid meet' className='absolute top-0 w-full'>
                    <motion.path
                        d='M0 579.112C46.8645 579.112 84.8557 595.628 84.8557 616C84.8557 570.286 157.061 533.228 246.131 533.228C335.201 533.228 407.407 570.286 407.407 616C407.407 541.964 490.276 481.945 592.501 481.945C694.726 481.945 777.596 541.964 777.596 616C777.596 485.318 861.576 399.38 965.171 399.38C1068.77 399.38 1152.75 485.318 1152.75 616C1152.75 289.047 1226.29 1 1317 1'
                        stroke='#222222'
                        strokeWidth='1'
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 3, ease: 'easeInOut' }}
                    />
                </motion.svg> */}
                    {/* <Image src={graphic} alt='graphic' width={0} height={0} sizes='100vw' className='flex py-5' /> */}
                </Section>
                <Section id='2' className='justify-between vertical center-h'>
                    <div />
                    <div className='flex flex-col vertical center-h space-y-10'>
                        <h1 className='font-serif lg:text-3xl text-2xl'>
                            As AI nears and surpasses human-level intelligence, the fate of our species will depend on its actions. So we must figure out how to align it with humanity’s goals.
                        </h1>
                        <Image src={separator} alt='seperator' width={20} height={20} />
                        <h1 className='font-serif lg:text-3xl text-2xl text-center'>Most people don’t know what AI alignment is, why it’s important, or what you can do to contribute.</h1>
                    </div>

                    <a href='#3' className='flex flex-col vertical center-h'>
                        <p className='text-lg pb-5 text-center'>Here's a guide to get started</p>
                        <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, repeatType: 'loop', duration: 1 }} style={{ zIndex: 5 }}>
                            <Image src={ChevronDown} alt='chevron-down' width={30} height={30} />
                        </motion.div>
                    </a>
                </Section>
                <Section id='3' className='center-v'>
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
