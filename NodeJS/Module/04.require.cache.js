//node中,加载同一个模块.第二次加载时,直接从缓存中取出该模块的module.exports属性
//所有缓存都保存在require.cache之中,如果想删除模块的缓存,

//删除指定模块的缓存,
delete require.cache[moduleName];

//删除所有模块的缓存,
Object.keys(require,cache).forEach(function(key){
    delete require.cache[key];
});

// 注意，缓存是根据绝对路径识别模块的，如果同样的模块名，
// 但是保存在不同的路径，require命令还是会重新加载该模块。
