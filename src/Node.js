const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const app = express();
var FCM = require('fcm-node');


app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let AllNotification;



app.post('/', function(req, res) {
  const newMessage = {
    Header: req.body.Header,
    Message: req.body.Message,
  };

  AllNotification = newMessage;
  // console.log(AllNotification);
  config(AllNotification.Header,AllNotification.Message)
  
});

//start your server on port 3001
app.listen(3001, () => {
  console.log('Server Listening on port 3001');
});


function config(head,Mymessage){
  const serverKey = 'AAAAi_c2Kao:APA91bF5IBiiZfuSsllKYXoMqF7xTc6z9ZaNTnuyshqASe6W2xSFjAuyDps8BAyn8uadoI-JCIAYyMmVu2ypQou_NS_rwVXF3ZzNz_mGm-x0n-UzpE79yTMCIRJsbHqsaWgYJWjQBsdP';
  var fcm = new FCM(serverKey);
  if(head != null && Mymessage != null){
    
    var message = {
      to:'cT5GDbhvSN-BQGm2RO2nax:APA91bHCNLAp_U0Wg5xQTOsw3_PgWqeBLT1sYUBuFFnlFSrPoPLunHWlFP_D1uo4mgrjNuLMBTgwb66nmttnmYNxL6gJZ9pJD2X0gdiMXoyxsJm-9488ZFPNlWnmsi_Ju5YgvXQ2HCpp',
      "priority": "high",
            notification: {
                title: head,
                body: Mymessage,
            },
    
            data: { //you can send only notification or only data(or include both)
                title: head,
                body: Mymessage
            }
    
        };
    
        fcm.send(message, function(err, response) {
            if (err) {
                console.log("Something has gone wrong!"+err);
          console.log("Response:! "+response);
            } else {
                // showToast("Successfully sent with response");
                console.log("Successfully sent with response: ", response);
                console.log("HEAD :"+head + " Message :"+Mymessage)
            }
    
        });


  }
  else{
      console.log('Null value')
  }
  
}
