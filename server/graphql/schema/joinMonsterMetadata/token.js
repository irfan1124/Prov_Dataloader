import { format } from 'sqlstring';

export default {
    Query: {
        fields: {
          // add a function to generate the "where condition"
          Token: {
            where: (tokenTable, args, context) => {
                console.log(args.tokenID)
                if (args.tokenID) return format(`${tokenTable}.TokenID = ?`, [args.tokenID])
            }
          },
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
}