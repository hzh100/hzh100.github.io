import initPage from './initPage'
module.exports = {
  base: "/",
  title: "blog",
  description: "vue、js、nodejs等等的学习记录",

  // 主题配置
  themeConfig: {
    //   头部导航
    nav: [
      // { text: "每周学习整理", link: "/vue/vue-router实现原理" },
      { text: "gitee", link: "https://gitee.com/hzh100" },
    ],
    //   侧边导航
    sidebar: {
      '/': [
        {
          text: ' 介绍',
          children: [
            { text: '介绍', link: '/'},
          ],
        },
        ...initPage()
      ],
    },
  },
};
