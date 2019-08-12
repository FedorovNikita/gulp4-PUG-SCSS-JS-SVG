module.exports = function() {
    $.gulp.task('sass:dev', function () {
        return $.gulp.src('src/static/scss/main.scss')
            .pipe($.plumber())
            .pipe($.sourcemaps.init())
            .pipe($.sass())
            .pipe($.autoprefixer({
                overrideBrowserslist:['last 3 version']
            }))
            .on('error', $.notify.onError({
                title: 'Style'
            }))
            .pipe($.concat('main.css'))
            .pipe($.sourcemaps.write())
            .pipe($.gulp.dest('build/css'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });

    $.gulp.task('sass:build', function () {
        return $.gulp.src('src/static/scss/main.scss')
            .pipe($.sass())
            .pipe($.autoprefixer({
                overrideBrowserslist:['last 3 version']
            }))
            .pipe($.concat('main.css'))
            .pipe($.csso())
            .pipe($.rename("main.min.css"))
            .pipe($.gulp.dest('build/css'))
    });
}