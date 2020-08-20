var http = require("http");
var app = require("./app");
const server = http.createServer(app);
server.listen(3001, console.log("We have started our server on port 3001"));
