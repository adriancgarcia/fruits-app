// IMPORT DEPEDENCIES & SETUP
require("dotenv").config() // loads the variables in the .env into the process.env object
const express = require("express") // importing the express library
const morgan = require("morgan") // importing the morgan library
const fruits = require("./models/fruits") // return whatever fruits.js exports
const PORT = process.env.PORT // GETTING THE PORT FROM OUR .ENV FILE
const app = express() // express application
const methodOverride = require("method-override") // import middleware for overriding puts and deletes


// MIDDLEWARE (Functions that run between the request and response)
app.use(morgan("dev")) // SETS UP OUT LOGGING MIDDLEWARE
app.use(express.static("public")) // treat the public folder as a static file server
app.use(express.urlencoded({extended:false}))//middleware for parsing urlencoded
app.use(methodOverride("_method")) // method will be overridden when it sees a query string like ?_method="put"



// ROUTES

// INDEX - GET - LIST ALL FRUITS - /fruit
app.get("/fruit", (req, res) => {
  // render an ejs template with all the fruits
  res.render("index.ejs", {fruits})
})

//************// HAS TO BE AFTER INDEX AND BEFORE THE SHOW PAGE //**************** */
// NEW  -  GET  -  SHOW A FORM TO CREATE A FRUIT
app.get("/fruit/new", (req, res) => {
    // render the new template
    res.render("new.ejs")
})

// DESTROY - DELETE - DELETE A FRUIT
app.delete("/fruit/:id", (req, res) =>{
    // grab the id from the url
    const id = req.params.id
    // splice object out of the array
    fruits.splice(id, 1)
    // redirect user back to index
    res.redirect("/fruit")
})

// UPDATE - PUT - UPDATE A FRUIT
app.put("/fruit/:id", (req, res) => {
    // get the id from the  URL
    const id = req.params.id
    // make sure readyToEat is a boolean
    req.body.readyToEat = req.body.readyToEat === "on" ? true : false
    // swap the current version with the newe version in teh array
    fruits[id] = req.body
    // redirect the user backl tp the use page
    res.redirect("/fruit")
})

// CREATE - POST - CREATE A FRUIT
app.post("/fruit", (req, res) => {
    // turn ready to eat property inot a booloean
    // EXPRESSION ? TRUE : FALSE
    req.body.readyToEat = req.body.readyToEat === "on" ? true : false 
    // PUSH THE NEW FRUIT INTO THE ARRAY
    fruits.push(req.body)
    // SEND USER BACK TO THE INDEX
    res.redirect("/fruit") // get => /fruit
  })


// EDIT - GET - RENDER FORM TO UPDATE A FRUIT
app.get("/fruit/:id/edit", (req, res) => {
    // get the index of the specified fruit
    const id = req.params.id
    // get the fruit using the index
    const fruit = fruits[id]
    // render the template, pass the fruit and index
    res.render("edit.ejs", {fruit, id})
})

// SHOW - GET - SHOWS ONE FRUIT - /fruit/:id
app.get("/fruit/:id", (req, res) => {
    // grab the id from the url
    const id = req.params.id
    // create a variable with the fruit specified
    const fruit = fruits[id]
    // dynamically set a class
    const readyClass = fruit.readyToEat ? "green" : "red"
    // render a template with the fruit
    res.render("show.ejs", {fruit, readyClass, id})
})


// LISTENER
app.listen(PORT, () => {
    console.log(`LISTENING ON PORT ${PORT}`)
})