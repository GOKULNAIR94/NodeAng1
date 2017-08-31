var app = angular.module('MyApp',["ngRoute",'ngMaterial']);
app.run(function(){
    console.log("My App is Running!");
});

app.controller('mainCont', function($scope, $http, $location ) {
    console.log("mainCont");
});