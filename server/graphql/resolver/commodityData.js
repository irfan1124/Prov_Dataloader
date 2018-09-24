import models from '../../db/config/config'
import joinMonster from 'join-monster';
import { findCommodityDataByID } from '../../dataAccess/commodityData';

export default {
    Query: {
        CommodityData: async (parent, { CommodityDataID }, {knex, dialect}, info) => {
            let result = await findCommodityDataByID(CommodityDataID);
            return result;
        }, 
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
