(function execute(){

    // The following code uses a default vaSystem method to attach the uploaded attachment to our target record    
    vaSystem.attachToRecord(vaInputs.upload_file.getValue(),'x_snc_sfin_aid_financial_aid',vaInputs.financial_aid_record_creation);

    })()