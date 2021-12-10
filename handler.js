const { createNodeMiddleware, createProbot } = require("probot");


const appFn = require("./"); // this is where we import the module.exports
const probot = createProbot();

module.exports = createNodeMiddleware(app, { probot, webhooksPath: '/api/github/webhooks' });