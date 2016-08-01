(function(){
    'use strict';
    angular
        .module('authApp')
        .controller('profileController', profileController);

    function profileController($http, store){
        var vm = this;

        vm.getMessage = getMessage;
        vm.getSecretMessage = getSecretMessage;
        vm.message;

        vm.profile = store.get('profile');

        function getMessage(){
            $http.get('http://localhost:8082/api/public', {
                skipAuthorization: true
            }).then(function(res){
                vm.message = res.data.message;
            });
        }

        function getSecretMessage(){
            $http.get('http://localhost:8082/api/private').then(function(res){
                vm.message = res.data.message;
            });
        }
    }
})();