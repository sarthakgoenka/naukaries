const mongoose = require('mongoose');
const AppliedjobSchema = new mongoose.Schema ({

  job_id : {
    type:String,
    required : true,
    min:3,
    max:255
  },
  applier_id : {
    type:String,
    required : true,
    min:3,
    max:255
  },

  date : {
    type:Date,
    required : true,
    default:Date.now()
  }
})

module.exports = mongoose.model('Applied-Job',AppliedjobSchema);
