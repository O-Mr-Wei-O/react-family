var express = require('express');
var app = express();
var router = express.Router();
var request = require('request');
var mysql = require('mysql');
var bodyParser = require('body-parser');

var db = require('../config/db');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/api/top_News/:type', function (req, res) {
    console.log(req.params.type);
    request('http://api.jisuapi.com/news/get?channel=' + encodeURI(req.params.type) + '&start=0&num=20&appkey=21e41c8472f9add0', function (error, response, body) {
        res.json(body);
    });
    // res.json({a:'a'});
});

router.post('/api/register',function (req,res) {
    db.query('select * from user',function(err,rows){
        if(err){
            console.log('error');
        }else {
            console.log(rows);
        }
    });
    res.end();
});

module.exports = router;
