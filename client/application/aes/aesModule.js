define(
    [
        'angular'
        , './controllers/aesHomeController'
        , './aesRoutes'
        , 'ui-router'
    ]
    , function (angular, aesHomeController, aesRoutes) {
        var aesModule = angular.module('aes', ['ui.router'])

        aesModule.controller('aesHomeController', aesHomeController)
        aesModule.config(aesRoutes)
    })