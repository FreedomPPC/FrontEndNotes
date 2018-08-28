const plats = {
    Carousel: {
        // 组件宽度
        w: {
            name: '宽度',
            value: 375,
            type: 'input'
        },

        // 组件高度
        h: {
            name: '高度',
            value: 120,
            type: 'input'
        },

        // 组件距离页面左边距离
        x: {
            name: '左边距',
            value: 0,
            type: 'input'
        },

        // 组件距离页面上边距离
        y: {
            name: '上边距',
            value: 0,
            type: 'input'
        },

        // 轮播图的
        banners: {
            name: '轮播图',
            type: 'combo',
            value: [
                {
                    link: {
                        name: '图片跳转链接',
                        value: '1',
                        type: 'input'
                    },
                    bg: {
                        name: '上传图片',
                        value: '2',
                        type: 'file'
                    }
                }
            ]
        }
    },
    button: {
        // 组件宽度
        w: {
            name: '宽度',
            value: 375,
            type: 'input'
        },

        // 组件高度
        h: {
            name: '高度',
            value: 120,
            type: 'input'
        },

        // 组件距离页面左边距离
        x: {
            name: '左边距',
            value: 0,
            type: 'input'
        },

        // 组件距离页面上边距离
        y: {
            name: '上边距',
            value: 0,
            type: 'input'
        }
    }
}
