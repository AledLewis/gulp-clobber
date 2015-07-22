var gulp = require('gulp'),
    watch = require('gulp-watch'),
    clobber = require('gulp-clobber');

gulp.task('clobber', function() {
  gulp.watch('./Fox5Modules/**/*.xml').on('change', clobber);
  gulp.watch('./FoxModules/**/*.xml').on('change', clobber);
  gulp.watch('./ReportDefinitions/**').on('change', clobber);
});
