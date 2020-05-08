var request = require('request');
var nctu = require('../configs/nctu');

// get page html
function getContent(callback) {
  var { views, validation } = nctu;

  var body = {
    ddlExamList: '60781cbf-44ce-4bfa-9490-a7eabfca7abb',
    ddlExamType: 'a782c851-8dbc-41ed-97eb-b7c16e0de9cc',
    __EVENTTARGET: 'ddlExamList',
    __EVENTARGUMENT: '',
    __LASTFOCUS: '',
    __VIEWSTATE: views,
    __VIEWSTATEGENERATOR: '2B30844A',
    __EVENTVALIDATION: validation
  }

  request.post('https://enroll.nctu.edu.tw/', { form: body }, callback)
}

module.exports = getContent;