const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compileSass() {
  return gulp.src('src/styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/styles/dist/css'));
}

function watch() {
  gulp.watch('src/styles/*.scss', compileSass);
}

exports.default = watch;