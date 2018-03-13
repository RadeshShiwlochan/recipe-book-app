require('dotenv').load();
const express     = require( 'express' );
const bodyParser  = require( 'body-parser' );
const consolidate = require( 'consolidate' );
const app         = express();
const port        = 3000;

app.use(express.static( 'public' ) );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: false } ) );
app.set( 'view engine', 'ejs' );

let homeController = require( './controllers/home.js' );
let addRecipesController = require( './controllers/add-recipes.js' );

app.get( '/', homeController.index );
app.get( '/add-recipes', addRecipesController.addRecipes );

app.post( '/save-recipes', addRecipesController.saveRecipes );

app.listen( port, () => {
	console.log( `App Listening on port:${port}` );
});