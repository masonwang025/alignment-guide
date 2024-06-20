import React, { FC, ReactNode } from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';
import { useRouter } from 'next/router';
import TextWrapper from './src/components/global/TextWrapper';
import LinkWrapper from './src/components/global/LinkWrapper';
import Logo from './src/components/global/Logo';
import Footer from './src/components/global/Footer';

interface CustomDocsThemeConfig extends Omit<DocsThemeConfig, 'components'> {
    components?: {
        h1?: FC<{ children: ReactNode }>;
        h2?: FC<{ children: ReactNode }>;
        h3?: FC<{ children: ReactNode }>;
        h4?: FC<{ children: ReactNode }>;
        h5?: FC<{ children: ReactNode }>;
        h6?: FC<{ children: ReactNode }>;
        p?: FC<{ children: ReactNode }>;
        a?: FC<{ children: ReactNode; href: string }>;
    };
}

const config: CustomDocsThemeConfig = {
    logo: Logo,
    docsRepositoryBase: 'https://github.com/masonwang025/alignment-guide/tree/main',
    footer: {
        component: Footer,
        text: Logo,
    },
    useNextSeoProps: () => {
        const router = useRouter();
        const title = 'AI Alignment Guide';
        const description = "Let's not end the world??"; // change this obviously...
        return {
            // home page should just say title instead of Introduction - title
            titleTemplate: router.pathname === '/' ? title : `%s – ${title}`,
            defaultTitle: title,
            description,
            openGraph: {
                title,
                description,
                images: [
                    {
                        url: '/opengraph-image.jpg',
                        width: 1200,
                        height: 600,
                        alt: 'AI Alignment Guide',
                    },
                ],
            },
            icons: [{ url: '/favicon.ico', type: 'image/x-icon' }],
        };
    },
    darkMode: false,
    nextThemes: { defaultTheme: 'light', forcedTheme: 'light' },
    primaryHue: 45,
    primarySaturation: 5,
    components: {
        // SEE GLOBALS.CSS FOR H1-H6 STYLING
        // h1: ({ children }) => <TextWrapper type='h1'>{children}</TextWrapper>,
        // h2: ({ children }) => <TextWrapper type='h2'>{children}</TextWrapper>,
        // h3: ({ children }) => <TextWrapper type='h3'>{children}</TextWrapper>,
        // h4: ({ children }) => <TextWrapper type='h4'>{children}</TextWrapper>,
        // h5: ({ children }) => <TextWrapper type='h5'>{children}</TextWrapper>,
        // h6: ({ children }) => <TextWrapper type='h6'>{children}</TextWrapper>,
        p: ({ children }) => <TextWrapper type='p'>{children}</TextWrapper>,
        a: ({ href, children }) => <LinkWrapper href={href}>{children}</LinkWrapper>,
    },
    toc: {
        backToTop: true,
    },
    gitTimestamp: null, // hide last updated time (idk just feels like things get outdated really quickly)
    // editLink: { component: null },
    // feedback: { content: null },
};

export default config;
