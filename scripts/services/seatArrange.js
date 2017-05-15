app.service("seatArrange", ["dbManager_service", "currentShow", function (dbManager_service, currentShow) {
    this.seats = [];
    this.arrangement = function (key) {
        var availSeat = dbManager_service.findAvailSeat(key);
        if (availSeat) {
            this.seats = JSON.parse(availSeat);
        }
        else {
            var seats = [];
            for (var i = 0; i < currentShow.get().seats.club / 10; i++) {
                var clubrow = [];
                for (var j = 0; j < 10; j++) {
                    var clubseat = {
                        val: j + 1,
                        row: i + 1,
                        type: "club",
                        check: false,
                        booked: false,
                        seatno: "Club" + (i + 1) + (j + 1)
                    };
                    clubrow.push(clubseat);
                }
                seats.push(clubrow);
            }
            for (var k = 0; k < currentShow.get().seats.excutive / 10; k++) {
                var executiverow = [];
                for (var l = 0; l < 10; l++) {
                    var executiveseat = {
                        val: l + 1,
                        row: k + 1,
                        type: "excutive",
                        check: false,
                        booked: false,
                        seatno: "Excutive" + (k + 1) + (l + 1)
                    };
                    executiverow.push(executiveseat);
                }
                seats.push(executiverow);
            }
            this.seats = seats;
        }
        return this.seats;
    };
}]);