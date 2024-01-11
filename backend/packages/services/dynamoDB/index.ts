import { DocumentClient } from 'aws-sdk/clients/dynamodb';

const isTest = process.env.JEST_WORKER_ID;

const config = {
    convertEmptyValues: true,
    ...(isTest && {
      endpoint: 'localhost:8000',
      sslEnabled: false,
      region: 'local-env',
      credentials: {
        accessKeyId: 'fakeMyKeyId',
        secretAccessKey: 'fakeSecretAccessKey',
      },
    }),
};

export const ddb = new DocumentClient();