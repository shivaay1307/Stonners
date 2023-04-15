const { products, clients } = require("../sampledata.js");

const {
  GraphQLList,
  GraphQLNonNull,
  GraphQLEnumType,
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
} = require("graphql");

const ClientType = new GraphQLObjectType({
  name: "Client",
  fields: () => ({
    id: { type: GraphQLID },
    firstName: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },       
  }),
});

const ProductType = new GraphQLObjectType({
  name: "Product",
  fields: () => ({
    id: { type: GraphQLID },
    firstName: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    clients: {
      type: new GraphQLList(ClientType),
      resolve(parent, args) {
        return clients;
      },
    },
    client: {
      type: ClientType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return clients.find((client) => client.id === args.id);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
