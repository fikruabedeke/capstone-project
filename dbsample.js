    /*const { MongoClient } = require('mongodb');

    const url = 'mongodb://localhost:27017';
    const client = new MongoClient(url);
    const dbName = 'capstoneproject';


    async function main() {
      const connected = await client.connect();
      console.log('Is connectiond success?', connected);
      const db = client.db(dbName);
      
      //collection
      const usercoll = db.collection('users');
      const useri = 'user' + Math.floor(Math.random()*10000);
      const emaili = useri + '@gmail.com';
      const user = {name:useri, email:emaili};
      //insert
      const insert = await usercoll.insertOne(user);
      console.log('Inserted user:', JSON.stringify(insert));
    
    //read
      const getUsers = await db.collection('users').find().toArray(function(err, docs){
        //console.log('Collection', docs);
      });
      console.log('users', getUsers);
      return 'done.';
    }

    main()
      .then(console.log)
      .catch(console.error)
      .finally(() => client.close());*/