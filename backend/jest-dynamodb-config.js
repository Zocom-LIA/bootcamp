module.exports = {
    tables: [
        {
            TableName: "YYGS_",
            KeySchema: [{ AttributeName: "id", KeyType: "HASH"}],
            AttributeDefinitions: [{ AttributeName: "id", AttributeType: "S"}],
            ProvisionedThroughput: { ReadCapacityUnits: 1, WriteCapacityUnits: 1 }
        },
        {
            TableName: "YYGS_Menu",
            KeySchema: [{ AttributeName: "name", KeyType: "HASH"}],
            AttributeDefinitions: [{ AttributeName: "name", AttributeType: "S"}],
            ProvisionedThroughput: { ReadCapacityUnits: 1, WriteCapacityUnits: 1 }
        },
        {
            TableName: "YYGS_Orders",
            KeySchema: [{ AttributeName: "id", KeyType: "HASH"}],
            AttributeDefinitions: [{ AttributeName: "id", AttributeType: "S"}],
            ProvisionedThroughput: { ReadCapacityUnits: 1, WriteCapacityUnits: 1 }
        }
    ]
}