import gql from 'graphql-tag';

const GET_TRACK = gql`
{
  track(name: "highest in the room") {
    name
    artists {
      name,
      images {
        url
      }
    }
    album {
      name
    }
  }
}
`

const GET_ARTIST = (name: string) => gql`
{
  artist(name: "${name}") {
    name,
    images {
      url
    }
  }
}
`;

export { GET_TRACK, GET_ARTIST };