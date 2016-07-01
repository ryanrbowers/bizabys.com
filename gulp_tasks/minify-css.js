/**
* Minify CSS
**/
gulp.task('minify-css', function() {
    return gulp.src('./dist/css/app.css')
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css'))
});
