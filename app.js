const express = require('express');
const todoController = require('./controller/todoController');

var app = express();

app.set('view engine','ejs');
app.use(express.static('./public'));

app.get('/',(req,res) =>{
    res.send('启动成功！');
});

todoController(app);

app.listen('8088');



