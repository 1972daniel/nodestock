// Stock Market Portfolio App By Daniel Jere
const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');

const PORT = process.env.PORT || 5000;
// set Handlebars middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
const otherstuff = "Hello There ,this is Daniel with another stuff!";
// set handlebar routes
app.get('/', function(req, res){

	res.render('home', {
		stuff: otherstuff

	});

});


// set static folder
app.use(express.static(path.join(__dirname, 'public')));


app.listen(PORT, () => console.log('Server Listening on PORT ' + PORT));
