const gulp = require('gulp');

const imageMinify = require('./imageMinify');
const styles = require('./styles');
const script = require('./script');

const server = require('browser-sync').create();

module.exports = function serve(done) {
  //initial server of browser-sync
  server.init({
    server: 'build',
    notify: false,
    open: true,
    cors: true
  })
  //watchers
  gulp.watch('src/img/*/*.{gif,png,jpg,svg,webp}', gulp.series(imageMinify)).on('change', server.reload);
  gulp.watch('src/styles/**/*.scss', gulp.series(styles, done => gulp.src('build/css').pipe(server.stream()).on('end', done)));
  gulp.watch('src/js/**/*.js', gulp.series(script)).on('change', server.reload);
  gulp.watch('build/*.html').on('change', server.reload);

  return done();

}