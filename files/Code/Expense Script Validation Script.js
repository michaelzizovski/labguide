(function execute() {
    
    vaSystem.sendBatchedMessages(); // send any batched messages
    vaVars.ReviewNeeded = false; // set review needed to false
    var grExp = new GlideRecord('x_snc_sfin_aid_estimated_expenses') // expense Table
    grExp.addEncodedQuery('financial_aid='+ vaInputs.financial_aid_record_creation);
    grExp.query();

      while(grExp.next()){

         var VerifyReg = new FinRegexVerification();
         var fieldMessage='';

         fieldMessage = VerifyReg.ExpenseVerify( grExp.expense_type,grExp.dollar_value); 
         // call expenseverify script method
          if(fieldMessage != 'Pass'){
            // if it did not pass set the expense record to ReviewNeeded = true
                vaVars.ReviewNeeded = true;
                grExp.setValue('review_needed',true);
                grExp.update();
                 break;
                }
      }
    })()