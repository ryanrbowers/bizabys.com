/**
* Copy over js vendor directory
**/
gulp.task('copy-js', function() {
    gulp.src('./node_modules/jquery/dist/jquery.js')
    .pipe(gulp.dest('./src/js/vendor'));

    //Uncomment if you want to use requirejs
    // gulp.src('./node_modules/requirejs/require.js')
    // .pipe(gulp.dest('./src/js/vendor'));
});
