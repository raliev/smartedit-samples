import {SeComponent} from 'smarteditcommons';

@SeComponent({
	templateUrl: 'trainingsmarteditShowActionListTemplate.html',
	inputs: [
		'component'
	]
})

export class TrainingsmarteditShowActionListComponent {
	$onInit(): void {
		console.log("init component");
	}
}
