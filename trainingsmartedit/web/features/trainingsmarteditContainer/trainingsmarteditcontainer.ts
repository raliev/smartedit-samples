
// import 'trainingsmarteditContainer/trainingsmarteditContainer_bundle.js';
// import * as angular from 'angular';
import {IFeatureService, IPerspectiveService, SeModule} from 'smarteditcommons';
import {doImport} from './forcedImports';
doImport();
/* 
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
*/
/*
import * as angular from 'angular';

angular.module('trainingsmarteditContainer', [
	'featureServiceModule',
	'yjqueryModule',
	'trainingsmarteditPerspectiveToolbarItemModule'
]).run((
	yjQuery: any,
	featureService: any,
	domain: any) => {
	'ngInject';
	console.log("loadCSS");
	const loadCSS = (href: string) => {
		const cssLink = yjQuery("<link rel='stylesheet' type='text/css' href='" + href + "'>");
		yjQuery("head").append(cssLink);
	};
	loadCSS(domain + "/trainingstorefront/css/style.css");
	featureService.addToolbarItem({
		toolbarId: 'smartEditPerspectiveToolbar',
		key: 'trainingsmarteditPerspectiveToolbarItem',
		type: 'HYBRID_ACTION',
		nameI18nKey: 'training.smartedit.perspective.toolbar.item.name',
		priority: 2,
		section: 'left',
		iconClassName: 'hyicon hyicon-info se-toolbar-menu-ddlb--button__icon',
		include: 'trainingsmarteditPerspectiveToolbarItemWrapperTemplate.html'
	});
});
*/

@SeModule({
	imports: [
		'smarteditServicesModule',
		'trainingsmarteditPerspectiveToolbarItemModule',
		'MyServiceModule'
	],
	initialize: (perspectiveService: IPerspectiveService, featureService: IFeatureService, myService: any) => {
		'ngInject';
		featureService.addToolbarItem({
			toolbarId: 'smartEditPerspectiveToolbar',
			key: 'trainingsmarteditPerspectiveToolbarItem',
			type: 'HYBRID_ACTION',
			nameI18nKey: 'A New Button',
			priority: 2,
			section: 'left',
			iconClassName: 'hyicon hyicon-info se-toolbar-menu-ddlb--button__icon',
			include: 'trainingsmarteditPerspectiveToolbarItemWrapperTemplate.html',
			callback: () => {
				myService.openAWizard();
			},
		});
		perspectiveService.register({
			key: 'se.cms.perspective.advanced',
			nameI18nKey: 'se.cms.perspective.advanced',
			descriptionI18nKey: 'se.hotkey.tooltip',
			features: ['trainingsmarteditPerspectiveToolbarItem'],
			perspectives: []
		});

	}
})
export class TrainingsmarteditContainer {}