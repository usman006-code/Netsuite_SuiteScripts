/**
@NApiVersion 2.0
@NScriptType UserEventScript
@NModuleScope SameAccount
*/
define(['N/ui/serverWidget','N/log','N/currentRecord'], function (serverWidget,log,currentRecord) {

    function beforeLoad(context) {
		try{
			//if (context.type === context.UserEventType.VIEW) {
				var form = context.form;
				var filters = form.getSublist('filters');
				var filterButton = form.addButton({
				  id: 'custpage_filter_btn',
				  label: 'Filter Button',
                  functionName: 'applyFilter'
				});
				filterButton.isDisabled = false;
          form.clientScriptModulePath = './FilterButton-DisableRecord.js';
			//}
		}catch(ex){
			log.error({
				title: "Error",
				details: ex.message
			});
		}
    }

    return {
        beforeLoad: beforeLoad
    };
});