const path = require('path');
const moment = require('moment');
// initialize firebase
const admin = require('firebase-admin');
const serviceAccount = require(path.resolve(__dirname, '../configs/secret/firestore.json'));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://nctu-enroll-notify-276913.firebaseio.com"
});

const db = admin.firestore();


module.exports = async function statistic(examCode) {
  try {
    // use firebase
    let docRef = db.collection('2020').doc(examCode);
    let data = await docRef.get();
    if (data && data.exists) {
      await data.ref.update({
        totalSearch: admin.firestore.FieldValue.increment(1),
        lastSearch: moment().format('YYYY/MM/DD hh:mm:ss')
      });
    }
    else {
      await data.ref.set({ totalSearch: 1 }, { merge: true });
    }
  } catch (err) {
    console.log(err);
  }

}