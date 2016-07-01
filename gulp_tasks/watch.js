/**
* Watch task
**/
gulp.task('watch', function() {
    gulp.watch('src/images/**', ['imagemin'] );
    gulp.watch('src/scss/**', ['styles'] );
    gulp.watch('dist/css/app.css', ['minify-css'] );
    gulp.watch('src/js/*', ['scripts'] );
});
