

import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';
import GraphQLJSON from 'graphql-type-json';
import { GraphQLDateTime, GraphQLDate, GraphQLTime } from 'graphql-iso-date';
import { GraphQLError } from 'graphql/error';
import { isGUID, isISO8601 } from '../../helper/format/string'

//scalar function for Date time
const parseISO8601 = (value) => {
  if (isISO8601(value)) {
    return value;
  }
  throw new GraphQLError('DateTime cannot represent an invalid ISO-8601 Date string');
};
const serializeISO8601 = (value) => {
  if (isISO8601(value)) {
    return value;
  }
  throw new GraphQLError('DateTime cannot represent an invalid ISO-8601 Date string');
};
const parseLiteralISO8601 = (ast) => {
  if (isISO8601(ast.value)) {
    return ast.value;
  }
  if (ast.kind === Kind.INT) {
    return new Date(ast.value); // ast value is always in string format
  }
  throw new GraphQLError('DateTime cannot represent an invalid ISO-8601 Date string');
};

//scalar functions for GUID
const serializeGUID = (value) => {
  if (isGUID(value)) {
    return value
  }
  return null
}
const parseGUID = (value) => {
  if (isGUID(value)) {
    return value
  }
  throw new GraphQLError('', [])
}
const parseLiteralGUID = (ast) => {
  if (ast.kind !== Kind.STRING) {
    throw new GraphQLError(`Type should be "String", found ${ast.kind}.`, [ast])
  }
  if (isGUID(ast.value)) {
    return ast.value
  }
  throw new GraphQLError(`Invalid GUID literal.\n${ast.value} is not GUID.`, [ast])
}

export default {
    DateTimeCustom: new GraphQLScalarType({
        name: 'DateTimeCustom',
        description: 'DateTime custom scalar type for isISO8601',
        serialize: serializeISO8601,
        parseValue: parseISO8601,
        parseLiteral: parseLiteralISO8601,
    }),
    Json: GraphQLJSON,
    Date: GraphQLDate,
    Time: GraphQLTime,
    DateTime: GraphQLDateTime,
    GUID: new GraphQLScalarType({
      name: 'GUID',
      description: `GUID scalar type`,
      serialize: serializeGUID,
      parseValue: parseGUID,
      parseLiteral: parseLiteralGUID
    })
}
