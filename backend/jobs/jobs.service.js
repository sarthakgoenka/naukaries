const config = require('config.json');
const db = require('_helpers/db');
const Job = db.Job;
const AppliedJob = db.ApplyJob;

module.exports = {
  getAll,
  getById,
  createJob,
  update,
  delete: _delete,
  applyJob
};



async function getAll() {
  return await Job.find();
}

async function getById(id) {
  return await Job.findById(id);
}

async function createJob(jobParam) {
  const job = new Job(jobParam);

  // save job
  await job.save();
}

async function update(id, jobParam) {
  const job = await Job.findById(id);

  // validate
  if (!job) throw 'job not found';
  Object.assign(job, jobParam);

  await job.save();
}

async function _delete(id) {
  await Job.findByIdAndRemove(id);
}

async function applyJob(eid, jid){
  const appliedJob = new AppliedJob({
    job_id: req.body.job_id,
    applier_id:req.body.applier_id
  });
}
