var myApp = angular.module('myApp', []);

myApp.directive('myAnchor', function() {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        scope: {
            link: "@"
        },
        template: '<div class="row">' +
            '<div class="col-xs-12 col-md-6">' +
            '<div class="page-header">' +
            '<h2 id="{{link}}" ng-transclude>' +
            '</h2></div></div></div>'
    };
});

myApp.directive('myJobTitle', function() {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        scope: {
            date: "@",
            link: "@"
        },
        template: '<div class="row">' +
            '<div class="col-xs-8 col-md-4">' +
            '<strong id="{{link}}" ng-transclude></strong>' +
            '</div>' +
            '<div class="col-xs-4 col-md-2"> <p class="text-right"> {{date}} </p></div>' +
            '</div></div>'
    };
});

myApp.directive('myP', function() {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        scope: {
            'sidepic': '@',
            'piclink': '@'
        },
        template: '<div class="row">' +
            '<p class="col-xs-12 col-md-6" ng-transclude></p>' +
            '</div>',
        link: function(scope, element, attrs) {
            // The sidepic will only be displayed on >= md screens
            if (!angular.isUndefined(scope.sidepic)) {
                element.append('<div class="col-md-6">' +
                               '<a href="' + scope.piclink + '">' +
                               '<img class="sidepic" src="' + scope.sidepic + '">' +
                               '</img></a></div>');
            }
        }
    };
});
