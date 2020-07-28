const gulp = require("gulp");
const rename = require("gulp-rename");
const minify = require("gulp-babel-minify");
const csso = require("gulp-csso");

gulp.task("minify-js", minifyJS);
gulp.task("minify-css", minifyCSS);

gulp.task("watch-js", function() {
  return gulp.watch(["./dist/index.js"], minifyJS);
});

gulp.task("watch-css", function() {
  return gulp.watch(["./dist/style.css"], minifyCSS);
});

gulp.task("watch", function() {
  return gulp.watch(["./dist/index.js", "./dist/style.css"], gulp.series(minifyJS, minifyCSS));
});

function minifyJS() {
  return gulp.src("./dist/index.js")
  .pipe(minify({mangle: {keepClassName: true}}))
  .pipe(rename("index.min.js"))
  .pipe(gulp.dest("./dist"));
}

function minifyCSS() {
  return gulp.src("./dist/style.css")
        .pipe(csso({restructure: false}))
        .pipe(rename("style.min.css"))
        .pipe(gulp.dest("./dist"));
}