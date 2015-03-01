(
    function () {
        var m = angular.module('ld-framework', ['ui.router']);

        m.directive('ldUiNavbar', ['$state', function ($state) {
            return {
                restrict: 'EA',
                templateUrl: '../src/bootstrap-ui-navbar.html',
                scope: {},
                link: function (scope, elem, attr) {
                    scope.states = [
                        {
                            name: 'state1',
                            url: '/app/state'
                        }
                    ];
                }
            };
        }]);
    }()
);