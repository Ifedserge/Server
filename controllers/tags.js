const express = require('express');
const tagsModel = require('../models/tag');
// const router = express.Router();

exports.find = (req, res) => {
    tagsModel.find((error, posts) => {
        if (error) {
            return res.status(400).json({ error: error.message })
        }
        res.json(posts);
    });
};
exports.findOne = (req, res) => {
    tagsModel.findOne((error, posts) => {
        if (error) {
            return res.status(400).json({ error: error.message })
        }
        res.json(posts)
    });
};


exports.create = (req, res) => {
    const post = new tagsModel(req.body)
    post
        .save()
        .then((post) => {
            res.json(post);
        })
        .catch((error) => {
            res.status(400).json({ error: error. massage})
        })
};

exports.update = async (req, res) =>{
    try{
        await tagsModel.findByIdAndUpdate(req.params.id, req.body);
        await tagsModel.save();
        res.json(post);
    } catch (error) {
        res.status(400).json({ error: error. massage})
    }
};

exports.remove = async (req, res) =>{
   try {
       const author = await tagsModel.findByIdAndDelete(req.params.id, req.body);
       if (!author) {
           res.status(404).send('No item found')
       };
       response.status(200).send('Delete')
   } catch (error) {
    res.status(400).json({ error: error. massage});
   };
};

// module.exports = router;