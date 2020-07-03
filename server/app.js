const express = require('express');
var bodyParser = require('body-parser');
const  userData = require("./data/users.json")
const app = express();

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get("/", function(req, res){
    res.send("Hello Node")
})
app.get("/users", function(req, res){
   // console.log(userData);
    res.send(userData);
})
app.post("/authenticate", function(req, res){
    const userId = req.query.userId;
    const password = req.query.password;
    if(userData){
        let result = "Failure";
        let user ;
        userData.forEach((item)=>{
            //console.log(req);
            if(item.userId == userId && item.password == password){
                result = "Success";
                user=item;
            }
        })
        res.send({"result":result,user:user});
    }
    
})
app.listen('9000');