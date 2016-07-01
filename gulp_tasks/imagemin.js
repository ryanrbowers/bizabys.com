/**
* Compress Images
**/
gulp.task('imagemin', function() {
    return gulp.src('./src/images/*')
        .pipe(imagemin({
        	progressive: true,
        	svgoPlugins: [{removeViewBox: false}],
        	use: [pngquant()]
        }))
        .pipe(gulp.dest('./dist/images'));
});
