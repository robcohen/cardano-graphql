import { GraphQLDateTime } from 'graphql-iso-date'
import { Resolvers } from './graphql_types'

const resolverMap: Resolvers = {
  Query: {
    blocks: (_root, args, { dataSources: { ledger } }) => ledger.block.loadMany(args.ids),
    epochs: (_root, args, { dataSources: { ledger } }) => ledger.epoch.loadMany(args.numbers),
    transactions: (_root, args, { dataSources: { ledger } }) => ledger.transaction.loadMany(args.hashes)
  }
}

export const resolvers = Object.assign({}, resolverMap, {
  DateTime: GraphQLDateTime
})
