/**
 *  Base/Main file for app
 */

//Dependencies
const express = require('express')
const env = require('dotenv').config();
const { PORT } = process.env;


/**
 * abb container
 * initialize app
 */

const app = express();

//Basic end point for  http get verb
app.get('/', function (req, res) {
    res.type('json');
    res.status(200).send({ "sucess": "end point resolved" })
})





//start and listen to server  
app.listen(PORT, () => { console.log(`server is up and listening on port ${PORT}`) })