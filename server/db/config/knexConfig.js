require('dotenv').config();
console.log(process.env.DEBUG);
module.exports = {
    client: 'mysql',
    connection: {
      host : process.env.DATABASE_HOST,
      user : process.env.DATABASE_USERNAME,
      password : process.env.DATABASE_PASSWORD,
      database : process.env.DATABASE_NAME,
      typeCast: (field, next) => {
        if (field.type == 'BIT' && field.length == 1) {
            return (field.string() == '1'); // 1 = true, 0 = false
        } 
        return next();
      }
    },
    pool: { min: 0, max: 7 },
    debug: process.env.NODE_ENV == 'development' ? true : false,
};