import { MongoClient } from 'mongodb';
const client =  new MongoClient("mongodb://localhost:27017/");
await client.connect();

const db = client.db("mongo_nodejs_db");
const userCollection = db.collection("users");

userCollection.insertOne({name:"vinode technical", age:30});
userCollection.insertMany([
     {name: "vinode technical 1", role:"user" ,age: 31},
     {name: "vinode technical 2", role:"user" ,age: 32}, 
     {name: "vinode technical 3", role:"user" ,age: 33}
    ]
)