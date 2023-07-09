// DO NOT DELETE COMMENTS
//WHole is being converted from commonJS to ESM
"use strict";
//var express = require('express');
//import express
import express from 'express';
import path from 'node:path';

//console.log(path);



var port = process.env.PORT || 3000;
var app = express(),
//path = require('path'),

// __dirname is path.resolve()

//publicDir = path.join(__dirname,'public');
publicDir = path.join(path.resolve(),'public');


app.use(express.static(publicDir))

app.listen(port);


//module.exports = app;
export default app;