const http = require("http");
const api1 = require("./nodecode/api1");
const ap21 = require("./nodecode/register");
api1.use('/',ap21)
const server = http.createServer(api1)

server.listen(3000)


