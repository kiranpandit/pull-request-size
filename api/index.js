const { createNodeMiddleware, createProbot } = require("probot");


const appFn = require("./app"); // this is where we import the module.exports
const probot = createProbot({appId: "157939"});
module.exports = createNodeMiddleware(appFn, { probot});
