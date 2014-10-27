define(
    [
        'angular'
        , './controllers/aesHomeController'
        , './aesRoutes'
        , 'ui-router'
        , 'application/backendClient/aesBackendClientModule'
    ]
    , function (angular, aesHomeController, aesRoutes) {
        var aesModule = angular.module('aes', ['ui.router', 'aes.backendClient'])

        aesModule.controller('aesHomeController', aesHomeController)
        aesModule.config(aesRoutes)
    })