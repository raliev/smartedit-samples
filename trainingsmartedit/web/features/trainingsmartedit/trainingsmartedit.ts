import 'trainingsmartedit/trainingsmartedit_bundle.js';
import {doImport} from './forcedImports';
import {IFeatureService, SeModule} from 'smarteditcommons';
doImport();

@SeModule({
	imports: [
		'contextualMenuServiceModule',
		'smarteditServicesModule',
		'decoratorServiceModule',
		'externalComponentButtonModule',
		'trainingsampleDecorator'
	],
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

		contextualMenuService.addItems({
			MyTestComponent3: [{
				key: 'MyTestComponent3',
				i18nKey: 'My Test Component 3',
				condition(configuration: any, event: any) {
					return true;
				},
				/*callback(configuration: any, event: any) {
					alert('working_with ' + configuration + ',' + event);

				},
				*/
				action: {
					template: '<h3>asdasdasd</h3><external-component-button data-catalog-version-uuid="ctrl.componentAttributes.smarteditCatalogVersionUuid"></external-component-button>'
				},

				displayClass: 'movebutton',
				iconIdle: '/trainingsmartedit/icons/strategy_off.png',
				iconNonIdle: '/trainingsmartedit/icons/strategy_on.png',
				smallicon: '/trainingsmartedit/icons/info.png'
			}]
		});
		/*};*/
		/*setUpContextualMenu();*/
	}
})
export class Trainingsmartedit {}