import firebaseAdmin from 'firebase-admin';
import firebase from 'firebase';

import { replaceAll, trim } from '../helper/format/string';


const config = require('./../config');

// Initialize Firebase Admin with service account
let initializeFirebaseApp = () => {
    const serviceAccount = config.FIREBASE_KEY;
    firebaseAdmin.initializeApp({
        credential: firebaseAdmin.credential.cert(serviceAccount),
        databaseURL: config.FIREBASE_DB
    });
    firebase.initializeApp(config.FIREBASE_SDK_CONFIG);
}

//function to etract the token from authorization header
let extractToken = (bearer) => {
    if (bearer) {
        return trim(replaceAll(bearer, 'Bearer', ''));
    }
    return null;
};


let addScopeToReq = function (req, res, next) {
    console.log(req.id_token_decoded);
    req.identity = 'identity';
    req.scope = req.id_token_decoded.scope;
    console.log(req.scope);
    next();
};


//middleware function to verify the token issued by firebase
let verifyToken = function (req, res, next) {
    console.log('verify middleware');
    //req = {...req, token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImEwY2ViNDY3NDJhNjNlMTk2NDIxNjNhNzI4NmRjZDQyZjc0MzYzNjYifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdGVzdC1wcm9qZWN0LTE2M2U5IiwiQXV0aCI6eyJDb21wYW55Ijp0cnVlfSwiYXVkIjoidGVzdC1wcm9qZWN0LTE2M2U5IiwiYXV0aF90aW1lIjoxNTM2MTM5MzAzLCJ1c2VyX2lkIjoiS1A2WFpqaGRJclU4WTlNM01jOUwxUEtJSlc1MiIsInN1YiI6IktQNlhaamhkSXJVOFk5TTNNYzlMMVBLSUpXNTIiLCJpYXQiOjE1MzYxMzkzMDQsImV4cCI6MTUzNjE0MjkwNCwiZW1haWwiOiJ0ZXN0QHRlc3QuY20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsidGVzdEB0ZXN0LmNtIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiY3VzdG9tIn19.SofXGHJtmx-YnvdLP-18xyDDonPRljT3E6iNDcbgBpmAwguRaB7VLt9Def3PtMpAjo3RUJJbibX8OOEPm4Xlfut1fQohtdTEQuUW2fnfC_Oz9RLupC7xqLmvO6QdQhQqiOeTmU3aBj_ELVEcBiBENEO7e9tZO6TVEUOhdrtsrbI7hQkscwgODTdMzY9ltC_qTWEfMy4Dsxwhqqt5hqJ_kbxBIsZCnOoDXyHMCpfZ_QaH36dNgKKXVZ86HswOnwMn98EWopZFnB2hTlIg4BrBUNVERyR4683UEVEYxl-G2lapJl5mJ78wf5khmMroPu5N-YGtKY9qnFRNIWk3wAmTNg'}
    console.log('req.params.token : ', 'token');
    firebaseAdmin.auth().verifyIdToken('eyJhbGciOiJSUzI1NiIsImtpZCI6ImEwY2ViNDY3NDJhNjNlMTk2NDIxNjNhNzI4NmRjZDQyZjc0MzYzNjYifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdGVzdC1wcm9qZWN0LTE2M2U5Iiwic2NvcGUiOiJ1c2VyOndyaXRlIiwiYXVkIjoidGVzdC1wcm9qZWN0LTE2M2U5IiwiYXV0aF90aW1lIjoxNTM2MjMzNzMxLCJ1c2VyX2lkIjoiS1A2WFpqaGRJclU4WTlNM01jOUwxUEtJSlc1MiIsInN1YiI6IktQNlhaamhkSXJVOFk5TTNNYzlMMVBLSUpXNTIiLCJpYXQiOjE1MzYyMzM3MzEsImV4cCI6MTUzNjIzNzMzMSwiZW1haWwiOiJ0ZXN0QHRlc3QuY20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsidGVzdEB0ZXN0LmNtIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiY3VzdG9tIn19.ATMHGeKUWxHfLP8xQ5RNve4YSZoDTDYsW56ilc176HzkAWQnuUZEFBggRqrUDxAeJh6UNjNGm_e3IG4M6b3Qwv0QzEssKgI_kwlPHkjRkcM-5a8Gyu1ZFCK1q_KqfJoHzbT0JsQ3f7168e5tr_gj_MRxY96T337udy_cgz0oXRIq9z8GhgM_8hrlfOTY3W4qeXN1Kcfb0onkv6hZt5VKWaZfYBHEldDllQ50d2fWZTq-m2pDnqkoWzxCPEdrsQBI8BMmFnEskrS5d0_CpnWoXfvt4OL2hG2bkbb71gSNsOBjkzYD1secSqg5S2bXU3oUyQLYwL0ToLasoscpieAmhg').then(isVerified => {
        console.log(isVerified);
        req.id_token_decoded = isVerified;
        console.log(req.id_token_decoded);
        next();
    }).catch(err => {
        console.log(err);
        res.send(err);
    });
};

let revokeRefreshToken = (uid) => {
    return firebaseAdmin.auth().revokeRefreshTokens(uid)
    .then(() => {
      return firebaseAdmin.auth().getUser(uid);
    })
    .then((userRecord) => {
      return new Date(userRecord.tokensValidAfterTime).getTime() / 1000;
    })
    .then((timestamp) => {
      console.log("Tokens revoked at: ", timestamp);
  });

}

// Mint token using Firebase Admin SDK
let loginWithFirebase = (uid) => {
    let additionalClaims = {
        "scope":  "user:write"
    }
    return firebaseAdmin.auth().createCustomToken(uid, additionalClaims)
        .then(customToken => {
            console.log('custom token : ', customToken)
            // Response must be an object or Firebase errors
            return firebase.auth().signInWithCustomToken(customToken).then(({ user }) => {
                console.log("user.refreshToken");
                console.log(user.refreshToken);
                //To get the Access token from firebase
               return user.getIdToken().then(token => {
                    console.log(token);
                    return token;
                });
            }).catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                return 'Server error!';
            });
        }
            //res.json({firebaseToken: customToken});
        )
        .catch(err => {
            return err
        });
}

module.exports = {
    initializeFirebaseApp,
    loginWithFirebase,
    verifyToken,
    addScopeToReq,
    revokeRefreshToken,
}