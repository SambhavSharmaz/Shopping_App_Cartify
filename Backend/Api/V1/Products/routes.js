const express = require('express');
const { createProdController, getAllProducts , updateProdController, deleteProdController} = require('./controllers');
const productRouter = express.Router();

productRouter.get("/", getAllProducts);

productRouter.post('/', createProdController)

productRouter.delete('/:prodId', deleteProdController)

productRouter.patch('/:prodId', updateProdController)

module.exports = { productRouter };
