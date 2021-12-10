const { createNodeMiddleware, createProbot } = require("probot");


const appFn = require("."); // this is where we import the module.exports
const probot = createProbot();

module.exports = createNodeMiddleware(appFn, { probot});

// module.exports.webhooks = createLambdaFunction(appFn, {
//   probot: createProbot(),
// });

// This is copied from probot hello world
// const { createNodeMiddleware, createProbot } = require("probot");

// const app = require("../../../app");
// const probot = createProbot();

// module.exports = createNodeMiddleware(app, { probot, webhooksPath: '/api/github/webhooks' });



// this is where we actually want to have some kind of API/listener something
