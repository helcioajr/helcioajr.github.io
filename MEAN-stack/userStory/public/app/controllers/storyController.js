angular.module('storyController', ['storyService'])

.controller('StoryController', function(Story) {

    var vm = this;

    Story.getAll()
        .success(function(dara) {

            vm.stories = data;

        });

    vm.createStory = function() {

        Story.create(vm.storyData)
        .success(function(data) {

            // clear form
            vm.storyData = '';

            vm.message = data.message;

            vm.stories.push(data);
        });

    };

});