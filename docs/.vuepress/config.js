var getChildren = require('./sidebar');

module.exports = {
  title: 'Netlify CMS + VuePress',
  description: 'Netlify + VuePress',
  themeConfig: {
    sidebar: getChildren('./docs/guide/') 
  }
}