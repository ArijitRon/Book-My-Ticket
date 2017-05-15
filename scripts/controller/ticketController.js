app.controller('ticketController', ['$scope', 'currentShow', 'ticketService', function ($scope, currentShow, ticketService) {
    $scope.movieObj = currentShow.get();
    $scope.ticketObjs = ticketService.get();
    for(var i=0;i<$scope.ticketObjs.length;i++){
        $scope.ticketObjs[i].cost=$scope.movieObj.cost[$scope.ticketObjs[i].type];
    }
    ticketService.set( $scope.ticketObjs);
}]);