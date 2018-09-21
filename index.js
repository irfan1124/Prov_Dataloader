import app from './server/server';

// import { ApolloEngine } from 'apollo-engine';

// const engine = new ApolloEngine({
//   apiKey: process.env.ENGINE_API_KEY,
// });

// // No engine.start() or app.use() required!

// // Instead of app.listen():
// engine.listen({
//   port: process.env.PORT,
//   graphqlPaths: ['/graphql'],
//   expressApp: app,
//   launcherOptions: {
//     startupTimeout: 3000,
//   },
// }, () => {
//   console.log('Listening!');
// });

app.listen(4000, (err) => {
  if (!err) {
      console.log('😎 Server listening to port 4000.');
  } else {
      console.log('Error starting the server.');
  }
});
