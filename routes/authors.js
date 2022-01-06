const express = require('express');
const AuthorRoutes = require('../controllers/authors');
const router = express.Router();



router.get('/authors', AuthorRoutes.find)

router.get('/authors/:id', AuthorRoutes.findOne);

router.post('/authors', AuthorRoutes.create);

router.patch('/authors/:id', AuthorRoutes.update);

router.delete('/authors/:id', AuthorRoutes.remove);

module.exports = router;