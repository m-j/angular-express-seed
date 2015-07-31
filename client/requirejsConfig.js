var aes = aes || {}
aes.requirejsConfig = function () {
    return {
        paths: {
            "angular": "libs/angular/angular",
            "restangular": "libs/restangular/dist/restangular",
            "ui-router": "libs/ui-router/release/angular-ui-router",
            "lodash": "libs/lodash/dist/lodash",
            "angular-mocks" : "libs/angular-mocks/angular-mocks",
            "jquery" : "libs/jquery/dist/jquery"
        },
        shim: {
            angular: { exports: 'angular', deps: ['lodash', 'jquery']},
            restangular: ['angular'],
            "ui-router": ['angular'],
            "angular-mocks" : { exports : 'angular.mock', deps : ['angular']},
            "jquery" : {exports : 'jQuery'}
        }
    }
}

if(typeof module !== 'undefined' && module.exports) { module.exports = aes.requirejsConfig }