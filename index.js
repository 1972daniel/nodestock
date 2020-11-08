// Stock Market Portfolio App By Daniel Jere
const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');
const request = require('request');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;
// use body parser middleware
app.use(bodyParser.urlencoded({extended: false}));

// API KEY  pk_1ff3da3c0c844dd7b21129c0fa79df6d  
// create function    name    call_api 
function call_api(finishedAPI, ticker) {
	request('https://cloud.iexapis.com/stable/stock/'+ ticker +'/quote?token=pk_1ff3da3c0c844dd7b21129c0fa79df6d', {json: true },(err,res,body) =>{
	if (err) {return console.log(err);}
	
	if (res.statusCode == 200){
		//console.log(body);
		finishedAPI(body); 
	};

});

}


// set Handlebars middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
const otherstuff = "Hello There ,this is Daniel with another stuff!";

// set handlebar    index GET route
app.get('/', function(req, res){
    call_api(function(doneAPI) { 
    	res.render('home', {
		stock: doneAPI

    });
	
	},"fb");

});
// set handlebar    index POST  route
app.post('/', function(req, res) {
    call_api(function(doneAPI) {

  
        //posted_stuff = req.body.stock_ticker;
    	res.render('home', {
		stock: doneAPI,	
  });
	
	}, req.body.stock_ticker);

});





// create about page  routes
app.get('/about.html', function(req, res){

	res.render('about', );

});

// set static folder
app.use(express.static(path.join(__dirname, 'public')));


app.listen(PORT, () => console.log('Server Listening on PORT ' + PORT));
