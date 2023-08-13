const Employee = require('../../models/empolyee');
const bcrypt = require('bcryptjs');

const signIn = async (req, res) => {

    const { email, password } = req.body;
    const employee = await Employee.findOne({email: email});
    if (!employee) {
        return res.status(400).json({message: 'Invalid email or password'});
    }
    const isMatch = await bcrypt.compare(password, Employee.password);
    if (!isMatch) {
        return res.status(400).json({message: 'Invalid email or password'});
    }
    res.status(200).json(employee);

}

const signUp = async (req, res) => {
    const employee = req.body;
    const employeeFromDb = await Employee.findOne({email: employee.email});
    if (employeeFromDb) {
        return res.status(400).json({message: 'Employee already exists'});
    }
    const newEmployee = new Employee(employee);
    const hashedPassword = await bcrypt.hash(employee.password, 10);
    newEmployee.password = hashedPassword;
    await newEmployee.save();
    res.status(201).json(newEmployee);
}

module.exports = {
    signIn,
    signUp
}