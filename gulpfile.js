const gulp = require('gulp');

const serve = require('./gulp/tasks/serve')
const html = require('./gulp/tasks/html')
const styles = require('./gulp/tasks/styles')
const script = require('./gulp/tasks/script')
const imageMinify = require('./gulp/tasks/imageMinify')
const clean = require('./gulp/tasks/clean')

const dev = gulp.parallel(html, styles, script, imageMinify)

const build = gulp.series(clean, dev)

module.exports.start = gulp.series(build, serve)
module.exports.build = build