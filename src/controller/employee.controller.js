// src/controllers/EmployeeController.js
import * as EmployeeService from '../repository/employee.repository.js';

export const createEmployee = async (req, res) => {
    const EmployeeData = req.body;
    const newEmployee = await EmployeeService.createEmployee(EmployeeData);
    res.status(201).json({message: "User created successfully"});
};

export const getEmployeeByName = async (req, res) => {
    const { name } = req.query;
    console.log(name)
    const Employee = await EmployeeService.getEmployeeByName(name);
    if (!Employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.status(200).json({message: "User fetched successfully by name"});

};

export const updateEmployee = async (req, res) => {
  const { uuid, ...rest } = req.body;
  const Employee = await EmployeeService.updateEmployee(uuid, rest);
  if (!Employee) {
    return res.status(404).json({ message: 'Employee not found' });
  } else{
    
  }
  return res.status(200).json({ message: 'User updated successfully' });

};

export const deleteEmployee = async (req, res) => {
  const { id } = req.params;
  console.log(id)
  const Employee = await EmployeeService.deleteEmployee(id);
  if (!Employee) {
    return res.status(404).json({ message: 'Employee not found' });
  } else{
    return res.status(200).json({message: "User deleted successfully"})
  }
};
