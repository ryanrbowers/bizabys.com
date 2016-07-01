/**
* gulp default task. Just run gulp
*/
gulp.task('default', ['clean', 'imagemin'] ,function() {
    gulp.start('scripts');
    gulp.start('styles');
    gulp.start('minify-css');
});
