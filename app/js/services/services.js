"use strict"

var services = angular.module("loginApp.services", ["ngResource"]);

services.factory("LoginService", function(){
	return function(user, password){
		return user === "user" && password === "password";
	};
});

services.factory("UserService", function(){
	return {
		user: {
			name: "Béla",
			loggedIn: false,
			token: "qwertz"
		}
	};
});