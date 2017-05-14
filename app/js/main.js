var myApp = angular.module("myApp", []);

myApp.controller("myController", ["$scope","$http", function($scope, $http) {
    $scope.milan = "zadatak koji je trebalo uraditi za htec";
    $scope.drugariView = "test.html";

    // $http and json
    // console.log(angular.toJson($scope.drugari));
    $http.get('../data/drugari.json').then(function(drugari) {
        $scope.drugari = drugari.data;
        console.log(drugari.data);
    });



}]);
