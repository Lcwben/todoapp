var bodyParser = require('body-parser');

var dataArr = [{title:'测试数据1。'}];

module.exports = (app) => {

    app.use(bodyParser.urlencoded({ extended: false }));

    //获取数据
    app.get('/todo', (req, res) => {
       res.render('todo',{list:dataArr});
    });

    //传递数据
    app.post('/todo', (req, res) => {
        console.log(req.body);
        dataArr.push(req.body);
    });

    //删除数据
    app.delete('/todo', (req, res) => {

    });
}