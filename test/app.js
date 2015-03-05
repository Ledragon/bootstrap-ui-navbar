(
    function () {
        var app = angular.module('app', ['ui.router', 'ld-framework']);
        app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/home');
            $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'states/home.html'
            })
            .state('state1', {
                url: '/state1',
                templateUrl: 'states/state1.html'
            });
        }]);
    }()
);