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

//获取不同type的新闻
router.get('/api/top_News/:type', function (req, res) {
    // console.log(req.params.type);
    request('http://api.jisuapi.com/news/get?channel=' + encodeURI(req.params.type) + '&start=0&num=20&appkey=21e41c8472f9add0', function (error, response, body) {
        res.json(body);
    });
    // res.json({a:'a'});
});

// 注册
router.post('/api/register', function (req, res) {
    if (req.body.data) {
        // console.log(req.body.data);
        const email = req.body.data.email;
        const password = req.body.data.password;
        const nickname = req.body.data.nickname;
        const phone = req.body.data.phone;
        let sql = 'select * from user';
        if (email) {
            sql += ' where email = \'' + email + '\'';
            db.query(sql, function (err, rows) {
                if (err) {
                    res.json('fail');
                } else {
                    // 防止email重复
                    if (rows.length == 0) {
                        db.query('insert into user(email,password,nickname,phonenumber) values(\'' + email + '\',\'' + password + '\',\'' + nickname + '\',\'' + phone + '\')', function (err, rows) {
                            if (err) {
                                // console.error(err);
                                res.json('fail');
                                return;
                            } else {
                                // console.log(rows);
                                res.json('success');
                                return;
                            }
                        });
                    } else {
                        res.json('fail');
                    }
                }
            });
        }
    }
});

//登录
router.post('/api/login', function (req, res) {
    if (req.body.data) {
        console.log(req.body.data);
        const email = req.body.data.email;
        const password = req.body.data.password;
        let sql = 'select * from user';
        if (email) {
            sql += ' where email = \'' + email + '\'';
            db.query(sql, function (err, rows) {
                if (err) {
                    res.send('查询失败: ' + err);
                } else {
                    if (rows.length != 0) {
                        //返回的数组先转化为json字符串
                        const rowsString = JSON.stringify(rows);
                        // JSON字符串转换为JSON对象
                        const rowsObject = JSON.parse(rowsString);
                        // console.log(rowsObject[0].password);
                        if (rowsObject[0].password == password) {
                            res.json({
                                login: 'loginSuccess',
                                nickname: rowsObject[0].nickname,
                                email: email,
                                admin: rowsObject[0].admin
                            });
                        } else {
                            res.json({login: 'loginFail', nickname: null, email: null});
                        }
                    } else {
                        res.json({login: 'loginFail', nickname: null, email: null});
                    }
                }
            });
        }
    }
    // res.end();
});

// 写日记
router.post('/api/daily', function (req, res) {
    if (req.body.data) {
        console.log(req.body.data);
        const email = req.body.data.email;
        const title = req.body.data.title == '' ? '无标题' : req.body.data.title;
        //正文内容
        const text = req.body.data.text == '' ? '无内容' : req.body.data.text;
        const time = new Date();
        db.query('insert into daily(title,text,email,zanNumber,report,zan,time) values(\'' + title + '\',\'' + text + '\',\'' + email + '\',0,0,null,\'' + time + '\')', function (err, rows) {
            if (err) {
                console.error(err);
                res.json('dailyfail');
                return;
            } else {
                // console.log(rows);
                res.json('dailysuccess');
                return;
            }
        });
    } else {
        res.end();
    }
});

// 日记Cirlce
router.get('/api/circle', function (req, res) {
    db.query('select * from dailyapproved', function (err, rows) {
        if (err) {
            res.send('查询失败: ' + err);
        } else {
            if (rows.length != 0) {
                //返回的数组先转化为json字符串
                const rowsString = JSON.stringify(rows);
                // JSON字符串转换为JSON对象
                const rowsObject = JSON.parse(rowsString);
                res.json(rowsObject);
            }
            else {
                res.json(null);
            }
        }
    });
});

//点赞
router.post('/api/zan', function (req, res) {
    // console.log(req.body);
    if (req.body) {
        const id = req.body.id;
        const zanNumber = req.body.zanNumber;
        var sql = 'update dailyapproved set zanNumber = \'' + zanNumber + '\' where id = ' + id;
        db.query(sql, function (err, rows) {
            if (err) {
                res.end();
            } else {
                res.json('updatezanNumberSuccess');
            }
        });
    }
});

// 举报
router.post('/api/report', function (req, res) {
    if (req.body) {
        const id = req.body.id;
        let sql = 'update dailyapproved set report =  1 where id = ' + id;
        db.query(sql, function (err, rows) {
            if (err) {
                res.end();
            } else {
                res.json('reportSuccess');
            }
        });
    }
});

// 获取dailyTab数据
router.get('/api/getdailyTab', function (req, res) {
    db.query('select * from daily', function (err, rows) {
        if (err) {
            res.send('查询失败: ' + err);
        } else {
            if (rows.length != 0) {
                //返回的数组先转化为json字符串
                const rowsString = JSON.stringify(rows);
                // JSON字符串转换为JSON对象
                const rowsObject = JSON.parse(rowsString);
                res.json(rowsObject);
            }
            else {
                res.json(null);
            }
        }
    });
});

//删除daily
router.post('/api/deleteDaily', function (req, res) {
    db.query('delete from daily where id = ' + req.body.dailyId, function (err, rows) {
        if (err) {
            res.end();
        } else {
            res.end();
        }
    });
});

//通过---daily
router.post('/api/approve', function (req, res) {
    const dailyId = req.body.info.id;
    const title = req.body.info.title;
    const text = req.body.info.text;
    const email = req.body.info.email;
    const zanNumber = req.body.info.zanNumber;
    const report = req.body.info.report;
    const zan = req.body.info.zan;
    const time = req.body.info.time;
    db.query('insert into dailyapproved(title,text,email,zanNumber,report,zan,time) values(\'' + title + '\',\'' + text + '\',\'' + email + '\',\'' + zanNumber + '\',\'' + report + '\',\'' + zan + '\',\'' + time + '\')', function (err, rows) {
        if (err) {
            res.end();
        } else {
            db.query('delete from daily where id = ' + dailyId, function (err, rows) {
                if (err) {
                    res.end();
                } else {
                    res.end();
                }
            });
        }
    });
});

//获取userTab数据,不查询管理员
router.get('/api/getuserTab', function (req, res) {
    db.query('select * from user where admin = 0 ', function (err, rows) {
        if (err) {
            res.send('查询失败: ' + err);
        } else {
            if (rows.length != 0) {
                //返回的数组先转化为json字符串
                const rowsString = JSON.stringify(rows);
                // JSON字符串转换为JSON对象
                const rowsObject = JSON.parse(rowsString);
                // console.log(rowsObject);
                res.json(rowsObject);
            }
            else {
                res.json(null);
            }
        }
    });
});

//封禁用户
router.post('/api/ban', function (req, res) {
    const id = req.body.info.id;
    const email = req.body.info.email;
    const password = req.body.info.password;
    const nickname = req.body.info.nickname;
    const phonenumber = req.body.info.phonenumber;
    const admin = req.body.info.admin;
    db.query('insert into userbaned(email,password,nickname,phonenumber,admin) values(\'' + email + '\',\'' + password + '\',\'' + nickname + '\',\'' + phonenumber + '\',\'' + admin + '\')', function (err, rows) {
        if (err) {
            res.end();
        } else {
            db.query('delete from user where id = ' + id, function (err, rows) {
                if (err) {
                    res.end();
                } else {
                    console.log('封禁成功');
                    res.end();
                }
            });
        }
    });
});

//获取被封禁的用户信息
router.get('/api/getBanedUser', function (req, res) {
    db.query('select * from userbaned', function (err, rows) {
        if (err) {
            res.send('查询失败: ' + err);
        } else {
            if (rows.length != 0) {
                //返回的数组先转化为json字符串
                const rowsString = JSON.stringify(rows);
                // JSON字符串转换为JSON对象
                const rowsObject = JSON.parse(rowsString);
                console.log(rowsObject);
                res.json(rowsObject);
            }
            else {
                res.json(null);
            }
        }
    });
});

//解封用户
router.post('/api/recoverUser', function (req, res) {
    const id = req.body.info.id;
    const email = req.body.info.email;
    const password = req.body.info.password;
    const nickname = req.body.info.nickname;
    const phonenumber = req.body.info.phonenumber;
    const admin = req.body.info.admin;
    db.query('insert into user(email,password,nickname,phonenumber,admin) values(\'' + email + '\',\'' + password + '\',\'' + nickname + '\',\'' + phonenumber + '\',\'' + admin + '\')', function (err, rows) {
        if (err) {
            res.end();
        } else {
            db.query('delete from userbaned where id = ' + id, function (err, rows) {
                if (err) {
                    res.end();
                } else {
                    console.log('解封成功');
                    res.end();
                }
            });
        }
    });
});


module.exports = router;
