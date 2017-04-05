require.config({
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
    },

    //模块化css
    map: {
        '*': {
            'css': '../bower_components/require-css/css'
        }
    },
    shim: {
        'init': ['css!./style.css']
    }
})
