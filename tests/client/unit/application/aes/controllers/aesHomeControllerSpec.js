define(['angular-mocks', 'application/aes/aesModule'], function(mock){
    describe('aesHomeController', function(){
        var aesHomeController
        var scope

        beforeEach(mock.module('aes'))

        beforeEach(mock.inject(function($controller, $rootScope){
            scope = $rootScope.$new()

            aesHomeController = $controller('aesHomeController', {
                $scope : scope
            })
        }))

        it('should define name', function(){
            expect(scope.name).toEqual('Ziom')
        })
    })
})