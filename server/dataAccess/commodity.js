const knex = require('knex')(require('../db/config/knexConfig'));
import {COMMODITY, COMMODITYDOCUMENT, DOCUMENT} from '../db/config/tables';

/**
 * @author Irfan 
 * @name findCommodityByID
 * @type Function 
 * @description This function will fetch commodity data by commodityID
 * @param  {Int} commodityID - the commodityID of which data needs to be fetched
 * @returns Promise json (all members from Commodity type)
 *      @example output
 *      {
            "IsDeleted": true,
            "LocalName": "Commodity2",
            "Quantity": 2,
            "Created": null,
            "CommodityGUID": "4d32702e-ba4b-11e8-9349-029786bd25b2"
        }
 */
const findCommodityByID = (commodityID) => {
    return knex(COMMODITY)
        .select(
            knex.raw(
                "uuid_from_bin(??) AS CommodityGUID, CommodityID, LocalName, Quantity, IsDeleted",
                [`${COMMODITY}.CommodityGUID`]
            )
        )
        .where({ CommodityID: commodityID })
        .then(res => {
            return Object.assign({}, JSON.parse(JSON.stringify(res)))[0];
        })
}

/**
 * @author Irfan 
 * @name getAllCommodities
 * @type Function 
 * @description This function will fetch all commodities
 * @returns Promise - json array (list of all members from Commodity type)
 *      @example output
 *      [{
            "IsDeleted": true,
            "LocalName": "Commodity2",
            "Quantity": 2,
            "Created": null,
            "CommodityGUID": "4d32702e-ba4b-11e8-9349-029786bd25b2"
        }]
 */
const getAllCommodities = () => {
    console.log('******* SELECT all Commodities query ******* ')
    return knex.table(COMMODITY)
        .select(
            knex.raw(
                "uuid_from_bin(??) AS CommodityGUID, CommodityID, LocalName, Quantity, IsDeleted",
                [`${COMMODITY}.CommodityGUID`]
            )
        )
        .then(res => {
            console.log(res);
            return Object.assign([], JSON.parse(JSON.stringify(res)));
        })
}

/**
 * @author Irfan 
 * @name findCommodityDocumentsByIDs
 * @type Function 
 * @description This function will fetch all Documents object for the given commodityID's
 * @param {Array<Int>} commodityIDs - Array of commodityIDs
 * @returns Promise - json array (list of all members from Document type)
 *      @example output
 *      [[
          {
            "DocumentID": 1,
            "DocumentGUID": "6498458a-bf49-11e8-9349-029786bd25b2",
            "Reference": "Document1"
            ...remaining members
          }
        ]]
 */
const findCommodityDocumentsByIDs = async (commodityIDs) => {
    console.log('******* SELECT CommodityDocuments query ******* ', commodityIDs)
    let result = await  knex.table(COMMODITYDOCUMENT)
        .select(
            knex.raw(
                `uuid_from_bin(??) AS DocumentGUID, ${DOCUMENT}.DocumentID, Reference, Flagged, Notes, ${DOCUMENT}.CreatorUserID, ${COMMODITYDOCUMENT}.CommodityID`,
                [`${DOCUMENT}.DocumentGUID`]
            )
        )
        .innerJoin(DOCUMENT, `${DOCUMENT}.DocumentID`, '=', `${COMMODITYDOCUMENT}.DocumentID`)
        .whereIn(`${COMMODITYDOCUMENT}.CommodityID`, commodityIDs)
        .then(rows => {
            console.log(rows);
            console.log(commodityIDs.map(id => rows.filter(x => x.CommodityID === id)))
            return commodityIDs.map(id => rows.filter(x => x.CommodityID === id))
        });
    return result;
}

module.exports = {
    findCommodityByID,
    getAllCommodities,
    findCommodityDocumentsByIDs,
}