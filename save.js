/* jshint esversion:8 */
const MongoClient = require('mongodb').MongoClient;


// const uri = "mongodb+srv://dbAPIUser:FtnhY6CYKcDtqPz1@cluster0.1mk1d.mongodb.net/sample_mflix?retryWrites=true&w=majority";
const uri = "mongodb://localhost/Training";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true

});

  console.log('connected');
  // perform actions on the collection object
  async function run(trainee) {
    try {
    
      await client.connect();
      const database = client.db('Training');
      const collection = database.collection('Trainees');

      // Query for a data
      const filter =
         { email: trainee.$set.email };
      console.log(trainee.$set.email);
      const data = await collection.findOneAndUpdate(
        filter  , 
        trainee, // Changed in MongoDB 4.2
        {
          upsert: true ,
          returnNewDocument: true ,
        }
      );
      console.log(data);
      return data;

    } finally {
      await client.close();
    }

  }

const SaveData = (trainee) => {
  return run(trainee).catch(console.dir);

};

exports.SaveData = SaveData;
