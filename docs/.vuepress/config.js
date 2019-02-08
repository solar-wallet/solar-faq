var getChildren = require('./sidebar');

module.exports = {
  title: 'Solar Wallet Guide',
  description: 'Guide for Solar wallet, the easiest account management for Stellar',
  logo: '/images/solar-wallet-logo.svg',
  themeConfig: {
    sidebar: getChildren('./docs/guide/') 
  }
}