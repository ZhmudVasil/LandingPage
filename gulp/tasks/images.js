import imagemin from "gulp-imagemin";

export const images = () => {
  return app.gulp
    .src(app.path.src.images)
    .pipe(
      imagemin({
        progressive: true,
        svgoPlugins: [{ removeViewBox: false }],
        interkaced: true,
        optimizationLevel: 3 /*від 0 до 7*/,
      })
    )
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.plugins.browsersync.stream());
};
