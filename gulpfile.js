var gulp = require('gulp');
var react = require('gulp-react');
var browserSync = require('browser-sync');

gulp.task('default', function () {
    return gulp.src('study/*.jsx')
        .pipe(react())
        .pipe(gulp.dest('dist'));
});

gulp.task('html', function(){

    return gulp.src('index.html')
        .pipe(gulp.dest('dist'));

});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('watch', ['html', 'default', 'browser-sync'], function(){

    gulp.watch("dist/*.js", ['js', browserSync.reload]);

});