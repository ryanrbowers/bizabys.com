/**
* Static Server
* @NOTE This is a set up for static sites. If you need something for Dynamic sites please visit https://www.browsersync.io/ and read the docs
**/
gulp.task('sync', ['styles'], function() {
    browserSync.init({
        server: "./",
        // open: 'external', // Uncomment if you set up xip.io and want to user an external host
        host: String(devip()), //set url in /etc/hosts to view on mobile. Make sure you are on the same network at your external IP when on device
        xip: true
    });
    gulp.start('watch');
    gulp.watch('src/js/**').on('change', reload);
    gulp.watch('dist/css/*.css').on('change', reload);
    gulp.watch("./*.html").on('change', reload);
});
