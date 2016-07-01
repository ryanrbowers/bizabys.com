/**
* JS Linter
**/
gulp.task('jslint', function() {
  return gulp.src('./src/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default', { verbose: true }))
});
