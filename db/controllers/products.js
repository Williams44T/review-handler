var productModel = require('../models/products.js');

var findProduct = (req, res) => {
  productModel.findOne(2, (err, product) => {
    if (err) { return res.sendStatus(404); }
    res.status(200).json(product);
  });
};

module.exports = {findProduct};