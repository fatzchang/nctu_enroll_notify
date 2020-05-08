const axios = require('axios').default;
const secret = require('../configs/secret/secret');

const mailgun = domain => apiKey => body => axios({
  method: 'post',
  url: `https://api.mailgun.net/v3/${domain}/messages`,
  responseType: 'json',
  auth: {
    username: 'api',
    password: apiKey
  },
  params: {
    ...secret.params,
    html: `
      <html>
        <body>
          <p>你的位置: ${body.position} 號</p>
          <p>目前備取第一個: ${body.firstWaiting} 號</p>
          <p>這之中放棄的人: ${body.abandon} 個</p>
          <p>已報到 ${body.signed} 個人</p>
          <p>還剩下 ${body.space} 個位子</p>
          <p>還差 ${body.distance} 個人輪到你</p>
        </body>
      </html>
    `,
  }
})



module.exports = mailgun;