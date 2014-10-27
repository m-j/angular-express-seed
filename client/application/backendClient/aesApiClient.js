define(function () {
    var aesApiClient = function (Restangular) {
        return Restangular.withConfig(function(RestangularConfigurer) {
            RestangularConfigurer.setBaseUrl('/api');
        });
    }

    aesApiClient.$inject = ['Restangular'];

    return aesApiClient;
});