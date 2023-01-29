const app = angular.module('adminApp', ['ngRoute'])
app.config(function ($routeProvider){
    $routeProvider
        .when("/product", {
            templateUrl: "/admin/blog/index.html?"  + Math.random(),
            controller: "blog-ctrl"
        })
        .otherwise({
            template: "<h2 class='test-center'>Welcome To Adminnistration Page </h2>"
        })
})
