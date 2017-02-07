//app.js中用到了es7 的语法,所以要写一个入口文件;

//将ES7 转变成浏览器能识别的ES6,要在更低版本的的环境下执行,将ES6转成ES5;

// 用Babel转码时，需要指定presets和plugins。presets是规则，
// 我们stage-3规则，stage-3规则是ES7的stage 0~3的第3阶段规则。
// plugins可以指定插件来定制转码过程，一个preset就包含了一组指定的plugin。
// 为了让async语法能正常执行，我们只需要指定ES7的stage-3规则。
var register = require('babel-core/register');

register({
    presets: ['stage-3']
});

require('./app.js');
// 为什么先加载babel-core/register，再加载app.js，魔法就会生效？原因是第
// 一个require()是Node正常加载babel-core/register的过程，然后，Babel会用自
// 己的require()替换掉Node的require()，随后用require()加载的所有代码均会被Babel自动转码后再加载。
