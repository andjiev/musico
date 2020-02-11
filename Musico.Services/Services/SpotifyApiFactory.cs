namespace Musico.Services.Services
{
    using System.Threading.Tasks;
    using SpotifyAPI.Web;
    using SpotifyAPI.Web.Auth;
    using SpotifyAPI.Web.Models;

    public static class SpotifyApiFactory
    {
        public static async Task<SpotifyWebAPI> CreateSpotifyApi(string clientId, string clientSecret)
        {
            CredentialsAuth auth = new CredentialsAuth(clientId, clientSecret);
            Token token = await auth.GetToken();

            return new SpotifyWebAPI
            {
                AccessToken = token.AccessToken,
                TokenType = token.TokenType
            };
        }
    }
}
