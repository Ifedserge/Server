const express = require('express');
const postsModel = require('../models/post');
// const router = express.Router();
const bodyParser = require('body-parser')

exports.find = (req, res) => {
    postsModel.find((error, post) => {
        if (error) {
            return res.status(400).json({ error: error.message })
        };
        res.json(post)
    });
};

exports.findOne = (req, res) => {
    postsModel.findOne((error, post) => {
        if (error) {
            return res.status(400).json({ error: error.message })
        }
        res.json(post)
    });
};



// module.exports.create = async function (req, res) {
//     try {
//         const post = await new postsModel(req.body);
//         post.save();
//         res.status(200).json(post);
//     }
//     catch {
//         res.status(400).json({error: error.message})
//     };
// };


// exports.create = async (req, res) => {
// try {
//     const post = await new postsModel(req.body)
//     post.save();
//     res.status(201).json(post);
//     console.log('Ошибка тру')
// } catch {
//     res.status(400).json({ error: error.message })
//     console.log('Ошибка сатч')
// }

//     // postsModel.create((error, post) =>{
//     //     if (error) {
//     //         return res.status(400).json({ error: error.message })
//     //     } else {
//     //         const post = new postsModel(req.body)
//     //         post.save().then(savePost => {
//     //             savePost === post
//     //         });
//     //         res.status(201).json(post);
//     //     }
        
//     // }); 

//     // const post = new postsModel({
//     //     name: req.body.name,
//     //     body: req.body.body,
//     //     tags: req.body.tags,
//     //     author: req.body.author
//     // });
//     // try{
//     //     await postsModel.create(postsModel)
//     //     // await postsModel.save();
//     //     res.status(201).json(post);
//     // } catch(error) {
//     //     res.status(400).json({ message : error.message});
//     // }
//     // postsModel.create( req.body);
//     // if (error){
//     //     res.status(401).json({ error: error.massage})
//     // }


//     // const post = req.body; 
//     // this.create(post, function callback(err){
//     //     if (err) return next();
//     //     res.json(user);
//     // })
    

//     // const post = new postsModel(req.body);
//     // try {
//     //     post.save();
//     //     res.send(post)
//     // } catch (error) {
//     //     res.status(401).json({ error: error.massage})
//     //     // console.log("Тут ошибка");
//     // };
// };

exports.update = async (req, res) =>{
    try{
        await postsModel.findByIdAndUpdate(req.params.id, req.body);
        await postsModel.save();
        res.json(post);
    } catch (error) {
        res.status(400).json({ error: error.massage})
    }
};

exports.remove = async (req, res) =>{
   try {
       const post = await postsModel.findByIdAndDelete(req.params.id, req.body);
       if (!post) {
           res.status(404).send('No item found')
       };
       response.status(200).send('Delete')
   } catch (error) {
    res.status(400).json({ error: error.massage});
   };
};

exports.create = (req, res) => {
    console.log(req.body)
    const post = new postsModel(req.body)
    post
        .save()
        .then((post) => res.json(post))
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
};


// module.exports = posts;