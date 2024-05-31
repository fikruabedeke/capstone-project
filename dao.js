const { MongoClient } = require('mongodb');

//const url = 'mongodb://localhost:27017';
const url ='mongodb+srv://doadmin:Pz45Y7W86vC0Fk19@fkr-bb-bank-mongodb-b15f4a9e.mongo.ondigitalocean.com/?authSource=admin&replicaSet=myRepl';
const client = new MongoClient(url);
const dbName = 'blue-bank-db';


async function create(usrname, usremail, usrpwd) {
  const balance = 100;
  const conn = await client.connect();
  console.log('insertion call connected');
  const db = conn.db(dbName);
  const usercoll = db.collection('bb_customers');
  const user = {name:usrname, email:usremail, password:usrpwd, balance:balance};
  const tmp = await usercoll.insertOne(user)
   .then(()=>{
     console.log('inserting',user);
   }).catch((err)=>{
     console.log('error', err);
   }).finally(()=>{
    client.close();
    console.log('connection closed');
});
return user;
}

async function getAllUsers() {
    const conn = await client.connect();
    console.log('reader call connected');
    const db = conn.db(dbName);
    const allusers = await db.collection('bb_customers').find().toArray()
    .then((rslt)=>{
        console.log('reading users', rslt);
        return JSON.stringify(rslt);
    }).catch((err)=>{
       console.log('reading error', err);
    }).finally(()=>{
        console.log('reading connection closed');
        client.close();
    });
    console.log('read completed');
    return allusers;
  }
  
  module.exports = {create, getAllUsers};