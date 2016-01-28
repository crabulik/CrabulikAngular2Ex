/// <binding AfterBuild='moveToLibs, moveToTs' Clean='cleanLibs' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/


var gulp = require('gulp'),
    gulpRimraf = require("gulp-rimraf");

var paths = {
    npmSrc: "./node_modules/",
    libTarget: "./wwwroot/libs/",
    tsSrc:  "./scripts/",
    tsTarget: "./wwwroot/scripts/"
};

var libsToMove = [
   paths.npmSrc + '/es6-shim/es6-shim.min.js',
   paths.npmSrc + '/angular2/bundles/angular2-polyfills.js',
   paths.npmSrc + '/systemjs/dist/system.src.js',
   paths.npmSrc + '/systemjs/dist/system-polyfills.js',
   paths.npmSrc + '/rxjs/bundles/Rx.js',
   paths.npmSrc + '/angular2/bundles/angular2.dev.js'
];

var tssToMove = [
    paths.tsSrc + "app.component.ts",
    paths.tsSrc + "boot.ts"

];
gulp.task('moveToLibs', function () {
    return gulp.src(libsToMove)
            .pipe(gulp.dest(paths.libTarget));
});

gulp.task('moveToTs', function () {
    return gulp.src(tssToMove)
            .pipe(gulp.dest(paths.tsTarget));
});

gulp.task('cleanLibs', function() {
    return gulp.src(paths.libTarget + "*.*", { read: false })
        .pipe(gulpRimraf({ force: true }));
});