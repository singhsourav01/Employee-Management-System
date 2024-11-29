// src/controllers/adminController.js
import * as adminService from '../repository/admin.repository.js';

export const createAdmin = async (req, res) => {
    const adminData = req.body;
    const newAdmin = await adminService.createAdmin(adminData);
    res.status(201).json({message: "User created successfully"});
};

export const getAdminByName = async (req, res) => {
    const { name } = req.query;
    console.log(name)
    const admin = await adminService.getAdminByName(name);
    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }
    res.status(200).json({message: "User fetched successfully by name"});

};

export const updateAdmin = async (req, res) => {
  const { uuid, name, password } = req.body;
  const admin = await adminService.updateAdmin(uuid, {name, password});
  if (!admin) {
    return res.status(404).json({ message: 'Admin not found' });
  } else{
    
  }
  return res.status(200).json({ message: 'User updated successfully' });

};

export const deleteAdmin = async (req, res) => {
  const { id } = req.params;
  console.log(id)
  const admin = await adminService.deleteAdmin(id);
  if (!admin) {
    return res.status(404).json({ message: 'Admin not found' });
  } else{
    return res.status(200).json({message: "User deleted successfully"})
  }
};
