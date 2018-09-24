const knex = require('knex')(require('../db/config/knexConfig'));

const findCommodityByIDs = (args, knex) => {
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

const findCommodityDocumentsByIDs = async (commodityIDs) => {
    console.log('******* SELECT CommodityDocuments query ******* ', commodityIDs)
    let result = await  knex.table("CommodityDocument")
        .select(
            knex.raw(
                "uuid_from_bin(??) AS DocumentGUID, Document.DocumentID, Reference, Flagged, Notes, Document.CreatorUserID, Document.Created, CommodityDocument.CommodityID",
                ["Document.DocumentGUID"]
            )
        )
        .innerJoin('Document', 'Document.DocumentID', '=', 'CommodityDocument.DocumentID')
        .whereIn('CommodityID', commodityIDs)
        .then(rows => commodityIDs.map(id => rows.filter(x => x.CommodityID === id)));
    return result;
}

module.exports = {
    findCommodityByIDs,
    getAllCommodities,
    findCommodityDocumentsByIDs,
}