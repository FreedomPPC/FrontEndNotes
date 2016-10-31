//编写任务
//1.引入gulp  gulp只是充当任务执行和文件输出的功能
var gulp=require('gulp');
//把jsx -->js,require---->浏览器可以识别的内容 browserify在做
//2.引入browserify
var browserify=require('browserify');
//3.文件流处理插件
var source=require('vinyl-source-stream');
//4.将jsx---js 
var reactify=require('reactify');

gulp.task('merge',function(){
	return browserify('js/ReactComponent.js')//jsx----
	.transform(reactify)//jsx----->js reactify
	.bundle()//将入口文件依赖的文件 全部读入 通过bundle合并
	.pipe(source('app.js'))//将合并后的文件起名 app.js
	.pipe(gulp.dest('app'));
});

