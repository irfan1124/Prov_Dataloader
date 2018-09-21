import { escape, format } from 'sqlstring';

export default {
    Query: {
        fields: {
          // add a function to generate the "where condition"
          token: {
            where: (tokenTable, args, context) => {
                console.log(args.tokenID)
                if (args.tokenID) return format(`${tokenTable}.TokenID = ?`, [args.tokenID])
            }
          },
          Commodity: {
            where: (commodityTable, args, context) => {
                console.log(args.CommodityID)
                if (args.CommodityID) return format(`${commodityTable}.CommodityID = ?`, [args.CommodityID])
            }
          }
        }
    },
    Token: {
        //map the token object type to its SQL table
        sqlTable: 'Token',
        uniqueKey: 'TokenID',
        fields: {
            tokenID : {
                sqlColumn: 'TokenID'
            },
            token : {
                sqlColumn: 'Token'
            },
            isExpired: {
                sqlColumn: 'IsExpired'
            },
            createdDate: {
                sqlColumn: 'CreatedDate'
            },
            userAgent: {
                sqlColumn: 'UserAgent'
            },
        },
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