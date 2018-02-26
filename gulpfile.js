const gulp = require('gulp')
const cp = require('child_process')
// const gutil = require('gulp-util')
// const shell = require('gulp-shell')
const imageResize = require('gulp-image-resize')
// const del = require('del')
// const newer = require('gulp-newer')
const runSequence = require('run-sequence')
runSequence.options.ignoreUndefinedTasks = true

gulp.task('resize-images', function () {
  const frontEndImages = gulp.src('assets/images/uploads/*')

  return frontEndImages
    .pipe(imageResize({
      width: 1300,
      height: 975,
      crop: true,
      upscale: true
    }))
    .pipe(gulp.dest('assets/images/large'))
    .pipe(imageResize({
      width: 960,
      height: 720,
      crop: true,
      upscale: true
    }))
    .pipe(gulp.dest('assets/images/medium'))
    .pipe(imageResize({
      width: 300,
      height: 225,
      crop: true,
      upscale: true
    }))
    .pipe(gulp.dest('assets/images/small'))
})

gulp.task('jekyll-build', function (done) {
  return cp.spawn('bundle', ['exec', 'jekyll', 'build', '--config', '_config.yml,_config-translations.yml'], {stdio: 'inherit'}).on('close', done)
})

gulp.task('default', function (done) {
  runSequence('resize-images', 'jekyll-build', done)
})
