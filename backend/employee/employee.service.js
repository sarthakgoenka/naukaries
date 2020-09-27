const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const Employee = db.Employee;

module.exports = {
  authenticate,
  create,
  getById
};

async function authenticate({ mail, password }) {
  const Employee = await Employee.findOne({ mail });
  if (Employee && bcrypt.compareSync(password, Employee.hash)) {
    const token = jwt.sign({ sub: Employee.id }, config.secret, { expiresIn: '7d' });
    return {
      ...Employee.toJSON(),
      token
    };
  }
}
async function create(EmployeeParam) {
  if (await Employee.findOne({ mail: EmployeeParam.mail })) {
    throw 'Mail "' + EmployeeParam.mail + '" is already taken';
  }

  const Employee = new Employee(EmployeeParam);
  if (EmployeeParam.password) {
    Employee.hash = bcrypt.hashSync(EmployeeParam.password, 10);
  }
  await Employee.save();
}

async function getById(id){
  return await Employee.findById(id);
}
