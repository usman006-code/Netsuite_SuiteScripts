/**
 * @NApiVersion 2.0
 * @NScriptType ClientScript
 * @NModuleScope SameAccount
 */

define(['N/currentRecord'], function (currentRecord) {
  function pageInit() {}
    function applyFilter() {
      var record = currentRecord.get();
      var sublistId = 'custpage_bill_splits';
  
      // Iterate through each line in the sublist
      var lineCount = record.getLineCount({ sublistId: sublistId });
      for (var i = 0; i < lineCount; i++) {
        var checkboxField = sublistId + '_checkbox';
        var doNotPay = sublist.getSublistValue({
          sublistId: 'item',
          fieldId: 'do_not_pay',
          line: i
        });
  
        // If the record should be grayed out or uncheckable based on your filter condition
        if (!doNotPay) {
          record.selectLine({ sublistId: sublistId, line: i });
          record.setCurrentSublistValue({
            sublistId: sublistId,
            fieldId: checkboxField,
            value: false, // Uncheck the checkbox
            ignoreFieldChange: true,
          });
          record.commitLine({ sublistId: sublistId });
        }
      }
  
      // Save the changes
      record.save();
    }
  
    return {
      pageInit:pageInit,
      applyFilter: applyFilter,
    };
  });