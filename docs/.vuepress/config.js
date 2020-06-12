module.exports = {
    title: 'form-design-tcd',  // 设置网站标题
    description : 'formDesign',
    base : '/',
    themeConfig : {
        nav: [
            { text: '文档', link: '/document/', target:'_self', rel:'' },
            { text: 'GitHub', link:'https://github.com/zimudehub/FormDesignTCD', target: "_blank", rel: ''}
        ],
        sidebar:[
            ['/document/start','开始'],
            ['/document/components','组件'],
            ['/document/talk','讨论']
        ],
        sidebarDepth : 2,
        displayAllHeaders: true ,
    }
};
