const express = require('express');
const postsControllers = require('../controllers/posts.js');
const postRouter = express.Router();
// const bodyParser = require('body-parser')

postRouter.get('/posts', postsControllers.find)

postRouter.get('/posts/:id', postsControllers.findOne);

postRouter.post('/posts', postsControllers.create);

postRouter.patch('/posts/:id', postsControllers.update);

postRouter.delete('/posts/:id', postsControllers.remove);



module.exports = postRouter;