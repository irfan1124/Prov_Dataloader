const knex = require('knex')(require('../db/config/knexConfig'));

const findCommodityDataById = (args, knex) => {
    return knex("CommodityData")
        .select(
            knex.raw(
                "uuid_from_bin(??) AS CommodityDataGUID, CommodityDataID, Encoding, Value, IsDeleted",
                ["CommodityData.CommodityDataGUID"]
            )
        )
        .where({ CommodityDataID: args.CommodityDataID })
        .then(res => {
            return Object.assign({}, JSON.parse(JSON.stringify(res)))[0];
        })
}


const findCommodityDataByCommodityIds = async (commodityIDs) => {
    console.log('******* SELECT CommodityData query *******')
    let result = await knex.table("CommodityData")
        .whereIn('CommodityID', commodityIDs).select()
        .then(rows => commodityIDs.map(id => rows.filter(x => x.CommodityID === id)));
    return result;
}

module.exports = {
    findCommodityDataById,
    findCommodityDataByCommodityIds,
}