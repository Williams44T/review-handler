var productModel = require('../models/products.js');

var findProduct = (req, res) => {
  productModel.findOne(req.params.id, (err, product) => {
    if (err || product.length === 0) { return res.sendStatus(404); }
    res.status(200).send(product[0]);
  });
};

module.exports = {findProduct};