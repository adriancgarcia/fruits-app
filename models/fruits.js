// MODEL
// FRUIT {name: STRING, color: STRING, readyToEat: BOOLEAN}
// const fruits = [
//     {name: "Banana", color: "Yellow", readyToEat: false},
//     {name: "Orange", color: "Orange", readyToEat: false},
//     {name: "Strawberry", color: "Red", readyToEat: true}
// ]

// send the data out of this file (export it)
// module.exports = fruits

//=========Using the MONGO DB ============

// import the new connection file
const mongoose = require('./connection');

// the variable holds a schema.
// holds the propertiews and data types to be put into our db
const fruitSchema = new mongoose.Schema({
    name: String,
    color: String,
    readyToEat: Boolean
});

// now that we have a schema (properties and data type diesction for the db), we want to create aa model to be passed into the our db
// the variable should be in Caps by convention
// the fruit' is the name of the collection
// the fruitSchema is the direction or the SCHEMA of the object that will be passed into the collection
const Fruits = mongoose.model('fruit', fruitSchema);
module.exports = Fruits;