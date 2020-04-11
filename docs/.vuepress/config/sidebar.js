//侧边栏
module.exports = {
    '/views/': [
        '',
        {
            title:'前端 Front-end',
            collapsable: true,
            children:[
                'front-end/frist-commit'
            ]
        },
        {
            title:'后端 Back-end',
            collapsable: true,
            children:[]
        },
        {
            title:'随记 Essay',
            collapsable: true,
            children:[]
        }

    ]
};
