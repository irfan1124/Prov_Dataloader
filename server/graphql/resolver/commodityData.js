import models from '../../db/config/config'
import joinMonster from 'join-monster';

export default {
    Query: {
        // commodity: (parent, args, {knex, dialect}, info) => {
        //     return joinMonster(info, args, sql => {
        //                 console.log("sql by");
        //                 console.log(sql);
        //                 return knex.raw(sql).then(result => result[0])
        //         }, dialect);
        // }, 
        CommoditiesData: (parent, args, {knex, dialect}, info) => {
            return joinMonster(info, args, sql => {
                        console.log(sql);
                        return knex.raw(sql).then(result => result[0])
                }, dialect);
        }, 
    },
	Mutation: {
    },
}
