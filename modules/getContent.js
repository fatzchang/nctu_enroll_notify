var request = require('request');
var cheerio = require('cheerio');

// get page html
function getContent(departmentCode, callback) {
  var formBody = {
    ddlExamList: departmentCode,
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

    if (departmentCode === 'b0478a30-f5ff-4fbd-9756-de91867dc649') {
      // 資甲二次fetch有問題
      callback(err, res, body);
      return;
    }

    // 帶入參數取得指定頁面
    request.post('https://enroll.nctu.edu.tw/', { form: formBody }, callback)
  });
}

module.exports = getContent;