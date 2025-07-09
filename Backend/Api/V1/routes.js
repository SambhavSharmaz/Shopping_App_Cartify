const express = require('express');
const apiRouter = express.Router();

const { productRouter } = require('./Products/routes.js');

apiRouter.use('/products', productRouter);

module.exports = { apiRouter };
