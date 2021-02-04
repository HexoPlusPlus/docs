module.exports = {
  title: 'HexoPlusPlus',
  description: 'A Powerful&Beautiful Hexo Dashboard',
  head: [
    ['link', { rel: 'icon', href: 'https://cdn.jsdelivr.net/gh/HexoPlusPlus/CDN@master/doc_img/icon.png' }],
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    sidebarDepth: 2,
    lastUpdated: '最后更新'
  },
  themeConfig: {
    nav:[
      { text: '快速上手', link: '/start/' },
      { text: '常见问题', link: '/faq/' },
      {
        text: '如何使用',
        items: [
          { text: '正常玩法', link: '/use/' },
          { text: '内置API',link: '/use/api'},
		  { text: '适配Hexo',link: '/use/hexoinit'}
        ]
      }        
    ]
  }
};
