/**
 * Created by fraa on 01/02/2017.
 */
(function () {
    'use_strict';
    angular.module('testApp', ['ngRoute']).config(moduleConfig);
    moduleConfig.$inject = ['$routeProvider'];
    function moduleConfig($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/container.html',
                controller: 'crudController',
                controllerAs: 'crudCtrl'
            })
            .otherwise({
                redirectTo: '/'
            })
    }
})();