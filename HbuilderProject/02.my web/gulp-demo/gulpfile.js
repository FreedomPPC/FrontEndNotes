var gulp=require('gulp');
//1.压缩css插件
var mincss = require('gulp-minify-css');
//2.压缩js插件
var uglify = require('gulp-uglify');
//3.压缩img
var imagemin = require('gulp-imagemin');
//4.压缩react的jsx;
var jsx = require('gulp-react');
//当前gulp要执行的任务名称
//1.压缩css
gulp.task('mincss',function(){  //执行任务函数
    console.log("begin min css files");
      //执行压缩css的gulp插件gulp-minify-css
    return gulp.src('css/*.css')  //读取css所在地址
      .pipe(mincss())    //形成压缩版css变量样式
      .pipe(gulp.dest('min'))
});

//2.压缩js
gulp.task('minjs',function(){
	console.log("begin min js files");
	return gulp.src('js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('min'))
});

//3.压缩图片
gulp.task('minimage',function(){
	console.log("begin min image files");
	return gulp.src('img/*.*')//.src('img/*.png')
	.pipe(gulp.dest('min'))
});

//将react的jsx转换成原生js

gulp.task('minjsx',function(){
	console.log("begin min jsx files");
	return gulp.src('js/*.js')//.src('img/*.png')
	.pipe(jsx())
	.pipe(gulp.dest('min'))
});