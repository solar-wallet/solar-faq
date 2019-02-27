var getChildren = require('./sidebar');

module.exports = {
  title: 'Solar Wallet Guide',
  description: 'Guide for Solar wallet, the easiest account management for Stellar',
  themeConfig: {
    logo: '/images/solar-wallet-logo.svg',
    sidebar: getChildren('./docs/guide/'),
    sidebarDepth: 2
  }
}