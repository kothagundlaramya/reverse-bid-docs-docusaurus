// sidebars.js

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  reverseBidSidebar: [
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
    {
      type: 'category',
      label: 'Reference',
      collapsed: true,
      items: [
        'reference/glossary',
        'reference/faq',
      ],
    },
    'summary',
  ],
};

module.exports = sidebars;
