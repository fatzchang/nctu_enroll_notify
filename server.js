var path = require('path');
var cheerio = require('cheerio');
var getContent = require('./modules/getContent');
var resolve = require('./modules/resolve');
var express = require('express');
var sender = require('./modules/mailgun');
var secret = require('./configs/secret/secret');
var bodyParser = require('body-parser');
var statistic = require('./modules/statistic');

var app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'static')));
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/send', function (req, res) {
    getContent('60781cbf-44ce-4bfa-9490-a7eabfca7abb', function (contentErr, contentRes, body) {
        var $ = cheerio.load(body);
        var result = resolve.byCode($, secret.examCode); // use the exam number

        sender('fatz.tw')(secret.mailgunKey)(result)
            .then(mailgunRes => {
                res.json({ status: 200 });
            })
            .catch(err => {
                res.json({ status: 500 });
            })
    });
});


app.get('/api/get', function (req, res) {
    // body: department, examCode
    const { departmentCode, examCode, memoized } = req.query;

    // 有傳准考證，紀錄
    if (examCode && examCode.length === 7) {
        statistic(examCode);
    }

    // 前端沒有memoize
    if (memoized === 'false') {
        getContent(departmentCode, function (contentErr, contentRes, body) {
            var $ = cheerio.load(body);
            var result = resolve.all($);
            res.json({ data: result })
        })
    } else {
        res.json({ data: [] })
    }
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'static/index.html'));
});

app.get('/v2', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

app.listen(3002, function () {
    console.log('app listening on port 3002!');
});