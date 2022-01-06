const express = require('express');
const categoriesModel = require('../models/category');
// const router = express.Router();

exports.find = (req, res) => {
    categoriesModel.find((error, posts) => {
        if (error) {
            return res.status(400).json({ error: error.message })
        }
        res.json(posts)
    })
};



exports.findOne = (req, res) => {
    categoriesModel.findOne((error, posts) => {
        if (error) {
            return res.status(400).json({ error: error.message })
        }
        res.json(posts)
    });
};

exports.create = (req, res) => {
    const category = new categoriesModel(req.body)
    category
        .save()
        .then((category) => {
            res.json(category);
        })
        .catch((error) => {
            res.status(400).json({ error: error.massage})
        })
};

exports.update = async (req, res) =>{
    try{
        await categoriesModel.findByIdAndUpdate(req.params.id, req.body);
        await categoriesModel.save();
        res.json(post);
    } catch (error) {
        res.status(400).json({ error: error. massage})
    }
};

exports.remove = async (req, res) =>{
   try {
       const author = await categoriesModel.findByIdAndDelete(req.params.id, req.body);
       if (!author) {
           res.status(404).send('No item found')
       };
       response.status(200).send('Delete')
   } catch (error) {
    res.status(400).json({ error: error. massage});
   };
};



// module.exports = router;