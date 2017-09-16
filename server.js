// DEPENDENCIES
// ==================================================

var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var burgers_controller = require('./controllers/burgers_controller.js');

// Create an instance of the express app
var app = express();

// Specify the port
var PORT = process.env.port || 3000;

var db = require("./models/burger.js");

var router = express.Router();

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(bodyParser.json());
app.use(bodyParser.text({ type: "text/html" }));
app.use(bodyParser.text());

app.use(methodOverride("_method"));

app.use(express.static(process.cwd() + "/public"));

burgers_controller(app);

db.sequelize.sync({force: true}).then(function(){
	app.listen(PORT, function() {
		console.log("Listening on port", PORT);
	});
});
