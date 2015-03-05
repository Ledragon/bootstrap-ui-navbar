var gulp = require('gulp');
//lazy load plugins
var $ = require('gulp-load-plugins')({
    lazy: true
});

/*// jshint+jscs: javascript linting
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
//gulp-util: utilities, such as logging
var util = require('gulp-util');
//gulp-print: print things
var gulpprint = require('gulp-print');*/

gulp.task('vet', function () {
    log('Analyzing files with JSHint and JSCS');
    return gulp
        .src([
            './src/**/*.js',
            './*.js'
        ])
        .pipe($.print())
        .pipe($.jscs())
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish', {
            verbose: true
        }))
        .pipe($.jshint.reporter('fail'));
});

//////////////////////////////////////////////////////
function log(message) {
    if (typeof (message) === 'object') {
        for (var item in message) {
            if (message.hasOwnProperty(item)) {
                writeLogMessage(message[item]);
            }
        }
    } else {
        writeLogMessage(message);
    }
}

function writeLogMessage(message) {
    $.util.log($.util.colors.white.bgBlue(message));

}