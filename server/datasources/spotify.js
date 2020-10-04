const SpotifyWebApi = require('spotify-web-api-node');

var spotifyApi = new SpotifyWebApi({
  clientId: 'b2fdac7e678e4d278c8a746869dd0e1c',
  clientSecret: 'ee7ced550c6d40c28342120b3b1ed49d',
});

spotifyApi.clientCredentialsGrant().then(
  (data) => {
    spotifyApi.setAccessToken(data.body['access_token']);
  },
  (err) => {
    console.log('Something went wrong when retrieving an access token', err);
  }
);

module.exports = spotifyApi;
