// include the required packages. 
var gulp       = require('gulp');
var stylus     = require('gulp-stylus');
var fs         = require("fs");
var browserify = require("browserify");
var babelify   = require("babelify");
var watch      = require('gulp-watch');

// Get stylus .styl file and render 
gulp.task('stylus', function () {
    gulp.src('./css/chromestagram.styl')
        .pipe(stylus())
        .pipe(gulp.dest('./dist'));
});

gulp.task('bundler', function () {
    browserify("./js/index.js", { debug: true })
        .transform(babelify)
        .bundle()
        .on("error", function (err) { console.log("Error : " + err.message); })
        .pipe(fs.createWriteStream("./dist/popup.js"));
});

gulp.task('compile-stylus', ['stylus']);
gulp.task('compile-ext', ['bundler','stylus']);

gulp.task('watch-stylus', function () {
    runStylus();
    watch('./css/**/*.styl', function () {
        runStylus();
    });
});

function runStylus() {
    gulp.src('./css/chromestagram.styl')
        .pipe(stylus())
        .pipe(gulp.dest('./dist'));

    console.log('complied stylus');
};

gulp.task('watch-js', function () {
    runBundle();
    watch('./js/**/*.js', function () {
        runBundle();
    });
});

function runBundle() { 
    browserify("./js/index.js", { debug: true })
        .transform(babelify)
        .bundle()
        .on("error", function (err) { console.log("Error : " + err.message); })
        .pipe(fs.createWriteStream("./dist/chromestagram.js"));

    console.log('complied js');
};

gulp.task('watch-all', ['watch-stylus', 'watch-js']);
