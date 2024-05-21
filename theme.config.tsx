import React, { FC, ReactNode } from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';
import TextHeaderWrapper from './src/components/Global/TextHeaderWrapper';
import LinkWrapper from './src/components/Global/LinkWrapper';

interface CustomDocsThemeConfig extends Omit<DocsThemeConfig, 'components'> {
    components: {
        h1: FC<{ children: ReactNode }>;
        h2: FC<{ children: ReactNode }>;
        h3: FC<{ children: ReactNode }>;
        h4: FC<{ children: ReactNode }>;
        h5: FC<{ children: ReactNode }>;
        h6: FC<{ children: ReactNode }>;
        a: FC<{ children: ReactNode; href: string }>;
    };
}

const config: CustomDocsThemeConfig = {
    logo: <span>Alignment Guide</span>,
    docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
    footer: {
        text: 'Nextra Docs Template',
    },
    darkMode: false,
    nextThemes: { defaultTheme: 'light', forcedTheme: 'light' },
    primaryHue: 45,
    primarySaturation: 2.3,
    components: {
        h1: ({ children }) => <TextHeaderWrapper headingType='h1'>{children}</TextHeaderWrapper>,
        h2: ({ children }) => <TextHeaderWrapper headingType='h2'>{children}</TextHeaderWrapper>,
        h3: ({ children }) => <TextHeaderWrapper headingType='h3'>{children}</TextHeaderWrapper>,
        h4: ({ children }) => <TextHeaderWrapper headingType='h4'>{children}</TextHeaderWrapper>,
        h5: ({ children }) => <TextHeaderWrapper headingType='h5'>{children}</TextHeaderWrapper>,
        h6: ({ children }) => <TextHeaderWrapper headingType='h6'>{children}</TextHeaderWrapper>,
        a: ({ href, children }) => <LinkWrapper href={href}>{children}</LinkWrapper>,
    },
};

export default config;
