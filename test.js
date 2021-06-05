const getContent = require('./modules/getContent');

getContent('60781cbf-44ce-4bfa-9490-a7eabfca7abb', function (contentErr, contentRes, body) {
  const $ = cheerio.load(body);
  const result = resolve.all($);
  console.log(result);
})