import gql from 'graphql-tag';

const GET_TRACKS = (search: string) => gql`
{
  tracks(query: "${search}") {
    id,
    name,
    popularity,
    url,
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

const GET_NEW_RELEASES = gql`
{
  newReleases {
    id,
    name,
    images {
      url
    },
    artists {
      name
    }
  }
}
`;

const GET_ALBUM_TRACKS = (id: string) => gql`
{
  albumTracks(id: "${id}") {
    id,
    name,
    url,
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

export { GET_TRACKS, GET_NEW_RELEASES, GET_ALBUM_TRACKS };