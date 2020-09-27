const mongoose = require('mongoose');
const jobSchema = new mongoose.Schema ({

  postedby:{
    type: String
  },
  company_name : {
    type:String,
    required : true,
    min:3,
    max:255
  },

  designaetion:{
    type:String,
    required: true
  },
  description:{
    type:String,
    required:true
  },
  website:{
    type:String
  },
  address: String,
  vacancy: String,
  salary: String
})

module.exports = mongoose.model('Job',jobSchema);

