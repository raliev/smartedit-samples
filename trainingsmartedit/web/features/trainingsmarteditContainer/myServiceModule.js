(function() {
    angular.module('MyServiceModule', [
            'createPageServiceModule', 'newPageDisplayConditionModule', 'yLoDashModule', 'smarteditServicesModule',
            'selectPageTypeModule', 'selectPageTemplateModule', 'contextAwarePageStructureServiceModule',
            'confirmationModalServiceModule', 'resourceLocationsModule', 'typeStructureRestServiceModule', 'pageDisplayConditionsServiceModule',
            'componentCloneOptionFormModule', 'componentCloneInfoFormModule', 'restrictionsStepHandlerFactoryModule',
            'cmsitemsRestServiceModule', 'genericEditorModule', 'pageRestrictionsModule',
            'restrictionsServiceModule', 'pageRestrictionsInfoMessageModule', 'selectTargetCatalogVersionModule',
            'clonePageAlertServiceModule', 'pageFacadeModule', 'functionsModule', 'cmsSmarteditServicesModule'
        ])

        .service('myService', function(modalWizard, catalogService, pageFacade) {
            this.openAWizard = function openAWizard(pageData) {
                var promise = pageData ? catalogService.retrieveUriContext() : pageFacade.retrievePageUriContext();
                return promise.then(function(uriContext) {
                    return modalWizard.open({
                        controller: 'myWizardController',
                        controllerAs: 'myWizardCtrl',
                        properties: {
                            uriContext: uriContext,
                            basePageUUID: pageData ? pageData.uuid : undefined
                        }
                    });
                });
            };
        })
        .controller('myWizardController', function() {
            this.getWizardConfig = function() {
                var wizardConfig = {
                    /*isFormValid: this.isFormValid.bind(this),
                    onNext: this.onNext.bind(this),
                    onDone: this.onDone.bind(this),
                    onCancel: this.onCancel,*/
                    steps: [{
                        id: "step1",
                        name: 'Step1',
                        title: 'Step',
                        templateUrl: 'step1.html'
                    }]
                };
                return wizardConfig;
            }.bind(this);
        });
})();
