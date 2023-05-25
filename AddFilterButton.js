/**
@NApiVersion 2.0
@NScriptType UserEventScript
@NModuleScope SameAccount
*/
define(['N/ui/serverWidget','N/log'], function (serverWidget,log) {

    function beforeLoad(context) {
		try{
			if (context.type === context.UserEventType.VIEW) {
				var form = context.form;
				var filters = form.getSublist('filters');
				
				// Create a new button and add it to the filters section
				var customButton = form.addButton({
				  id: 'custpage_custom_button',
				  label: 'Filter Button',
				  //functionName: 'onCustomButtonClicked'
				});
				
				// Set the display type for the button
				customButton.isDisabled = false;
				
				// Add client script to handle the button click event
				//form.clientScriptModulePath = './path/to/client/script.js';
			}
		}catch(ex){
			log.error({
				title: "Error",
				details: ex.message
			})
		}
    }

    return {
        beforeLoad: beforeLoad
    };
});