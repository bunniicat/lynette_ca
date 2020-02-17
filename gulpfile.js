const gulp = require("gulp");
const { src, dest } = require("gulp");
const sass = require("gulp-sass");
const minifyCSS = require("gulp-csso");
const browserSync = require("browser-sync").create();
const min = require("gulp-imagemin");

function css(){
    return src("sass/**/*.scss")
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(dest("css"))
    .pipe(browserSync.stream())
}

function moveFile(){
    return src('./*.html')
    .pipe(gulp.dest("./dist"))
}

function watch(){
    browserSync.init({
        server: {
            baseDir: "./",
        }
    });
    gulp.watch("./sass/**/*.scss", css);
    gulp.watch("./*html", moveFile)
    gulp.watch("./*.html").on("change", browserSync.reload)
}

function mini(){
    return gulp.src("images/*")
    .pipe(min())
    .pipe(gulp.dest("dist/resized-images"))
}

exports.watch = watch;
exports.mini = mini;