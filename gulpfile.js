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

gulp.task('bundle:dist', function(cb) {

    var js = gulp.src('client/main.js')
        //.pipe(cached('scripts'))
        //.pipe(remember('scripts'))
        .pipe(amdOptimize("main",
            {
                name: "main",
                baseUrl: 'client',
                paths : requirejsConfig.paths,
                shim: requirejsConfig.shim
            }
        ))
        .pipe(concat('main.js'))
        .pipe(gulp.dest('target'));
})