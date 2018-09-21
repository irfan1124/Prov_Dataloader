let verifyToken = function (req, res, next) {
    firebaseAdmin.auth().verifyIdToken(token).then(isVerified => {
        console.log(isVerified);
        res.json({ success: true, firebaseToken: customToken });
    });

};
