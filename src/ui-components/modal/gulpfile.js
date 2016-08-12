'use strict'

let gulp = require('gulp');
let clean = require('gulp-clean');
let ts = require("gulp-typescript");

let project = ts.createProject("tsconfig.json");

gulp.task('clean-up', function () {
  return gulp.src('dist')
        .pipe(clean({force: true}));
});

gulp.task('build-ts', ['clean-up'], function () {
  return gulp.src('src/**/*.ts')
    .pipe(ts(project))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('dist-view', ['clean-up'], function () {
  return gulp.src('src/**/*.html')
    .pipe(gulp.dest('dist/template'));
});

gulp.task('demo-view', ['clean-up'], function () {
  return gulp.src('demo/**/*.html')
    .pipe(gulp.dest('dist/demo/html'));
});

gulp.task('demo-ts', ['clean-up'], function () {
  return gulp.src('demo/**/*.ts')
    .pipe(ts(project))
    .pipe(gulp.dest('dist/demo/js'));
});

gulp.task('default', ['build-ts', 'dist-view', 'demo-view', 'demo-ts']);
