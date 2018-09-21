import models from '../../db/config/config'
import joinMonster from 'join-monster';
//const knex = require('knex')(require('../../db/config/knexConfig'))
const options = { dialect : 'mysql' };
export default {
    Query: {
        songs: (parent, args, {knex, dialect}, info) => {
            // return db.song.findAll({})
            return joinMonster(info, args, sql => {
                        console.log(sql);
                        return knex.raw(sql).then(result => result[0])
                }, dialect);
        },
        song: (parent, args, {knex, dialect}, info) => {
            return joinMonster(info, args, sql  => {
                console.log(sql);
                return models.sequelize.query(sql, { type: models.sequelize.QueryTypes.SELECT }).then(result => result)
            }, dialect);
        },
        // song: (parent, {id}, info) => {
        //     return db.song.findOne({
        //             where: {
        //                 id: id
        //             }
        //         })
        //         .then(song => {
        //             return song;
        //         });
        // }
    },
	Mutation: {
        addSong: (args) => {
            console.log(args);
            return db.song.create(args);
        }
    }
}
