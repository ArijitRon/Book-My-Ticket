app.controller('seatController', ['$scope', 'rowCalc', 'currentShow', 'seatArrange', 'ticketService', 'currentSeats', function ($scope, rowCalc, currentShow, seatArrange, ticketService, currentSeats) {

  var obj = currentShow.get();
  $scope.proceed = false;
  $scope.hall = obj.hall;
  $scope.showTime = obj.time;
  $scope.movie = obj.movie;
  $scope.seats = obj.seats;
  $scope.obj = [];
  $scope.quantities = [1, 2, 3, 4, 5];
  $scope.tickets = [];

  $scope.obj = seatArrange.arrangement(obj.hall + obj.movie + obj.time);

  $scope.isDisabled = false;
  $scope.rows = $scope.obj;
  $scope.rowLetter = rowCalc.rowStack($scope.obj);
  $scope.selectedSeatCount = 0;

  $scope.clickSeat = function (seat) {
    if (!seat.booked && !$scope.isDisabled) {
      if (seat.check) {
        seat.check = false;
        $scope.selectedSeatCount--;
        $scope.tickets.pop(seat);
      } else if ($scope.selectedSeatCount < $scope.selectedVal) {
        seat.check = true;
        $scope.selectedSeatCount++;
        $scope.tickets.push(seat);
      }
      $scope.proceed = $scope.selectedVal === $scope.selectedSeatCount ? true : false;

    }
  };

  $scope.ticketCreation = function () {
    ticketService.set($scope.tickets);
    currentSeats.set($scope.rows);
  };

  $scope.changeQty = function () {
    $scope.rows = seatArrange.arrangement(obj.hall + obj.movie + obj.time);
    $scope.selectedSeatCount = 0;
    $scope.tickets = [];
    $scope.proceed = false;
  };
}]);