const path = require('path');

const dotenv = require('dotenv').config({
    path: path.resolve(__dirname, 'envVars.env')
});

module.exports = {
    MongoDbUri: 'mongodb+srv://aman:dummyPassword@onlineshop.xvrfr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    StripeApiKey: 'sk_test_51IeEPTSBDInLnMkwWzyoQQtiHYfbgDZyyOwDLlNB7GE43aZFJAL56qe8S781pkECIJscTRnFIuTiyVn1iPXf8ZEO00WWyZp8ym',
    MailgGunDomain: 'http://localhost:3000/',
    MailGunApi_Key: 'b5c85100844cf52b188ffffaaf9cabb5-71b35d7e-ba6b1f34',
}

