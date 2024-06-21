import React from 'react';
import { motion } from 'framer-motion';
import Particles from './Particles';

const ParticlesContainer = ({ particlesVisible }) => {
	return (
		<motion.div
			initial={{ scale: 0, opacity: 0 }}
			animate={{ scale: particlesVisible ? 1 : 0, opacity: particlesVisible ? 1 : 0 }}
			transition={{ duration: 1 }}
			style={{ position: 'absolute', width: '100%', height: '100%', zIndex: -1000 }}
		>
			<Particles />
		</motion.div>
	);
};

export default ParticlesContainer;
