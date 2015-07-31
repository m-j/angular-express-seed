var gulp = require('gulp');
var Server = require('karma').Server;
var amdOptimize = require("amd-optimize");
var concat = require('gulp-concat');
//var testGulp = require('./test-gulp')
var requirejsConfig = require('./client/requirejsConfig')()

gulp.task('default', function() {
    // place code for your default task here
});

gulp.task('test', function (done) {
    new Server({
        configFile: __dirname + '/tests/client/unit/unit-karma.conf.js',
        singleRun: true
    }, done).start();
});

gulp.task('bundle:dist', function() {
    var js = gulp.src('client/main.js')
        .pipe(amdOptimize("main",
            {
                name: "main",
                baseUrl: 'client',
                paths : requirejsConfig.paths,
                shim: requirejsConfig.shim
            }
        ))
        .pipe(concat('main.js'))
        .pipe(gulp.dest('target/dist'));
});

gulp.task('copy-all:dist', function () {
    gulp.src('./client/**')
        .pipe(gulp.dest('./target/dist'))
});

gulp.task('build:dist', ['copy-all:dist', 'bundle:dist']);