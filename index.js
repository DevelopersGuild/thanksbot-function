const Firestore = require('@google-cloud/firestore');
const PROJECTID = 'winter-runway-279100';
const COLLECTION_NAME = 'thankyounotes';
const firestore = new Firestore({
  projectId: PROJECTID,
  timestampsInSnapshots: true,
});

exports.main = async (_, res) => {
    let collectionReference = await firestore.collection(COLLECTION_NAME).get();
    res.set('Access-Control-Allow-Origin', "*")
    res.set('Access-Control-Allow-Methods', 'GET')
    res.status(200).json(collectionReference.docs.map(doc => doc.data()))
};

