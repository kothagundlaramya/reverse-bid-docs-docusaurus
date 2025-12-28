// sidebars.js

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  reverseBidSidebar: [
    // Top-level page
    'High-level-overview',

    // Overview category
    {
      type: 'category',
      label: 'Overview',
      collapsed: false,
      items: [
        'overview/introduction',
        'overview/problem-statement',
        'overview/key-concepts',
      ],
    },

    // How It Works category
    {
      type: 'category',
      label: 'How It Works',
      collapsed: false,
      items: [
        'how-it-works/end-to-end-flow',
        'how-it-works/bidding-lifecycle',
        'how-it-works/auto-assignment',
        'how-it-works/pricing-and-selection-logic',
      ],
    },

    // Interactions category
    {
      type: 'category',
      label: 'Interactions',
      collapsed: false,
      items: [
        'interactions/customer-experience',
        'interactions/captain-experience',
        'interactions/notifications',
      ],
    },

    // Operations category
    {
      type: 'category',
      label: 'Operations',
      collapsed: false,
      items: [
        'operations/retry-logic',
        'operations/timeouts-and-states',
        'operations/failure-handling',
      ],
    },

    // Edge Cases category
    {
      type: 'category',
      label: 'Edge Cases',
      collapsed: false,
      items: [
        'edge-cases/cancelled-orders',
        'edge-cases/no-bid-scenarios',
        'edge-cases/fraud-and-abuse-controls',
      ],
    },

    // Reference category
    {
      type: 'category',
      label: 'Reference',
      collapsed: true,
      items: [
        'reference/glossary',
        'reference/faq',
      ],
    },

    // Summary at the end
    'summary',
  ],
};

module.exports = sidebars;
