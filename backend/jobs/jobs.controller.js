const express = require('express');
const router = express.Router();
const jobService = require('./jobs.service');
// routes
router.get('/', getAll);
router.get('/:id', getById);
router.get('/register', register);
router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;


function register(req, res, next) {
  jobService.create(req.body)
    .then(() => res.json({}))
    .catch(err => next(err));
}

function getAll(req, res, next) {
  jobService.getAll()
    .then(jobs => res.json())
    .catch(err => next(err));
}


function getById(req, res, next) {
  jobService.getById(req.params.id)
    .then(jobs => jobs ? res.json(jobs) : res.sendStatus(404))
    .catch(err => next(err));
}

function update(req, res, next) {
  jobService.update(req.params.id, req.body)
    .then(() => res.json({}))
    .catch(err => next(err));
}

function _delete(req, res, next) {
  jobService.delete(req.params.id)
    .then(() => res.json({}))
    .catch(err => next(err));
}
