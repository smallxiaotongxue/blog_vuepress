module.exports = {
    title: 'smallxiao',
    description: 'Hello, my friend!',
    head: [
        ['link', { rel: 'icon', href: `/favicon.ico`}]
    ],
    themeConfig: {
        // 添加导航栏
        nav: [
            { text: '主页', link: '/' },
            { text: 'Guide', link: '/guide/' },
            {
                text: 'Languages',
                items: [
                    { text: 'Chinese', link: '/language/chinese' },
                    { text: 'English', link: '/language/english' }
                ]
            },
            { text: 'External', link: 'https://www.baidu.com' },
        ],
        // 为以下路由添加侧边栏
        sidebarDepth: 2,
        sidebar: [
            {
                title: 'Guide',
                collapsable: true,
                children: ['/guide/']
            }
        ]
    },

    dest: './docs/.vuepress/dist',
    ga: '',
    evergreen: true,
};
