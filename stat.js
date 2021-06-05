var path = require('path');
// initialize firebase
const admin = require('firebase-admin');
let serviceAccount = require(path.resolve(__dirname, './configs/secret/firestore.json'));
var moment = require('moment');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://nctu-enroll-notify-276913.firebaseio.com"
});

const db = admin.firestore();

async function stat() {
  try {
    // use firebase
    let data = await db.collection('2020').get();

    const total = data.docs.reduce((pre, cur) => {
      if (cur.id === '1101352') {
        return pre;
      } else {
        if (cur.get('lastSearch')) {
          console.log(cur.id, cur.get('lastSearch'));
        }
        return pre + cur.get('totalSearch');
      }
    }, 0);

    console.log('總收尋次數：', total);
    console.log('總收尋人數：', data.docs.length);
  } catch (err) {
    console.log(err);
  }

}

stat();