var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://lcwben:1988419@ds015962.mlab.com:15962/test_base1');
//创建图表
var noteSchema = new mongoose.Schema({
    title : String,
    done : Boolean
});
//建立model
var noteModel= mongoose.model('note',noteSchema);

/*var dataArr = [{title:'测试数据1。'}];*/

module.exports = (app) => {

    //转换url中的参数
    app.use(bodyParser.urlencoded({ extended: false }));

    //获取数据
    app.get('/todo', (req, res) => {
        noteModel.find({},(err,data)=> {
            if(err) {
                console.log('error occur:' + err.toString());
            }
            res.render('todo',{list:data});
        });
    });

    //传递数据
    app.post('/todo', (req, res) => {
        console.log('new note:');
        console.log(req.body);
        noteModel(req.body).save((err,data)=> {
            if(err) {
                console.log('error occur:' + err.toString());
            }
            res.json(data);
        });
    });

    //删除数据
    app.delete('/todo', (req, res) => {
        noteModel.find({title : req.body.title}).remove((err,data)=> {
            if(err) {
                console.log('error occur in delete:' + err.toString());
            }
            res.json(data);
        });

        /*dataArr = dataArr.filter((data)=> {
            console.log(data.title !== req.body.title);
            return data.title !== req.body.title;
        });*/

/*        res.json(dataArr);*/
    });

    //修改数据
    app.post('/todo/complete',(req, res) => {
        noteModel.find({title : req.body.title, done : false}).update({$set: { done: true }},(err,data)=> {
            if(err) {
                console.log('error occur in update:' + err);
            }
            res.json(data);
        });
    });
}