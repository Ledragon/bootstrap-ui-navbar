# bootstrap-ui-navbar
A simple directive allowing you to include a navbar in bootstrap style using the list of routes defined. This directive simply creates a top menu using standard bootstrap styles, by creating an entry for each non-abstract state existing in the router configuration.
## Usage
To include the navbar in your page, load 'ld-framework' dependency in your application and insert the ld-ui-navbar directive in your page.

Below is a complete example:


Html:
    <!DOCTYPE html>
    <html lang="en" ng-app="app">
    
    <head>
        <meta charset="UTF-8">
        <title>Test page</title>
        <link rel="stylesheet" href="../bower_components/bootstrap/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="../bower_components/bootstrap/dist/css/bootstrap-theme.min.css">
    </head>
    
    <body>
        <ld-ui-navbar></ld-ui-navbar>
    
        <div class="container">
           <ui-view></ui-view>
        </div>
        <script src="../bower_components/jquery/dist/jquery.min.js"></script>
        <script src="../bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
        <script src="../bower_components/angular/angular.min.js"></script>
        <script src="../bower_components/angular-ui-router/release/angular-ui-router.min.js"></script>
        <script src="../src/bootstrap-ui-navbar.js"></script>
        <script src="app.js"></script>
    </body>
    
    </html>
app.js:
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