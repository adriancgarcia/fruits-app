// IMPORT DEPEDENCIES & SETUP
require("dotenv").config() // loads the variables in the .env into the process.env object
const express = require("express") // importing the express library
const morgan = require("morgan") // importing the morgan library
const PORT = process.env.PORT // GETTING THE PORT FROM OUR .ENV FILE
const app = express() // express application
const methodOverride = require("method-override") // import middleware for overriding puts and deletes
const fruitsRouter = require("./controllers/fruits")


// MIDDLEWARE (Functions that run between the request and response)
app.use(morgan("dev")) // SETS UP OUT LOGGING MIDDLEWARE
app.use(express.static("public")) // treat the public folder as a static file server
app.use(express.urlencoded({extended:false}))//middle ware for parsing urlencoded
app.use(methodOverride("_method")) // method will be overridden when it sees a query string like ?_method="put"
app.use("/fruit", fruitsRouter) //use the fruitsRouter for any urls that start with /fruit




// LISTENER
app.listen(PORT, () => {
    console.log(`LISTENING ON PORT ${PORT}`)
})