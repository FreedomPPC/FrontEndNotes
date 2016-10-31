//编写任务
//1.引入gulp  gulp只是充当任务执行和文件输出的功能;
var gulp = require('gulp');
//吧jsx -->js,require---->浏览器可以识别的内容browserify在做;
//2.引入browserify
var browserify = require('browserify');
//3.文件流处理插件;
var source = require('vinyl-source-stream');
//4.将jsx---js
var reactify=require('reactify');

gulp.task('merge',function(){
	return browserify('js/Layout.js')//jsx ---后面没有标点
	.transform(reactify)//jsx--->js
	.bundle()//将入口文件中依赖的文件 全部读入 通过bundle合并;
	.pipe(source('app.js'))//将合并后的文件起名为app.js;
	.pipe(gulp.dest('app'));//创建一个名为app的文件夹,这样合并好的名为app.js的文件夹就放入了app文件夹中;
});
