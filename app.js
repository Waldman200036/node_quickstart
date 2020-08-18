/* jshint esversion: 8 */
const {
  MongoClient
} = require("mongodb");

// Replace the uri string with your MongoDB deployment's connection string.
const uri =
  // "mongodb+srv://dbUserAPI:FtnhY6CYKcDtqPz1@cluster0.1mk1d.mongodb.net/sample_mflix?retryWrites=true&w=majorityauthMechanism=SCRAM-SHA-256";
  // mongodb + srv: //dbAPIUser:<password>@cluster0.1mk1d.mongodb.net/<dbname>?retryWrites=true&w=majority
  "mongodb://localhost";
console.log(uri);
const client = new MongoClient(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

async function run() {
  try {
    await client.connect();

    const database = client.db('COVID_19_DB');
    const collection = database.collection('time_series_covid19_deaths_US');

    // Query for data that has the iso3 PRI
    const query = {
      iso3: 'PRI'
    };
    data = await collection.findOne(query);

    console.log(data);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

const getData = () => {
   run().catch(console.dir);
};

exports.getData = getData;