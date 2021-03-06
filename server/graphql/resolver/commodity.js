import { uuidToBuffer, bufferToUUID } from '../../helper/uuid/index'
import { findCommodityByID, getAllCommodities, findCommodityDocumentsByIDs } from '../../dataAccess/commodity';
import { map, assign } from 'lodash';
import { COMMODITY, COMMODITYDATA } from '../../db/config/tables';

export default {
    Query: {
        commodity: async (parent, { CommodityID }, { knex, dialect }, info) => {
            let result = await findCommodityByID(CommodityID);
            return result;
        },
        commodities: async (parent, args, { knex, dialect }, info) => {
            let result = await getAllCommodities(knex);
            return result;
        },
    },
    Mutation: {
        createCommodity: async (parent, { input }, { knex, dialect }, info) => {
            input.CommodityGUID = uuidToBuffer(input.CommodityGUID);
            let result = await knex(COMMODITY).insert(input);
            input.CommodityID = result[0];
            input.CommodityGUID = bufferToUUID(input.CommodityGUID);
            console.log(input);
            return input;
        },
        createCommoditywithCommodityData: async (parent, { input }, { knex, dialect }, info) => {
            console.log(input);
            input.Commodity.CommodityGUID = uuidToBuffer(input.Commodity.CommodityGUID);
            let commodityResult = await knex(COMMODITY).insert(input.Commodity);
            if (commodityResult && input.CommodityData.length > 0) {
                //add commodityID to CommodityData object
                let CommodityDataObj = map(input.CommodityData, function (element) {
                    return assign({}, element, { CommodityID: commodityResult[0], CommodityDataGUID: uuidToBuffer(element.CommodityDataGUID) });
                });
                console.log(CommodityDataObj);
                let commodityDataResult = await knex(COMMODITYDATA).insert(CommodityDataObj);
                console.log(commodityDataResult);
            }
            return true;
        }
    },
    Commodity: {
        CommoditiesData: (parent, args, { dataLoader }, info) => {
            let commodityId = parent.CommodityID;
            //call a data loader which gets commodityData by commodityID
            return dataLoader.findCommodityDataByCommodityIDs.load(commodityId);
            //return findCommodityDataByCommodityId(commodityId, knex);
        },
        Documents:  (parent, args, { dataLoader }, info ) => {
            let commodityId = parent.CommodityID;
            console.log('select query of Documents with commodityId ', commodityId);
            let result = dataLoader.findCommodityDocumentsByCommodityIDs.load(commodityId);
            return result;
        }
        //     commodityGUID: ({ commodityGUID }, args, ctx, info) =>  {
        //         console.log('convert BIN to GUID', commodityGUID.toString());
        //         return '1256812A-BA53-11E8-9349-029786BD25B2'
        //    }
    }
}
