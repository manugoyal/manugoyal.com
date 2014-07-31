var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat'),
    del = require('del'),
    watch = require('gulp-watch'),
    argv = require('yargs');


// Removes the dist directory
gulp.task('clean', function(cb) {
    del(['dist'], cb);
});

// Copies the needed vendor files to various locations
gulp.task('vendor', function() {
    // We move the bootstrap directory to its own location inside vendor
    gulp.src('bower_components/bootstrap/dist/**/*')
        .pipe(gulp.dest('dist/vendor/bootstrap'));
    // We also move the jquery directory
    gulp.src('bower_components/jquery/*')
        .pipe(gulp.dest('dist/vendor/jquery'));
});

// Copies the app directories to their corresponding dist directories
gulp.task('app', function() {
    gulp.src(['app/*.html', 'app/*.js', 'app/*.css'])
        .pipe(gulp.dest('dist'));
    gulp.src('app/images/*')
        .pipe(gulp.dest('dist/images'));
    gulp.src('app/content/*')
        .pipe(gulp.dest('dist/content'));
});

// A task which combines all the tasks which copy everything to the dist
// directory
gulp.task('distify', ['vendor', 'app']);

gulp.task('watch', ['distify'], function() {
    gulp.watch('app/**/*', ['app']);
});

gulp.task('default', ['distify', 'watch']);
