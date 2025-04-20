import { pool } from '../config/postgres.js';

export const getAllMenuItems = async (req, res) => {
  try {
    const category = req.query.category;
    const query = category
      ? 'SELECT * FROM menu_items WHERE category = $1'
      : 'SELECT * FROM menu_items';
    const values = category ? [category] : [];
    const result = await pool.query(query, values);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch menu items' });
  }
};

export const getMenuItemById = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM menu_items WHERE id = $1', [req.params.id]);
    if (result.rows.length === 0) return res.status(404).json({ error: 'Item not found' });
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch item' });
  }
};

export const addMenuItem = async (req, res) => {
  const { name, description, price, category } = req.body;
  if (!name || !price || !category) return res.status(400).json({ error: 'Missing fields' });
  try {
    const result = await pool.query(
      'INSERT INTO menu_items (name, description, price, category) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, description, price, category]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add item' });
  }
};