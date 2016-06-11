'use strict';

const gulp = require('gulp');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');

const config = require('./config');

gulp.task('default', () => gulp.start('watch'));

gulp.task('watch', ['css'], () => gulp.watch('src/**', ['css']));

gulp.task('css', () => {
  gulp.src('src/main.pcss')
  .pipe(postcss([
    require('postcss-import'),
    require('postcss-nested'),
    require('postcss-external-vars')({ data: Object.assign({}, config.icons, config.fonts, config.colors, config.other) }),
    require('postcss-inline-svg'),
    require('postcss-svgo'),
    require('postcss-flexbugs-fixes'),
    require('autoprefixer')({ browsers: ['IE >= 10', 'last 3 versions', '> 3%'] })
  ], { parser: require('postcss-safe-parser') }))
  .pipe(rename('main.css'))
  .pipe(gulp.dest('dist/css/'))
  .pipe(cssnano())
  .pipe(rename('main.min.css'))
  .pipe(gulp.dest('dist/css/'));
});
