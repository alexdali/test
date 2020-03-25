const gulp = require('gulp');
const plumber = require('gulp-plumber');
const htmlValidator = require('gulp-w3c-html-validator');
const htmlmin = require('gulp-htmlmin');

module.exports = function html() {
  return gulp.src('src/pages/**/*.html')
    .pipe(plumber())
    .pipe(htmlValidator())
    .pipe(htmlmin({removeComments:true}))
    .pipe(gulp.dest('build'))
}