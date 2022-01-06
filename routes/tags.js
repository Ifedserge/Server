const express = require('express');
const tagsRoutes = require('../controllers/tags.js')
const tagRouter = express.Router();

tagRouter.get('/tags', tagsRoutes.find)

tagRouter.get('/tags/:id', tagsRoutes.findOne);

tagRouter.post('/tags', tagsRoutes.create);

tagRouter.patch('/tags/:id', tagsRoutes.update);

tagRouter.delete('/tags/:id', tagsRoutes.remove);






module.exports = tagRouter;