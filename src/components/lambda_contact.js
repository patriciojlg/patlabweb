var AWS = require('aws-sdk');
const googleRecaptcha = require('google-recaptcha');
const captcha = new googleRecaptcha({
    secret: process.env.CAPTCHA_SITE_SECRET
});
var ses = new AWS.SES();
var RECEIVER = 'contacto@patlab.cl';
var SENDER = 'contacto@patlab.cl';
var response = {
    "isBase64Encoded": false,
    "headers": {
        'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'
    },
    "statusCode": 200,
    "body": "{\"result\": \"Success.\"}"
};

exports.handler = function (event, context, callback) {
    var captchaResponse = event.captcha

    captcha.verify({response: captchaResponse}, (error) => {
        if (error) {
            callback(error);
        }
    
        sendEmail(event, function (err, data) {
            callback(null, response);
            context.done(err, null);
            
        });
      })

};


function sendEmail(event, done) {
    var params = {
        Destination: {
            ToAddresses: [
                RECEIVER
            ]
        },
        Message: {
            Body: {
                Text: {
                    Data: 'name: ' + event.name + '\nphone: ' + event.phone + '\nemail: ' + event.email + '\ndesc: ' + event.desc,
                    Charset: 'UTF-8'
                }
            },
            Subject: {
                Data: 'Patlab, nuevo contacto:' + event.name,
                Charset: 'UTF-8'
            }
        },
        Source: SENDER
    };
    ses.sendEmail(params, done);
}