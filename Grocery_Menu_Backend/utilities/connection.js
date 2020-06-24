const{ Schema } = require( "mongoose" );
const Mongoose = require( "mongoose" )
Mongoose.Promise = global.Promise;
const url = "mongodb://localhost:27017/Menu_DB";

let dishSchema = Schema ({
dishId : Number,
dishName : String,
dishSubtext : String,
dishImg : String,
dishType : String,
dishPrice : Number,
dishAvaliability : Number
},{ collection: "Menu" })

let Collection = {}

Collection.getMenu = () => {
    return Mongoose.connect( url, { useNewUrlParser: true , useUnifiedTopology: true } ).then( ( database ) => {
        return database.model( 'Menu', dishSchema )
    } ).catch( ( err ) => {
         err = new Error( "Could not connect to Database" );
        err.status = 500;
        throw err;
    } )
}

module.exports = Collection;