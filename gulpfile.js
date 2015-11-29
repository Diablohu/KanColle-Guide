// Include gulp
var gulp = require('gulp');

// Include Plugins
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var babel = require("gulp-babel");

gulp.task('default',[
	'KanColleGuides'
])








// v2

gulp.task('KanColleGuides-js', function(){
	return gulp.src([
			'./!sources/js/!.js',
			'./!sources/js/base.js',
			'./node_modules/kctip/dist/kctip.min.js'
		])
		.pipe(concat('js.js'))
		.pipe(babel({
			'highlightCode':	false,
			'comments':			false,
			'compact':			false,
			'ast':				false,
			"presets": 			[
					"es2015",
					"stage-0"
				],
			"plugins":			[
					"transform-minify-booleans"
				]
		}))
		//.pipe(uglify())
		.pipe(gulp.dest('./assets'))
})

gulp.task('KanColleGuides-css', function(){
	return gulp.src([
			'./!sources/css-global.less'
		])
		.pipe(less())
		.pipe(minifyCSS())
		.pipe(postcss([
			autoprefixer({
				'browsers': [
					'Android >= 2',
					'Chrome >= 20',
					'Firefox >= 20',
					'ie >= 11',
					'Edge >= 12',
					'iOS >= 5',
					'ChromeAndroid >= 20',
					'ExplorerMobile >= 11'
				]
			})
		]))
		.pipe(gulp.dest('./assets'))
})

gulp.task('KanColleGuides-watch', function(){
	gulp.watch(
			'./!sources/**/*.js',
			['KanColleGuides-js']
		)
	gulp.watch(
			'./!sources/**/*.less',
			['KanColleGuides-css']
		)
})

gulp.task('KanColleGuides',[
	'KanColleGuides-js',
	'KanColleGuides-css',
	'KanColleGuides-watch'
])
