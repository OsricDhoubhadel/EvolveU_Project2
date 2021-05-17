var express = require('express');
var router = express.Router();

const Product = require('../models/Product');

/* List all products. */
router.get('/', async (req, res) => {
  let data = await Product.find({});
  console.info(`records retrieved from mongoose:`, data?.length)
  res.send(data);
});

/* List one product by ID. */
router.get('/:id', async function(req, res) {
  
  try {
    const data = await Product.findOne({_id: req.params.id});
    console.info(`Found Product:`, data)
    res.send(data);
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
});

/* Create a product from form data. */
router.post('/', async (req, res) => {
  let superheroToCreate = req.body
  try {
    let newSuperhero = new Product(superheroToCreate)
    await newSuperhero.save()
    console.log("Created Product", newSuperhero)
    res.send(newSuperhero)  
  }
  catch (error) {
    console.log(error)
    if (error.code === 11000) {
      res.status(409).send('Product ' + superheroToCreate.name + ' already exists');      
    }
    else {
      res.sendStatus(500)
    }
  }
})

/* Update a product by ID. */
router.put('/:name', async function(req, res) {
  let superheroToUpdate = req.body
  try {
    let data = await Product.findByIdAndUpdate(req.params.name, superheroToUpdate);
    console.log("Updated Product", data)
    res.send(data);
  }
  catch(error) {
    console.log(error)
    res.sendStatus(500)
  }
})

/* Delete a product by ID. */
router.delete("/:id", async (req, res) => {
  try {
    const data = await Product.findByIdAndDelete(req.params.id);

    if (!data) {
      res.sendStatus(404);
    } else {
      console.log("Deleted Product", data);
      res.send(data);
    }
  } catch (error) {
    console.log(error)
    res.sendStatus(500)  }
});

module.exports = router;
