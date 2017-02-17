var jquery = require('jquery');
exports.$ = jquery;
console.log(module);
//Module是一个对象;
// module.id 模块的识别符，通常是带有绝对路径的模块文件名。
// module.filename 模块的文件名，带有绝对路径。
// module.loaded 返回一个布尔值，表示模块是否已经完成加载。
// module.parent 返回一个对象，表示调用该模块的模块。
// module.children 返回一个数组，表示该模块要用到的其他模块。
// module.exports 表示模块对外输出的值。

// Module {
//   id: '.',
//   exports: { '$': [Function] },
//   parent: null,
//   filename: 'E:\\MyAllDemos\\NodeJS\\01.常用模块\\Module\\01.module.js',
//   loaded: false,
//   children:
//    [ Module {
//        id: 'E:\\MyAllDemos\\NodeJS\\node_modules\\.3.1.1@jquery\\dist\\jquery.js
// ',
//        exports: [Function],
//        parent: [Circular],
//        filename: 'E:\\MyAllDemos\\NodeJS\\node_modules\\.3.1.1@jquery\\dist\\jqu
// ery.js',
//        loaded: true,
//        children: [],
//        paths: [Object] } ],
//   paths:
//    [ 'E:\\MyAllDemos\\NodeJS\\01.常用模块\\Module\\node_modules',
//      'E:\\MyAllDemos\\NodeJS\\01.常用模块\\node_modules',
//      'E:\\MyAllDemos\\NodeJS\\node_modules',
//      'E:\\MyAllDemos\\node_modules',
//      'E:\\node_modules' ] }
