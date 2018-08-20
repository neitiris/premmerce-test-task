const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');
const path = require('path');

/**
 * Deleting dist folder files
 */
gulp.task('clean', function(){
    return del('dist/**', {force:false});
});

/**
 * Convert scss to css and output it to src folder
 * For development only
 */
gulp.task('dev-css', function(){
    return gulp.src('./src/styles.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/'))
});

/**
 * Convert scss to css and output it to dist folder
 */
gulp.task('css', function(){
    return gulp.src('./src/styles.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/'))
});

/**
 * Copy assets folder to dist
 */
gulp.task('other', function (){
    return gulp.src(path.join('./src/assets/*'))
        .pipe(gulp.dest(path.join('./dist/assets')));
});

/**
 * Copy index.html to dist
 */
gulp.task('html', function (){
    return gulp.src('./src/index.html')
        .pipe(gulp.dest('./dist/'));
});

/**
 * Build task that clean dist folder and invoke build-dist task
 */
gulp.task('build', [ 'clean' ], function () {
    gulp.start('build-dist');
});

/**
 * Prepare and build project
 */
gulp.task('build-dist', ['html', 'other', 'css']);
