const express = require('express');
const cors = require('cors');
const dao = require('./dao.js');
const app = express();

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
        res.send(JSON.parse(docs));
    });
});

const port = 4500;
app.listen(port);
console.log('Sever running on port: '+port);