const express = require('express');
const AuthorsModel = require('../models/author')
exports.find = (req, res) => {
    AuthorsModel.find((error, posts) => {
        if (error) {
            return res.status(400).json({ error: error.message })
        }
        res.json(posts)
    })
};
exports.findOne = (req, res) => {
    AuthorsModel.findOne((error, posts) => {
        if (error) {
            return res.status(400).json({ error: error.message })
        }
        res.json(posts)
    })
};


exports.create = (req, res) => {
    console.log(req.body)
    const author = new AuthorsModel(req.body)
    author
        .save()
        .then((author) => {
            res.json(author);
        })
        .catch((error) => {
            res.status(400).json({ error: error.massage})
        })
};

exports.update = async (req, res) =>{
    try{
        await AuthorsModel.findByIdAndUpdate(req.params.id, req.body);
        await AuthorsModel.save();
        res.json(post);
    } catch (error) {
        res.status(400).json({ error: error. massage})
    }
};

exports.remove = async (req, res) =>{
   try {
       const author = await AuthorsModel.findByIdAndDelete(req.params.id, req.body);
       if (!author) {
           res.status(404).send('No item found')
       };
       response.status(200).send('Delete')
   } catch (error) {
    res.status(400).json({ error: error. massage});
   };
};



