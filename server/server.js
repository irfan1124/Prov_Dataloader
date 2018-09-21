require('dotenv').config();
console.log(process.env.DEBUG);
const express = require('express');
const path = require('path');
import { ApolloServer } from 'apollo-server-express';
const bodyParser = require('body-parser');
import { makeExecutableSchema } from 'graphql-tools'
import joinMonsterAdapt from 'join-monster-graphql-tools-adapter';

const typeDefs = require('./graphql/schema').default;
const resolvers = require('./graphql/index').default
import { initializeFirebaseApp, loginWithFirebase, verifyToken, addScopeToReq, revokeRefreshToken, getFirebaseUser } from './auth/firebase-auth';
import { joinMonsterMetadata } from './graphql/schema/joinMonsterMetadata';
const knex = require('knex')(require('./db/config/knexConfig'))

const app = express();

app.use(express.static('dist'));

var router = express.Router();
app.use(router);

app.use(bodyParser.json());

//initialize the firebase app with FirebaseAdmin and Firebase SDK
initializeFirebaseApp();

app.get('/auth/login', (req, res) => {

  //TODO: Check user credentials 
  //- fetch user by email id
  //- check password with argon2

  //if user is valid generate token with jwt
  let uid = 'KP6XZjhdIrU8Y9M3Mc9L1PKIJW52';
  loginWithFirebase(uid).then(accessToken => {
    res.json({ success: true, accessToken: accessToken });

  }).catch(error => {
    res.json({ success: false, message: error });
  });

  //res.json({ success: true, firebaseToken: customToken });

});

var guard = require('express-jwt-permissions')({
  requestProperty: 'identity',
  permissionsProperty: 'scope'
})

const errorHandler = (err, req, res, next) => {
  console.log(err);
  if (err.code === 'permission_denied') {
    res.status(403).send('Forbidden');
  }
  next();
}

app.get('/refreshRevoke', errorHandler, function (req, res) {
  let uid = 'KP6XZjhdIrU8Y9M3Mc9L1PKIJW52';
  revokeRefreshToken(uid).then(obj => {
    console.log(obj)
    res.json({ success: true, obj });

  }).catch(error => {
    res.json({ success: false, message: error });
  });
})

app.get('/user', verifyToken, addScopeToReq, guard.check(['user:read']), errorHandler, function (req, res) {
  res.json({ success: true })
})

const schema = makeExecutableSchema({ typeDefs, resolvers })
joinMonsterAdapt(schema, joinMonsterMetadata);//
const dialect = { dialect: 'mysql' };
//Apollo Server
const server = new ApolloServer({
  // These will be defined for both new or existing servers
  schema,
  context: {
    knex,
    dialect
  }
});

server.applyMiddleware({ app }); // app is from an existing express app

//database 
// db.sequelize.authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch((err) => {
//     console.log('Unable to connect to the database:', err);
//   });

export default app;
