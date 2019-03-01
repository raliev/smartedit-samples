angular.module('trainingsampleDecoratorServiceModule', [])
    .service('trainingsampleDecoratorService', function($q) {
        this.getInfoForComponent = function() {
            // tslint:disable-next-line:no-console
            console.log("service is called");
            return $q.when({
                aValue: 30,
                bValue: 70
            });
        };
    });
