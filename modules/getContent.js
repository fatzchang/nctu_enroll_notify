const axios = require('axios').default;
const qs = require('qs');
const formBody = require('../configs/formBody');
const formReplace = require('../configs/formReplace');

// get page html
async function getContent(departmentCode, callback) {
  const data = {
    ...formBody
  }
  data.ddlExamList = departmentCode;
  if (departmentCode === 'b0478a30-f5ff-4fbd-9756-de91867dc649') {
    data.__VIEWSTATE = formReplace.__VIEWSTATE;
    data.__EVENTVALIDATION = formReplace.__EVENTVALIDATION;
  }

  axios.post('https://enroll.nctu.edu.tw', qs.stringify(data), {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    }
  }).then(res => {
    callback(res.data);
  }).catch(err => {
    console.log(err);
  });
}

module.exports = getContent;