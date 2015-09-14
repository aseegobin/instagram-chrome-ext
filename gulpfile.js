// include the required packages. 
var gulp = require('gulp');
var stylus = require('gulp-stylus');
  
// Get stylus .styl file and render 
gulp.task('stylus', function () {
  gulp.src('./css/chromestagram.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./dist'));
});
 
gulp.task('compile-stylus', ['stylus']);
 