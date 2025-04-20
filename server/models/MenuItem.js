import mongoose from 'mongoose';
const MenuItemSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  category: String
});
export default mongoose.model('MenuItem', MenuItemSchema);
