const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  username:String,
  password:String,
  mail:String,
  gender: String,
  mobile: String,
  hometown: String,
  interests: String,
  experience: String,
  languages: String,
  currentLocation: String,
  lastjobexp: String,
  lastjobDesig: String,
  department: String,
});

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
    }
});

module.exports = mongoose.model('Employee', schema);
