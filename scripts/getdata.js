var app = angular.module('bookmyticket', ["ui.router"]);
app.service("Service", ['$http', '$q', function ($http, $q) {
    return {
        getbookData: function () {
            var deferred = $q.defer();
            $http.get('scripts/movies.json')
                .then(function (response) {
                    deferred.resolve(response.data);
                })
                .catch(function (error) {
                    deferred.reject(error);
                });
            return deferred.promise;
        }
    };
}]);
