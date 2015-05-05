angular.module('MyApp', ['appRoutes', 'mainController', 'userController', 'userService', 'authService'])

.config(function($httpProvider){

    $httpProvider.interceptors.push('AuthInterceptor');

});