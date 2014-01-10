var express = require("express"),
	app = express(),
	port = parseInt(process.env.PORT, 10) || 8080;

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

app.listen(port);
console.log("Now serving the app at http://localhost:" + port);