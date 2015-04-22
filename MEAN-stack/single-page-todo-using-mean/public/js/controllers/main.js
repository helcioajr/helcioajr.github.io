// js/controllers/main.js

angular.module('todoController', [])

.controller('mainControler', function($scope, $http, Todos) {
    $scope.formData = {};

    // when landing on the page, get all todos
    Todos.get()
        .success(function(data) {
            $scope.todos = data;
        });

    // when adding send text to API
    $scope.createTodo = function() {


        if (!$.isEmptyObject($scope.formData)) {

            Todos.create($scope.formData)
                .success(function(data) {
                    $scope.formData = {};
                    $scope.todos = data;
                });
        }
    };

    // delete todo after checking it
    $scope.deleteTodo = function(id) {
        Todos.delete(id)
            .success(function(data) {
                $scope.todos = data;
            });
    };
});