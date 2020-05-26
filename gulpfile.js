const cp = require('child_process')
const imageResize = require('gulp-image-resize')
const uglify = require('gulp-uglify-es').default
const cleanCSS = require('gulp-clean-css')
/*
const runSequence = require('run-sequence')
runSequence.options.ignoreUndefinedTasks = true
const composer = require('gulp-uglify/composer')
const uglifyes = require('uglify-es')
const minify = composer(uglifyes, console)
*/  
const gulp = require('gulp')
//const browserSync = require('browser-sync')


function resize_images () {
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
}


function uglifyJS () {
  return gulp.src('_site/assets/js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('_site/assets/js'))
}

function minifyCss () {
  return gulp.src('_site/assets/main.css')
  .pipe(cleanCSS({compability: 'ie8'}))
  .pipe(gulp.dest('_site/assets'))
}

/*
function build (done) {
  runSequence('resize_images', 'jekyll_build', 'uglify', done)
}
*/

function jekyllBuild(done) {
  //browserSync.notify(messages.jekyllBuild)
  return cp.spawn('jekyll', ['build', '--config', '_config.yml,_config_dev.yml'], {stdio: 'inherit'}).on('close', done)
}

exports.minify = gulp.parallel(uglifyJS, minifyCss)
exports.resize = resize_images
exports.build = gulp.series(gulp.parallel(uglifyJS, minifyCss, resize_images), jekyllBuild)
