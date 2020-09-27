const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const Recruiter = db.Recruiter;

module.exports = {
    authenticate,
    getAll,
    getById,
    create
};

async function authenticate({ companyName, password }) {
    const recruiter = await Recruiter.findOne({ companyName });
    if (recruiter && bcrypt.compareSync(password, recruiter.hash)) {
        const token = jwt.sign({ sub: recruiter.id }, config.secret, { expiresIn: '7d' });
        return {
            ...recruiter.toJSON(),
            token
        };
    }
}

async function getAll() {
    return await Recruiter.find();
}

async function getById(id) {
    return await Recruiter.findById(id);
}

async function create(recParam) {
    if (await Recruiter.findOne({ companyName: recParam.companyName })) {
        throw 'CompanyName "' + recParam.companyName + '" is already taken';
    }

    const rec = new Recruiter(recParam);
    if (recParam.password) {
        Recruiter.hash = bcrypt.hashSync(recParam.password, 10);
    }
    await rec.save();
}

