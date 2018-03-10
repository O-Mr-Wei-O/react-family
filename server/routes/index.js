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

router.post('/api/register', function (req, res) {
    if (req.body.data) {
        console.log(req.body.data);
        const email = req.body.data.email;
        const password = req.body.data.password;
        const nickname = req.body.data.nickname;
        const phone = req.body.data.phone;
        db.query('insert into user(email,password,nickname,phonenumber) values(\'' + email + '\',\'' + password + '\',\'' + nickname + '\',\'' + phone + '\')', function (err, rows) {
            if (err) {
                console.error(err);
                res.json('fail');
                return;
            } else {
                // console.log(rows);
                res.json('success');
                return;
            }
        });
    }
});

router.post('/api/login', function (req, res) {
    if (req.body.data) {
        // console.log(req.body.data);
        const email = req.body.data.email;
        const password = req.body.data.password;
        let sql = 'select * from user';
        if (email) {
            sql += ' where email = \'' + email + '\'';
            db.query(sql, function (err, rows) {
                if (err) {
                    res.send('查询失败: ' + err);
                } else {
                    //返回的数组先转化为json字符串
                    const rowsString = JSON.stringify(rows);
                    // JSON字符串转换为JSON对象
                    const rowsObject = JSON.parse(rowsString);
                    console.log(rowsObject[0].password);
                    if (rowsObject[0].password == password) {
                        res.json('loginSuccess');
                    }
                }
            });
        }
    }
    // res.end();
});

module.exports = router;
