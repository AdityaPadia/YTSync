const express = require("express");
const app = express();

app.use(express.static("public"));
//Routes /  = Takes to different web pages like www.instagram.com/pixeunt
app.get("/", function(req, res){
	res.render("homepage.ejs");
});

//404 Error route = *
//Error route must always be at the end otherwise no routes will exist

app.get("*", function(req, res){
	res.send("Error! That route doesn't exist. You are lost");
});

app.listen(3000, () => console.log("Node.js WebApp is now running on port 3000"));
