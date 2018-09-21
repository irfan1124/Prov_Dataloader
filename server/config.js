let config = {
    apiKey: 'AIzaSyCM-iqOcM3hwiun5T9SRPuzylxVRxdsRQ4',
    authDomain: 'test-project-163e9.firebaseapp.com',
    databaseURL: 'https://test-project-163e9.firebaseio.com',
    projectId: 'test-project-163e9',
    storageBucket: 'test-project-163e9.appspot.com',
    messagingSenderId: '647094773437'
};

// let config = {
//     apiKey: "AIzaSyD3j8UaIkbNYsPiyA77MmcgaLjb7C3nA6w",
//     authDomain: "graphql-lyrical.firebaseapp.com",
//     databaseURL: "https://graphql-lyrical.firebaseio.com",
//     projectId: "graphql-lyrical",
//     storageBucket: "graphql-lyrical.appspot.com",
//     messagingSenderId: "1050466141761"
// };


module.exports = {
    FIREBASE_KEY: require('./serviceAccountKey.json'), // e.g., your-project-firebase-adminsdk-xxxxx-xxxxxxxxxx.json
    FIREBASE_DB: 'https://test-project-163e9.firebaseio.com', // e.g., https://your-project.firebaseio.com
    FIREBASE_SDK_CONFIG: config
};