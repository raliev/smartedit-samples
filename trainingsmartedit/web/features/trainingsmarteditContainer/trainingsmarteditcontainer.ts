
import 'trainingsmarteditContainer/trainingsmarteditContainer_bundle.js';
import * as angular from 'angular';

angular.module('trainingsmarteditContainer', [
	'loadConfigModule',
	'smarteditServicesModule'
]).run((
	loadConfigManagerService: any,
	sharedDataService: any) => {
	'ngInject';
	loadConfigManagerService.loadAsObject().then((configurations: any) => {
		sharedDataService.set('someWebsite', "https://www.google.com");
	});
});

export class TrainingsmarteditContainer {}