let express = require("express");
let path = require("path");
let fs = require("fs");
let morgan = require("morgan");

let app = express();

app.use(morgan("combined"));

let staticPath = path.join(__dirname, "static");
app.use(express.static(staticPath));

app.use(function(req, res){
  res.status(404);
  res.send("File not found!");
});

app.listen(3000, function(){
  console.log("Listening on port 3000...");
});
