var express = require("express"),
	app = express(),
	port = parseInt(process.env.PORT, 10) || 8080;

var kutya = {
	id: 1,
	name: "Buksi",
	age: 2
};

//Basic auth
/*var auth = express.basicAuth(function(user, pass, callback){
	var result = (user === "csati" && pass === "majom");
	callback(null, result);
});*/

//Logging example
/*app.get("/", function(req, res){
	console.log("authorization:" + req.headers.authorization);
	res.send("Majom");
});*/

app.configure(function(){
	app.use(express.methodOverride());
	app.use(express.bodyParser());
	app.use(express.static(__dirname + "/app"));
	app.use(app.router);
});

app.get("/majom", function(req, res){
	res.send(req.headers);
});

app.get("/service1", function(req, res){
	console.log("service 1 triggered");
	res.send("id: " + kutya.id + ", name: " + kutya.name + ", age: " + kutya.age);
});

app.get("/service2", function(req, res){
	console.log("service 2 triggered");
	kutya.name = "Rex";
});

app.listen(port);
console.log("Now serving at port: " + port);