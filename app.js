const express = require('express');
const path = require('path')
const app = express();
const db = require('./data/database');
const routes = require('./routes/routes')

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, 'views'));

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

app.use(routes)
app.get('/', function(req,res){
    res.render('index');
});

app.get('/my-post', async function(req,res){
    const posts = await db.getDB().collection('poem_Data').find({}, {author:1}, {name:1}, {text:1}, {shape:1}).toArray();
    console.log(posts);
    res.render('my-post', {posts: posts});
});

db.connectToDatabase().then(function(){
    app.listen('3000')
}).catch(function(error){
    console.log('fail to connect')
    console.log(error)
})
