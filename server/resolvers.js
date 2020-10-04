const { PersistedQueryNotFoundError } = require('apollo-server-errors');

module.exports = {
  Query: {
    tracks: async (_, { query }, { dataSources }) => {
      const response = await dataSources.spotifyApi.searchTracks(query, {
        limit: 20,
      });

      if (response.statusCode === 200) {
        return (
          response.body.tracks &&
          response.body.tracks.items.map((item) => ({
            ...item,
            url: item.preview_url,
          }))
        );
      }

      return [];
    },
    albumTracks: async (_, { id }, { dataSources }) => {
      const album = await dataSources.spotifyApi.getAlbum(id);
      const albumTracks = await dataSources.spotifyApi.getAlbumTracks(id);

      if (album.statusCode === 200 && albumTracks.statusCode === 200) {
        return (
          albumTracks.body.items &&
          albumTracks.body.items.map((item) => ({
            ...item,
            url: item.preview_url,
            album: album.body,
          }))
        );
      }

      return PersistedQueryNotFoundError(`Album with id: ${id} does not exist`);
    },
    newReleases: async (_, __, { dataSources }) => {
      const response = await dataSources.spotifyApi.getNewReleases({
        limit: 20,
      });

      if (response.statusCode === 200) {
        return response.body.albums && response.body.albums.items;
      }

      return [];
    },
  },
};
