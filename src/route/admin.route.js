import express from 'express';
import * as adminController from '../controller/admin.controller.js';

const router = express.Router();

router.post('/create-admin', adminController.createAdmin);
router.get('/get-admin-name', adminController.getAdminByName);
router.put('/update-admin', adminController.updateAdmin);
router.delete('/delete-admin/:id', adminController.deleteAdmin);


export default router;
