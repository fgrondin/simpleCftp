'use strict'

var gulp = require('gulp'),
    war = require('gulp-war'),
    zip = require('gulp-zip');

gulp.task('war', function () {
    gulp.src(["app/**", "*.md"])
        .pipe(war({
            welcome: 'index.html',
            displayName: 'Grunt WAR',
        }))
        .pipe(zip('myApp.war'))
        .pipe(gulp.dest("./dist"));

});