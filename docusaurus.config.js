// @ts-check
// Note: type checking is optional but helpful with JSDoc comments

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Reverse Bid Docs',
  tagline: 'High Level Documentation for Reverse Bid',
  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',          // v3 supported
  onBrokenMarkdownLinks: 'warn',   // v3 supported (deprecated warning will appear, harmless)
  favicon: 'img/favicon.ico',
  organizationName: 'kothagundlaramya',
  projectName: 'reverse-bid-docs-docusaurus',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: 'docs',
          editUrl:
            'https://github.com/kothagundlaramya/reverse-bid-docs-docusaurus/edit/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      require.resolve('@cmfcmf/docusaurus-search-local'),
      {
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
        language: 'en',
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Reverse Bid Docs',
        logo: {
          alt: 'Reverse Bid Logo',
          src: 'img/logo.svg',
        },
        items: [
          { to: '/docs/intro', label: 'Docs', position: 'left' },
          {
            href: 'https://github.com/kothagundlaramya/reverse-bid-docs-docusaurus',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'search', // Local search bar
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [{ label: 'Introduction', to: '/docs/intro' }],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/kothagundlaramya/reverse-bid-docs-docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Reverse Bid Docs.`,
      },
    }),
};

module.exports = config;
