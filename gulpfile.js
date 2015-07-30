var gulp = require('gulp');
var Server = require('karma').Server;

gulp.task('default', function() {
    // place code for your default task here
});

console.log(Server)

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
    new Server({
        configFile: __dirname + '/tests/client/unit/unit-karma.conf.js',
        singleRun: true
    }, done).start();
});