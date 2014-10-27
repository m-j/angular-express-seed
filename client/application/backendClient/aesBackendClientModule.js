define(
    [
        'angular'
        , 'restangular'
        , './aesApiClient'
    ]
    , function(
            angular
            , restangular
            , aesApiClient
        )
    {
        var aesBackendClientModule = angular.module('aes.backendClient', ['restangular']);

        aesBackendClientModule.factory('aesApiClient', aesApiClient)
    }
);