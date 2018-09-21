// load required modules
var Sequelize = require('sequelize');
var fs = require('fs');
var path = require('path');

// local variables
var db = { models: [] };

var reconnectOptions = {
    max_retries: 2,
    onRetry: function(count) {
        console.log("connection lost, trying to reconnect ("+count+")");
    }
};
// create new connection object 
var sequelize = new Sequelize(
    'lyrical',
    'poseidon',
    'poseidon',
    {
        logging: console.log,
        host: '127.0.0.1',
        port: '3306',
        dialect: 'mysql',
        //query: { raw: true },
        dialectOptions: {
            multipleStatements: true
        },
        define:
        {
            timestamps: false // disabled timestamp to ignore createdAt, updatedAt fields 
        },
        pool: {
            max: 100,
            min: 1,
            idle: 10000 //10 SECONDS
        },
        reconnect: reconnectOptions || true
    });

var models = path.join(process.cwd(), '/server/db/models');
fs
    .readdirSync(models)
    .filter(function (file) {
        return (file.indexOf('.') !== 0);
    })
    .forEach(function (file) {
        var model = sequelize.import(path.join(models, file));
        db[model.name] = model;
        db.models.push(model.name);
    });

Object
    .keys(db)
    .forEach(function (model) {
        if ('associate' in db[model]) {
            db[model].associate(db);
        }
    });

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import Models such that I can use them in the api just by importing 'db'
// db.song = require('../../models/song')(sequelize, Sequelize);
// db.lyric = require('../models/lyric')(sequelize, Sequelize);


// db.lyric.belongsTo(db.song);
// db.song.hasOne(db.lyric, { as: 'song' })

module.exports = db;
