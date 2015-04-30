angular.module('userController', ['userService'])

.controller('UserController', function($rootScope) {

    var vm = this;

    User.all()
        .success(function(data) {
            vm.users = data;
        });

})

.controller('CreateUserController', function(User, $location, $window) {

    var vm = this;
    vm.signupUser = function() {
        vm.message = '';

        User.create(vm.user)
            .then(function(response) {
                vm.userData = {};
                vm.message = response.data.message;

                $window.localStorage.setItem('token', reponse.data.token);
                $location.path('/');

            });
    };

});