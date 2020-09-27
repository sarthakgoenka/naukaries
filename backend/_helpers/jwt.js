const expressJwt = require('express-jwt');
const config = require('config.json');
const recuiterServices = require('../recruiter/recruiter.service');
const employeeServices = require('../employee/employee.service');

module.exports = jwt;

function jwt() {
    const secret = config.secret;
    return expressJwt({ secret, algorithms: ['HS256'], isRevoked }).unless({
        path: [
            '/employee/',
            '/recruiters/'
        ]
    });
}

async function isRevoked(req, payload, done) {
    const recruiter = await recuiterServices.getById(payload.sub);
    const employee = await  employeeServices.getById(payload.sub);
    if (!recruiter) {
        return done(null, true);
    }
    if (!employee) {
      return done(null, true);
    }
    done();
};
