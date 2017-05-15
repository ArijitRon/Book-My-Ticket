app.service("currentShow", function () {
    var currentShow;
    this.set = function (theater, movie, show, seats, cost) {
        currentShow = {
            hall: theater,
            movie: movie,
            time: show.time,
            hike: show.hike,
            seats: seats,
            cost: cost
        };
    };
    this.get = function () {
        return currentShow;
    };
});
