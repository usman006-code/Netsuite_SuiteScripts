/**
 * @NApiVersion 2.x
 * @NScriptType ClientScript
 * @NModuleScope SameAccount
 */

define(['N/currentRecord'], function (currentRecord) {
    function applyFilter() {
      var record = currentRecord.get();
      var sublistId = 'custpage_bill_splits';
  
      // Iterate through each line in the sublist
      var lineCount = record.getLineCount({ sublistId: sublistId });
      for (var i = 0; i < lineCount; i++) {
        // Get the checkbox field for each line
        var checkboxField = sublistId + '_checkbox'; // Replace with the actual checkbox field ID
        var isChecked = record.getSublistValue({
          sublistId: sublistId,
          fieldId: checkboxField,
          line: i,
        });
  
        // If the record should be grayed out or uncheckable based on your filter condition
        if (isChecked) {
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
      applyFilter: applyFilter,
    };
  });