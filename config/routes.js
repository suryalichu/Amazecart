const ex= require('express');
const rou=ex.Router();
const user=require("../controller/user/index");

function surya(app){
    rou.post("/add",user.adduser);
    rou.post("/chek",user.chek);
    app.use("/api",rou);
}

module.exports= surya;