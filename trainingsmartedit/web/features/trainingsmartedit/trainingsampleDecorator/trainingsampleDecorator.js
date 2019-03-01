angular.module('trainingsampleDecorator', ['trainingsmarteditTemplates', 'ui.bootstrap', 'pascalprecht.translate',
        'trainingsampleDecoratorControllerModule'
    ])
    .directive('sampleDecorator', function() {
        return {
            templateUrl: 'trainingsampleDecoratorTemplate.html',
            restrict: 'C',
            transclude: true,
            replace: false, // replace
            scope: {
                smarteditComponentId: '@',
                smarteditComponentType: '@',
                active: '='
            },
            controller: 'trainingsampleDecoratorController',
            controllerAs: '$ctrl',
            bindToController: {
                smarteditComponentId: '@',
                smarteditComponentType: '@',
                smarteditProperties: '@',
                active: '<'
            }
        };
    });
