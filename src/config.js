export default {
  s3: {
    REGION: "us-east-1",
    BUCKET: "sls-stack-notes-uploads"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: " https://s4a11q84si.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_rMIy0iriI",
    APP_CLIENT_ID: "2gb3s3op4gmaiama5i86ivf7ft",
    IDENTITY_POOL_ID: "us-east-1:cd5de24d-fe4e-4f3d-96e4-41d29c82bba8"
  }
};
