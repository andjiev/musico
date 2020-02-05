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

export { GET_TRACK };