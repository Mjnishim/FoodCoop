'use strict';


// Declare app level module which depends on filters, and services
angular.module('co-op', [ 'ngRoute', 'co-op.filters', 'co-op.services', 'co-op.directives', 'co-op.controllers', 'ngAnimate', 'ui.bootstrap']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {templateUrl: 'partials/index-content.html', controller: 'MyCtrl1'});
    $routeProvider.when('/signup', {templateUrl: 'partials/signup.html', controller: 'userCtrl'});
    $routeProvider.when('/producer-list', {templateUrl: 'partials/producer-list.html', controller: 'producerListCtrl'});
    $routeProvider.when('/product-upload', {templateUrl: 'partials/product-upload.html', controller: 'productUpload'});
    $routeProvider.when('/producer-profile', {templateUrl: 'partials/edit-producer-profile.html', controller: 'producerCtrl'});
    $routeProvider.when('/contact', {templateUrl: 'partials/contact.html', controller: 'contactCtrl'});
    $routeProvider.when('/login', {templateUrl: 'partials/login.html'});
    $routeProvider.when('/must-login', {templateUrl: 'partials/must-login.html'});
    $routeProvider.when('/forgot-password', {templateUrl: 'partials/forgot-password.html', controller: 'resetPwdCtrl'});
    $routeProvider.when('/my-cart', {templateUrl: 'partials/my-cart.html'});
    $routeProvider.when('/order-manager', {templateUrl: 'partials/order-manager.html'});
    $routeProvider.otherwise({redirectTo: '/home'});
  }])
  .run(function($rootScope, $location, LoginManager) {
  
        $rootScope.$on( '$routeChangeStart', function(event, next, current) {
        	switch(next.originalPath) {
				case '/home':
				case '/signup':
				case '/contact':
				case '/producer-list':	
				    break;
				default:	        	
					if (! LoginManager.IsLoggedIn() && next.templateUrl !== '/partials/login.html') {
						$location.path("/must-login");
					}
		            break;
		    }
        });

  });