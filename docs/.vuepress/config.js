var nav = require('./config/nav');
var sidebar = require('./config/sidebar');

module.exports = {
    title: 'smallxiao',
    description: '一点浩然气，千里快哉风~',
    head: [
        ['link', {rel: 'icon', href: `/favicon.ico`}],
        ['meta', {name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no'}],
        [
            "script", {
                "language": "javascript",
                "type": "text/javascript",
                "src": "https://cdn.staticfile.org/jquery/1.7.2/jquery.min.js"
            }
        ],
    ],
    theme: 'reco',
    themeConfig: {
        type: 'blog',
        nav: nav,// 添加导航栏
        logo: '/avatar.jpg', //导航栏头像
        authorAvatar: '/avatar.jpg', //首页右侧头像
        // 搜索设置
        search: true,
        searchMaxSuggestions: 10,
        // sidebar: 'auto',// 自动形成侧边导航
        sidebar: sidebar,
        sidebarDepth: 1,
        blogConfig: {
            category: {
                location: 2,     // 在导航栏菜单中所占的位置，默认2
                text: '分类' // 默认文案 “分类”
            },
            tag: {
                location: 3,     // 在导航栏菜单中所占的位置，默认3
                text: '标签'     // 默认文案 “标签”
            }
        },
        // 最后更新时间
        lastUpdated: 'Last Updated', // string | boolean
        // 作者
        author: 'smallxiao',
        // 项目开始时间
        startYear: '2020',
        //git地址
        repo: 'smallxiaotongxue/blog_vuepress',
        // 如果你的文档不在仓库的根部
        docsDir: 'docs',
        // 可选，默认为 master
        //docsBranch: 'vuepress',
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页！',
        //评论
        valineConfig: {
            appId: 'i0ps50vdlJW7crR281GLRaUo-9Nh9j0Va',
            appKey: 'RV6nwnOUG3JGzxOcjGwba3WB',
            placeholder: '填写邮箱可以收到回复提醒哦!',
            notify: true, // 邮件提醒
            verify: true, // 验证码
            recordIP: true
        },
    },
    markdown: {
        lineNumbers: true
    },
    plugins: [
        require('./plugins/musicPlayer/index')
    ],
    dest: './docs/.vuepress/dist',
    evergreen: false,
};
