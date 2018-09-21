const findCommodityById = (args, knex) => {
    return knex("Commodity")
        .select(
            knex.raw(
                "uuid_from_bin(??) AS CommodityGUID, CommodityID, LocalName, IsDeleted",
                ["Commodity.CommodityGUID"]
            )
        )
        .where({ CommodityID: args.CommodityID })
        .then(res => {
            return Object.assign({}, JSON.parse(JSON.stringify(res)))[0];
        })
}

const getAllCommodities = (knex) => {
    return knex.table("Commodity")
        .select(
            knex.raw(
                "uuid_from_bin(??) AS CommodityGUID, CommodityID, LocalName, IsDeleted",
                ["Commodity.CommodityGUID"]
            )
        )
        .then(res => {
            console.log(res);
            return Object.assign([], JSON.parse(JSON.stringify(res)));
        })
}

module.exports = {
    findCommodityById,
    getAllCommodities,
}