define(function(){
    var aesRoutes = function($stateProvider, $urlRouterProvider){
        $stateProvider.state('home', {
            'url' : '/',
            'views' : {
                '@' : {
                    templateUrl : '/application/aes/views/home.html',
                    controller : 'aesHomeController'
                }
            }
        })

        $urlRouterProvider.otherwise("/")
    }

    aesRoutes.$inject = ['$stateProvider', '$urlRouterProvider']

    return aesRoutes
})