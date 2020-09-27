const express = require('express');
const router = express.Router();
const employeeService = require('./employee.service');
const jobService = require('../jobs/jobs.service')
const AppliedJob = require('../jobs/appliedJobModel');

// routes
router.post('/login', authenticate);
router.post('/', register);
router.get('/getjobs', getJobs);
router.get('/apply/:eid/:jid', applyJob);
router.get('/appliedlist/:id', getAppliedJobs);


module.exports = router;

function authenticate(req, res, next) {
    employeeService.authenticate(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => next(err));
}

function register(req, res, next) {
    employeeService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}
function applyJob(req, res, next){
  jobService.applyJob(req.params.eid, req.params.jid).then(res=> res.json(res))
    .catch(err=>next(err));
}
async function getAppliedJobs(req, res, next) {
  const eid = req.params.id;
  try {
    const appliedJobs = await AppliedJob.find({applier_id: _id});
    res.status(200).send(appliedJobs);
  } catch (error) {
    res.status(500).send(error);
  }
}

function getJobs(req, res, next) {
  jobService.getAll().then(jobs=> res.json(jobs))
    .catch(err=>next(err));
}


function getById(req, res, next) {
    jobService.getById(req.params.id)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}
