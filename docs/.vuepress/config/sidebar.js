//侧边栏
module.exports = {
    '/views/': [
        '',
        {
            title:'前端 Front-end',
            collapsable: true,
            children:[

            ]
        },
        {
            title:'后端 Back-end',
            collapsable: true,
            children:[]
        },
        {
            title:'常见问题 Question',
            collapsable: true,
            children:[
                'question/vue页面缓存与304'
            ]
        },
        {
            title:'随记 Essay',
            collapsable: true,
            children:[
                'essay/lets_begin_blog',
                'essay/NVIDIA显示设置不可用问题解决',
                'essay/一次心情的失落',
                'essay/前置耳机孔没有声音',
                'essay/随记',
            ]
        }

    ]
};
