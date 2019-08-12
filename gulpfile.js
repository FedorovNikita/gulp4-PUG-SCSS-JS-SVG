'use strict'

global.$ = {
    gulp : require('gulp'),
    pug : require('gulp-pug'),
    sass : require('gulp-sass'),
    plumber : require('gulp-plumber'),
    sourcemaps : require('gulp-sourcemaps'),
    notify : require('gulp-notify'),
    autoprefixer : require('gulp-autoprefixer'),
    concat : require('gulp-concat'),
    csso : require('gulp-csso'),
    mozjpeg: require('imagemin-mozjpeg'),
    imagemin: require('gulp-imagemin'),
    cheerio: require('gulp-cheerio'),
    replace: require('gulp-replace'),
    svgSprite: require('gulp-svg-sprite'),
    svgmin: require('gulp-svgmin'),
    rename: require('gulp-rename'),
    del: require('del'),
    browserSync : require('browser-sync').create(),
    

    path: {
        tasks: require('./gulp/config/tasks.js')
    }
};

$.path.tasks.forEach(function (taskPath) {
    require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
    'clean',
    $.gulp.parallel('pug', 'sass:dev', 'scripts:lib', 'scripts', 'img:dev', 'svg', 'fonts'),
    $.gulp.parallel('watch', 'serve')
));

$.gulp.task('build', $.gulp.series(
    'clean',
    $.gulp.parallel('pug', 'sass:build', 'scripts:lib', 'scripts', 'img:build', 'svg', 'fonts'),
    $.gulp.parallel('watch', 'serve')
));