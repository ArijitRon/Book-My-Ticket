app.service("currentSeats", function () {
    var currentSeat = [];
    this.set = function (obj) {
        currentSeat = obj;
    };
    this.block = function () {
        for (var i = 0; i < currentSeat.length; i++) {
            var currentRow = currentSeat[i];
            currentRow.forEach(function (seat) {
                if (seat.check) {
                    seat.booked = true;
                }
            });
        }
    };
    this.get = function () {
        return currentSeat;
    };
});
