// index.js
import express from 'express';
import mongoose from 'mongoose';
import nodemon from 'nodemon';
import cors from 'cors';
import dotenv from 'dotenv';
import menuRoutes from './routes/menuRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import { pool } from './config/postgres.js';  // Correct import

const app = express();


app.use(cors());

dotenv.config();

// Your routes and logic


app.get('/api/menu', (req, res) => {

  console.log("hijeij")
  res.json(

    { 

    menu: ['item1', 'item2', 'item3'] });  // Example response
});



// Routes
app.use('/api/menu', menuRoutes);
app.use('/api/orders', orderRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// PostgreSQL Test
pool.connect()
  .then(() => console.log('PostgreSQL Connected'))
  .catch(err => console.error('PostgreSQL connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
