app.controller('hallController', ['$scope', 'Service','currentShow', function ($scope, Service,currentShow) {
    Service.getbookData().then(function (data) {
        $scope.totalData = data;
    });
    $scope.currentShow = function (theater, movie, show, seats,cost) {
        currentShow.set(theater, movie, show, seats,cost);
    };
}]);