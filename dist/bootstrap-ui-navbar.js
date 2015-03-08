(
    function () {
        var m = angular.module('ld-framework', ['ui.router']);

        m.directive('ldUiNavbar', ['$state', function ($state) {
            return {
                restrict: 'EA',
                templateUrl: 'src/bootstrap-ui-navbar.html',
                scope: {},
                link: function (scope, elem, attr) {
                    scope.states = [];
                    var states = $state.get();
                    states.forEach(function (s, i) {
                        if (!s.abstract) {
                            scope.states.push(s);
                        }
                    });

                }
            };
        }]);
        
        angular.module("ld-framework").run(["$templateCache", function($templateCache) {$templateCache.put("src/bootstrap-ui-navbar.html","<nav class=\"navbar navbar-default\"><div class=container-fluid><div class=navbar-header><button class=\"navbar-toggle collapsed\" data-toggle=collapse data-target=#navbar-menu><span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></button> <a href=# class=navbar-brand>Brand</a></div><div class=\"collapse navbar-collapse\" id=navbar-menu><ul class=\"nav navbar-nav\"><li ng-repeat=\"state in states\"><a ui-sref={{state.name}}>{{state.name}}</a></li></ul></div></div></nav>");}]);
    }()
);