import React, { FC, ReactNode } from 'react';
import Image from 'next/image';
import { DocsThemeConfig } from 'nextra-theme-docs';
import TextWrapper from './src/components/Global/TextWrapper';
import LinkWrapper from './src/components/Global/LinkWrapper';
import logoIcon from './src/assets/logo.svg';

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

const logo = (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 12 }}>
        <Image src={logoIcon} alt='logo' width={20} height={20} />
        <p>Alignment Guide</p>
    </div>
);

const config: CustomDocsThemeConfig = {
    logo: logo,
    docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
    footer: {
        text: 'Nextra Docs Template',
    },
    darkMode: false,
    nextThemes: { defaultTheme: 'light', forcedTheme: 'light' },
    primaryHue: 45,
    primarySaturation: 2.3,
    components: {
        h1: ({ children }) => <TextWrapper type='h1'>{children}</TextWrapper>,
        h2: ({ children }) => <TextWrapper type='h2'>{children}</TextWrapper>,
        h3: ({ children }) => <TextWrapper type='h3'>{children}</TextWrapper>,
        h4: ({ children }) => <TextWrapper type='h4'>{children}</TextWrapper>,
        h5: ({ children }) => <TextWrapper type='h5'>{children}</TextWrapper>,
        h6: ({ children }) => <TextWrapper type='h6'>{children}</TextWrapper>,
        // p: ({ children }) => <TextWrapper type='p'>{children}</TextWrapper>,
        a: ({ href, children }) => <LinkWrapper href={href}>{children}</LinkWrapper>,
    },
    // hide last updated time (idk just feels like things get outdated really quickly)
    gitTimestamp: false,
};

export default config;
