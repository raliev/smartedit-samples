
import {SeModule} from 'smarteditcommons';
import {TrainingsmarteditShowActionListComponent} from "./trainingsmarteditShowActionListComponent";

@SeModule({
	imports: [

	],
	declarations: [TrainingsmarteditShowActionListComponent],
	config: ($logProvider: angular.ILogProvider) => {
		'ngInject';
		$logProvider.debugEnabled(true);
		console.log("module config");
	},
	initialize: () => {
		'ngInject';
		console.log("module init");
	}
})
export class TrainingsmarteditShowActionListModule {}
