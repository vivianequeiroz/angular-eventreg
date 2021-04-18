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
           imageUrl: './img/angularjs-logo.png',
           sessions: [
               {
                    name: 'Directives Masterclass',
                    creatorName: 'Bob Smith',
                    duration: '1 hour',
                    level: 'Advanced',
                    abstract: 'Learn ins and outs of directives in AngularJS.',
                    upVoteCount: 0
               },
               {    
                    name: 'Scopes for fun and profit',
                    creatorName: 'John Doe',
                    duration: '30 minutes',
                    level: 'Introductory',
                    abstract: 'Let\'s tale a closer at scopes and their power.',
                    upVoteCount: 0
               },
               {
                    name: 'Well Behaved Controllers',
                    creatorName: 'John Doe',
                    duration: '2 hours',
                    level: 'Introductory',
                    abstract: 'Learn the best practices to domain controllers in AngularJS.',
                    upVoteCount: 0
               }
           ]
        }
        
        $scope.upVoteSession =function(session) {
    
            session.upVoteCount++;
        }
        
        $scope.downVoteSession =function(session) {
    
            session.upVoteCount--;
        }
    
    }
);