
gulp = require('gulp')
sass = require('gulp-sass')
uglify = require('gulp-uglify')
rename = require('gulp-rename')
notify = require("gulp-notify")
concat = require('gulp-concat')
moment = require('moment')
cleanCSS = require('gulp-clean-css')
sassLint = require('gulp-sass-lint')
jshint = require('gulp-jshint')
del = require('del')
sourcemaps = require('gulp-sourcemaps')
devip = require('dev-ip')
imagemin = require('gulp-imagemin')
pngquant = require('imagemin-pngquant')
browserify = require('browserify')
browserSync = require('browser-sync').create()
reload = browserSync.reload;


/**
* Pull in all tasks from gulp_tasks dir. Modulaizes tasks for cleaner code
* @NOTE If you want you can get more specific. View docs here https://www.npmjs.com/package/require-dir
*/
require('require-dir')('./gulp_tasks');
