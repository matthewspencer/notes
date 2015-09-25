var gulp = require('gulp');
var watch = require('gulp-watch');

var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');

var paths = {
  styles: {
    src: 'assets/sass/site.scss',
    watch: [
      'assets/sass/site.scss',
      'assets/sass/**/*.scss'
    ]
  }
};

gulp.task('sass', function () {
  gulp.src(paths.styles.src)
    .pipe(sass({
      includePaths: [
        './bower_components/bootstrap-sass-official/assets/stylesheets/'
      ]
    }))
    .pipe(autoprefixer({
      browsers: ['> 5%'],
      cascade: false
    }))
    .pipe(gulp.dest('assets'));
});

gulp.task('watch', function () {
  gulp.watch(paths.styles.watch, ['sass']);
});

gulp.task('default', ['sass', 'watch']);
