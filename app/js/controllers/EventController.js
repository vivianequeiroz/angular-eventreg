'use strict';

eventsApp.controller('EventController',
    function EventController($scope) {

        $scope.event = {
           name: 'Angular BootCamp',
           date: '29/04/2021',
           time: '10:30 am',
           location: {
               address: 'Google Headquarters',
               city: 'Mountain View',
               province: 'CA'
           },
           imageUrl: './img/angularjs-logo.png'
        }
    }
);