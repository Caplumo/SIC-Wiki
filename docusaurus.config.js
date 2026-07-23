// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SIC Wiki',
  tagline: 'Space Flight Simulator 社区攻略站',
  favicon: 'img/top.png',
  future: {
    v4: true,
  },

  url: 'https://Caplumo.github.io',
  baseUrl: '/SIC-Wiki/',

  organizationName: 'Caplumo',
  projectName: 'SIC-Wiki',

  onBrokenLinks: 'throw',

  clientModules: ['./src/js/custom.js'],

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        path: 'navyguide',
        sidebarPath: './navysidebars.js',
        routeBasePath: 'navyguide',
        editUrl: undefined,
        sidebarItemsGenerator: require('./navySidebarGenerator.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'coop',
        path: 'cooperative',
        sidebarPath: './coopsidebars.js',
        routeBasePath: 'cooperative',
        editUrl: undefined,
      },
    ],
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en', 'zh'],
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
        highlightSearchTermsOnTargetPage: true,
        docsDir: ['navyguide', 'cooperative'],
        docsRouteBasePath: ['navyguide', 'cooperative'],
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'SIC主页',
        logo: {
          alt: 'SIC Wiki Logo',
          src: 'img/topic.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'navySidebar',
            position: 'left',
            label: '万航全典',
          },
          {
            type: 'docSidebar',
            docsPluginId: 'coop',
            sidebarId: 'coopSidebar',
            position: 'left',
            label: '合作社区',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} SIC Wiki. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
