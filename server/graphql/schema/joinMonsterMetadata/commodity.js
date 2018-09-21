import { escape, format } from 'sqlstring';

export default {
    Query: {
        fields: {
          Commodity: {
            where: (commodityTable, args, context) => {
                console.log(args.CommodityID)
                if (args.CommodityID) return format(`${commodityTable}.CommodityID = ?`, [args.CommodityID])
            }
          }
        }
    },
    Commodity: {
        //map the Commodity object type to its SQL table
        sqlTable: 'Commodity',
        uniqueKey: 'CommodityID',
        fields: {
            CommodityID : {
                sqlColumn: 'CommodityID'
            },
            LocalName: {
                sqlColumn: 'LocalName'
            },
            Quantity: {
                sqlColumn: 'Quantity'
            },
            Created: {
                sqlColumn: 'Created'
            },
            CommodityGUID: {
                sqlColumn: 'CommodityGUID',
                sqlExpr: commodityTable => format(`uuid_from_bin(${commodityTable}.CommodityGUID)`)
            },
            CommoditiesData: {
                sqlJoin: (commodityTable, commodityDataTable, args) => format(`${commodityDataTable}.CommodityId = ${commodityTable}.CommodityId`)
            }
        }, 
    }
}