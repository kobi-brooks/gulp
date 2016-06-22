/**
 * Created by Kobi on 19/06/2016.
 */

var gulp = require('gulp');
var slGulp = require('sl-gulp');
var mocha = require('gulp-mocha');

gulp.task('default', function() {
});

//gulp.task('test', function () {
//    return gulp.src(['test/*.js'])
//        .pipe(mocha())
//});

gulp.task('pre-test', function () {
    return gulp.src(['lib/**/*.js'])
        // Covering files
        .pipe(slGulp())
        // Build Scanner
        .pipe(slGulp.build())
        // Force `require` to return covered files
        .pipe(slGulp.hookRequire())
});

gulp.task('test', ['pre-test'], function () {
    return gulp.src(['test/*.js'])
        .pipe(mocha({reporter: 'sl-node-mocha'}))
        .pipe(mocha())
        // Creating the reports after tests ran
        .pipe(slGulp.writeReports())
});