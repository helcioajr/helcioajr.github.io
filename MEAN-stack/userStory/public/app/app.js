angular.module('MyApp', ['appRoutes', 'mainController', 'userController', 'userService', 'authService', 'storyService', 'storyController'])

.config(function($httpProvider){

    $httpProvider.interceptors.push('AuthInterceptor');

});