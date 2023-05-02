(function execute() {
    // Script include to check the Verification of Student ID and submitted Estimated Expense Values
       vaVars.FinVerify = new FinRegexVerification().FinancialAidRegex(vaInputs.financial_aid_record_creation.student,vaInputs.financial_aid_record_creation.student_id);
    })()