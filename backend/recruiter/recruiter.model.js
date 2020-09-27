const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  companyName:
    {
      type:String,
      default: null
    },
  password:   {
    type:String,
    default: null
  },
  companyMail:  {
    type:String,
    default: null
  },
  industryType:  {
    type:String,
    default: null
  },
  yearsofExp:  {
    type:String,
    default: null
  },
  About:   {
    type:String,
    default: null
  }
});

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
    }
});

module.exports = mongoose.model('Recruiter', schema);
