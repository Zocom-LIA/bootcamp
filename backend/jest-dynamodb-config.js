const serverless = require('serverless');

module.exports = async () => {

    const sls = new (require('serverless'))();

    await sls.init();
    const service = await sls.variables.populateService();
    const resources = await service.resources.filter(r => Object.keys(r).includes('Resources'))[0];

    const tables = Object.keys(resources)
        .map(name => resources[name])
        .filter(r => r.Type === 'AWS::DynamoDb::Table')
        .map(r => r.Properties);

    return {
        tables,
        port: 8000
    }

    // tables: [
    //     {
    //         TableName: "YYGSUsers",
    //         KeySchema: [{ AttributeName: "id", KeyType: "HASH"}],
    //         AttributeDefinitions: [{ AttributeName: "id", AttributeType: "S"}],
    //         ProvisionedThroughput: { ReadCapacityUnits: 1, WriteCapacityUnits: 1 }
    //     },
    //     {
    //         TableName: "YYGSMenu",
    //         KeySchema: [{ AttributeName: "name", KeyType: "HASH"}],
    //         AttributeDefinitions: [{ AttributeName: "name", AttributeType: "S"}],
    //         ProvisionedThroughput: { ReadCapacityUnits: 1, WriteCapacityUnits: 1 }
    //     },
    //     {
    //         TableName: "YYGSOrders",
    //         KeySchema: [{ AttributeName: "id", KeyType: "HASH"}],
    //         AttributeDefinitions: [{ AttributeName: "id", AttributeType: "S"}],
    //         ProvisionedThroughput: { ReadCapacityUnits: 1, WriteCapacityUnits: 1 }
    //     }
    // ]
}