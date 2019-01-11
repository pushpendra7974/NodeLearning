/**
 *  File : Server.js
 *  Author: Pushpendra Singh
 *  Date : 11-Jan-2019
 *  Description : A clone of pinterest application
 */

'use strict'

// Import all the necessary packages

var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var ejs = require('ejs');
var engine = require('ejs-mate');
var fileUpload = require('express-fileupload');
var mongoose = require('mongoose');

var app = express();

// Database section start from here
/**
 *  Here I am using mongodb. If you want to use the same then
 *  Goto www.mlab.com and signup for free account and create one database
 *  and add one user to that database.
 *  
 *  dburl: contains the database connection string including username and password.
 */

var dburl ='mongodb://<username>:<userpassword>@ds153814.mlab.com:53814/pinterest';
mongoose.connect(dburl,{useNewUrlParser: true},function(err){
    if(err){
        console.log('Error while connecting to database '+err);
    }else{
        console.log('Successfully connected to database...');
    }
})
// Database connectivity ends here

// Routing Methods Start from here

    app.get('/',function(req,res,next){
        res.json('Hello from the home page of this application!');
    })
// Routing Method Ends Here

// Function to make your server listen at port no. 8090
app.listen(8090,function(err){
    if(err){
        console.log('Error while listening to this port ' +err);
    }else{
        console.log('Server is running and listening to port no. 8090.');
    }
})