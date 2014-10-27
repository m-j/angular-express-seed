module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        karma: {
            dev : {
                configFile: 'tests/client/unit/unit-karma.conf.js'
            }
        }
    })

    grunt.loadNpmTasks('grunt-karma')


}