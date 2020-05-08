var request = require('request');
var cheerio = require('cheerio');

// get page html
function getContent(callback) {
  var formBody = {
    ddlExamList: '60781cbf-44ce-4bfa-9490-a7eabfca7abb',
    ddlExamType: 'a782c851-8dbc-41ed-97eb-b7c16e0de9cc',
    __EVENTTARGET: 'ddlExamList',
    __EVENTARGUMENT: '',
    __LASTFOCUS: '',
    __VIEWSTATE: '',
    __VIEWSTATEGENERATOR: '',
    __EVENTVALIDATION: ''
  }

  request('https://enroll.nctu.edu.tw/', (err, res, body) => {
    // 不帶參數取得原始頁面
    var $ = cheerio.load(body);
    formBody.__VIEWSTATE = $('#__VIEWSTATE').val();
    formBody.__EVENTVALIDATION = $("#__EVENTVALIDATION").val();
    formBody.__VIEWSTATEGENERATOR = $("#__VIEWSTATEGENERATOR").val();

    // 帶入參數取得指定頁面
    request.post('https://enroll.nctu.edu.tw/', { form: formBody }, callback)
  });
}

module.exports = getContent;