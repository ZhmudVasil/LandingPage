import dartSass from "sass"; /*сам компілятор*/
import gulpSass from "gulp-sass"; /*плагін gula для компілятора*/
import rename from "gulp-rename"; /*переіменовує файл на .min.css*/

import cleanCss from "gulp-clean-css"; /*зжимає css код*/
import autoprefixer from "gulp-autoprefixer"; /*добавляє префікси для кросбраузності*/
import groupCssMediaQueries from "gulp-group-css-media-queries"; /*групує медіа запити*/

const sass = gulpSass(dartSass);

export const scss = () => {
  return app.gulp
    .src(app.path.src.scss, {})
    .pipe(app.plugins.replace(/@img\//g, `../img/`))
    .pipe(
      sass({
        outputStyle: "expanded",
      })
    )
    .pipe(groupCssMediaQueries())
    .pipe(
      autoprefixer({
        grid: true,
        overrideBrowserslist: ["last 3 versions"],
        cascade: true,
      })
    )
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(cleanCss())
    .pipe(
      rename({
        extname: ".min.css",
      })
    )
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browsersync.stream());
};
