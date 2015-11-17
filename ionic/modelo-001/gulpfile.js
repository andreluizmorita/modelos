var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');



var webserver = require('gulp-webserver');
var jshint = require("gulp-jshint");
var less = require('gulp-less');
var watch = require('gulp-watch');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var minifyCss = require('gulp-minify-css');
var concatCss = require('gulp-concat-css');

var paths = {
  sass: ['./scss/**/*.scss'],
  sass: ['./less/**/*.scss'],

};

gulp.task('server', function() {
    gulp.src('./')
        .pipe(webserver({
          livereload: true,
          directoryListing: true,
          open: true,
        }));
});

gulp.task("jshint", function() {
    gulp.src("./js/*.js")
        .pipe(jshint())
        .pipe(jshint.reporter("default"));
});


gulp.task('less', function() {
    gulp.src('./css/less/main.less')
        .pipe(less())
        .pipe(gulp.dest('./css'));
});

gulp.task('default', ['sass']);

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass({
      errLogToConsole: true
    }))
    // .pipe(gulp.dest('./www/css/'))
    // .pipe(minifyCss({
    //   keepSpecialComments: 0
    // }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});



