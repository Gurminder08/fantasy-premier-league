let express = require("express");
let body_parser = require("body-parser");
let exphbs = require("express-handlebars");
let cors = require('cors');
let port = process.env.PORT || 8000;

let app = express();

// enable cors
app.use(cors());

//serve static content for the app and set up body-parser
app.use(express.static("public"));
app.use(body_parser.urlencoded({
    extended: false
}));
app.use(body_parser.json());

//setting up the handlebars
app.engine("handlebars",exphbs({
    defaultLayout: "main"
}));
app.set("view engine","handlebars");

// import routes and give server access to them
let routes = require("./controllers/controller.js");
app.use(routes);  

// start the server listening on a port
app.listen(port, ()=>{
    console.log(`App is listening on PORT ${port}`);
})