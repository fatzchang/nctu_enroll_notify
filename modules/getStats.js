const admin = require('firebase-admin');
const db = admin.firestore();
module.exports = async () => {
  try {
    // use firebase
    let data = await db.collection('2020').get();

    const total = data.docs.reduce((pre, cur) => {
      if (cur.id === '1101352') {
        return pre;
      } else {
        return pre + cur.get('totalSearch');
      }
    }, 0);

    return {
      times: total,
      number: data.docs.length
    }
  } catch (err) {
    console.log(err);
  }
}