import { MongoClient } from 'mongodb';
// import { use } from 'react';
const client =  new MongoClient("mongodb://localhost:27017/");
await client.connect();

const db = client.db("mongo_nodejs_db");
const userCollection = db.collection("users");



// userCollection.insertOne({name:"vinode technical", age:30});
// userCollection.insertMany([
//      {name: "vinode technical 1", role:"user" ,age: 31},
//      {name: "vinode technical 2", role:"user" ,age: 32}, 
//      {name: "vinode technical 3", role:"user" ,age: 33}
//     ]
// )

// const usersCursor = userCollection.find();
// console.log(usersCursor);

// for await (const user of usersCursor){
//     console.log(user);

// }

// const usersCursor = await userCollection.find().toArray(); 
// console.log(usersCursor);

// const user = await userCollection.findOne(({name: "vinode technical"}));
// console.log(user);
// console.log(user._id.toHexString());

//?update 

// const result = await userCollection.updateOne({ name: "vinode technical 1" },
// { $set: { age: 35 } })
// console.log(result);


// // //?Deleat 
// const result = await userCollection.deleteMany({age: { $gt: 30 }});
// console.log(`${result.deletedCount} document deleted`);

const add =  await userCollection.insertOne({name:"james bond", age: Math.round(Math.random() * 100), role: "user", email: "james.bond@example.com"});
console.log(add);
// console.log(add.age);
console.log(await userCollection.findOne(add.insertedId));
