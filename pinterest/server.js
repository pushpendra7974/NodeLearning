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

