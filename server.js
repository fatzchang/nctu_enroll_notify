var path = require('path');
var cheerio = require('cheerio');
var getContent = require('./modules/getContent');
var resolve = require('./modules/resolve');
var express = require('express');
var sender = require('./modules/mailgun');
var secret = require('./configs/secret/secret');
var bodyParser = require('body-parser')

var app = express();
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'static')));
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/send', function (req, res) {
    getContent(function (contentErr, contentRes, body) {
        var $ = cheerio.load(body);
        var result = resolve($, secret.examCode); // use the exam number

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
    console.log(req.body.departmentCode);

    res.json({
        success: true,
        data: [{
            examCode: '1102222',
            formal: '正取',
            type: '一般生',
            status: '報到'
        }]
    })
});




app.listen(3002, function () {
    console.log('app listening on port 3002!');
});