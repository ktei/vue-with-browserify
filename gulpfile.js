var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var vueify = require('vueify');

gulp.task('default', function() {
  return browserify('./scripts/main.js', {debug: true})
    .transform(vueify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('sourcemap'))
    .pipe(gulp.dest('dist'));
});