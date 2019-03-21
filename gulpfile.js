var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var imageMin = require('gulp-imagemin');


gulp.task('image',function(){
    gulp.src('app/image/*.*')
        .pipe(imageMin({progressive: true}))
        .pipe(gulp.dest('dist/images'))
})
// gulp.task('html', function () {
//     var options = {
//         collapseWhitespace: true,
//         collapseBooleanAttributes: true,
//         removeComments: true,
//         removeEmptyAttributes: true,
//         removeScriptTypeAttributes: true,
//         removeStyleLinkTypeAttributes: true,
//         minifyJS: true,
//         minifyCSS: true
//     };
//     gulp.src('app/**/*.html')
//         .pipe(htmlmin(options))
//         .pipe(gulp.dest('dest/'));
//     gulp.src('app/image/*.*')
//         .pipe(imageMin({ progressive: true }))
//         .pipe(gulp.dest('dist/image'))
// });
// gulp.task('image',function(){
//     gulp.src('app/image/*.*')
//         .pipe(imageMin({progressive: true}))
//         .pipe(gulp.dest('dist/image'))
// })