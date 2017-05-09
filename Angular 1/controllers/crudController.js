(function () {
    'use_strict';
    angular.module('testApp').controller('crudController', crudController);
    crudController.$inject = ['$scope'];
    function crudController($scope) {
        var vm = this;

        vm.items = [];

        vm.fillItems = function () {
            for(var i = 0; i < 1000; i++){
                vm.items.push(Math.round(Math.random() * 10));
            }
        };

        vm.addRows = function () {
            for(var i = 0; i < 1000; i++){
                vm.items.push(Math.round(Math.random() * 10));
            }
            $scope.$apply();
        };

        vm.removeRows = function () {
            for(var i = 0; i < 1000; i++){
                vm.items.shift();
            }
            $scope.$apply();
        };

        vm.updateRows = function () {
            for(var i = 0; i < vm.items.length; i++){
                vm.items[i] = Math.round(Math.random() * 10);
            }
            $scope.$apply();
        };

        vm.clearRows = function () {
            vm.items = [];
            $scope.$apply();
        };

        vm.activateFeedSlow = function () {
            clearInterval(vm.Feed);
            vm.Feed = setInterval(vm.updateRows, 1000);
        };

        vm.activateFeedFast = function () {
            clearInterval(vm.Feed);
            vm.Feed = setInterval(vm.updateRows, 200);
        };

        vm.activateFeedSuperMode = function () {
            clearInterval(vm.Feed);
            vm.Feed = setInterval(vm.updateRows, 10);
        };

        vm.activateSoloFeed = function () {
            clearInterval(vm.Feed);
            vm.Feed = setInterval(function () {
                vm.items[Math.round(Math.random() * vm.items.length)] = Math.round(Math.random() * 10);
                $scope.$apply();
            }, 10);
        };

        vm.stopFeed = function () {
            clearInterval(vm.Feed);
        };

        //Functions to execute at start
        vm.fillItems();
    }
})();