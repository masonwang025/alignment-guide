import React, { useState, useEffect, useRef, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Cursor from '../components/global/Cursor';
import Section from '../components/home/Section';
import Footer from '../components/global/Footer';
import separator from '../assets/separator.svg';
import ChevronDown from '../assets/icons/chevron-down.svg';
import ParticlesContainer from '../components/home/particles/ParticlesContainer';
import Button from '../components/global/Button';

const useSectionObserver = (setParticlesVisible) => {
	const sectionRefs = useRef<(HTMLElement | null)[]>([]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const sectionId = entry.target.id;
						if (sectionId === '1') {
							setParticlesVisible(true);
						} else {
							setParticlesVisible(false);
						}
					}
				});
			},
			{
				threshold: 0.6,
			}
		);

		sectionRefs.current.forEach((ref) => {
			if (ref) observer.observe(ref);
		});

		return () => {
			sectionRefs.current.forEach((ref) => {
				if (ref) observer.unobserve(ref);
			});
		};
	}, [setParticlesVisible]);

	return sectionRefs;
};

export default function Index() {
	const [phraseComplete, setPhraseComplete] = useState(false);
	const [typingComplete, setTypingComplete] = useState(false);
	const [particlesVisible, setParticlesVisible] = useState(true);

	const sectionRefs = useSectionObserver(setParticlesVisible);

	const handleScroll = (targetId) => {
		const targetElement = document.getElementById(targetId);
		targetElement?.scrollIntoView({ behavior: 'smooth' });
	};

	const particlesMemo = useMemo(() => <ParticlesContainer particlesVisible={particlesVisible} />, [particlesVisible]);

	return (
		<div className='custom-cursor'>
			<Cursor />
			{particlesMemo}
			<div className='snap-y snap-mandatory overflow-y-scroll w-screen h-[calc(100dvh)] scroll-smooth'>
				{/* ——————— SECTION 1 ——————— */}
				<Section
					id='1'
					ref={(el) => {
						sectionRefs.current[0] = el;
					}}
					className='space-between center-h'
				>
					<div />
					<div className='relative w-3/4 px-2 md:w-1/2 text-center mx-auto'>
						<TypeAnimation sequence={['AI smarter than us will be our ', () => setPhraseComplete(true)]} cursor={false} speed={60} repeat={0} className='font-serif text-4xl sm:text-5xl' />
						{phraseComplete && (
							<TypeAnimation sequence={['last invention.', 500, () => setTypingComplete(true)]} cursor={false} speed={60} repeat={0} className='font-serif text-4xl sm:text-5xl italic' />
						)}
					</div>

					<motion.div
						className={`flex flex-col vertical center-h ${typingComplete ? 'visible' : 'invisible'}`}
						initial={{ opacity: 0, y: 20 }}
						animate={typingComplete ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 1, ease: 'easeInOut' }}
						onClick={() => handleScroll('2')}
					>
						<p className='text-lg pb-5 text-center'>So what?</p>
						<motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, repeatType: 'loop', duration: 1 }} style={{ zIndex: 5 }}>
							<Image src={ChevronDown} alt='chevron-down' width={30} height={30} />
						</motion.div>
					</motion.div>
				</Section>

				{/* ——————— SECTION 2 ——————— */}
				<Section
					id='2'
					ref={(el) => {
						sectionRefs.current[1] = el;
					}}
					className='space-between vertical center-h'
				>
					<div />
					<div className='flex flex-col vertical center-h space-y-10 max-w-4xl'>
						<div className='font-serif sm:text-2xl md:text-3xl text-xl text-center vertical space-y-2'>
							<div>As AI nears and surpasses human-level intelligence, the fate of our species will depend on its actions. </div>
							<div>
								<span className='italic'>So we must figure out how to steer and control these systems.</span>
							</div>
						</div>
						<Image src={separator} alt='seperator' width={20} height={20} />
						<div className='font-serif sm:text-2xl md:text-3xl text-xl text-center'>Most people don’t know what AI alignment is, why it’s important, or what you can do to contribute.</div>
					</div>

					<div className='flex flex-col vertical center-h' onClick={() => handleScroll('3')}>
						<p className='md:text-lg pb-5 text-center'>Here's a guide to get started</p>
						<motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, repeatType: 'loop', duration: 1 }} style={{ zIndex: 5 }}>
							<Image src={ChevronDown} alt='chevron-down' width={30} height={30} />
						</motion.div>
					</div>
				</Section>

				{/* ——————— SECTION 3 ——————— */}
				<Section
					id='3'
					ref={(el) => {
						sectionRefs.current[2] = el;
					}}
					className='space-between'
					fullWidth
					fullHeight
				>
					<div />
					<div className='lg:px-24 md:px-36 sm:px-32 px-16 sm:space-y-20 space-y-10 pt-5'>
						<div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-0 items-center'>
							<div className='p-4 text-center font-serif xl:text-3xl border-b border-neutral-300 lg:border-r'>
								<Link href='/introduction' className='vertical sm:space-y-2 space-y-0'>
									<span className='italic text-primary-600 text-lg sm:text-xl lg:text-2xl'>01</span>
									<div className='sm:text-2xl md:text-3xl text-xl'>Why alignment urgently matters</div>
								</Link>
							</div>

							<div className='p-4 sm:space-y-2 space-y-0 text-center font-serif xl:text-3xl border-b border-neutral-300'>
								<Link href='/introduction' className='vertical sm:space-y-2 space-y-0'>
									<span className='italic text-primary-6000 text-lg sm:text-xl lg:text-2xl'>02</span>
									<div className='sm:text-2xl md:text-3xl text-xl'>Overview of current efforts</div>
								</Link>
							</div>
							<div className='p-4 sm:space-y-2 space-y-0 text-center font-serif xl:text-3xl border-b border-neutral-300 lg:border-b-0 lg:border-r'>
								<Link href='/introduction' className='vertical sm:space-y-2 space-y-0'>
									<span className='italic text-primary-600 text-lg sm:text-xl lg:text-2xl'>03</span>
									<div className='sm:text-2xl md:text-3xl text-xl'>Research directions</div>
								</Link>
							</div>

							<div className='p-4 sm:space-y-2 space-y-0 text-center font-serif xl:text-3xl'>
								<Link href='/introduction' className='vertical sm:space-y-2 space-y-0'>
									<span className='italic text-primary-600 text-lg sm:text-xl lg:text-2xl'>04</span>
									<div className='sm:text-2xl md:text-3xl text-xl'>Next steps</div>
								</Link>
							</div>
						</div>

						<div className='flex flex-col items-center justify-center space-y-5'>
							<Link href='/introduction'>
								<Button text={'Open Guide'} />
							</Link>
						</div>
					</div>
					<Footer />
				</Section>
			</div>
			<style jsx global>{`
				.custom-cursor,
				.custom-cursor * {
					cursor: none !important;
				}
				html {
					scroll-behavior: smooth;
				}
			`}</style>
		</div>
	);
}
