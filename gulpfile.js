var gulp = require('gulp');
//lazy load plugins
var $ = require('gulp-load-plugins')({
    lazy: true
});
var config = require('./gulp.config')();
var del = require('del');

gulp.task('vet', function () {
    log('Analyzing files with JSHint and JSCS');
    return gulp
        .src(config.alljs)
        .pipe($.print())
        .pipe($.jscs())
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish', {
            verbose: true
        }))
        .pipe($.jshint.reporter('fail'));
});

gulp.task('clean-code', function () {
    log('Cleaning temporary directory');

    var files = config.temp + '/**/*.*';
    del(files);
});

gulp.task('templatecache', ['clean-code'], function () {
    log('Creating AngularJS $templateCache');
    return gulp.src(config.htmlTemplates)
        .pipe($.minifyHtml({
            empty: true
        }))
        .pipe($.angularTemplatecache(config.templateCache.file, config.templateCache.options))
        .pipe(gulp.dest(config.temp));
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