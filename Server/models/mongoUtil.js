require('dotenv').config({ path: __dirname + '/./../../.env' });
const mongoose = require('mongoose');

// remove the deprecation warning
// SOURCE: https://stackoverflow.com/questions/74747476/deprecationwarning-mongoose-the-strictquery-option-w-ill-be-switched-back-to
mongoose.set('strictQuery', false);

// connect to mongoDB
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'SleepQualityApp',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

module.exports = mongoose;


// mongoose.connect('mongodb://user:pass@127.0.0.1:port/database');
// 'mongodb://