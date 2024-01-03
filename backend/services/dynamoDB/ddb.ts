const { DocumentClient } = require('aws-sdk/clients/dynamodb');

const ddb = new DocumentClient({
    region: process.env.AWS_REGION
});

module.exports = { ddb };