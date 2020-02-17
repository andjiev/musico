namespace Musico.Services.Services
{
    using System.Threading.Tasks;
    using SpotifyAPI.Web;
    using SpotifyAPI.Web.Auth;
    using SpotifyAPI.Web.Models;

    public static class SpotifyApiFactory
    {
        public static async Task<SpotifyWebAPI> Create()
        {
            CredentialsAuth auth = new CredentialsAuth("b2fdac7e678e4d278c8a746869dd0e1c", "ee7ced550c6d40c28342120b3b1ed49d");
            Token token = await auth.GetToken();

            return new SpotifyWebAPI
            {
                AccessToken = token.AccessToken,
                TokenType = token.TokenType
            };
        }
    }
}
