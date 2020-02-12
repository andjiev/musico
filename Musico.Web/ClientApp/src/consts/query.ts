import gql from 'graphql-tag';

const GET_TRACKS = (search: string) => gql`
{
  tracks(name: "${search}") {
    id,
    name,
    popularity,
    album {
      name,
      images {
        url
      }
    },
    artists {
      name
    }
  }
}
`;

export { GET_TRACKS };