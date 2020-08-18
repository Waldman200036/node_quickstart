/* jshint esversion: 8 */
// const model = require('./app.js');
var sModel = require('./save');
var trainee = {
    firstName: 'Jimmy',
    lastName: 'Smith',
    Organization: 'J6',
    branch: 'AIR FORCE',
    facility: 'Bergstrom',
    email: 'djff.viv@mail.mil',
    phone: '214-474-5383',
    date: '8/17/2020',
    time: '3:30 pm'
};
var TraineeModel = require('./models/TraineeModel');
const update = new TraineeModel(trainee);
console.log(update.Trainee());
// sModel.SaveData(trainee);
//model.getData();
