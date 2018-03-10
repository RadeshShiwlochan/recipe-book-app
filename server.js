require('dotenv').load();
const express = require( 'express' );
const app     = express();
const port    = 3000;

app.use(express.static( 'public' ) );
app.set( 'view engine', 'ejs' );

let homeController = require( './controllers/home.js' );

app.get( '/', homeController.index );

app.listen( port, () => {
	console.log( `App Listening on port:${port}` );
});