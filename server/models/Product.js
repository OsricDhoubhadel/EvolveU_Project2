require('./db')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  category: String,
  co2_consumption: Number,
  product_life: Number,
  water_consumption: Number,
  comments: String 
});

module.exports = mongoose.model('Product', productSchema, 'product');