
var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');




var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'mukunde',
	password : 'thepasswordx',
	database : 'valid_data'
});



var app = express();

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));


app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());



app.use(express.static(path.join(__dirname , '/public')));



app.get('/toyota', (request, response)=> {
	response.sendFile(path.join(__dirname + '/toyota.html'));
});



app.post("/toyota", (req, res) => {
	const customerID = req.body.id_value;
	const name = req.body.name_value;
	const state = req.body.state_input;
	const description = req.body.description_value;
	const quantity = req.body.quantity;
	const price = req.body.price_part;
	const shipping = req.body.choice;
  
	const queryString =
	  "INSERT INTO `data` (`customerID`, `name`, `state`, `description`, `quantity`, `price`, `shipping`) VALUES (?, ?, ?, ?, ?, ?, ?)";
	  connection.query(
	  queryString,
	  [customerID, name, state, description, quantity, price, shipping],
	  (err, result, field) => {
		if (err) {
		  console.log(`an error has occured  ${err}`);
		  result.status(500);
		  return;
		}
		}
	);
  });	


const PORT = process.env.PORT || 5006

app.listen(PORT,()=>{
	console.log(`server is running on ${PORT}`)
})
