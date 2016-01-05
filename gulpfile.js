var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var concat = require('gulp-concat');
var sass = require('gulp-sass');

gulp.task('default', ['styles', 'scripts'], function() {
  nodemon({
    script: './bin/www'
  });
});

gulp.task('styles', function() {
  return gulp.src('./sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/stylesheets'));
});

gulp.task('scripts', function() {
  return gulp.src('./charts/*.js')
    .pipe(concat('charts.js'))
    .pipe(gulp.dest('./public/scripts'));
});

gulp.watch('./**/*.scss', ['styles']);
gulp.watch('./charts/*.js', ['scripts']);
