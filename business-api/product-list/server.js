/*jshint esversion: 6 */
var restify = require('restify');


const server = restify.createServer({
  name: 'myapp',
  version: '1.0.0'
});

var product_list = '[{ \
  "id": 1, \
  "name": "apple airpod", \
  "price": 199 \
}, \
{ \
  "id": 2, \
  "name": "samsung bud", \
  "price": 129 \
} \
]';
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());
 
server.get('/echo/:name', function (req, res, next) {
    console.log( req.url + "----" + req.rawHeaders);
    res.send(req.params);
  return next();
});
server.get('/ping', function (req, res, next) {
    console.log( req.url + "----" + req.rawHeaders);
    res.send("pong");
  return next();
});
server.get('/', function (req, res, next) {
    console.log( req.url + "----" + req.rawHeaders);
    var p1 = new prod(1, "apple airpod", 199)
    var p2 = new prod(2, "Samsung Bud", 129)
    var arr = [];
    arr.push(p1);
    arr.push(p2)
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(arr));
    // res.send(req.params);
  return next();
});
server.listen(3000, function () {
  console.log('%s listening at %s', server.name, server.url);
});

class prod {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
  getProductDetails(){
    console.log(prod);
    return prod;
  } 
  // set name(name) {
  //    this._name = name.charAt(0).toUpperCase() + name.slice(1);
  // }
  // get name() {
  //   return this._name;
  // }
  // sayHello() {
  //   console.log('Hello, my name is ' + this.name + ', I have ID: ' + this.id);
  // }
}
