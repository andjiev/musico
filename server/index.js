require('dotenv').config();

const { ApolloServer } = require('apollo-server');

const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const spotifyApi = require('./datasources/spotify');

const app = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    spotifyApi,
  }),
});

app.listen({ port: process.env.GRAPHQL_APP_PORT || 4000 }).then(({ url }) => {
  console.log(`Server started at ${url}`);
});
