/* jshint esversion: 8 */
const model = require('./app.js');
const sModel = require('./save');
/*
   {
     $set: {
       quantity: 500,
       details: {
         model: "14Q3",
         make: "xyz"
       },
       tags: ["coats", "outerwear", "clothing"]
     }
   }
*/
const trainee = {
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
};
sModel.SaveData(trainee);
//model.getData();