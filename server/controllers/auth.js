const admin = require('../firebase/index.js');
const firebaseAdmin = require('firebase-admin');
const firebaseApp = firebaseAdmin.initializeApp();

const currentUser = async (req, res) => {
    console.log("REQ HEADERS TOKEN", req.headers.token);

    try {
        const firebaseUser = await admin.auth().verifyIdToken(req.headers.token);
        console.log('FIREBASE USER IN CURRENT USER MIDDLEWARE', firebaseUser);
        res.json(firebaseUser);
    } catch(err){
        console.log(err)
        res.status(401).json({
            err: 'Invalid or expired token'
        })
    }
}

module.exports = currentUser;