const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const fs = require('fs');

const postsRouter = require('./routes/posts.js')
const authorsRouter = require('./routes/authors');
const tagsRouter = require('./routes/tags')
const categoriesRouter = require('./routes/categories')


const app = express();


app.use(bodyParser.json());

const logger = (req, res, next) => {
    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let data = `${hour}:${minutes}:${seconds}`;
    let method = req.method;
    console.log(method, data, req.url)

    let log = {
        method: req.method,
        time: data,
        URL:req.url,
    };
    
    let toJson = JSON.stringify(log);

    fs.appendFile('logs.json', toJson, function(){});
    next();
};

app.use(logger);

app.use(postsRouter);
app.use(tagsRouter);
app.use(categoriesRouter);
app.use(authorsRouter);

app.get('/', (req, res) => {
    res.send('HOMEPAGE')
});



const url = 'mongodb+srv://qwerty:q1w1e1@cluster0.qk3nc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(url, (error) => {
    if (error) {
        console.log(error)
        return
    }

    console.log('It is connected')
    app.listen(3000, () => {
        console.log('Server is running')
    })
})


