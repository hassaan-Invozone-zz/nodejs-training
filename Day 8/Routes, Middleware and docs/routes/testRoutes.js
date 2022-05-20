"use strict";
const express = require('express');
let router = express.Router();

router.use((req,res,next) =>{
    console.log(req.url,"@",Date.now());
    next();
});

router.get('/hay',(req,res) =>{
   res.send('how are you?')
});