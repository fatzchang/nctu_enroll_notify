exports.byCode = function ($, mycode) {
  const table_tr = $("#dgUserList tr");
  let position = 0;
  let distance = 0; // 離我還有幾個
  let space = 0; // 目前剩下的位置

  let abandon = 0;
  let firstWaiting = 0;

  let signed = 0; // 已報到

  // 取得我的位置
  for (let i = 0; i < table_tr.length - 1; i++) {
    const examCode = $('#dgUserList__lblEXAMNO_' + i).text();
    if (examCode === mycode) {
      position = i + 1; // my position
    }
  }

  // loop through the rows
  for (let i = 0; i < table_tr.length - 1; i++) {
    const signedStatus = $('#dgUserList__lblAlreadySignIn_' + i).text()

    // 現在第一個在等的
    if (signedStatus === '備取' && !firstWaiting) {
      firstWaiting = i + 1;

      // 清除放棄的人，從最後剩餘的開始算
      abandon = 0;
    }

    // 在我的位置前放棄
    if (signedStatus === '已在較高志願報到, 此志願已自動取消.' && i < position) {
      abandon++
    }

    // 計算剩餘空位
    if (signedStatus === '') {
      space++;
    }

    if (signedStatus === '已報到!') {
      signed++;
    }
  }

  distance = position - firstWaiting - abandon;

  return {
    position,
    firstWaiting,
    abandon,
    space,
    distance,
    signed
  }
}



exports.all = function ($) {
  let result = [];
  const table_tr = $("#dgUserList tr");
  for (let i = 0; i < table_tr.length - 1; i++) {
    const examCode = $('#dgUserList__lblEXAMNO_' + i).text();
    const admit = $('#dgUserList__lblGetType_' + i).text();
    const type = $('#dgUserList__lblType_' + i).text();
    let signed = $('#dgUserList__lblAlreadySignIn_' + i).text();

    if (signed === '已在較高志願報到, 此志願已自動取消.') {
      signed = '自動取消'
    }

    result.push({
      id: i + 1,
      examCode,
      admit,
      type,
      signed
    })
  }


  return result
}