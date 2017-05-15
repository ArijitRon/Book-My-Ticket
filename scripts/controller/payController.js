app.controller('payController', ['$scope', 'ticketService', 'currentShow', 'dbManager_service', 'currentSeats', function ($scope, ticketService, currentShow, dbManager_service, currentSeats) {
    $scope.totalprice = 0;
    var tickets = ticketService.get();
    tickets.forEach(function (ticket) {
        $scope.totalprice += parseFloat(ticket.cost);
    });
    var obj = currentShow.get();
    $scope.paid = function () {
        currentSeats.block();
        dbManager_service.storeDataInLocalStorage(currentSeats.get(),obj.hall + obj.movie + obj.time);
    };

}]);