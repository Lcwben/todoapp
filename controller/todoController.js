module.exports = (app) => {
    //获取数据
    app.get('/todo', (req, res) => {
       res.render('todo');
    });

    //传递数据
    app.post('/todo', (req, res) => {

    });

    //删除数据
    app.delete('/todo', (req, res) => {

    });
}