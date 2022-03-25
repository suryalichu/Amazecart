'use strict';
const httperrors=require('http-errors');
const users=require("./service");
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const res = require('express/lib/response');

let adduser= async (req,res)=>{
try{}
   
};
let chek = async(req,res)=>{
    console.log(req.body);
    res.send(
        "hello"
    )
}

module.exports={
    adduser,
    chek
}