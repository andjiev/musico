import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Query {
    tracks(query: String): [Track]!
    albumTracks(id: String): [Track]
    newReleases: [Album]!
  }

  type Track {
    id: ID!
    name: String!
    popularity: Int
    url: String
    album: Album
    artists: [Artist]!
  }

  type Album {
    id: ID!
    name: String!
    images: [Image]!
    artists: [Artist]!
  }

  type Image {
    url: String!
    width: Int
    height: Int
  }

  type Artist {
    id: ID!
    name: String
    images: [Image]!
  }
`;

module.exports = typeDefs;
