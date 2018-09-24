const knex = require('knex')(require('../db/config/knexConfig'));
import { COMMODITYDATA } from '../db/config/tables';

/**
 * @author Irfan 
 * @name findCommodityDataByID
 * @type Function 
 * @description This function will fetch commodityData by commodityDataID
 * @param {Int} commodityDataID - the commodityID of which data needs to be fetched
 * @returns Promise - json object (all members from Commodity type)
 *      @example output
 *      {
            "IsDeleted": true,
            "LocalName": "Commodity2",
            "Quantity": 2,
            "Created": null,
            "CommodityGUID": "4d32702e-ba4b-11e8-9349-029786bd25b2"
            ...remaining members
        }
 */
const findCommodityDataByID = (commodityDataID) => {
    return knex(COMMODITYDATA)
        .select(
            knex.raw(
                "uuid_from_bin(??) AS CommodityDataGUID, CommodityDataID, Encoding, Value, IsDeleted",
                [`${COMMODITYDATA}.CommodityDataGUID`]
            )
        )
        .where({ CommodityDataID: commodityDataID })
        .then(res => {
            return Object.assign({}, JSON.parse(JSON.stringify(res)))[0];
        })
}

/**
 * @author Irfan 
 * @name findCommodityDataByCommodityIDs
 * @type Function 
 * @description This function will fetch all CommodityData object for the given commodityID's
 * @param {Array<Int>} commodityIDs - Array of commodityIDs
 * @returns Promise - json array (list of all members from CommodityData type)
 *      @example output
 *      [[
            {
                "Name": "Name1",
                "Value": "Value test"
                ...remaining members
            }
        ]]
 */
const findCommodityDataByCommodityIDs = async (commodityIDs) => {
    console.log('******* SELECT CommodityData query ******* ', commodityIDs)
    let result = await knex.table(COMMODITYDATA)
        .whereIn(`${COMMODITYDATA}.CommodityID`, commodityIDs).select()
        .then(rows => commodityIDs.map(id => rows.filter(x => x.CommodityID === id)));
    return result;
}

module.exports = {
    findCommodityDataByID,
    findCommodityDataByCommodityIDs,
}