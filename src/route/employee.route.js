import express from 'express';
import * as employeeController from '../controller/employee.controller.js';

const employeeRouter = express.Router();

employeeRouter.post('/create-employee', employeeController.createEmployee);
employeeRouter.get('/get-employee-name', employeeController.getEmployeeByName);
employeeRouter.put('/update-employee', employeeController.updateEmployee);
employeeRouter.delete('/delete-employee/:id', employeeController.deleteEmployee);

export default employeeRouter;