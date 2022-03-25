'use strict';

const mongoose= require('mongoose');

const userschema=mongo.Schema({
    firstname: String,
    lastname: String,
    username: String,
    email: String,
    password: String,
    mobile: Number,
    isactive: Boolean,
    createdOn: String,
})
const ex=mongo.model('cart', userschema);

const usersave= async (info)=>{
    try {
        const user=new ex(info);
        const savedetail= await user.save();
        return true;
    }catch (err){
        return false;
    }
};
 
  


module.exports={ usersave, viewuser}