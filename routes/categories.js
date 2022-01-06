const express = require('express');
const categoriesRoutes = require('../controllers/categories.js')
const categoriesRouter = express.Router();

categoriesRouter.get('/categories', categoriesRoutes.find)

categoriesRouter.get('/categories/:id', categoriesRoutes.findOne);

categoriesRouter.post('/categories', categoriesRoutes.create);

categoriesRouter.patch('/categories/:id', categoriesRoutes.update);

categoriesRouter.delete('/categories/:id', categoriesRoutes.remove);

module.exports = categoriesRouter;