"use strict";

var app = angular.module("loginApp", ["ngRoute", "loginApp.services"])
	.factory("authInterceptor",
		function($q){
			var interceptor = {
				request: function(config){
					return config;
				}
		};
		return interceptor;
});

/*$rootScope.$on("$routeChangeStart", function(event, next){
	var userAuthenticated = false;

	if(!userAuthenticated && next.loginRequired){
		$rootScope.savedLocation = $location.url();
		$location.path("/login");
	}
})*/

app.config(["$routeProvider", function($routeProvider){
	$routeProvider
		.when("/login", {
			controller: "LoginController",
			templateUrl: "/html/login.html"
		}).when("/logout", {
			controller: "LogoutController",
			templateUrl: "/html/logout.html"
		}).when("/", {
			controller: "HomeController",
			templateUrl: "/html/home.html"
		}).when("/restricted", {
			loginRequired: true,
			templateUrl: "/html/restricted.html"
		}).when("/success", {
			templateUrl: "/html/success.html"
		}).when("/fail", {
			templateUrl: "/html/fail.html"
		}).otherwise({redirectTo: "/"});
}]);

app.controller("HomeController", ["$scope", "UserService", function($scope, UserService){
	$scope.data = UserService.user.loggedIn;
}])

app.controller("LoginController", ["$scope", "$location", "LoginService", "UserService", function($scope, $location, LoginService, UserService){
	$scope.userName = "user";
	$scope.password = "password";
	$scope.loginSubmit = function(){
		if(LoginService($scope.userName, $scope.password)){
			UserService.user.loggedIn = true;
			UserService.user.name = "Pista";
			$location.path("/");
		}
		else{
			$location.path("/fail");
		}
	};
}]);

app.controller("LogoutController", ["$scope", "$location", "UserService", function($scope, $location, UserService){
	UserService.user.loggedIn = false;
	$location.path("/");
}]);