
// packages 
var express = require("express")
var app = express()
var	ig = require("instagram-node").instagram();

//static files
app.use(express.static(__dirname + '/public'));


//configure instagram app
ig.use({

	// go to http://instagram.pixelunion.net/ to get your api token
	// paste it here to use the app ( Don't give your token to anybody! :P )
	access_token: 'Your access_token',
})

//templating engine
app.set('view engine', 'ejs');

// set route
app.get('/', function(req, res){
	ig.user_self_media_recent(function(err, medias, pagination, remaining, limit){
		console.log(err, medias)
		res.render("pages/index",{grams: medias})
	})
})


//start server
app.listen(8080)
console.log("checkout http://localhost:8080")