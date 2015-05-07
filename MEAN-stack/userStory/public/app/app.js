angular.module('MyApp', ['appRoutes', 'mainController', 'userController', 'userService', 'authService', 'storyService', 'storyController', 'reverseDirective'])

.config(function($httpProvider){

    $httpProvider.interceptors.push('AuthInterceptor');

});