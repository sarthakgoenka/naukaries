const config = require('../config.json');
const mongoose = require('mongoose');
const connectionOptions = { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false };
mongoose.connect(process.env.MONGODB_URI || config.connectionString, connectionOptions);
mongoose.Promise = global.Promise;

module.exports = {
    Employee: require('../employee/employee.model'),
    Job : require('../jobs/jobs.model'),
    Recruiter: require('../recruiter/recruiter.model'),
    ApplyJob : require('../jobs/appliedJobModel')
};
