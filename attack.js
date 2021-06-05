const getContent = require('./modules/getContent');
let count;
// while (true) {
getContent(112, function (body) {
  count++;
  console.log(body);
})
// }

