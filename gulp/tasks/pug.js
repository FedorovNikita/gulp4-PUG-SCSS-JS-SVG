module.exports = function() {
    $.gulp.task("pug", function () {
        return $.gulp.src("src/pug/pages/*.pug")
            .pipe($.pug({
                // отменяем минификацию
                pretty:true
            }))
            .pipe($.gulp.dest("build"))
            .on('end', $.browserSync.reload);
    });
}