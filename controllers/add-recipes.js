let db = require( '../config/dbConfig.js' );

exports.addRecipes = ( req, res ) => {
	res.render( 'addRecipes' );
};

insertRecipe = ( recipeObj ) => {
	return new Promise( ( resolve, reject ) => {
        db.db_connection.collection('recipes').insert( recipeObj, ( err, results ) => {
            if ( results == undefined || results !== undefined )
            	resolve( results );
            else 
            	reject( results );
        });    
	});
};

exports.saveRecipes = ( req, res ) => {
	let recipe =  
	{ 
		name: req.body.name, 
		ingredients: req.body.ingredients, 
		directions:req.body.directions 
    };
    insertRecipe( recipe ).then( ( results) => {
    	if ( results == undefined )
    	{
    		console.log( "rending")
    		res.render( 'home' );
    	}
    	else
    		res.render( 'home' );
    });		
};