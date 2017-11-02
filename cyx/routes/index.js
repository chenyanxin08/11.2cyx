var express = require('express');
var router = express.Router();
var mysql=require('mysql');
var con=mysql.createPool({
  host:'localhost',
  user:'root',
  password:'652508',
  database:'item'
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.header('Access-Control-Allow-Origin','*');
  con.query(`SELECT * FROM cyx`, function (err, rows) {
    if(err) throw err
    res.send(rows)
    console.log(rows)
  })
});
router.post('/xin', function(req, res, next) {
  var ipt1=req.body.name;
  var ipt2=req.body.sex;
  res.header('Access-Control-Allow-Origin','*');
  con.query('INSERT INTO cyx (name,sex) VALUES ("'+ipt1+'","'+ipt2+'")', function (err, rows) {
    if(err) throw err
    res.send(rows)
    console.log(rows)
  })
});

module.exports = router;