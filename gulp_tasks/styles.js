/**
* Build Styles
**/
gulp.task('styles', function() {
    gulp.src('src/scss/app.scss')
        .pipe(concat('app.scss'))
        .pipe(sass({ style: 'expanded' }))
        .on('error', notify.onError("Error: <%= error.message %>"))
        .pipe(gulp.dest('./dist/css'))
        .pipe(sassLint())
        // .pipe(sassLint.format())
        .pipe(sassLint.failOnError())
        .pipe(notify('Compiled SCSS (' + moment().format('MMM Do h:mm:ss A') + ')'))
});
