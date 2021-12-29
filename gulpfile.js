const gulp = require('gulp');
const uglify = require('gulp-uglify');
const pipeline = require('readable-stream').pipeline;
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const htmlMin = require('gulp-htmlmin')
const browserSync = require('browser-sync').create();
const watch = require('gulp-watch');

function html() {
  return gulp.src('./src/*.html')
  .pipe(htmlMin({
    collapseWhitespace: true,
    removeComments: true
  }))
  .pipe(gulp.dest('./dist'));
}

function css() {
  return gulp.src('./src/css/*.css')
    .pipe(concat('styles.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./dist/css'));
}

function js() {
  return pipeline(
    gulp.src('src/js/*.js'),
    uglify(),
    gulp.dest('dist/js')
  );
}

function img() {
  return pipeline(
    gulp.src('./src/img/*.*'),
    gulp.dest('./dist/img/')
  )
}

gulp.task('build', gulp.series(img, js, css, html));

gulp.task('server', function() {
  browserSync.init({
    server: {
      baseDir: "./dist"
    }
  });
});

gulp.task('watch', function() {
  watch('./src', gulp.parallel('build', browserSync.reload))
})

gulp.task('default', gulp.parallel('server', 'watch'));