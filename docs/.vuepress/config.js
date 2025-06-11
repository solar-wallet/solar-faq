import { defineUserConfig } from 'vuepress';
import { viteBundler } from '@vuepress/bundler-vite';
import { defaultTheme } from '@vuepress/theme-default';
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';
import { searchPlugin } from '@vuepress/plugin-search';
import getChildren from './sidebar.js';

export default defineUserConfig({
  dest: 'dist',
  title: 'Solar Wallet Guide',
  description: 'Guide for Solar wallet, easy account management for Stellar',
  head: [
    ['link', { rel: 'apple-touch-icon', sizes:'180x180', href:'https://solarwallet.io/apple-touch-icon.png'}],
    ['link', { rel: 'icon', type:'image/png', sizes:'32x32', href:'https://solarwallet.io/favicon-32x32.png'}],
    ['link', { rel: 'icon', type:'image/png', sizes:'16x16', href:'https://solarwallet.io/favicon-16x16.png'}],
    ['link', { rel: 'manifest', href:'https://solarwallet.io/site.webmanifest'}],
    ['link', { rel: 'mask-icon', href:'https://solarwallet.io/safari-pinned-tab.svg', color:'#5bbad5'}],
    ['meta', {name:'image', content:'https://solarwallet.io/img/solar-facebook.png'}],
    ['meta', {itemprop:'name', content:'Solar Wallet'}],
    ['meta', {itemprop:'image', content:'https://solarwallet.io/img/solar-facebook.png'}],
    ['meta', {content:'Solar Wallet', property:'og:title'}],
    ['meta', {content:'Solar Wallet', property:'og:site_name'}],
    ['meta', {name:'og:type', content:'website'}],
    ['meta', {content:'https://solarwallet.io', property:'og:url'}],
    ['meta', {content:'summary_large_image', name:'twitter:card'}],
    ['meta', {content:'@solar_wallet', name:'twitter:site'}],
    ['meta', {content:'Fast and business-friendly Stellar wallet', name:'twitter:title'}],
    ['meta', {content:'Meet Solar wallet, the easiest way to use Stellar. Go to https://solarwallet.io to get started.', name:'twitter:description'}],
    ['meta', {content:'https://solarwallet.io/img/solar-twitter.png', name:'twitter:image:src'}]
  ],
  bundler: viteBundler(),
  theme: defaultTheme({
    logo: '/images/solar-wallet-logo.svg',
    sidebar: getChildren('docs/guide'),
    sidebarDepth: 2,
    nav: [
      { text: 'Solar', link: 'https://solarwallet.io' },
    ],
    contributors: false,
    lastUpdated: true,
    lastUpdatedText: 'Last Updated',
    colorModeSwitch: true,
    colorMode: 'light',
  }),
  plugins: [
    registerComponentsPlugin({
      // options
    }),
    searchPlugin({
      // options
    }),
  ],
});