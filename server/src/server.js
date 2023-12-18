const mongoose = require("mongoose");
const { MongoClient, ServerApiVersion } = require('mongodb');
const { app } = require("./app");
const dotenv = require("dotenv").config();

const url = "mongodb+srv://mjohansson176:I761xK6Dv6uBNYRJ@cluster0.x9flzer.mongodb.net/?retryWrites=true&w=majority";
const dbName = 'Cluster0'; 

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// Create a new MongoClient
const client = new MongoClient(url);

// Connect to the MongoDB server
client.connect(function(err) {
  if (err) {
    console.error('Error occurred while connecting to MongoDB:', err);
    return;
  }
  console.log('Connected successfully to server');

  const db = client.db(dbName);
    // Perform operations here using db object
  // For example, to fetch data from a collection
  const collection = db.collection('sample_geospatial'); // Replace with your collection name

  collection.find({}).toArray(function(err, docs) {
    if (err) {
      console.error('Error occurred while fetching data:', err);
      return;
    }
    console.log('Fetched documents:', docs);
  });
  
  // Close the connection
  client.close();
});


main().catch((err) => console.log(err)); 

async function main() {
  // console.log("Connect to DB & start server");
  // mongoose.set("strictQuery", true);
  // await mongoose.connect(url);
  app.listen(process.env.PORT || 3001, () =>
    console.log(`Server is running on http://localhost:${process.env.PORT}`)
  );
}
