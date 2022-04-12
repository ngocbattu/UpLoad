var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
var dbb = "mongodb+srv://tranthengoc:02072002Ngoc@cluster0.nkn24.mongodb.net/DuLieuData?retryWrites=true&w=majority"
const mongoose = require('mongoose');
mongoose.connect(dbb).catch(error => {
  console.log("lỗi xảy ra " + error)
})
var AnhSchema = new mongoose.Schema({
  Anh:'string' ,
  noiDung : 'string',
  ngayThang : 'string',
  linkAnh : 'string'
});
var Anh = mongoose.model('anhne' , AnhSchema);
router.get('/DanhSach' , function (req , res, next){
  Anh.find({},function (err , data){
    res.render('DanhSach',{data : data});
  });
});
router.get('/DanhSachAnh' , function (req , res, next){
  Anh.find({},function (err , data){
    res.send(data);
  });
});
module.exports = router;
