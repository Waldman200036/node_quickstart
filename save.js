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
         {email: trainee.email };

      const data = await collection.findOneAndUpdate(
        filter  , 
        {
          $set: {
            firstName: 'Jimmy',
            lastName: 'Smith',
            Organization: 'J6',
            branch: 'AIR FORCE',
            facility: 'Bergstrom',
            email: 'djff.viv@mail.mil',
            phone: '214-474-5383',
            date: '8/17/2020',
            time: '3:30 pm'
          }
        }, // Changed in MongoDB 4.2
        {
          upsert: true ,
          returnNewDocument: true ,
        }
      );
      return data;

    } finally {
      await client.close();
    }

  }

const SaveData = (trainee) => {
  return run(trainee).catch(console.dir);

};

exports.SaveData = SaveData;