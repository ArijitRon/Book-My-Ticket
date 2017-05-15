app.service("ticketService", function () {
    var tickets = [];
    this.set = function (arrobj) {
        tickets = arrobj;
    };
    this.get = function () {
        return tickets;
    };
});
