const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  imagePublicId: {
    type: String, // Public ID of the image in Cloudinary
  },
  price: { type: Number, required: true },
  size: {
    type: String,
    enum: ['XS', 'S', 'M', 'L', 'XL', 'XXL', ''],
    required: true,
  },
  description: { type: String, required: true },  
  category: {
    type: String,
    enum: [
    "Men's Clothing",
    "Women's Clothing",
    "Kids' Clothing",
    "Shoes",
    "Bags & Accessories",
    "Clearance Sale"
],
    required: true,
  },
  inStock: {
    type: Boolean,
    default: true,
  },
  tag: {
    type: String,
    enum: ['New Arrival', 'Bestseller', 'Featured'],
    default: 'New Arrival',
  },
  collection: {
    type: String,
    enum: ['Instagram', ''],
    default: '',
  },
  dateAdded: { type: Date, default: Date.now },
  rating: { type: Number, min: 0, max: 5, default: 0 },
  likes: { type: Number, default: 0 },
});

module.exports = mongoose.model("Product", productSchema);
