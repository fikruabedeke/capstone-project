const express = require('express');
const cors = require('cors');
const dao = require('./dao.js');
const app = express();

const cors = require("cors");
require("dotenv").config({ path: "./config.env" });

const port = process.env.PORT || 9080;

app.use(express.static('public'));
app.use(cors());

//create account:

app.get('/account/create/:name/:email/:password',function(req, res){
   dao.create(req.params.name, req.params.email, req.params.password)
   .then((result)=>{
     console.log(result);
     res.send(result);
   });
});

//all accounts:

app.get('/account/all', function(req, res){
  let customers = {users:[]};
   dao.getAllUsers()
    .then((docs)=>{
        console.log(docs);
        res.set('Content-Type', 'application/json');
        res.send(JSON.parse(docs));
    });
});

app.listen(port);
console.log('Sever running on port: '+port);