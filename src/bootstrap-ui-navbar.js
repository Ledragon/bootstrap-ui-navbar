(
    function () {
        var m = angular.module('ld-framework', ['ui.router']);
            console.log('inside IIFE');

        m.directive('ldUiNavbar', ['$state', function ($state) {
            console.log('inside directive');
            return {
                restrict: 'EA',
                templateUrl:'../src/bootstrap-ui-navbar.html'
            };
        }]);
    }()
);