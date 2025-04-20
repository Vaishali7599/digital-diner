import express from 'express';
import { getAllMenuItems, getMenuItemById, addMenuItem } from '../controllers/menuController.js';
const router = express.Router();

router.get('/', getAllMenuItems);
router.get('/:id', getMenuItemById);
router.post('/', addMenuItem); // Bonus

export default router;
