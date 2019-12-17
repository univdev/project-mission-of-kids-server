const gulp = require('gulp');
const nodemon = require('gulp-nodemon');

gulp.task('watch', () => {
  return nodemon({
    exec: "node --inspect",
    script: 'app.js',
    ext: 'js',
    debug: true,
    delay: 1000,
    ignore: ['node_modules/'],
  });
});