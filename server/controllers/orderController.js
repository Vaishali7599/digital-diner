import Order from '../models/Order.js';

export const createOrder = async (req, res) => {
  const { customerName, phoneNumber, items, total } = req.body;
  if (!customerName || !phoneNumber || !items || !total) {
    return res.status(400).json({ error: 'Missing fields' });
  }
  try {
    const newOrder = await Order.create({ customerName, phoneNumber, items, total });
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ error: 'Order creation failed' });
  }
};

export const getOrdersByPhone = async (req, res) => {
  try {
    const orders = await Order.find({ phoneNumber: req.params.phoneNumber });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
};
