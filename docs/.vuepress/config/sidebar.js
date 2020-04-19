//侧边栏
module.exports = {
    '/views/': [
        '',
        {
            title:'前端 Front-end',
            collapsable: true,
            children:[
                'front_end/01_静态页面开发心得',
            ]
        },
        {
            title:'后端 Back-end',
            collapsable: true,
            children:[]
        },
        {
            title:'Element-UI',
            collapsable: true,
            children:[
                'element-ui/01_组件el-scrollbar'
            ]
        },
        {
            title:'常见问题 Question',
            collapsable: true,
            children:[
                'question/01_vue页面缓存与304'
            ]
        },
        {
            title:'随记 Essay',
            collapsable: true,
            children:[
                'essay/07_前端开发之未来',
                'essay/06_有哪些知识，你知道后你的世界马上就不一样了',
                'essay/05_一次心情的失落',
                'essay/04_随记',
                'essay/03_前置耳机孔没有声音',
                'essay/02_NVIDIA显示设置不可用问题解决',
                'essay/01_lets_begin_blog',
            ]
        }

    ]
};
