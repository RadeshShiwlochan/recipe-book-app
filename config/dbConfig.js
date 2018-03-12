const mongodb = require( 'mongodb' );
const uri     = process.env.URI;
let db_connection;

mongodb.MongoClient.connect( uri, ( err, db ) => {
	if ( err )
		console.log( "ERROR IN CONNECTION TO MLAB", err );
	else
	    db_connection = db;
});

module.exports.db_connection = db_connection;