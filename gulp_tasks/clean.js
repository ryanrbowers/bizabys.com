/**
 * Run Before Production
 */
gulp.task('clean', function() {
    return del(['css']);
});
