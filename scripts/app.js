app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state("hallPage", {
        name: 'hall',
        url: '/hall',
        templateUrl: 'templates/hall.html',
        controller: 'hallController'
    });
    $stateProvider.state("seatsPage", {
        name: 'seatsPage',
        url: '/seats',
        templateUrl: 'templates/seats.html',
        controller: 'seatController'
    });
    $stateProvider.state("seatsPage.ticket", {
       views: {
        "seatsPage.ticket": {
          name: 'ticket',
          url: '/seats',
          templateUrl: 'templates/ticket.html',
          controller: 'ticketController'
        }
       }
    });
     $stateProvider.state("payment", {
        name: 'payment',
        url: '/pay',
        templateUrl: 'templates/payment.html',
        controller: 'payController'
    });
    $urlRouterProvider.otherwise("/hall");
});