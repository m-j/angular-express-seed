define(function () {
    var AesHomeController = function ($scope, aesApiClient) {

        aesApiClient.one('name', 0).get().then(function(result){
            $scope.name = result[0].name
        })

        $scope.name = 'Ziom'
    }

    AesHomeController.$inject = ['$scope', 'aesApiClient'];

    return AesHomeController;
});