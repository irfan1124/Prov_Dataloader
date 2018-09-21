require('dotenv').config();
console.log(process.env.DEBUG);
module.exports = {
    client: 'mysql',
    connection: {
      host : process.env.DATABASE_HOST,
      user : process.env.DATABASE_USERNAME,
      password : process.env.DATABASE_PASSWORD,
      database : process.env.DATABASE_NAME
    },
    pool: { min: 0, max: 7 }
};