/**
 * @author kanyim
 * @create 2017-10-30
 * css压缩gulp-minify-css
 * 找到对应less文件gulp-sourcemaps
 *
 */
var gulp = require('gulp');
var less = require('gulp-less');
var cssmin = require('gulp-minify-css');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');

/*less生成css*/
gulp.task('Kless',function(){
  console.log("Kless");
  gulp.src('less/*.less')
  .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
  .pipe(sourcemaps.init())
  .pipe(less())
  .pipe(cssmin())
  .pipe(cssmin({compatibility: 'ie7'}))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('css'));
});

/*监听*/
gulp.task('Kwatch', function () {
    gulp.watch('less/**/*.less', ['Kless']); //当所有less文件发生改变时，调用Kless任务
    console.log("START")
});

