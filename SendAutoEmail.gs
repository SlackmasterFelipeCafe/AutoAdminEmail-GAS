function SendAutoEmail () {
  //**********************************************************************************************************
  // Google Application Script (GAS) used to send automatic email reminders for GGGSC Admin Staff          //*
  // add or remove additional emails below seperated by a comma;                                           //*
  // e.g var emailAddress = "pbrown@usgs.gov,jmosley@usgs.gov,mmontour@usgs.gov";                          //*
  
  var emailAddress = "pbrown@usgs.gov,ahari@usgs.gov";
  
  // contact Phil brown (pbrown@usgs.gov) with any questions                                               //*
  //**********************************************************************************************************
  
  var subject = "";
  var message = "";
  var doc = DocumentApp.openByUrl("https://docs.google.com/document/d/1nM5-_2X9JJ90GdiU7SdohXQJ9I8PkKdvtQwrxtAPVcA/edit?usp=sharing");
  var body = doc.getBody();
  var text = body.getText();
  var split1 = [{}];
  var split2 = [{}];
  split1 = text.split('Subject:\n');
  split2 = split1[1].split('Body:\n');
  //Uncomment the below for debugging.  Will print split arrays to Google Logs (View > Logs)
  //Logger.log (split1)  
  //for(var i = 0; i < split2.length; i++){
  //  Logger.log('Array '+ i + ' = ' + split2[i]);
  // }
  subject = split2[0];
  message = split2[1];
  
  
  //!!!Comment or uncomment this statement to disable mail being sent when testing!!!\\
  MailApp.sendEmail(emailAddress, subject, message);   

}
