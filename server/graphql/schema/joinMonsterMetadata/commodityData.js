import { format } from 'sqlstring';

export default {
    Query: {
        fields: {
          // add a function to generate the "where condition"
        }
    },
    CommodityData: {
        //map the Commodity object type to its SQL table
        sqlTable: 'CommodityData',
        uniqueKey: 'CommodityDataID',
        fields: {
            CommodityDataID : {
                sqlColumn: 'CommodityDataID'
            },
            Name: {
                sqlColumn: 'Name'
            },
            Value: {
                sqlColumn: 'Value'
            },
            Encoding: {
                sqlColumn: 'Encoding'
            },
            CreatorUserID: {
                sqlColumn: 'CreatorUserID'
            },
            CommodityID: {
                sqlColumn: 'CommodityID'
            },
            Created: {
                sqlColumn: 'Created'
            },
            Updated: {
                sqlColumn: 'Updated'
            },
            CommodityDataGUID: {
                sqlColumn: 'CommodityDataGUID',
                sqlExpr: commodityDataTable => format(`uuid_from_bin(${commodityDataTable}.CommodityDataGUID)`)
            },
            IsDeleted: {
                sqlColumn: 'IsDeleted',
                resolve: (IsDeleted) => {
                    console.log(IsDeleted);
                    return IsDeleted === 1 ? true : false
                }
            },
        },
    }
}