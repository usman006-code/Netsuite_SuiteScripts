/**
@NApiVersion 2.0
@NScriptType UserEventScript
@NModuleScope SameAccount
*/
define(['N/ui/serverWidget','N/log'], function (serverWidget,log) {
    function addFilterBtn(context) {
		try{
			if(context.type === context.UserEventType.VIEW)
			{
				var pageForm = context.form;
				var filterForm = pageForm.getSublist('filters');
				
				var customFilterBtn = pageForm.addButton({
					id: 'custom_Filter_Btn',
					lable: 'Filter Bill',
				});
				customFilterBtn.isDisabled = true;
			}
		}catch(ex){
			log.error({
				title: "Error",
				details: ex.message
			})
		}
    }

    return {
        beforeLoad: addFilterBtn
    };
});