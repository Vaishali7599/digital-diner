import express from 'express';
import { createOrder, getOrdersByPhone } from '../controllers/orderController.js';
const router = express.Router();

router.post('/', createOrder);
router.get('/:phoneNumber', getOrdersByPhone);

export default router;