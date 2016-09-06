var gulp = require('gulp');
var screeps = require('gulp-screeps');
var creds = require('./account-credentials.js');

function pushCode() {
    return gulp.src(['main.js', 'modules/*.js'])
               .pipe(screeps(creds))
               ;
};

gulp.task('default', ['live']);
gulp.task('screeps', pushCode);

// update screeps live code
gulp.task('live', function() {
    gulp.watch([
        '**/*.js',
        '!gulpfile.js',
        '!node_modules/**/*.js'
    ], ['screeps']);
});
