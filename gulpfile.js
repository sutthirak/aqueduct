var gulp = require('gulp');

gulp.task('default',['polymer','aq']);

gulp.task('aq', function() {
    return gulp.src('public/elements/*')
        .pipe(gulp.dest('dist/aq/'))
});

gulp.task('polymer', function() {
    return gulp.src('bower_components/*/*')
        .pipe(gulp.dest('dist'))
});