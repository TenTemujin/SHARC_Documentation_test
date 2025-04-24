import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import BrowserOnly from '@docusaurus/BrowserOnly';

const config: Config = {
  title: ' SHARC ',
  tagline: 'A simulator for use in SHARing and Compatibility studies of radiocommunication systems.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://tentemujin.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl : /SHARC_Documentation_test/,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'TenTemujin', // Usually your GitHub org/user name.
  projectName: 'SHARC_Documentation_test', // Usually your repo name.
  deploymentBranch: 'test',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Radio-Spectrum SHARC',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'About',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'About',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'References',
          items: [
            {
              label: 'Anatel',
              href: 'https://www.gov.br/anatel/pt-br',
            },
            {
              label: 'ITU',
              href: 'https://www.itu.int/en/Pages/default.aspx',
            },
            {
              label: 'Radio-Spectrum',
              href: 'https://github.com/Radio-Spectrum',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Radio-Spectrum/SHARC',
            },
          ],
        },
      ],
      copyright: `Development of this software is being lead by the Telecommunications Regulatory Authority (TRA) of Brazil, ANATEL.\nCopyright © ${new Date().getFullYear()} Radio-Spectrum SHARC.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
