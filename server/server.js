import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';

import typeDefs from './schema/typeDefs';
import resolvers from './schema/resolvers';
import spotifyApi from './datasources/spotify';

const app = express();
app.use(cors({ origin: process.env.CLIENT_APP_URL }));

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    spotifyApi,
  }),
});

server.applyMiddleware({ app });

const port = process.env.PORT || 4000;
app.listen({ port }, () => {
  console.log(`Server started at port ${port}`);
});
