const path = require('path');

const dotenv = require('dotenv').config({
    path: path.resolve(__dirname, 'envVars.env')
});

module.exports = {
    MongoDbUri: process.env.MONGO_DB_URI,
    StripeApiKey: process.env.STRIPE_API_KEY,
    MailgGunDomain: process.env.MAILGUN_DOMAIN || 'http://localhost:3000/',
    MailGunApi_Key: process.env.MAILGUN_API_KEY,
}

