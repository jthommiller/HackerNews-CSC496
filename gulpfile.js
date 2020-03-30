//Modules
var gulp = require('gulp');

//Development Tasks
gulp.task('travis', ['build','testServerJS'], function() {
 process.exit(0);
});