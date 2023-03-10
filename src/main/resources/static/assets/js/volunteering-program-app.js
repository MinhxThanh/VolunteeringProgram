const app = angular.module("volunteering-program-app", [])
app.controller("volunteering-program-controller", function ($scope, $http) {

})
$('#carouselExampleFade').ready(function () {
    $('.carousel-inner').find('.carousel-item').first().addClass('active')
})

var compareTo = function() {
    return {
        require: "ngModel",
        scope: {
            otherModelValue: "=compareTo"
        },
        link: function(scope, element, attributes, ngModel) {

            ngModel.$validators.compareTo = function(modelValue) {
                return modelValue == scope.otherModelValue;
            };

            scope.$watch("otherModelValue", function() {
                ngModel.$validate();
            });
        }
    };
};

app.directive("compareTo", compareTo);