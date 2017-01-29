
var gulp = require('gulp');
var useref = require('gulp-useref');
var clean = require('gulp-clean');
var ghPages = require('gulp-gh-pages');
 
gulp.task('clean', function () {
  return gulp.src('dist', {read: false})
     .pipe(clean());
});

gulp.task('vendor', function () {
  return gulp.src('index.html')
     .pipe(useref())
     .pipe(gulp.dest('dist'));
});

gulp.task('images', function () {
  return gulp.src('images/**')
     .pipe(gulp.dest('dist/images'));
});

gulp.task('build', ['vendor', 'images']);

gulp.task('deploy', [ 'build' ], function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});

gulp.task('default', ['build']);
