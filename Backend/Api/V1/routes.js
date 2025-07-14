const express = require('express');
const apiRouter = express.Router();

const { productRouter } = require('./Products/routes.js');
const { authRouter } = require('./Auth/routes.js');

apiRouter.use('/products', productRouter);
apiRouter.use('/auth',authRouter)

module.exports = { apiRouter };
