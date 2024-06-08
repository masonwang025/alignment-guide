// components/ParticlesBackground.js
import React, { useEffect, useState, useMemo } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadFull } from 'tsparticles';
import { type Container, type ISourceOptions } from '@tsparticles/engine';

const ParticlesBackground = () => {
    const [init, setInit] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = async (container?: Container): Promise<void> => {
        console.log(container);
    };

    const options: ISourceOptions = useMemo(
        () => ({
            fullScreen: {
                enable: true,
                zIndex: -1,
            },
            particles: {
                number: {
                    value: 250,
                    density: { enable: true, value_area: 800 },
                },
                color: { value: ['#FFFFFF', '#DEDEDE'] },
                shape: { type: 'square' },
                opacity: { value: 1 },
                size: { value: 5 },
                move: {
                    enable: true,
                    speed: 1,
                    direction: 'none',
                    random: false,
                    straight: false,
                    outModes: 'out',
                },
            },
            interactivity: {
                events: {
                    onClick: { enable: true, mode: 'push' },
                    onHover: { enable: true, mode: 'repulse' },
                },
                modes: {
                    push: { quantity: 7 },
                    repulse: { distance: 150, duration: 0.4 },
                },
            },
            retina_detect: true,
        }),
        []
    );

    if (init) {
        return <Particles id='tsparticles' particlesLoaded={particlesLoaded} options={options} />;
    }
    return <></>;
};

export default ParticlesBackground;
