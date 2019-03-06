// import 'trainingsmartedit/trainingsmartedit_bundle.js';
import {doImport} from './forcedImports';
import {IContextualMenuButton, IFeatureService, SeModule} from 'smarteditcommons';
import {TrainingsmarteditShowActionListModule} from './trainingstorefrontShowActionList/TrainingstorefrontShowActionListModule';

doImport();

@SeModule({
	imports: [
		'contextualMenuServiceModule',
		'decoratorServiceModule',
		'externalComponentButtonModule',
		'smarteditServicesModule',
		'trainingsampleDecorator',
		TrainingsmarteditShowActionListModule
	],
	config: ($logProvider: angular.ILogProvider) => {
		'ngInject';
		$logProvider.debugEnabled(false);
	},
	initialize: (decoratorService: any, featureService: IFeatureService, contextualMenuService: any) => {
		'ngInject';
		decoratorService.addMappings({
			'^((?!Slot).)*$': ['contextualMenu'],
		});
		console.log("added to decoratorService");
		decoratorService.addMappings({
			MyTestComponent3: ['sampleDecorator']
		});
		featureService.addDecorator({
			key: 'sampleDecorator',
			nameI18nKey: 'sample.decorator'
		});
		decoratorService.enable('sampleDecorator');
		featureService.addContextualMenuButton({
			key: "my.menu.item.key",
			i18nKey: 'My Menu Item',
			nameI18nKey: 'my.menu.item',
			regexpKeys: ['MyTestComponent3'],
			condition: (config: any) => {
				return true;
			},
			action: {
				template: '<trainingsmartedit-show-action-list data-component="componentDetails"></trainingsmartedit-show-action-list>'
			},
			displayClass: "movebutton",
			iconIdle: '/trainingsmartedit/icons/icon_off.png',
			iconNonIdle: '/trainingsmartedit/icons/icon_on.png',
			smallicon: '/trainingsmartedit/icons/info.png',
			// permissions: ['se.read.page’], // for permissions
		} as IContextualMenuButton);
		featureService.enable('my.menu.item.key');

		/* contextualMenuService.addItems({
			MyTestComponent3: [{
				key: 'MyTestComponent3',
				i18nKey: 'My Test Component 3',
				condition(configuration: any, event: any) {
					return true;
				},
				
				action: {
					template: '<h3>asdasdasd</h3><external-component-button data-catalog-version-uuid="ctrl.componentAttributes.smarteditCatalogVersionUuid"></external-component-button>'
				},

				displayClass: 'movebutton',
				iconIdle: '/trainingsmartedit/icons/strategy_off.png',
				iconNonIdle: '/trainingsmartedit/icons/strategy_on.png',
				smallicon: '/trainingsmartedit/icons/info.png'
			}]
		});*/
	}
})
export class Trainingsmartedit {}