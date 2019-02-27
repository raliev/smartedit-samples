import * as angular from 'angular';
import 'trainingsmartedit/trainingsmartedit_bundle.js';

angular.module('trainingsmartedit', [
	'contextualMenuServiceModule',
	'decoratorServiceModule'
])
	.run(function(decoratorService: any, contextualMenuService: any) {
		'ngInject';
		/*'ngInject';
		const setUpContextualMenu = function() {*/
		decoratorService.addMappings({
			'^((?!Slot).)*$': ['contextualMenu'],
		});
		contextualMenuService.addItems({
			MyTestComponent2: [{
				key: 'MyTestComponent2',
				i18nKey: 'My Test Component 2',
				condition(configuration: any, event: any) {
					return true;
				},
				callback(configuration: any, event: any) {
					alert('working_with ' + configuration + ',' + event);
					/*sharedDataService.get('someWebsite').then(function(url: string) {
						const appUrl = 'https://' + url;
						window.open(appUrl);
					}.bind(this));*/
				},
				displayClass: 'movebutton',
				iconIdle: '/trainingsmartedit/icons/strategy_off.png',
				iconNonIdle: '/trainingsmartedit/icons/strategy_on.png',
				smallicon: '/trainingsmartedit/icons/info.png'
			}]
		});
		/*};*/
		/*setUpContextualMenu();*/
	});

export class Trainingsmartedit {}