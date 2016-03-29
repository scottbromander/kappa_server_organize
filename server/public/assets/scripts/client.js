var myApp = angular.module("myApp", []);

myApp.controller("HomeController", ["$scope", "$http", function($scope, $http){
    console.log("Totally loads");


    var person = {
        name: "Biz",
        location: "Bloomington"
    };

    $http.post("/people", person).then(function(response){
        console.log(response);

        $scope.getPeople();
    });

    $scope.getPeople = function(){
        $http.get("/people").then(function(response){
            console.log("HERE! ", response);
        });
    };

    $scope.clickMe = function(value){
        console.log(value);
    };
}]);
