var http = require('http'),
    httpProxy = require('http-proxy');

const dotenv = require('dotenv');
dotenv.config();
const { PORT, TARGETPORT, TARGET } = require("./config");

    //
// Create your proxy server and set the target in the options.
//
// const PORT = 4000;
// TARGETPORT = 7500;
// const TARGET = process.env.TARGET || "127.0.0.1";


//
// Create a proxy server with custom application logic
//
var proxy = httpProxy.createProxyServer({});

//
// Create your target server
//
http.createServer(function (req, res) {
  //res.writeHead(200, { 'Content-Type': 'text/plain' });
  //res.write('request successfully proxied!' + '\n' + JSON.stringify(req.headers, true, 2));
  
  //console.log (req)
  proxy.web(req, res, { target: TARGET });
  //res.end();
}).listen(PORT);
console.log("listening to " + PORT + " and target port is " + TARGETPORT + " request will be sent to " + TARGET)