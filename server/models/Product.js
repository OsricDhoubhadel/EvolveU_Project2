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
  co2_consumption: String,
  product_life: String,
  water_consumption: String
});

module.exports = mongoose.model('Product', productSchema, 'product');