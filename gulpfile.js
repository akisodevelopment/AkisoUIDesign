var {src, dest, series, parallel, watch} = require('gulp');

// Requires the gulp-sass plugin
var sass = require('gulp-sass');

var browserSync = require('browser-sync').create();

function style() {
    return src('app/scss/*.+(scss|sass)')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('app/css'))
    .pipe(browserSync.stream());
}

function watches() {
    browserSync.init({
        server: {
            baseDir: 'app'
        }  
    });
    watch('app/scss/*.+(scss|sass)',style);
    watch("*.html").on('change', browserSync.reload);
}

exports.style = style;
exports.watches = watches;
exports.default = series(style, watches);