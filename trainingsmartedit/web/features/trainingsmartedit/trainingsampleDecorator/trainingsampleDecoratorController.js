/*
 * [y] hybris Platform
 *
 * Copyright (c) 2018 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This software is the confidential and proprietary information of SAP
 * ("Confidential Information"). You shall not disclose such Confidential
 * Information and shall use it only in accordance with the terms of the
 * license agreement you entered into with SAP.
 */
angular.module('trainingsampleDecoratorControllerModule', ['smarteditServicesModule', 'trainingsampleDecoratorServiceModule'])
    .controller('trainingsampleDecoratorController', ['systemEventService', 'trainingsampleDecoratorService', function(systemEventService, service) {
        this.title = 'Title';
        this.contentTemplate = 'trainingsampleDecoratorContentTemplate.html';

        this.$onInit = function() {
            // tslint:disable-next-line:no-console
            console.log("controller - getInfoForComponent");
            service.getInfoForComponent(this.smarteditComponentId).then(function(analytics) {
                this.abAnalytics = 'A: ' + analytics.aValue + ' B: ' + analytics.bValue;
            }.bind(this));

        };
    }]);
