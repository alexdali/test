const gulp = require('gulp');

const imageMinify = require('./imageMinify');
const styles = require('./styles');
const script = require('./script');
const html = require('./html');

const server = require('browser-sync').create();

module.exports = function serve(done) {
  //initial server browser-sync
  server.init({
    server: 'build',
    notify: false,
    open: true,
    cors: true
  })
  //watcher task image processing
  gulp.watch('src/img/*/*.{gif,png,jpg,svg,webp}', gulp.series(imageMinify)).on('change', server.reload);
  //watcher task html
  gulp.watch('src/pages/**/*.html', gulp.series(html)).on('change', server.reload);
  //watcher task style
  gulp.watch('src/styles/**/*.scss', gulp.series(styles, done => gulp.src('build/css').pipe(server.stream()).on('end', done)));
  //watcher task js
  gulp.watch('src/js/**/*.js', gulp.series(script)).on('change', server.reload);

  return done();

}