'use strict';
const httperrors=require('http-errors');
const jwt=require('jsonwebtoken');

const verifyjwt=(req,res,cb)=>{
    var token=req.headers['token'];
    if(!token) return res.status(401).send({auth:false,message:"no token"});
    console.log(process.env.jwt_secret_key)
    jwt.verify(token, process.env.jwt_secret_key,function(err,decoded){
        if(err){
            res.send(200).send({auth:false,message:"invalid"});
        }
        else{
            console.log("token validated successfully");
            cb();
        }
    });
};
module.exports={verifyjwt}