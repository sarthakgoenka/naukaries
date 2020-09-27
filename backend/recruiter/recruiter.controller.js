const express = require('express');
const router = express.Router();
const recruiterService = require('./recruiter.service');
const jobService = require('../jobs/jobs.service');
const employeeService = require('../employee/employee.service');
// routes
router.post('/login', authenticate);
router.post('/addrecruiter', register);
router.get('/', getAll);
router.get('/Job/:id', getPostedJob);
router.get('/Seeker/:id', getSeeker);
router.get('/:id', getById);
router.post('/addjob', addJob);


module.exports = router;

function authenticate(req, res, next) {
    recruiterService.authenticate(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => next(err));
}

function register(req, res, next) {
  recruiterService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getAll(req, res, next) {
  recruiterService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}


function getById(req, res, next) {
  recruiterService.getById(req.params.id)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}

function getPostedJob(req, res, next){
  jobService.getById(req.params.id)
    .then(job=> job? res.json(job) : res.sendStatus(404))
    .catch(err=> next(err));
}

function getSeeker(req, res, next){
  employeeService.getById(req.params.id)
    .then(seeker=> seeker? res.json(seeker) : res.sendStatus(404))
    .catch(err=> next(err));
}
function addJob(req, res, next){
  jobService.createJob(req.body)
    .then(() => res.json({}))
    .catch(err => next(err));
}
