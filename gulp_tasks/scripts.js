/**
* Build scripts
**/
gulp.task('scripts',['copy-js', 'jslint'], function() {
    gulp.src(['./src/js/app.js'])
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(concat('app.js'))
        .on('error', notify.onError("Error: <%= error.message %>"))
        .pipe(uglify())
        .on('error', notify.onError("Error: <%= error.message %>"))
        .pipe(rename({
            extname: ".min.js"
         }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/js'))
        .pipe(notify('Uglified JS (' + moment().format('MMM Do h:mm:ss A') + ')'))
});
