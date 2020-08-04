const dev = {
  STRIPE_KEY: "pk_test_A71jVdnMC5Gm4vkcf9VpErgH00EhAfcuY2",
  s3: {
    REGION: "us-east-1",
    BUCKET: "sls-notes-app-2-api-dev-attachmentsbucket-xzlr0gl87ns8"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://9xovh6m5ni.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_ih6qYXHZk",
    APP_CLIENT_ID: "2utm039tstac9g1upi9com6sfe",
    IDENTITY_POOL_ID: "us-east-1:4628872d-1478-45b9-825c-ef9730b130d3"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_A71jVdnMC5Gm4vkcf9VpErgH00EhAfcuY2",
  s3: {
    REGION: "us-east-1",
    BUCKET: "sls-notes-app-2-api-prod-attachmentsbucket-1s13arygq3ugk"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://gp0meoq2th.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_R3wABxVnJ",
    APP_CLIENT_ID: "7thdesoavpu2jppo2o7p4rdi34",
    IDENTITY_POOL_ID: "us-east-1:f351a765-db78-40b8-9165-79091f3cec68"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === "prod" ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
